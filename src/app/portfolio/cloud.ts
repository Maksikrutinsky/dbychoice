import { supabase } from '@/lib/supabase';
import type { Project } from './page';

const TABLE = 'portfolio_data';
const BUCKET = 'portfolio';
const KEY = 'projects';

export async function cloudLoad(): Promise<Project[] | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('value')
      .eq('key', KEY)
      .maybeSingle();
    if (error || !data) return null;
    return data.value as Project[];
  } catch {
    return null;
  }
}

export async function cloudSave(projects: Project[]): Promise<string | null> {
  try {
    const { error } = await supabase
      .from(TABLE)
      .upsert({ key: KEY, value: projects, updated_at: new Date().toISOString() });
    if (error) return error.message;
    return null;
  } catch (e: unknown) {
    return e instanceof Error ? e.message : 'Unknown error';
  }
}

// Upload a single base64 image to Supabase Storage, returns public URL
export async function uploadImageToCloud(base64: string, projectId: string): Promise<string> {
  const res = await fetch(base64);
  const blob = await res.blob();
  const fileName = `${projectId}/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, blob, { contentType: 'image/jpeg', upsert: false });

  if (error) throw new Error(error.message);

  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(data.path);

  return publicUrl;
}

export function isCloudUrl(src: string): boolean {
  return src.startsWith('http');
}

import { supabase } from '@/lib/supabase';

const TABLE = 'portfolio_data';
const BUCKET = 'portfolio';
const KEY = 'blog_data';

export async function blogCloudLoad(): Promise<unknown | null> {
  try {
    const { data, error } = await supabase
      .from(TABLE)
      .select('value')
      .eq('key', KEY)
      .maybeSingle();
    if (error || !data) return null;
    return data.value;
  } catch {
    return null;
  }
}

export async function blogCloudSave(blogData: unknown): Promise<string | null> {
  try {
    const { error } = await supabase
      .from(TABLE)
      .upsert({ key: KEY, value: blogData, updated_at: new Date().toISOString() });
    if (error) return error.message;
    return null;
  } catch (e: unknown) {
    return e instanceof Error ? e.message : 'Unknown error';
  }
}

export async function uploadBlogImageToCloud(base64: string): Promise<string> {
  const res = await fetch(base64);
  const blob = await res.blob();
  const ext = blob.type.includes('png') ? 'png' : blob.type.includes('webp') ? 'webp' : 'jpg';
  const fileName = `blog/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .upload(fileName, blob, { contentType: blob.type, upsert: false });

  if (error) throw new Error(error.message);

  const { data: { publicUrl } } = supabase.storage
    .from(BUCKET)
    .getPublicUrl(data.path);

  return publicUrl;
}

import type { Metadata } from 'next';
import BlogAdmin from '@/components/blog/BlogAdmin';

export const metadata: Metadata = {
  title: 'Blog Admin – Design By Choice',
  description: 'Manage blog content',
};

export default function BlogAdminPage() {
  return <BlogAdmin />;
}

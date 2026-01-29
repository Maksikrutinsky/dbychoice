import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogContent from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'From Us to You – Design By Choice Blog',
  description: 'Design inspirations, professional tips, guides, and insights for homes and businesses.',
  keywords: ['interior design blog', 'design tips', 'design inspiration', 'home design guides'],
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogContent />
      <Footer />
    </>
  );
}

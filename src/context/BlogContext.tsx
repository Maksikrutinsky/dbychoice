'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface HeroSettings {
  image: string;
  tagline: string;
  title: string;
  titleAccent: string;
  description: string;
}

export interface SectionIntro {
  title: string;
  subtitle: string;
  intro: string;
  secondaryText: string;
  buttonText: string;
}

export interface PageHeroSettings {
  image: string;
  label: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}

export interface CardSettings {
  title: string;
  description: string;
  image: string;
}

export interface PageContentSettings {
  introTitle: string;
  introText: string;
  cards: CardSettings[];
  philosophyTitle: string;
  philosophyText: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: 'inspiration' | 'tips' | 'guides' | 'insights';
}

interface BlogData {
  mainHero: HeroSettings;
  sectionIntros: Record<string, SectionIntro>;
  pageHeros: Record<string, PageHeroSettings>;
  pageContents: Record<string, PageContentSettings>;
  articles: Article[];
}

interface BlogContextType {
  data: BlogData;
  updateMainHero: (hero: HeroSettings) => void;
  updateSectionIntro: (section: string, intro: SectionIntro) => void;
  updatePageHero: (page: string, hero: PageHeroSettings) => void;
  updatePageContent: (page: string, content: PageContentSettings) => void;
  updateArticles: (articles: Article[]) => void;
  saveAll: () => void;
  resetToDefault: () => void;
  hasUnsavedChanges: boolean;
}

const defaultData: BlogData = {
  mainHero: {
    image: '/images/salon.webp',
    tagline: 'From Us to You',
    title: 'Design Stories',
    titleAccent: '& Insights',
    description: 'Inspiration, professional tips, and guides for your design journey'
  },
  sectionIntros: {
    inspiration: {
      title: 'Design Inspirations',
      subtitle: '& Ideas — Studio Perspective',
      intro: 'The design I create is rooted in a global, multi-layered source of inspiration. It is an eclectic approach that connects nature, art, cultures, and historical eras—not as trends, but as a foundation for original, meaningful creation.',
      secondaryText: 'Nature, the human body, Bauhaus, Japanese minimalism, and the richness of global cultures all come together to create spaces that are not only visually refined, but deeply felt.',
      buttonText: 'Explore Inspirations'
    },
    tips: {
      title: 'Professional Tips',
      subtitle: 'Expert Design Guidance',
      intro: 'This space was created to share insight—not trends. Here, I open the door to the way I truly see design: the decisions that shape a home, the details that change how a space feels, and the questions worth asking.',
      secondaryText: 'These tips are meant to sharpen your perspective, inspire smarter choices, and help you see your home through a deeper, more intentional lens.',
      buttonText: 'Discover Tips'
    },
    guides: {
      title: 'Design Guides',
      subtitle: 'Step by Step Journey',
      intro: 'Planning to design, renovate, or build a home—but not sure where to begin? These guides were created to bring clarity to the process and guide you step by step through each space and phase of the project.',
      secondaryText: 'Grounded in experience, expertise, and a comprehensive understanding of the entire journey—from initial concept to final details.',
      buttonText: 'View Guides'
    },
    insights: {
      title: 'Design Insights',
      subtitle: 'For Homes & Businesses',
      intro: 'Thoughtful design of every space—whether at home or in a business—is key to creating a place that feels right and meaningful. How can you maximize the potential of each room?',
      secondaryText: 'From private rooms to offices, cafés, retail stores, or hotels—learn how to transform the challenge of design into a creative journey that delivers unique, memorable experiences.',
      buttonText: 'Explore Insights'
    }
  },
  pageHeros: {
    inspiration: {
      image: '/images/Design Styles/eclectic/eclectic_07-final.webp',
      label: '01',
      title: 'Design Inspirations',
      titleAccent: '& Ideas',
      subtitle: 'Studio Perspective'
    },
    tips: {
      image: '/images/Dining1.webp',
      label: '02',
      title: 'Professional Tips',
      titleAccent: '& Guidance',
      subtitle: 'Expert Design Advice'
    },
    guides: {
      image: '/images/Kitchens1.webp',
      label: '03',
      title: 'Design Guides',
      titleAccent: '& Tutorials',
      subtitle: 'Step by Step Journey'
    },
    insights: {
      image: '/images/OFFICE SPACES.webp',
      label: '04',
      title: 'Design Insights',
      titleAccent: '& Ideas',
      subtitle: 'For Homes & Businesses'
    }
  },
  pageContents: {
    inspiration: {
      introTitle: 'A Global Source of Inspiration',
      introText: 'The design I create is rooted in a global, multi-layered source of inspiration. It is an eclectic approach that connects nature, art, cultures, and historical eras—not as trends, but as a foundation for original, meaningful creation.',
      cards: [
        {
          title: 'Nature & Organic Forms',
          description: 'Nature is a central source of inspiration in my work—through organic forms, soft lines, and the balance between material and movement.',
          image: '/images/Design Styles/minimal/minimal_07-final.webp'
        },
        {
          title: 'Historical Reinterpretation',
          description: 'The past plays a role in contemporary spaces through refined reinterpretation of styles such as Bauhaus, retro, and the expressive spirit of the 1960s.',
          image: '/images/Design Styles/industrial/industrial_07-final.webp'
        },
        {
          title: 'Global Cultures',
          description: 'The clarity and restraint of Japanese minimalism, the color and ornamentation of India and Morocco, and the tactile, organic materiality of Africa.',
          image: '/images/Design Styles/traditional/traditional_07-final.webp'
        }
      ],
      philosophyTitle: 'Creating an Experience',
      philosophyText: 'For me, interior design is the creation of an experience—one that tells a story, bridges personal journeys with the idea of home, and gives each space depth, character, and presence.'
    },
    tips: {
      introTitle: 'Design with Intention',
      introText: 'Every design decision matters. Here, I share the professional insights that guide my work—principles that can help you see your space with fresh eyes.',
      cards: [
        { title: 'Space Planning', description: 'Understanding flow, proportion, and how to make every square meter work for you.', image: '/images/gallery1.jpg' },
        { title: 'Lighting Design', description: 'The secret to creating atmosphere and transforming the feel of any room.', image: '/images/gallery2.jpg' },
        { title: 'Material Selection', description: 'Choosing materials that look beautiful and perform well over time.', image: '/images/gallery3.jpg' }
      ],
      philosophyTitle: 'Beyond Trends',
      philosophyText: 'True design wisdom goes beyond what\'s trending. It\'s about understanding timeless principles that create spaces where you feel truly at home.'
    },
    guides: {
      introTitle: 'Your Design Journey',
      introText: 'Whether you\'re planning a complete renovation or refreshing a single room, these guides will help you navigate the process with confidence.',
      cards: [
        { title: 'Kitchen Planning', description: 'Everything you need to know about designing the heart of your home.', image: '/images/Kitchens1.webp' },
        { title: 'Bathroom Design', description: 'Creating a functional and beautiful bathroom space.', image: '/images/gallery5.jpg' },
        { title: 'Living Spaces', description: 'Maximizing comfort and style in your main living areas.', image: '/images/salon.webp' }
      ],
      philosophyTitle: 'Step by Step',
      philosophyText: 'Great design doesn\'t happen by accident. It requires planning, patience, and a clear vision.'
    },
    insights: {
      introTitle: 'Spaces That Work',
      introText: 'Every type of space—whether residential or commercial—has its own unique requirements. Learn how thoughtful design can transform any environment.',
      cards: [
        { title: 'Office Spaces', description: 'Design that promotes productivity, creativity, and wellbeing.', image: '/images/OFFICE SPACES.webp' },
        { title: 'Hospitality', description: 'Creating memorable experiences for guests and customers.', image: '/images/HOSPITALITY.webp' },
        { title: 'Retail Design', description: 'Environments that tell your brand story and engage customers.', image: '/images/RETAIL DESIGN.webp' }
      ],
      philosophyTitle: 'Design for Life',
      philosophyText: 'Whether at home or at work, thoughtful design shapes how we live, work, and interact.'
    }
  },
  articles: [
    { id: '1', title: 'Finding Beauty in Organic Forms', excerpt: 'How nature shapes modern interior design...', content: '', image: '/images/gallery1.jpg', category: 'inspiration' },
    { id: '2', title: 'The Art of Bauhaus Revival', excerpt: 'Clean lines meet contemporary living...', content: '', image: '/images/gallery2.jpg', category: 'inspiration' },
    { id: '3', title: 'Japanese Minimalism at Home', excerpt: 'Embracing simplicity and restraint...', content: '', image: '/images/gallery3.jpg', category: 'inspiration' },
    { id: '4', title: 'Color Psychology in Design', excerpt: 'Understanding how colors affect mood...', content: '', image: '/images/gallery4.jpg', category: 'tips' },
    { id: '5', title: 'Lighting That Transforms', excerpt: 'The secret to perfect ambiance...', content: '', image: '/images/gallery5.jpg', category: 'tips' },
    { id: '6', title: 'Texture and Material Balance', excerpt: 'Creating visual interest through touch...', content: '', image: '/images/gallery6.jpg', category: 'tips' },
    { id: '7', title: 'Kitchen Renovation Guide', excerpt: 'Everything you need to know before starting...', content: '', image: '/images/gallery7.jpg', category: 'guides' },
    { id: '8', title: 'Bathroom Design Essentials', excerpt: 'From planning to final touches...', content: '', image: '/images/gallery8.jpg', category: 'guides' },
    { id: '9', title: 'Living Room Layout Tips', excerpt: 'Maximize space and flow...', content: '', image: '/images/gallery1.jpg', category: 'guides' },
    { id: '10', title: 'Office Space That Inspires', excerpt: 'Design for productivity and creativity...', content: '', image: '/images/gallery2.jpg', category: 'insights' },
    { id: '11', title: 'Retail Design Psychology', excerpt: 'Creating customer experiences...', content: '', image: '/images/gallery3.jpg', category: 'insights' },
    { id: '12', title: 'Hospitality Design Trends', excerpt: 'What guests really want...', content: '', image: '/images/gallery4.jpg', category: 'insights' },
  ]
};

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<BlogData>(defaultData);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load data from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('blogData');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setData({ ...defaultData, ...parsed });
      } catch (e) {
        console.error('Failed to parse saved blog data');
      }
    }
    setIsLoaded(true);
  }, []);

  const updateMainHero = (hero: HeroSettings) => {
    setData(prev => ({ ...prev, mainHero: hero }));
    setHasUnsavedChanges(true);
  };

  const updateSectionIntro = (section: string, intro: SectionIntro) => {
    setData(prev => ({
      ...prev,
      sectionIntros: { ...prev.sectionIntros, [section]: intro }
    }));
    setHasUnsavedChanges(true);
  };

  const updatePageHero = (page: string, hero: PageHeroSettings) => {
    setData(prev => ({
      ...prev,
      pageHeros: { ...prev.pageHeros, [page]: hero }
    }));
    setHasUnsavedChanges(true);
  };

  const updatePageContent = (page: string, content: PageContentSettings) => {
    setData(prev => ({
      ...prev,
      pageContents: { ...prev.pageContents, [page]: content }
    }));
    setHasUnsavedChanges(true);
  };

  const updateArticles = (articles: Article[]) => {
    setData(prev => ({ ...prev, articles }));
    setHasUnsavedChanges(true);
  };

  const saveAll = () => {
    localStorage.setItem('blogData', JSON.stringify(data));
    setHasUnsavedChanges(false);
  };

  const resetToDefault = () => {
    localStorage.removeItem('blogData');
    setData(defaultData);
    setHasUnsavedChanges(false);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <BlogContext.Provider value={{
      data,
      updateMainHero,
      updateSectionIntro,
      updatePageHero,
      updatePageContent,
      updateArticles,
      saveAll,
      resetToDefault,
      hasUnsavedChanges
    }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

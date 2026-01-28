
export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  client: string;
  role: string;
  scope: string[];
  challenge?: string;
  approach?: string;
  result?: string;
  description?: string;
  image: string;
  imageAlt?: string; // Added for SEO
  link?: string;
  caseStudies?: CaseStudy[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  thumbnailAlt?: string; // Added for SEO
  images: string[];
  partner: string;
  artist: string;
  type: string;
  overview: string;
  achievements: string[];
}

export interface ArchiveMedia {
  type: 'video' | 'image' | 'link';
  url: string;
  thumb?: string;
  alt?: string; // Added for SEO
}

export interface ArchiveProject {
  id: string;
  title: string;
  tagline: string;
  client: string;
  brand: string;
  product: string;
  role: string;
  period: string;
  tags: string[];
  image: string; // Thumbnail
  imageAlt?: string; // Added for SEO
  visual: string; // Legacy Detailed Visual (fallback)
  media?: ArchiveMedia[]; // New Visual Archive Grid
  description?: string; 
  challenge: string;
  solution: string[];
  result: string[];
}

export interface ServiceDetail {
  title: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  details: ServiceDetail[];
}

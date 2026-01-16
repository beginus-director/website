
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
  caseStudies?: CaseStudy[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  images: string[];
  partner: string;
  artist: string;
  type: string;
  overview: string;
  achievements: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  details: string[];
}

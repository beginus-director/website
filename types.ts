
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
  link?: string;
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

export interface ArchiveProject {
  id: string;
  title: string;
  client: string;
  period: string;
  tags: string[];
  image: string;
  description: string;
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

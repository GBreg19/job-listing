export interface Data {
  id?: number;
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export interface Job {
  company: string;
  logo: string;
  isNew: boolean;
  isFeatured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  tablets: string[];
}

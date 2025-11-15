export interface Show {
  id: number;
  name: string;
  summary?: string;
  image?: { medium?: string; original?: string };
  premiered?: string;
  rating?: { average?: number };
}

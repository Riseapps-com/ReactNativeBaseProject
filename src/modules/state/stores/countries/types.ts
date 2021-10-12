export type LocalCountry = {
  id: string;
  cca2: string;
  name: string;
  capital?: string;
  region: string;
  subregion: string;
  population: string;
  flagLink: string;
  currencies?: string;
  languages?: string;
};

export type LocalRegion = 'africa' | 'americas' | 'asia' | 'europe' | 'oceania';

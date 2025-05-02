export interface Translation {
  title: string;
  welcome: string;
  selectLanguage: string;
  greeting: string;
  paragraph: string;
  buttonText: string;
  setUptitle: string; // For en.json only (French uses 'title')
  coreImplementation: string;
  coreItem: CoreItem[];
  coreItems: CoreItem[];
  keyFeatures: string;
  keyFeatureItems: KeyFeatureItem[];
  howItWorks: string;
  howItWorksItems: string[]; // Array of HTML strings
  implementation: string;
  implementationItems: string[]; // Array of HTML strings
  extensionNote: string;
  KeyFeatureItem: KeyFeatureItem[];
}

export interface CoreItem {
  id: number;
  title: string;
  description: string;
}

export interface KeyFeatureItem {
  title: string;
  description: string;
}

export type SupportedLanguages = 'en' | 'fr';

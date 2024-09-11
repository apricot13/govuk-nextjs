export interface AppConfig {
  name: string;
  description: string;
  image: string;
  councils: string[];
  features: {
    documentsPublicEndpoint: boolean;
  };
  council: CouncilConfig | null;
}

export interface CouncilConfig {
  slug: string;
  name: string;
}

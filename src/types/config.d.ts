export interface AppConfig {
  name: string;
  description: string;
  image: string;
  councils: string[];
  features: {
    documentsPublicEndpoint: boolean;
  };
  council: CouncilConfig | null;
  navigation: {
    label: string;
    href: string;
    type?: string;
  }[];
}

export interface CouncilConfig {
  slug: string;
  name: string;
  links?: {
    privacyPolicy?: string;
  };
}

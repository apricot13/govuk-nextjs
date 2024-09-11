import { getCouncilConfig, getCouncilList } from "./councilConfig";

// Define the app configuration
export const getAppConfig = (council?: string) => {
  return {
    name: "Digital Planning Register",
    description:
      "This site allows you to find planning applications submitted through the Open Digital Planning system for your local council planning authority.",
    image:
      "http://localhost:3000/govuk-assets/images/govuk-opengraph-image.png",
    councils: getCouncilList(),
    features: {
      documentsPublicEndpoint: true,
    },
    council: getCouncilConfig(council) ?? null,
  };
};

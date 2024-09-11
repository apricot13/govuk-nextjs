import { AppConfig } from "@/types/config";
import { getCouncilConfig, getCouncilList } from "./councilConfig";

// Define the app configuration
export const getAppConfig = (council?: string): AppConfig => {
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
    council: council ? (getCouncilConfig(council) ?? null) : null,
    resultsPerPage: 10,
    navigation: [
      {
        label: "Application search",
        href: "",
        type: "council",
      },
      {
        label: "Understanding planning",
        href: "/planning-process",
        type: "council",
      },
      {
        label: "test",
        href: "/test",
        type: "council",
      },
    ],
  };
};

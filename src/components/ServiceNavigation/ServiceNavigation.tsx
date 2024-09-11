import { AppConfig } from "@/types/config";
import "./ServiceNavigation.scss";
import { CouncilSelector } from "@/components/CouncilSelector";
import { ServiceNavigationMenu } from "@/components/ServiceNavigation";

export interface ServiceNavigationProps {
  appConfig: AppConfig;
}

export const ServiceNavigation = ({ appConfig }: ServiceNavigationProps) => {
  const navigationItems = appConfig.navigation ?? [];
  const councilSlug = appConfig.council?.slug;
  return (
    <div
      className="govuk-service-navigation"
      data-module="govuk-service-navigation"
    >
      <div className="govuk-width-container">
        <div className="govuk-service-navigation__container">
          <CouncilSelector
            availableCouncils={appConfig.councils}
            selectedCouncil={appConfig.council}
          />
          {appConfig.council && (
            <ServiceNavigationMenu
              councilSlug={appConfig.council?.slug}
              navigation={navigationItems}
            />
          )}
        </div>
      </div>
    </div>
  );
};

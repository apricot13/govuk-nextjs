import { Footer } from "@/components/Footer";
import { PhaseBanner } from "@/components/govuk/PhaseBanner";
import { SkipLink } from "@/components/govuk/SkipLink";
import { Header } from "@/components/Header";
import { AppConfig } from "@/types/config";

export interface BaseTemplateProps {
  appConfig: AppConfig;
  children?: React.ReactNode;
}

export const BaseTemplate = ({
  appConfig,
  children,
}: Readonly<BaseTemplateProps>) => {
  return (
    <>
      <SkipLink href="#main-content" />
      <Header appConfig={appConfig} />
      <div className="govuk-width-container">
        <PhaseBanner />

        {/* {backButton && backButton} */}
        {/* <a href="#" className="govuk-back-link">
          Back
        </a> */}
        <main className="govuk-main-wrapper" id="main-content">
          {children}
        </main>
      </div>
      <Footer appConfig={appConfig} />
    </>
  );
};

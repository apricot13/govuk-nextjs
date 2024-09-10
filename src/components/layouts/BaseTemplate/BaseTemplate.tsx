import { PhaseBanner } from "@/components/govuk/PhaseBanner";
import { SkipLink } from "@/components/govuk/SkipLink";

export interface BaseTemplateProps {
  children?: React.ReactNode;
}

export const BaseTemplate = ({ children }: Readonly<BaseTemplateProps>) => {
  return (
    <>
      <SkipLink href="#main-content" />
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
    </>
  );
};

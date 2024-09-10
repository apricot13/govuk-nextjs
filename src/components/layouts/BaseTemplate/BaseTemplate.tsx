import { Footer } from "@/components/Footer";
import { PhaseBanner } from "@/components/govuk/PhaseBanner";
import { SkipLink } from "@/components/govuk/SkipLink";
import { Header } from "@/components/Header";

export interface BaseTemplateProps {
  children?: React.ReactNode;
}

export const BaseTemplate = ({ children }: Readonly<BaseTemplateProps>) => {
  return (
    <>
      <SkipLink href="#main-content" />
      <Header />
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
      <Footer />
    </>
  );
};

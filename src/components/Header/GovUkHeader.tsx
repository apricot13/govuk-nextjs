"use client";
import { Header, createAll } from "govuk-frontend";

import { useState, useEffect } from "react";
import Script from "next/script";

/**
 * Initialises the GovUkHeader component
 * We do it this way as using react methods cause them to load twice, which is actually correct its just that the gov-uk code isn't designed to be used in this way
 * https://govuk-design-system-team-docs.netlify.app/support/communicating-with-users/common-responses/#making-gov-uk-frontend-work-with-javascript-frameworks
 * @returns
 */
export const GovUkHeader = () => {
  // Use State works for some components but will run into issues with state etc

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    createAll(Header);
  }

  // This is the best way to load it but its still not designed for this purpose :/
  return (
    <Script id="govuk-header-init" strategy="afterInteractive">
      {`
        console.log('GovUkHeader script loaded');
      `}
    </Script>
  );
};

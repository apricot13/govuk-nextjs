"use client";

import { AppConfig } from "@/types/config";
import Link from "next/link";
import { ContentCookiePolicy } from "../content/cookie-policy";
import "./Cookies.scss";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setConsentCookie } from "@/actions";
import { CookiesForm } from "./CookiesForm";

export interface CookiesProps {}

export const Cookies = () => {
  const router = useRouter();
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean | null>(
    null,
  );
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("consentCookie="))
      ?.split("=")[1];

    setAnalyticsConsent(consentCookie === "true");
  }, []);

  return (
    <>
      {showSuccess && (
        <div
          className="govuk-notification-banner govuk-notification-banner--success"
          role="alert"
          aria-labelledby="govuk-notification-banner-title"
          data-module="govuk-notification-banner"
        >
          <div className="govuk-notification-banner__header">
            <h2
              className="govuk-notification-banner__title"
              id="govuk-notification-banner-title"
            >
              Success
            </h2>
          </div>
          <div className="govuk-notification-banner__content">
            <p className="govuk-notification-banner__heading">
              You've set your cookie preferences.{" "}
              <Link
                href="#"
                className="govuk-notification-banner__link"
                onClick={() => router.back()}
              >
                Go back to the page you were looking at
              </Link>
              .
            </p>
          </div>
        </div>
      )}{" "}
      <ContentCookiePolicy />
      <CookiesForm
        setAnalyticsConsent={setAnalyticsConsent}
        setShowSuccess={setShowSuccess}
        analyticsConsent={analyticsConsent}
      />
    </>
  );
};

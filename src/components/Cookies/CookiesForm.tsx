"use client";

import "./Cookies.scss";
import { setConsentCookie } from "@/actions";

export interface CookiesFormProps {
  analyticsConsent: boolean | null;
  setAnalyticsConsent: (value: boolean) => void;
  setShowSuccess: (value: boolean) => void;
}

export const CookiesForm = ({
  analyticsConsent,
  setAnalyticsConsent,
  setShowSuccess,
}: CookiesFormProps) => {
  const initialState = {
    message: "",
  };
  const formAction = async (formData: FormData) => {
    const analyticsValue = formData.get("cookies[analytics]") === "yes";

    await setConsentCookie(analyticsValue);
    setAnalyticsConsent(analyticsValue);
    setShowSuccess(true);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h2 className="govuk-heading-l">Change your cookie settings</h2>
          <form action={formAction} noValidate>
            <div className="govuk-form-group">
              <fieldset className="govuk-fieldset">
                <legend className="govuk-fieldset__legend govuk-fieldset__legend--s">
                  Do you want to accept analytics cookies?
                </legend>
                <div className="govuk-radios" data-module="govuk-radios">
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics"
                      name="cookies[analytics]"
                      type="radio"
                      value="yes"
                      checked={analyticsConsent === true}
                      onChange={() => setAnalyticsConsent(true)}
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="cookies-analytics"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="govuk-radios__item">
                    <input
                      className="govuk-radios__input"
                      id="cookies-analytics-2"
                      name="cookies[analytics]"
                      type="radio"
                      value="no"
                      checked={analyticsConsent === false}
                      onChange={() => setAnalyticsConsent(false)}
                    />
                    <label
                      className="govuk-label govuk-radios__label"
                      htmlFor="cookies-analytics-2"
                    >
                      No
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <button
              type="submit"
              className="govuk-button"
              data-module="govuk-button"
            >
              Save cookie settings
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

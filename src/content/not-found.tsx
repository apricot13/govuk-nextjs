import Link from "next/link";

export const ContentNotFound = () => {
  const contact = "https://www.gov.uk/find-local-council";
  const applicationSearchUrl = "/";

  return (
    <>
      <h1 className="govuk-heading-l">Page not found</h1>
      <p className="govuk-body">
        The link you have used may be incorrect, or you are trying to reach a
        planning application that doesn&apos;t exist.
      </p>
      <p className="govuk-body">
        If you are having problems finding what you need, you can:
      </p>
      <ul className="govuk-list govuk-list--bullet">
        <li>
          <Link
            href={applicationSearchUrl}
            className="govuk-link govuk-link--no-visited-state"
          >
            Try searching for an application
          </Link>
        </li>
        <li>
          <Link
            href={contact}
            className="govuk-link govuk-link--no-visited-state"
            target="_blank"
          >
            Get in touch with the council
          </Link>
        </li>
      </ul>
    </>
  );
};

export const ContentErrorsFallback = () => {
  return (
    <>
      <h1 className="govuk-heading-l">Ooops, something went wrong</h1>
      <p className="govuk-body">
        <button onClick={() => window.location.assign(window.location.origin)}>
          Refresh
        </button>
      </p>
    </>
  );
};

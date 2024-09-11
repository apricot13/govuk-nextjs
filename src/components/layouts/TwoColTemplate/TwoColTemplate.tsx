export interface TwoColTemplateProps {
  main: React.ReactNode;
  sidebar: React.ReactNode;
}

export const TwoColTemplate = ({
  main,
  sidebar,
}: Readonly<TwoColTemplateProps>) => {
  return (
    <div className="govuk-grid-row">
      <div className="govuk-grid-column-one-third-from-desktop contents-bar">
        {sidebar}
      </div>

      <div className="govuk-grid-column-two-thirds-from-desktop">{main}</div>
    </div>
  );
};

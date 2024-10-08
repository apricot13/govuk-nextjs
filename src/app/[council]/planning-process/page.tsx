import { contentPlanningProcess } from "@/components/content/planning-process";
import { TwoColTemplate } from "@/components/layouts/TwoColTemplate";
import { SidebarMenu } from "@/components/SidebarMenu";

export type PageContent = {
  key: string;
  title: string;
  content: JSX.Element;
  children?: PageContent[];
  /**
   * Items with 'linked' set to true are linked to from the application details page, If this changes we can get rid of the linked field
   */
  linked?: boolean;
};

const renderContent = (
  items: SidebarMenuProps["content"],
  depth: number = 0,
) => {
  return items.map((item, index) => {
    let heading;
    const id = encodeURIComponent(item.title);

    if (depth === 0) {
      heading = (
        <h2 className="govuk-heading-l" id={id}>
          {item.title}
        </h2>
      );
    } else if (depth === 1) {
      heading = (
        <h3 key={id} className="govuk-heading-m" id={id}>
          {item.title}
        </h3>
      );
    } else {
      heading = (
        <h4 className="govuk-heading-s" key={id} id={id}>
          {item.title}
        </h4>
      );
    }

    return (
      <div key={index}>
        {heading}
        {item.content}
        {item.children && renderContent(item.children, depth + 1)}
      </div>
    );
  });
};

const PlanningProcess = () => {
  const content = contentPlanningProcess();
  return (
    <>
      <h1 className="govuk-heading-xl">Understanding planning</h1>
      <TwoColTemplate
        sidebar={
          <>
            <h2 className="govuk-heading-l">Contents</h2>
            <SidebarMenu content={content} />
          </>
        }
        main={<> {renderContent(content)} </>}
      />
    </>
  );
};

export default PlanningProcess;

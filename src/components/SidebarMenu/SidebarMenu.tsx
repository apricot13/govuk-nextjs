import { ContentPlanningProcessType } from "@/components/content/planning-process";
import "./SidebarMenu.scss";
import Link from "next/link";

export interface SidebarMenuProps {
  content: {
    title: string;
    children?: {
      title: string;
      children?: {
        title: string;
      }[];
    }[];
  };
}

const renderContent = (
  items: SidebarMenuProps["content"],
  depth: number = 0,
) => {
  return items.map((item, index) => {
    const className =
      depth === 0
        ? "contents-bar__list-heading"
        : depth === 1
          ? "contents-bar__sub-list"
          : "contents-bar__sub-list contents-bar__sub-sub-list";

    return (
      <div key={index}>
        <p className={className}>
          <Link href={`#${encodeURIComponent(item.title)}`}>{item.title}</Link>
        </p>
        {item.children && renderContent(item.children, depth + 1)}
      </div>
    );
  });
};

export const SidebarMenu = ({ content }: Readonly<SidebarMenuProps>) => {
  return <div className="contents-bar">{renderContent(content)}</div>;
};

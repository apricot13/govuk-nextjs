"use client";

import { AppConfig } from "@/types/config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface ServiceNavigationMenuProps {
  navigation: AppConfig["navigation"];
  councilSlug: string;
}

export const ServiceNavigationMenu = ({
  navigation,
  councilSlug,
}: ServiceNavigationMenuProps) => {
  const pathname = usePathname();
  return (
    <nav aria-label="Menu" className="govuk-service-navigation__wrapper">
      <button
        type="button"
        className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle"
        aria-controls="navigation"
        hidden
      >
        Menu
      </button>
      <ul className="govuk-service-navigation__list" id="navigation">
        {navigation.map((item, index) => {
          const href =
            item.type === "council" && councilSlug
              ? `/${encodeURIComponent(councilSlug)}${item.href}`
              : item.href;

          const active = pathname === href;
          console.log(councilSlug);
          return (
            <li
              key={`service-nav-${index}`}
              className={`govuk-service-navigation__item${active ? " govuk-service-navigation__item--active" : ""}`}
            >
              <Link className={`govuk-service-navigation__link$`} href={href}>
                {active ? (
                  <strong className="govuk-service-navigation__active-fallback">
                    {item.label}
                  </strong>
                ) : (
                  item.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

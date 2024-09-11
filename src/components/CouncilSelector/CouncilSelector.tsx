import { AppConfig } from "@/types/config";
import Link from "next/link";

export interface CouncilSelectorProps {
  availableCouncils: AppConfig["councils"];
  selectedCouncil?: AppConfig["council"];
}

export const CouncilSelector = ({
  availableCouncils,
  selectedCouncil,
}: CouncilSelectorProps) => {
  return (
    <>
      {/* <ul>
        {availableCouncils &&
          availableCouncils.length > 1 &&
          availableCouncils.map((council) => (
            <li key={council}>
              <Link href={`/${council}`} key={council}>
                {council}
              </Link>
            </li>
          ))}
      </ul> */}

      {availableCouncils && availableCouncils.length > 1 && (
        <form action="/" method="">
          <div>
            <select
              className="govuk-select noscript-only council-selection"
              id="council-select-noscript"
              name="council"
              defaultValue={selectedCouncil?.slug ?? "select"}
              aria-label="Select your council"
              autoComplete="on"
            >
              <option value="select">Select your council</option>
              {availableCouncils?.map((council) => (
                <option key={council} value={council}>
                  {council}
                </option>
              ))}
            </select>
            <button
              type="submit"
              className="govuk-button custom-button council-selection"
            >
              Select
            </button>
          </div>
        </form>
      )}
    </>
  );
};

import { getAppConfig } from "@/config";
import { notFound } from "next/navigation";

import { ApiResponse, DprPublicApplicationListings } from "@/types";
import { getPublicApplications } from "@/actions";
import ApplicationMap from "@/components/application_map";

interface PlanningApplicationDetailsProps {
  params: {
    council: string;
    reference: string;
  };
  searchParams?: {
    search: string;
    page: string;
  };
}

async function fetchData({
  params,
  searchParams,
}: PlanningApplicationDetailsProps): Promise<
  ApiResponse<DprPublicApplicationListings | null>
> {
  const council = decodeURIComponent(params.council);
  const appConfig = getAppConfig(council);
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const search = searchParams?.search as string;

  const response = await getPublicApplications(
    page,
    appConfig.resultsPerPage,
    council,
    search,
  );

  return response;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "my-map": any;
    }
  }
}

export default async function CouncilApplicationListingPage({
  params,
  searchParams,
}: PlanningApplicationDetailsProps) {
  const council = decodeURIComponent(params.council);
  const appConfig = getAppConfig(council);
  const page = searchParams?.page ? parseInt(searchParams.page) : 1;
  const validationError =
    searchParams?.search && searchParams?.search.length < 3 ? true : false;

  if (!appConfig.council) {
    notFound();
  }
  const response = await fetchData({ params, searchParams });

  if (response?.status?.code !== 200) {
    notFound();
  }

  const applications = response.data?.data || [];

  console.log(applications);

  let defaultMapProps = {
    hideResetControl: true,
    geojsonColor: "#ff0000",
    geojsonBuffer: "85",
    osVectorTilesApiKey: "",
    "aria-label": "An interactive map",
    osCopyright: "© Crown copyright and database rights 2024 OS (0)100024857",
    zoom: 14,
    showScale: true,
  };

  return (
    <>
      {applications.map((application) => {
        console.log(application.property.boundary.site.geometry);
        return (
          <>
            <h1>{application.application.reference}</h1>
            <ApplicationMap mapData={application.property.boundary.site} />
            {/* <div role="region" aria-label="map" className="osl-map">
              <my-map
                role="application"
                geojsonData={JSON.stringify({
                  type: "Feature",
                  geometry: {
                    type: "Polygon",
                    coordinates: [
                      [
                        [-0.07716178894042969, 51.50094238217541],
                        [-0.07645905017852783, 51.50053497847238],
                        [-0.07615327835083008, 51.50115276135022],
                        [-0.07716178894042969, 51.50094238217541],
                      ],
                    ],
                  },
                })}
                {...defaultMapProps}
              />
            </div> */}
          </>
        );
      })}
    </>
  );
}

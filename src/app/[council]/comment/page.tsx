import { getAppConfig } from "@/config";
import { notFound } from "next/navigation";

import { ApiResponse, DprPublicApplicationListings } from "@/types";
import { getPublicApplications } from "@/actions";
import ApplicationMap from "@/components/application_map";
import { AddComment } from "@/components/AddComment";

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

  const application = applications[0];

  return (
    <>
      {application.application.reference}
      <AddComment />
    </>
  );
}

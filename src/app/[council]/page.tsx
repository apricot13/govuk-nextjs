import { getAppConfig, getCouncilList } from "@/config";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const allCouncils = getCouncilList()
    .flatMap((council) => [
      {
        council,
      },
    ])
    .filter(Boolean);
  console.log(allCouncils);
  return allCouncils;
}

export default async function CouncilListingPage({
  params,
}: {
  params: { council: string };
}) {
  const council = decodeURIComponent(params.council);
  const [data] = await Promise.all([getAppConfig(council)]);

  if (!data.council) {
    notFound();
  }

  return <>hello</>;
}

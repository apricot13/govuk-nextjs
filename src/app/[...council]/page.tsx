import { getAppConfig } from "@/config";
import { notFound } from "next/navigation";

// /validCouncil -> [council]
// /validCouncil/validPage -> [council]/folder
// /validCouncil/invalidPage -> [...council]
// /invalidCouncil -> [council]
// /invalidCouncil -> middleware
// /invalidCouncil/validPage -> middleware
export default function CouncilListingPage({
  params,
}: {
  params: { council: string };
}) {
  const council = decodeURIComponent(params.council);
  const appConfig = getAppConfig(council);

  if (!appConfig.council) {
    notFound();
  }
}

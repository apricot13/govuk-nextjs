import { getAppConfig } from "@/config";
import { notFound } from "next/navigation";

export default function CouncilTestPage({
  params,
}: {
  params: { council: string };
}) {
  const council = decodeURIComponent(params.council);
  const appConfig = getAppConfig(council);

  // if (!appConfig.council) {
  //   notFound();
  // }

  return (
    <>
      hello {council}
      {appConfig?.council?.name}
    </>
  );
}

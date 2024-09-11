export interface CouncilListingPageProps {
  params: { council: string };
}

export default function CouncilListingPage({
  params,
}: CouncilListingPageProps) {
  const council = decodeURIComponent(params.council);
  return <>{council} listing</>;
}

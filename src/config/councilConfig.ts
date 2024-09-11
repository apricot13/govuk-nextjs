import { CouncilConfig } from "@/types/config";
import { councilConfigs } from "./councils";

export const getCouncilConfig = (council: string): CouncilConfig | null => {
  const councilConfig = councilConfigs[council];
  return councilConfig ? councilConfig : null;
};

export const getCouncilList = () => {
  return Object.keys(councilConfigs);
};

export const getAllCouncilConfigs = () => {
  return Object.values(councilConfigs);
};

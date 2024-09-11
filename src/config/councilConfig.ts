import * as councilConfigs from "./councils";

export const getCouncilConfig = (council?: string) => {
  if (!council) {
    return Object.values(councilConfigs);
  }
  const councilConfig = councilConfigs[council];
  return councilConfig ? councilConfig : null;
};

export const getCouncilList = () => {
  return Object.keys(councilConfigs);
};

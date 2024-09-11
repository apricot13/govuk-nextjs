import { CouncilConfig } from "@/types/config";
import { barnet } from "./barnet";
import { buckinghamshire } from "./buckinghamshire";
import { camden } from "./camden";
import { gateshead } from "./gateshead";
import { lambeth } from "./lambeth";
import { southwark } from "./southwark";

export const councilConfigs: Record<string, CouncilConfig> = {
  barnet,
  buckinghamshire,
  camden,
  gateshead,
  lambeth,
  southwark,
};

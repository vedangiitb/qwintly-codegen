import { infra } from "./infra";
import { logicCapabilies } from "./logicCapabilies";
import { navigation } from "./navigation";
import { uiCapabilities } from "./uiCapabilities";

export interface projectStructure {
  navigation: navigation;
  uiCapabilities: uiCapabilities;
  logicCapabilies: logicCapabilies;
  infra: infra;
}

import { codeIndex } from "../../../../types/codeIndex/codeIndex";
import {
  getLayoutByRoute,
  getPageByRoute
} from "../helpers/helpers";

export function resolveAddSection(
  page: string,
  feature: string,
  ctx: codeIndex
): any {
  const pageEntity = getPageByRoute(page, ctx);
  const layoutEntity = getLayoutByRoute(page, ctx);
  if (!pageEntity || !layoutEntity) {
    throw new Error(`Page "${page}" does not exist`);
  }
  return {
    target: {
      type: "section",
      feature,
      page: pageEntity.route,
    },

    facts: {
      page: {
        route: pageEntity.route,
        file: pageEntity.file,
        description: pageEntity.description,
      },

      layout: {
        route: layoutEntity.route,
        file: layoutEntity.file,
        description: layoutEntity.description,
      },

      components: ctx.projectStructure.uiCapabilities.components,
    },
  };
}

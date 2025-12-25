import { codeIndex } from "../../../../types/codeIndex/codeIndex";

export function resolveAddPage(page: string, ctx: codeIndex): any {
  return {
    new_page: page,
    facts: {
      page_exists: false,
      pages_details: ctx.projectStructure.navigation,
      ui_details: ctx.projectStructure.uiCapabilities,
    },
  };
}

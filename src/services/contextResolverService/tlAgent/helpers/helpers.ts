import { codeIndex } from "../../../../types/codeIndex/codeIndex";

export function getPageByRoute(route: string, ctx: codeIndex) {
  const pages = ctx.projectStructure.navigation.pages;
  return Object.values(pages).find((p: any) => p.route === route);
}

export function getLayoutByRoute(route: string, ctx: codeIndex) {
  const routes = ctx.projectStructure.navigation.layouts;
  return Object.values(routes).find((r: any) => r.route === route);
}

export function getSectionByFeature(feature: string, ctx: codeIndex) {
  return ctx.projectStructure.uiCapabilities.components?.[feature] ?? null;
}

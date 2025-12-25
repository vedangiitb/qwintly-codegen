import { intentType } from "../../../../constants/intents";
import { codeIndex } from "../../../../types/codeIndex/codeIndex";
import { resolveAddPage } from "../resolvers/resolveAddPage";
import { resolveAddSection } from "../resolvers/resolveAddSection";

export const getContextUI = (
  intent: string,
  description: string,
  page: string,
  feature: string,
  component_id: string,
  codeIndex: codeIndex
) => {
  switch (intent) {
    // Example Usecase: Add an about us page
    case intentType.ADD_PAGE:
      return resolveAddPage(page, codeIndex);

    // Example Usecase: Add a hero section
    case intentType.ADD_SECTION:
      return resolveAddSection(page, feature, codeIndex);

    // case intentType.MODIFY_SECTION:
    // return resolveModifySection(page, feature, description, codeIndex);

    // case intentType.MODIFY_TEXT_CONTENT:
    // return resolveModifyText(feature, description, codeIndex);

    // case intentType.MODIFY_STYLING:
    // return resolveModifyStyling(feature, description, codeIndex);

    default:
      console.error(`Unsupported UI intent: ${intent}`);
  }
};

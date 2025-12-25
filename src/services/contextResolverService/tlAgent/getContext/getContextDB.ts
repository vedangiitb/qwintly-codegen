import { intentType } from "../../../../constants/intents";
import { codeIndex } from "../../../../types/codeIndex/codeIndex";

export const getContextDB = (
  intent: string,
  description: string,
  service: string,
  codeIndex: codeIndex
) => {
  if (intent == intentType.ADD_NEW_TABLE) {
  } else if (intent == intentType.MODIFY_SCHEMA) {
  } else if (intent == intentType.MODIFY_TABLE) {
  } else if (intent == intentType.ADD_NEW_COLUMN) {
  } else if (intent == intentType.MODIFY_COLUMN) {
  }
};

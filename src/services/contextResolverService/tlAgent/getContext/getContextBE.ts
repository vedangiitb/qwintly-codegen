import { intentType } from "../../../../constants/intents";
import { codeIndex } from "../../../../types/codeIndex/codeIndex";

export const getContextBE = (
  intent: string,
  description: string,
  service: string,
  codeIndex: codeIndex
) => {
  if (intent == intentType.ADD_NEW_SERVICE) {
  } else if (intent == intentType.MODIFY_SERVICE) {
  } else if (intent == intentType.CONNECT_AI) {
  } else if (intent == intentType.DB_CONNECTION) {
  }
};

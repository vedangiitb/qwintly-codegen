import { Tool } from "@google/genai";
import { writeCodeSchema } from "../schema/writeCode.schema";
export const codegenTools = (): Tool[] => {
  return [{ functionDeclarations: [writeCodeSchema] }];
};

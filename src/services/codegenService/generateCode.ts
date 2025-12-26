import { aiResponse } from "../../ai/ai";
import { codegenPrompt } from "../../ai/prompts/codegenPrompt";

export const generateCode = async (codegen_context: any) => {
  const response = await aiResponse(codegenPrompt(codegen_context));
};

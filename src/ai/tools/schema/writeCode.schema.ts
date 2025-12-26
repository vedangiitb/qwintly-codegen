import { Type } from "@google/genai";

export const writeCodeSchema = {
  name: "write_code",
  description: "Write code to a file",
  parameters: {
    type: Type.OBJECT,
    properties: {
      path: { type: Type.STRING },
      code: { type: Type.STRING },
      imports: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
    required: ["path", "code", "imports"],
  },
};

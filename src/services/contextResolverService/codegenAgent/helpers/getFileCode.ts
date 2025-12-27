import { readFile } from "../../../../infra/fs/workspace";

export const getFileCode = async (isNewFile: boolean, filePath: string) => {
  if (isNewFile) return "";
  return await readFile(filePath);
};

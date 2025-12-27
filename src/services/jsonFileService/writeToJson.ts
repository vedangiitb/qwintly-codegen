import fs from "fs";

export const writeToJson = async (value: string, file: string) => {
  await fs.promises.writeFile(file, value);
};

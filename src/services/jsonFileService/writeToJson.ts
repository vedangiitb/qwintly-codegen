import fs from "fs";

export const writeToJson = async (value: JSON, file: string) => {
  await fs.promises.writeFile(file, value);
};

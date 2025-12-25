import fs from "fs";

export const readJson = (fileName: string) => {
  const rawData = fs.readFileSync(fileName, "utf-8");
  const data = JSON.parse(rawData);
  return data;
};

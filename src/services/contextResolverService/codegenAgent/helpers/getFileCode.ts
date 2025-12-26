export const getFileCode = (isNewFile: boolean, filePath: string) => {
  if (isNewFile) return "";
  //   TODO: Implement getting the file code
  return `// ${filePath}`;
};

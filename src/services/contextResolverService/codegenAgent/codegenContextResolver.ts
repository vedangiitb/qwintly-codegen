import { codegenContextInterface } from "../../../types/codegenContext/codegenContext";
import { codeIndex } from "../../../types/codeIndex/codeIndex";
import { codegenTask } from "../../tlService/tlAgent";
import { getFileCode } from "./helpers/getFileCode";

export const codegenContext = (
  codeIndex: codeIndex,
  task: codegenTask
): codegenContextInterface => {
  let codegen_context = {
    specifications: codeIndex.projectSpecifications,
    isNewFile: task.isNewPage,
    pagePath: task.pagePath,
    requirements: task.description,
    content: task.content,
    code: getFileCode(task.isNewPage, task.pagePath),
  };

  return codegen_context;
};

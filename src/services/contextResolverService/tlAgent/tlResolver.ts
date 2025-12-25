import { taskType } from "../../../constants/task";
import { codeIndex } from "../../../types/codeIndex/codeIndex";
import { pmMessage } from "../../../types/pmMessage";
import { tlContextList } from "../../../types/tlContext";
import { getContextBE } from "./getContext/getContextBE";
import { getContextDB } from "./getContext/getContextDB";
import { getContextUI } from "./getContext/getContextUi";

export const tlResolver = async (
  pmMessage: pmMessage,
  codeIndex: codeIndex
): Promise<tlContextList> => {
  const tasks = pmMessage["tasks"];
  let tlContextList: tlContextList = {
    tasks: [],
  };
  for (const task of tasks) {
    let tlContext = {
      task_id: "",
      task_type: "",
      description: "",
      intent: "",
      content: {},
      code_context: {},
    };
    const task_id = task["task_id"];
    const task_type = task["task_type"];
    const description = task["description"];
    const intent = task["intent"];
    const content = task["content"];
    const page = task["page"];
    const feature = task["feature"];
    const service = task["service"];
    const component_id = task["component_id"];
    const context = await getTaskContext(
      task_type,
      intent,
      description,
      page,
      feature,
      service,
      component_id,
      codeIndex
    );
    tlContext.task_id = task_id;
    tlContext.task_type = task_type;
    tlContext.description = description;
    tlContext.intent = intent;
    tlContext.content = content;
    tlContext.code_context = context;
    tlContextList.tasks.push();
  }
  return tlContextList;
};

const getTaskContext = async (
  task: string,
  intent: string,
  description: string,
  page: string,
  feature: string,
  service: string,
  component_id: string,
  codeIndex: codeIndex
): Promise<JSON> => {
  if (task === taskType.UI) {
    getContextUI(intent, description, page, feature, component_id, codeIndex);
  } else if (task === taskType.BE) {
    getContextBE(intent, description, service, codeIndex);
  } else if (task === taskType.DB) {
    getContextDB(intent, description, service, codeIndex);
  }
  return JSON;
};

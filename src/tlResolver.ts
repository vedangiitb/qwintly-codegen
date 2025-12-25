import { pmMessage } from "./types/pmMessage";
import { tlContextList } from "./types/tlContext";

export const tlResolver = async (
  pmMessage: pmMessage,
  codeIndex: JSON
): Promise<JSON> => {
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
    };
    const task_id = task["task_id"];
    const task_type = task["task_type"];
    const description = task["description"];
    const intent = task["intent"];
    const content = task["content"];
    tlContext.task_id = task_id;
    tlContext.task_type = task_type;
    tlContext.description = description;
    tlContext.intent = intent;
    tlContext.content = content;

    tlContextList.tasks.push();
  }
  return JSON;
};

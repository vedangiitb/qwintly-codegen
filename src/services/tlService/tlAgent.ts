import { z } from "zod";
import { aiResponse } from "../../infra/ai/ai";
import { tlAgentPrompt } from "../../prompts/tlAgentPrompt";
import { codeIndex } from "../../types/codeIndex/codeIndex";
import { pmMessage } from "../../types/pmMessage";

export const TaskSchema = z.object({
  task_id: z.string(),
  description: z.string(),
  content: z.string(),
  isNewPage: z.boolean(),
  pagePath: z.string(),
});

export const CreateTasksSchema = z.object({
  taskList: z.array(TaskSchema),
});

export interface codegenTask {
  task_id: string;
  description: string;
  content: string;
  isNewPage: boolean;
  pagePath: string;
}

export const tlAgent = async (pmMessage: pmMessage, code_index: codeIndex) => {
  const tasks = pmMessage.tasks;
  try {
    const response = await aiResponse(tlAgentPrompt(tasks, code_index), {
      schema: CreateTasksSchema,
    });
    console.log(response);
    if (!response?.text)
      throw new Error("No response from AI. Please try again.");
    const codeGenTasks = CreateTasksSchema.parse(JSON.parse(response.text));
    return codeGenTasks.taskList;
  } catch (err) {
    console.error(err);
  }
};

import { generateCode } from "./services/codegenService/generateCode";
import { codegenContext } from "./services/contextResolverService/codegenAgent/codegenContextResolver";
import { readJson } from "./services/jsonFileService/readJson";
import { writeToJson } from "./services/jsonFileService/writeToJson";
import { reIndex } from "./services/reIndexService/reIndex";
import { reIndexPm } from "./services/reIndexService/reIndexPm";
import { tlAgent } from "./services/tlService/tlAgent";

async function main() {
  try {
    const pm_message = readJson("./jsons/pm_msg.json");
    const code_index = readJson("./jsons/code_index.json");
    const codegen_taskList = await tlAgent(pm_message, code_index);
    if (!codegen_taskList) throw new Error("No codegen_taskList");
    console.log(codegen_taskList);
    for (const task of codegen_taskList) {
      const codegen_context = codegenContext(code_index, task);
      await generateCode(codegen_context);
    }
    const new_code_index = await reIndex();
    const new_pm_context = await reIndexPm(new_code_index);
    await writeToJson(new_code_index, "./jsons/code_index_new.json");
    await writeToJson(new_pm_context, "./jsons/pm_context.json");
  } catch (err) {
    console.error(err);
  }
}

main();

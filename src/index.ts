import { generateCode } from "./services/codegenService/generateCode";
import { codegenContext } from "./services/contextResolverService/codegenAgent/codegenContextResolver";
import { tlResolver } from "./services/contextResolverService/tlAgent/tlResolver";
import { readJson } from "./services/jsonFileService/readJson";
import { writeToJson } from "./services/jsonFileService/writeToJson";
import { reIndex } from "./services/reIndexService/reIndex";
import { reIndexPm } from "./services/reIndexService/reIndexPm";
import { tlAgent } from "./services/tlService/tlAgent";

async function main() {
  const pm_message = readJson("./jsons/pm_msg.json");
  const code_index = readJson("./jsons/code_index.json");
  const tl_context = await tlResolver(pm_message, code_index);
  console.log(tl_context);
  const tl_output = await tlAgent(pm_message, tl_context);
  console.log(tl_output);
  for (const output of tl_output) {
    const codegen_context = await codegenContext(tl_context, output);
    await generateCode(codegen_context, output);
  }
  const new_code_index = await reIndex();
  const new_pm_context = await reIndexPm(new_code_index);
  await writeToJson(new_code_index, "./jsons/code_index_new.json");
  await writeToJson(new_pm_context, "./jsons/pm_context.json");
}

main();

// schema in pm_context
// ui_features (Belong to component directory):
// {
//  "name":"",
//  "description":"",
//  "pages":[""],
// "sub_components":[""],
// }
//
// be_features (Belong to lib directory):
// {"name":"",
// "description":"",
//  "services":[""],
// }
//
// db_features
// {
// "table_name":"",
// "description":""
// }

// Schema for ui_capabilities (componenets)
// "hero": {
//  "type":"section" // can be "section" or "ui_element"
//  "file":"",
//  "description":"",
//  "used_in_page":[""],
//  "used_in_layout":[""],
//  "used_in_component":[""],
//  "components_used":[""],
// }
//
// Schema for logic_capabilities
// "logic_capabilities": {
//   "services": {
//     "pricingService": {
//       "file": "services/pricingService.ts",
//       "description": "Handles pricing-related business logic",
//       "used_by": ["PricingSection"]
//     }
//   },
//   "hooks": {
//     "usePricing": {
//       "file": "hooks/usePricing.ts",
//       "description": "Manages pricing state and calculations"
//     }
//   },

//   "lib": {
//     "formatCurrency": {
//       "file": "lib/formatCurrency.ts",
//       "description": "Formats numbers as currency"
//     }
//   },

//   "utils": {
//     "slugify": {
//       "file": "utils/slugify.ts",
//       "description": "Converts strings into URL-friendly slugs"
//     }
//   }
// }
import path from "path";
import * as fs from "fs";
import snakeCase from "lodash.snakecase"
import capitalize from "../../utils/capitalize";

const importsMarker = "/* rtc-imports */";
const handlersMarker = "/* rtc-handlers */";

const updateImportMarker = (t: string, args: CreateActionArgs) => t.replace(importsMarker,
`import { ${args.name}Start, ${args.name}Success, ${args.name}Fail } from "./${args.name}";

import {
    ${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_START,
    ${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_SUCCESS,
    ${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_FAIL
} from "../actions/${args.name}";

${importsMarker}`);

const updateHandlerMarker = (t: string, args: CreateActionArgs) => t.replace(handlersMarker, `
    [${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_START]: ${args.name}Start,
    [${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_SUCCESS]: ${args.name}Success,
    [${snakeCase(args.duckName + capitalize(args.name)).toUpperCase()}_FAIL]: ${args.name}Fail,
    ${handlersMarker}`);

const updateReducersFile = (args: CreateActionArgs, duckPath: string) => {
    const filepath = path.join(duckPath, "reducers", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');


    fs.writeFileSync(
        path.join(duckPath, "reducers", "index.ts"),
        updateHandlerMarker(updateImportMarker(template, args), args)
    )};

export default updateReducersFile

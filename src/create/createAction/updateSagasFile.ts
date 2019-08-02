import path from "path";
import * as fs from "fs";
import capitalize from "../../utils/capitalize";

const importMarker = "/* rtc-import */";
const handlerMarker = "/* rtc-handler */";

const updateImportMarker = (t: string, args: CreateActionArgs) => t.replace(importMarker,
`import ${args.duckName + capitalize(args.name)}Saga from "./${args.name}";
${importMarker}`);

const updateHandlerMarker = (t: string, args: CreateActionArgs) => t.replace(handlerMarker,
    `fork(${args.duckName + capitalize(args.name)}Saga),
        ${handlerMarker}`);

const updateSagasFile = (args: CreateActionArgs, dirPath: string) => {
    const filepath = path.join(dirPath, args.ducksPath ? "sagas" : "", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');


    fs.writeFileSync(
        filepath,
        updateHandlerMarker(updateImportMarker(template, args), args)
    )};

export default updateSagasFile

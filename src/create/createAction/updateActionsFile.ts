import path from "path";
import * as fs from "fs";

const exportMarker = "/* rtc-export */";

const updateActionsFile = (args: CreateActionArgs, dirPath: string) => {
    const filepath = path.join(dirPath, args.ducksPath ? "actions" : "", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        filepath,
        template.replace(exportMarker, `export * from "./${args.name}";\n${exportMarker}`)
    )};

export default updateActionsFile

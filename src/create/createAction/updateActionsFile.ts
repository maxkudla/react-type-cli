import path from "path";
import * as fs from "fs";

const exportMarker = "/* rtc-export */";

const updateActionsFile = (args: CreateActionArgs, duckPath: string) => {
    const filepath = path.join(duckPath, "actions", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "actions", "index.ts"),
        template.replace(exportMarker, `export * from "./${args.name}";\n${exportMarker}`)
    )};

export default updateActionsFile

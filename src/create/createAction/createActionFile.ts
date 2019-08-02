import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";
import createActionsFile from "../createDuck/createActionsFile";

const createActionFile = (args: CreateActionArgs, dirPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckAction.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createActionsFile(args, dirPath)
    }

    fs.writeFileSync(
        path.join(dirPath, args.ducksPath ? "actions" : "", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createActionFile

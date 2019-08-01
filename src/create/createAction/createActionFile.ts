import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createActionFile = (args: CreateActionArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckAction.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "actions", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createActionFile

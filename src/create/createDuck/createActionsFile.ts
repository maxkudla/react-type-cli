import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createActionsFile = (args: CreateDuckArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckActions.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "actions", "index.ts"),
        Handlebars.compile(template)(args)
    )};

export default createActionsFile

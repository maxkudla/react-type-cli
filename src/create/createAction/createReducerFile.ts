import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createReducerFile = (args: CreateActionArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckReducer.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "reducers", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createReducerFile

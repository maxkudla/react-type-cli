import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createReducersFile = (args: CreateDuckArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckReducers.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "reducers", "index.ts"),
        Handlebars.compile(template)(args)
    )
}

export default createReducersFile

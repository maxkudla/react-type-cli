import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createSelectorsFile = (args: CreateDuckArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckSelectors.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "selectors", "index.ts"),
        Handlebars.compile(template)(args)
    )
}

export default createSelectorsFile

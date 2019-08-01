import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";
import capitalize from "../../utils/capitalize";

const createTypesFile = (args: CreateDuckArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckStateType.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "types", `${capitalize(args.name)}State.d.ts`),
        Handlebars.compile(template)(args)
    )
}

export default createTypesFile

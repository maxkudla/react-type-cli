import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createSagaFile = (args: CreateActionArgs, duckPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckSaga.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(duckPath, "sagas", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createSagaFile

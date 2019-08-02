import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";

const createSagasFile = (args: CreateDuckArgs, dirPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckSagas.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(dirPath, args.ducksPath ? "sagas" : "", "index.ts"),
        Handlebars.compile(template)(args)
    )
}

export default createSagasFile



import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";
import createSagasFile from "../createDuck/createSagasFile";

const createSagaFile = (args: CreateActionArgs, dirPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckSaga.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createSagasFile(args, dirPath);
    }

    fs.writeFileSync(
        path.join(dirPath, args.ducksPath ? "sagas" : "", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createSagaFile

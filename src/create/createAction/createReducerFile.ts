import path from "path";
import * as fs from "fs";
import Handlebars from "handlebars";
import createReducersFile from "../createDuck/createReducersFile";

const createReducerFile = (args: CreateActionArgs, dirPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', "DuckReducer.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    console.log(dirPath);
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createReducersFile(args, dirPath)
    }

    fs.writeFileSync(
        path.join(dirPath, args.ducksPath ? "reducers" : "", `${args.name}.ts`),
        Handlebars.compile(template)(args)
    )};

export default createReducerFile

import * as path from "path";
import * as fs from "fs";

import capitalize from "../../utils/capitalize";
import createActionsFile from "./createActionsFile";
import createReducersFile from "./createReducersFile";
import createSagasFile from "./createSagasFile";
import createSelectorsFile from "./createSelectorsFile";
import createTypesFile from "./createTypesFile";

const createDuck = (args: CreateDuckArgs & {
    rootPath: string
}) => {
    const dirPath = args.ducksPath ? path.join(args.rootPath, args.ducksPath) : "";
    const duckPath = path.join(dirPath, args.name);

    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    if (fs.existsSync(duckPath)) {
        console.error(`${args.name} duck directory already exists`);
    } else {
        fs.mkdirSync(duckPath);

        fs.mkdirSync(path.join(duckPath, "actions"));
        createActionsFile(args, duckPath);

        fs.mkdirSync(path.join(duckPath, "reducers"));
        createReducersFile(args, duckPath);

        if(args.saga) {
            fs.mkdirSync(path.join(duckPath, "sagas"));
            createSagasFile(args, duckPath)
        }

        if(args.reselect) {
            fs.mkdirSync(path.join(duckPath, "selectors"));
            createSelectorsFile(args, duckPath)
        }

        fs.mkdirSync(path.join(duckPath, "types"));
        createTypesFile(args, duckPath);

    }
}

export default createDuck;

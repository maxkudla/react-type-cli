import * as path from "path";
import * as fs from "fs";

import createActionsFile from "./createActionsFile";
import createReducersFile from "./createReducersFile";
import createSagasFile from "./createSagasFile";
import createSelectorsFile from "./createSelectorsFile";
import createTypesFile from "./createTypesFile";

const createDuck = (args: CreateDuckArgs & Configuration & {
    rootPath: string
}) => {
    if (!args.ducksPath) {
        console.error("Provide ducksPath in the configuration pls")
    } else {
        const dirPath = path.join(args.rootPath, args.ducksPath);
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

            if(args.withSaga) {
                fs.mkdirSync(path.join(duckPath, "sagas"));
                createSagasFile(args, duckPath)
            }

            if(args.withReselect) {
                fs.mkdirSync(path.join(duckPath, "selectors"));
                createSelectorsFile(args, duckPath)
            }

            fs.mkdirSync(path.join(duckPath, "types"));
            createTypesFile(args, duckPath);

        }
    }

}

export default createDuck;

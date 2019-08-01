import * as path from "path";
import * as fs from "fs";
import createActionFile from "./createActionFile";
import createReducerFile from "./createReducerFile";
import updateActionsFile from "./updateActionsFile";
import updateReducersFile from "./updateReducersFile";
import createSagaFile from "./createSagaFile";
import updateSagasFile from "./updateSagasFile";

const createAction = (args: CreateActionArgs & {
    rootPath: string
}) => {
    const duckPath = args.ducksPath ? path.join(args.rootPath, args.ducksPath, args.duckName) : "";

    if (!fs.existsSync(duckPath)) {
        console.error(`${args.duckName} duck directory is not exists`)
    } else if (fs.existsSync(path.join(duckPath, "actions", `${args.name}.ts`))) {
        console.error(`${args.name} action already exists`)
    } else {
        createActionFile(args, duckPath);
        updateActionsFile(args, duckPath);

        if (!args.noReducer) {
            createReducerFile(args, duckPath)
            updateReducersFile(args, duckPath);
        }

        if (fs.existsSync(path.join(duckPath, "sagas", "index.ts"))) {
            createSagaFile(args, duckPath)
            updateSagasFile(args, duckPath);
        }

    }

}

export default createAction;

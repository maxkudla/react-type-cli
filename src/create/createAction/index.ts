import * as path from "path";
import createActionFile from "./createActionFile";
import createReducerFile from "./createReducerFile";
import updateActionsFile from "./updateActionsFile";
import updateReducersFile from "./updateReducersFile";
import createSagaFile from "./createSagaFile";
import updateSagasFile from "./updateSagasFile";

const createAction = (args: CreateActionArgs & Configuration &{
    rootPath: string
}) => {
    const dirPath = path.join(args.rootPath, args.ducksPath || "");

    const actionsPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.actionsPath || "");
    createActionFile(args, actionsPath);
    updateActionsFile(args, actionsPath);

    if (args.reducer) {
        const reducersPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.reducersPath || "");
        createReducerFile(args, reducersPath);
        updateReducersFile(args, reducersPath);
    }

    if (args.withSaga && args.saga) {
        const sagasPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.sagasPath || "");
        createSagaFile(args, sagasPath)
        updateSagasFile(args, sagasPath);
    }

}

export default createAction;

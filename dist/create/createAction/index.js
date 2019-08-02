"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const createActionFile_1 = __importDefault(require("./createActionFile"));
const createReducerFile_1 = __importDefault(require("./createReducerFile"));
const updateActionsFile_1 = __importDefault(require("./updateActionsFile"));
const updateReducersFile_1 = __importDefault(require("./updateReducersFile"));
const createSagaFile_1 = __importDefault(require("./createSagaFile"));
const updateSagasFile_1 = __importDefault(require("./updateSagasFile"));
const createAction = (args) => {
    const dirPath = path.join(args.rootPath, args.ducksPath || "");
    const actionsPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.actionsPath || "");
    createActionFile_1.default(args, actionsPath);
    updateActionsFile_1.default(args, actionsPath);
    if (args.reducer) {
        const reducersPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.reducersPath || "");
        createReducerFile_1.default(args, reducersPath);
        updateReducersFile_1.default(args, reducersPath);
    }
    if (args.withSaga && args.saga) {
        const sagasPath = path.join(dirPath, args.ducksPath ? `${args.duckName}` : args.sagasPath || "");
        createSagaFile_1.default(args, sagasPath);
        updateSagasFile_1.default(args, sagasPath);
    }
};
exports.default = createAction;

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
var path = __importStar(require("path"));
var fs = __importStar(require("fs"));
var createActionFile_1 = __importDefault(require("./createActionFile"));
var createReducerFile_1 = __importDefault(require("./createReducerFile"));
var updateActionsFile_1 = __importDefault(require("./updateActionsFile"));
var updateReducersFile_1 = __importDefault(require("./updateReducersFile"));
var createSagaFile_1 = __importDefault(require("./createSagaFile"));
var updateSagasFile_1 = __importDefault(require("./updateSagasFile"));
var createAction = function (args) {
    var duckPath = args.ducksPath ? path.join(args.rootPath, args.ducksPath, args.duckName) : "";
    if (!fs.existsSync(duckPath)) {
        console.error(args.duckName + " duck directory is not exists");
    }
    else if (fs.existsSync(path.join(duckPath, "actions", args.name + ".ts"))) {
        console.error(args.name + " action already exists");
    }
    else {
        createActionFile_1.default(args, duckPath);
        updateActionsFile_1.default(args, duckPath);
        if (!args.noReducer) {
            createReducerFile_1.default(args, duckPath);
            updateReducersFile_1.default(args, duckPath);
        }
        if (fs.existsSync(path.join(duckPath, "sagas", "index.ts"))) {
            createSagaFile_1.default(args, duckPath);
            updateSagasFile_1.default(args, duckPath);
        }
    }
};
exports.default = createAction;

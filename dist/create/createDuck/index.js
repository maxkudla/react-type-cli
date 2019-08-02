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
const fs = __importStar(require("fs"));
const createActionsFile_1 = __importDefault(require("./createActionsFile"));
const createReducersFile_1 = __importDefault(require("./createReducersFile"));
const createSagasFile_1 = __importDefault(require("./createSagasFile"));
const createSelectorsFile_1 = __importDefault(require("./createSelectorsFile"));
const createTypesFile_1 = __importDefault(require("./createTypesFile"));
const createDuck = (args) => {
    if (!args.ducksPath) {
        console.error("Provide ducksPath in the configuration pls");
    }
    else {
        const dirPath = path.join(args.rootPath, args.ducksPath);
        const duckPath = path.join(dirPath, args.name);
        if (dirPath !== "" && !fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }
        if (fs.existsSync(duckPath)) {
            console.error(`${args.name} duck directory already exists`);
        }
        else {
            fs.mkdirSync(duckPath);
            fs.mkdirSync(path.join(duckPath, "actions"));
            createActionsFile_1.default(args, duckPath);
            fs.mkdirSync(path.join(duckPath, "reducers"));
            createReducersFile_1.default(args, duckPath);
            if (args.withSaga) {
                fs.mkdirSync(path.join(duckPath, "sagas"));
                createSagasFile_1.default(args, duckPath);
            }
            if (args.withReselect) {
                fs.mkdirSync(path.join(duckPath, "selectors"));
                createSelectorsFile_1.default(args, duckPath);
            }
            fs.mkdirSync(path.join(duckPath, "types"));
            createTypesFile_1.default(args, duckPath);
        }
    }
};
exports.default = createDuck;

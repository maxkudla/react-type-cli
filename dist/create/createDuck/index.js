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
var createActionsFile_1 = __importDefault(require("./createActionsFile"));
var createReducersFile_1 = __importDefault(require("./createReducersFile"));
var createSagasFile_1 = __importDefault(require("./createSagasFile"));
var createSelectorsFile_1 = __importDefault(require("./createSelectorsFile"));
var createTypesFile_1 = __importDefault(require("./createTypesFile"));
var createDuck = function (args) {
    var dirPath = args.ducksPath ? path.join(args.rootPath, args.ducksPath) : "";
    var duckPath = path.join(dirPath, args.name);
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    if (fs.existsSync(duckPath)) {
        console.error(args.name + " duck directory already exists");
    }
    else {
        fs.mkdirSync(duckPath);
        fs.mkdirSync(path.join(duckPath, "actions"));
        createActionsFile_1.default(args, duckPath);
        fs.mkdirSync(path.join(duckPath, "reducers"));
        createReducersFile_1.default(args, duckPath);
        if (args.saga) {
            fs.mkdirSync(path.join(duckPath, "sagas"));
            createSagasFile_1.default(args, duckPath);
        }
        if (args.reselect) {
            fs.mkdirSync(path.join(duckPath, "selectors"));
            createSelectorsFile_1.default(args, duckPath);
        }
        fs.mkdirSync(path.join(duckPath, "types"));
        createTypesFile_1.default(args, duckPath);
    }
};
exports.default = createDuck;

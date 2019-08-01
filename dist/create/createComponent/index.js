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
var fs = __importStar(require("fs"));
var path = __importStar(require("path"));
var capitalize_1 = __importDefault(require("../../utils/capitalize"));
var createComponentFile_1 = __importDefault(require("./createComponentFile"));
var createTypesFile_1 = __importDefault(require("./createTypesFile"));
var createIndexFile_1 = __importDefault(require("./createIndexFile"));
var createComponent = function (args) {
    var dirPath = args.global && args.globalComponentPath ? path.join(args.rootPath, args.globalComponentPath) : "";
    var componentPath = path.join(dirPath, capitalize_1.default(args.name));
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    if (fs.existsSync(componentPath)) {
        console.error(args.name + " component directory already exists");
    }
    else {
        fs.mkdirSync(componentPath);
        createComponentFile_1.default(args, componentPath);
        createTypesFile_1.default(args, componentPath);
        createIndexFile_1.default(args, componentPath);
    }
};
exports.default = createComponent;

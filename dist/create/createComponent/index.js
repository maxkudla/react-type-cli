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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const capitalize_1 = __importDefault(require("../../utils/capitalize"));
const createComponentFile_1 = __importDefault(require("./createComponentFile"));
const createTypesFile_1 = __importDefault(require("./createTypesFile"));
const createIndexFile_1 = __importDefault(require("./createIndexFile"));
const createStoriesFile_1 = __importDefault(require("./createStoriesFile"));
const createStylesFile_1 = __importDefault(require("./createStylesFile"));
const createComponent = (args) => {
    const dirPath = args.global && args.componentsPath ? path.join(args.rootPath, args.componentsPath) : "";
    const componentPath = path.join(dirPath, capitalize_1.default(args.name));
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    if (fs.existsSync(componentPath)) {
        console.error(`${args.name} component directory already exists`);
    }
    else {
        fs.mkdirSync(componentPath);
        createComponentFile_1.default(args, componentPath);
        createTypesFile_1.default(args, componentPath);
        createIndexFile_1.default(args, componentPath);
        if (args.stories) {
            createStoriesFile_1.default(args, componentPath);
        }
        if (args.styled) {
            createStylesFile_1.default(args, componentPath);
        }
    }
};
exports.default = createComponent;

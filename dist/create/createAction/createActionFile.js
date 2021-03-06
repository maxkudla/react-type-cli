"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs = __importStar(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const createActionsFile_1 = __importDefault(require("../createDuck/createActionsFile"));
const createActionFile = (args, dirPath) => {
    const filepath = path_1.default.join(__dirname, "../..", 'templates', "DuckAction.hbs");
    const template = fs.readFileSync(filepath, 'utf8');
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createActionsFile_1.default(args, dirPath);
    }
    fs.writeFileSync(path_1.default.join(dirPath, args.ducksPath ? "actions" : "", `${args.name}.ts`), handlebars_1.default.compile(template)(args));
};
exports.default = createActionFile;

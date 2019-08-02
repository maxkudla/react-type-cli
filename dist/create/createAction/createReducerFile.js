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
const createReducersFile_1 = __importDefault(require("../createDuck/createReducersFile"));
const createReducerFile = (args, dirPath) => {
    const filepath = path_1.default.join(__dirname, "../..", 'templates', "DuckReducer.hbs");
    const template = fs.readFileSync(filepath, 'utf8');
    console.log(dirPath);
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createReducersFile_1.default(args, dirPath);
    }
    fs.writeFileSync(path_1.default.join(dirPath, args.ducksPath ? "reducers" : "", `${args.name}.ts`), handlebars_1.default.compile(template)(args));
};
exports.default = createReducerFile;

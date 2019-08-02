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
const createSagasFile_1 = __importDefault(require("../createDuck/createSagasFile"));
const createSagaFile = (args, dirPath) => {
    const filepath = path_1.default.join(__dirname, "../..", 'templates', "DuckSaga.hbs");
    const template = fs.readFileSync(filepath, 'utf8');
    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        createSagasFile_1.default(args, dirPath);
    }
    fs.writeFileSync(path_1.default.join(dirPath, args.ducksPath ? "sagas" : "", `${args.name}.ts`), handlebars_1.default.compile(template)(args));
};
exports.default = createSagaFile;

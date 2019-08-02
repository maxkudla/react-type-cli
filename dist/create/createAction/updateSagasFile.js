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
const capitalize_1 = __importDefault(require("../../utils/capitalize"));
const importMarker = "/* rtc-import */";
const handlerMarker = "/* rtc-handler */";
const updateImportMarker = (t, args) => t.replace(importMarker, `import ${args.duckName + capitalize_1.default(args.name)}Saga from "./${args.name}";
${importMarker}`);
const updateHandlerMarker = (t, args) => t.replace(handlerMarker, `fork(${args.duckName + capitalize_1.default(args.name)}Saga),
        ${handlerMarker}`);
const updateSagasFile = (args, dirPath) => {
    const filepath = path_1.default.join(dirPath, args.ducksPath ? "sagas" : "", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(filepath, updateHandlerMarker(updateImportMarker(template, args), args));
};
exports.default = updateSagasFile;

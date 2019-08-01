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
var path_1 = __importDefault(require("path"));
var fs = __importStar(require("fs"));
var capitalize_1 = __importDefault(require("../../utils/capitalize"));
var importMarker = "/* rtc-import */";
var handlerMarker = "/* rtc-handler */";
var updateImportMarker = function (t, args) { return t.replace(importMarker, "import " + (args.duckName + capitalize_1.default(args.name)) + "Saga from \"./" + args.name + "\";\n" + importMarker); };
var updateHandlerMarker = function (t, args) { return t.replace(handlerMarker, "fork(" + (args.duckName + capitalize_1.default(args.name)) + "Saga),\n        " + handlerMarker); };
var updateSagasFile = function (args, duckPath) {
    var filepath = path_1.default.join(duckPath, "sagas", "index.ts");
    var template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(path_1.default.join(duckPath, "sagas", "index.ts"), updateHandlerMarker(updateImportMarker(template, args), args));
};
exports.default = updateSagasFile;

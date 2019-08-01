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
var exportMarker = "/* rtc-export */";
var updateActionsFile = function (args, duckPath) {
    var filepath = path_1.default.join(duckPath, "actions", "index.ts");
    var template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(path_1.default.join(duckPath, "actions", "index.ts"), template.replace(exportMarker, "export * from \"./" + args.name + "\";\n" + exportMarker));
};
exports.default = updateActionsFile;

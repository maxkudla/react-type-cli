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
const exportMarker = "/* rtc-export */";
const updateActionsFile = (args, dirPath) => {
    const filepath = path_1.default.join(dirPath, args.ducksPath ? "actions" : "", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(filepath, template.replace(exportMarker, `export * from "./${args.name}";\n${exportMarker}`));
};
exports.default = updateActionsFile;

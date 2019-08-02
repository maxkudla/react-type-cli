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
const lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
const capitalize_1 = __importDefault(require("../../utils/capitalize"));
const importsMarker = "/* rtc-imports */";
const handlersMarker = "/* rtc-handlers */";
const updateImportMarker = (t, args) => t.replace(importsMarker, `import { ${args.name}Start, ${args.name}Success, ${args.name}Fail } from "./${args.name}";

import {
    ${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_START,
    ${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_SUCCESS,
    ${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_FAIL
} from "../actions/${args.name}";

${importsMarker}`);
const updateHandlerMarker = (t, args) => t.replace(handlersMarker, `
    [${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_START]: ${args.name}Start,
    [${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_SUCCESS]: ${args.name}Success,
    [${lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase()}_FAIL]: ${args.name}Fail,
    ${handlersMarker}`);
const updateReducersFile = (args, dirPath) => {
    const filepath = path_1.default.join(dirPath, args.ducksPath ? "reducers" : "", "index.ts");
    const template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(filepath, updateHandlerMarker(updateImportMarker(template, args), args));
};
exports.default = updateReducersFile;

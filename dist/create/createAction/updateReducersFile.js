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
var lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
var capitalize_1 = __importDefault(require("../../utils/capitalize"));
var importsMarker = "/* rtc-imports */";
var handlersMarker = "/* rtc-handlers */";
var updateImportMarker = function (t, args) { return t.replace(importsMarker, "import { " + args.name + "Start, " + args.name + "Success, " + args.name + "Fail } from \"./" + args.name + "\";\n\nimport {\n    " + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_START,\n    " + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_SUCCESS,\n    " + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_FAIL\n} from \"../actions/" + args.name + "\";\n\n" + importsMarker); };
var updateHandlerMarker = function (t, args) { return t.replace(handlersMarker, "\n    [" + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_START]: " + args.name + "Start,\n    [" + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_SUCCESS]: " + args.name + "Success,\n    [" + lodash_snakecase_1.default(args.duckName + capitalize_1.default(args.name)).toUpperCase() + "_FAIL]: " + args.name + "Fail,\n    " + handlersMarker); };
var updateReducersFile = function (args, duckPath) {
    var filepath = path_1.default.join(duckPath, "reducers", "index.ts");
    var template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(path_1.default.join(duckPath, "reducers", "index.ts"), updateHandlerMarker(updateImportMarker(template, args), args));
};
exports.default = updateReducersFile;

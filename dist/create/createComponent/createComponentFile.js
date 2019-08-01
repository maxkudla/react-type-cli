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
var handlebars_1 = __importDefault(require("handlebars"));
var fs = __importStar(require("fs"));
var path_1 = __importDefault(require("path"));
var capitalize_1 = __importDefault(require("../../utils/capitalize"));
exports.default = (function (args, componentPath) {
    var filepath = path_1.default.join(__dirname, "../..", 'templates', args.functional ? 'FunctionComponent.hbs' : 'ClassComponent.hbs');
    var template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(path_1.default.join(componentPath, capitalize_1.default(args.name) + ".tsx"), handlebars_1.default.compile(template)({
        name: args.name
    }));
});

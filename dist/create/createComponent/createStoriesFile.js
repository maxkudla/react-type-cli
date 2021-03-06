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
const handlebars_1 = __importDefault(require("handlebars"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
exports.default = (args, componentPath) => {
    const filepath = path_1.default.join(__dirname, "../..", "templates", "ComponentStories.hbs");
    const template = fs.readFileSync(filepath, 'utf8');
    fs.writeFileSync(path_1.default.join(componentPath, `stories.tsx`), handlebars_1.default.compile(template)(args));
};

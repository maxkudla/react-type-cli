"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlebars_1 = __importDefault(require("handlebars"));
const lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
const capitalize_1 = __importDefault(require("./utils/capitalize"));
handlebars_1.default.registerHelper('JSONstringify', (obj, indent) => {
    if (isNaN(indent)) {
        indent = 0;
    }
    return JSON.stringify(obj, null, indent).replace(/\"/g, "");
});
handlebars_1.default.registerHelper('Capitalize', (str) => {
    if (typeof str !== "string")
        return '';
    return capitalize_1.default(str);
});
handlebars_1.default.registerHelper('SnakeCase', (str) => {
    if (typeof str !== "string")
        return '';
    return lodash_snakecase_1.default(str);
});
handlebars_1.default.registerHelper('Uppercase', (str) => {
    if (typeof str !== "string")
        return '';
    return str.toUpperCase();
});

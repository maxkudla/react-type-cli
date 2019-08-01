import Handlebars from "handlebars";
import snakeCase from "lodash.snakecase"
import capitalize from "./utils/capitalize";

Handlebars.registerHelper('JSONstringify', (obj, indent) => {
    if (isNaN(indent)) {
        indent = 0;
    }
    return JSON.stringify(obj, null, indent).replace(/\"/g, "");
});


Handlebars.registerHelper('Capitalize', (str) => {
    if (typeof str !== "string") return '';
    return capitalize(str)
});


Handlebars.registerHelper('SnakeCase', (str) => {
    if (typeof str !== "string") return '';
    return snakeCase(str)
});

Handlebars.registerHelper('Uppercase', (str) => {
    if (typeof str !== "string") return '';
    return str.toUpperCase();
});

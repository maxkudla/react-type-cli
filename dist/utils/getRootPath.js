"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRootPath = function (rcfile) {
    if (rcfile) {
        var tmp = rcfile.filePath.split("/");
        tmp.pop();
        return tmp.join("/");
    }
    else {
        return "";
    }
};
exports.default = getRootPath;

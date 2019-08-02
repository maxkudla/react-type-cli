"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getRootPath = (rcfile) => {
    if (rcfile) {
        const tmp = rcfile.filePath.split("/");
        tmp.pop();
        return tmp.join("/");
    }
    else {
        return "";
    }
};
exports.default = getRootPath;

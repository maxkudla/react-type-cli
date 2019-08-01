import * as fs from "fs";
import * as path from "path";

import capitalize from "../../utils/capitalize";

import createComponentFile from "./createComponentFile";
import createTypesFile from "./createTypesFile";
import createIndexFile from "./createIndexFile";

const createComponent = (args: GenerateComponentArgs & {
    rootPath: string
}) => {
    const dirPath = args.global && args.globalComponentPath ? path.join(args.rootPath, args.globalComponentPath) : "";

    const componentPath = path.join(dirPath, capitalize(args.name));

    if (dirPath !== "" && !fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }

    if (fs.existsSync(componentPath)) {
        console.error(`${args.name} component directory already exists`);
    } else {
        fs.mkdirSync(componentPath);

        createComponentFile(args, componentPath);
        createTypesFile(args, componentPath);
        createIndexFile(args, componentPath);
    }
}

export default createComponent;

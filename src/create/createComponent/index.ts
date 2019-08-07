import * as fs from "fs";
import * as path from "path";

import capitalize from "../../utils/capitalize";

import createComponentFile from "./createComponentFile";
import createTypesFile from "./createTypesFile";
import createIndexFile from "./createIndexFile";
import createStoriesFile from "./createStoriesFile";

const createComponent = (args: GenerateComponentArgs & Configuration & {
    rootPath: string
}) => {
    const dirPath = args.global && args.componentsPath ? path.join(args.rootPath, args.componentsPath) : "";

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

        if (args.stories) {
            createStoriesFile(args, componentPath);
        }
    }
}

export default createComponent;

import rcfile from "rc-config-loader";

import createComponent from "../create/createComponent";
import defaultConfig from "./../defaultConfig";
import getRootPath from "../utils/getRootPath";


async function generateComponent(componentName: string, cmd: GenerateComponentCommand) {
    const {functional, memo, connect, global} = cmd;

    // @ts-ignore
    const config = Object.assign({}, defaultConfig);

    // @ts-ignore
    const rc = rcfile("rtc");

    const rootPath = getRootPath(rc);

    // @ts-ignore
    if (rc) { Object.assign(config, rc.config) }

    const args = {...config, rootPath, global, functional, memo, connect, name: componentName};

    await createComponent(args)
}


export default generateComponent;

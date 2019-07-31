import rcfile from "rc-config-loader";

import createComponent from "../create/createComponent";
import defaultConfig from "./../defaultConfig";
import getRootPath from "../utils/getRootPath";


async function generateComponent(componentName: string, cmd: CommandDto) {
    const functional = cmd.functional ? true : false;
    const memo = cmd.memo ? true : false;
    const withConnect = cmd.withConnect ? true : false;
    const global = cmd.global ? true : false;

    // @ts-ignore
    const config = Object.assign({}, defaultConfig);

    // @ts-ignore
    const rc = rcfile("rtc");

    const rootPath = getRootPath(rc);

    // @ts-ignore
    if (rc) { Object.assign(config, rc.config) }

    const args = {...config, rootPath, global, functional, memo, withConnect, name: componentName};

    await createComponent(args)
}


export default generateComponent;

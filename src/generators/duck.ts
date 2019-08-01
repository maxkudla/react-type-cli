import rcfile from "rc-config-loader";

import getRootPath from "../utils/getRootPath";
import createDuck from "../create/createDuck";
import defaultConfig from "../defaultConfig";


async function generateDuck(duckName: string, cmd: CreateDuckCommand) {
    const saga = cmd.saga ? true : false;
    const reselect = cmd.reselect ? true : false;

    // @ts-ignore
    const config = Object.assign({}, defaultConfig);

    // @ts-ignore
    const rc = rcfile("rtc");

    const rootPath = getRootPath(rc);

    // @ts-ignore
    if (rc) { Object.assign(config, rc.config) }

    const args = {...config, saga, reselect, rootPath, name: duckName};

    await createDuck(args)
}


export default generateDuck;

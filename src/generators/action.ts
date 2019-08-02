import rcfile from "rc-config-loader";

import defaultConfig from "../defaultConfig";
import getRootPath from "../utils/getRootPath";
import createAction from "../create/createAction";

async function generateAction (actionName: string, duckName: string, cmd: CreateActionCommand) {
    const {payload, error, reducer, saga} = cmd;

    // @ts-ignore
    const config = Object.assign({}, defaultConfig);

    // @ts-ignore
    const rc = rcfile("rtc");

    const rootPath = getRootPath(rc);

    // @ts-ignore
    if (rc) { Object.assign(config, rc.config) }

    const args = {...config, rootPath, duckName, payload, error, reducer, saga, name: actionName};

    await createAction(args)
}

export default generateAction

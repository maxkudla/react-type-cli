import rcfile from "rc-config-loader";

import defaultConfig from "../defaultConfig";
import getRootPath from "../utils/getRootPath";
import createAction from "../create/createAction";

async function generateAction (duckName: string, actionName: string, cmd: CreateActionCommand) {
    const payload = cmd.payload ? true : false;
    const error = cmd.error ? true : false;
    const noReducer = cmd.noReducer ? true : false;

    // @ts-ignore
    const config = Object.assign({}, defaultConfig);

    // @ts-ignore
    const rc = rcfile("rtc");

    const rootPath = getRootPath(rc);

    // @ts-ignore
    if (rc) { Object.assign(config, rc.config) }

    const args = {...config,rootPath, duckName, payload, error, noReducer,  name: actionName};

    await createAction(args)
}

export default generateAction

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rc_config_loader_1 = __importDefault(require("rc-config-loader"));
const createComponent_1 = __importDefault(require("../create/createComponent"));
const defaultConfig_1 = __importDefault(require("./../defaultConfig"));
const getRootPath_1 = __importDefault(require("../utils/getRootPath"));
function generateComponent(componentName, cmd) {
    return __awaiter(this, void 0, void 0, function* () {
        const { functional, memo, connect, global } = cmd;
        // @ts-ignore
        const config = Object.assign({}, defaultConfig_1.default);
        // @ts-ignore
        const rc = rc_config_loader_1.default("rtc");
        const rootPath = getRootPath_1.default(rc);
        // @ts-ignore
        if (rc) {
            Object.assign(config, rc.config);
        }
        const args = Object.assign({}, config, { rootPath, global, functional, memo, connect, name: componentName });
        yield createComponent_1.default(args);
    });
}
exports.default = generateComponent;

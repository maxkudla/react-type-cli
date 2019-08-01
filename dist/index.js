#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
require("./hbsHelpers");
var component_1 = __importDefault(require("./generators/component"));
var duck_1 = __importDefault(require("./generators/duck"));
var action_1 = __importDefault(require("./generators/action"));
commander_1.default
    .command('gc <component>')
    .option('-g, --global', 'Create global component')
    .option('-f, --functional', 'Create functional component')
    .option('-c, --withConnect', 'Connect with redux store')
    .option('-m, --memo', 'Create memoized component')
    .action(component_1.default);
commander_1.default
    .command('gd <duck>')
    .option('-r, --reselect', 'Create selectors')
    .option('-s, --saga', 'Create sagas')
    .action(duck_1.default);
commander_1.default
    .command('ga <duck> <action>')
    .option('-nor, --no-reducer', 'Action without reducer')
    .option('-p, --payload', 'Action handler with payload')
    .option('-e, --error', 'Action handler with error')
    .action(action_1.default);
commander_1.default.parse(process.argv);

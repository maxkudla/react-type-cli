#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = __importDefault(require("commander"));
require("./hbsHelpers");
const component_1 = __importDefault(require("./generators/component"));
const duck_1 = __importDefault(require("./generators/duck"));
const action_1 = __importDefault(require("./generators/action"));
commander_1.default
    .command('gc <component>')
    .option('-g, --global', 'Create global component')
    .option('-f, --functional', 'Create functional component')
    .option('-c, --connect', 'Connect with redux store')
    .option('-m, --memo', 'Create memoized component')
    .action(component_1.default);
commander_1.default
    .command('gd <duck>')
    .action(duck_1.default);
commander_1.default
    .command('ga <action> [duck]')
    .option('--no-reducer', 'Action without reducer')
    .option('--no-saga', 'Action without saga')
    .option('-p, --payload', 'Action handler with payload')
    .option('-e, --error', 'Action handler with error')
    .action(action_1.default);
commander_1.default.parse(process.argv);

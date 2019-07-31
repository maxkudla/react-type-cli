#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var component_1 = __importDefault(require("./generators/component"));
commander_1.default
    .command('gc <component>')
    .option('-g, --global', 'Create global component')
    .option('-f, --functional', 'Create functional component')
    .option('-c, --withConnect', 'Connect with redux store')
    .option('-m, --memo', 'Create memoized component')
    .action(component_1.default);
commander_1.default.parse(process.argv);

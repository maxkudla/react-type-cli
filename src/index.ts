#!/usr/bin/env node
import program from "commander";

import "./hbsHelpers";

import generateComponent from "./generators/component";
import generateDuck from "./generators/duck";
import generateAction from "./generators/action";

program
    .command('gc <component>')
    .option('-g, --global', 'Create global component')
    .option('-f, --functional', 'Create functional component')
    .option('-c, --withConnect', 'Connect with redux store')
    .option('-m, --memo', 'Create memoized component')
    .action(generateComponent);

program
    .command('gd <duck>')
    .option('-r, --reselect', 'Create selectors')
    .option('-s, --saga', 'Create sagas')
    .action(generateDuck);

program
    .command('ga <duck> <action>')
    .option('-nor, --no-reducer', 'Action without reducer')
    .option('-p, --payload', 'Action handler with payload')
    .option('-e, --error', 'Action handler with error')
    .action(generateAction);

program.parse(process.argv);

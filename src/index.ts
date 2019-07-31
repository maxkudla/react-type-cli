#!/usr/bin/env node
import program from "commander";

import generateComponent from "./generators/component";

program
    .command('gc <component>')
    .option('-g, --global', 'Create global component')
    .option('-f, --functional', 'Create functional component')
    .option('-c, --withConnect', 'Connect with redux store')
    .option('-m, --memo', 'Create memoized component')
    .action(generateComponent);

program.parse(process.argv);

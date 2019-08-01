import Handlebars from "handlebars";
import * as fs from "fs";
import path from "path";

import capitalize from "../../utils/capitalize";

export default (args: GenerateComponentArgs, componentPath: string) => {
    const filepath = path.join(__dirname, "../..", 'templates', args.functional ? 'FunctionComponent.hbs' : 'ClassComponent.hbs');
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(componentPath, `${capitalize(args.name)}.tsx`),
        Handlebars.compile(template)({
            name: args.name
        })
    )
}

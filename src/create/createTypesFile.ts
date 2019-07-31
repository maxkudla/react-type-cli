import Handlebars from "handlebars";
import * as fs from "fs";
import path from "path";

export default (args: Args, componentPath: string) => {
    const filepath = path.join(__dirname, "..", "templates", "ComponentTypes.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(componentPath, `types.d.ts`),
        Handlebars.compile(template)(args)
    )
}

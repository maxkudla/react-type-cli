import Handlebars from "handlebars";
import * as fs from "fs";
import path from "path";

export default (args: GenerateComponentArgs, componentPath: string) => {
    const filepath = path.join(__dirname, "../..", "templates", "ComponentStyles.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(componentPath, `styles.ts`),
        Handlebars.compile(template)(args)
    )
}

import Handlebars from "handlebars";
import * as fs from "fs";
import path from "path";

export default (args: GenerateComponentArgs, componentPath: string) => {
    const filepath = path.join(__dirname, "../..", "templates", "ComponentStories.hbs");
    const template = fs.readFileSync(filepath, 'utf8');

    fs.writeFileSync(
        path.join(componentPath, `stories.tsx`),
        Handlebars.compile(template)(args)
    )
}

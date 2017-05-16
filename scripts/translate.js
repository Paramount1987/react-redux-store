// file: .scripts/translate.js
import * as fs from 'fs';
import {sync as globSync} from 'glob';
import {sync as mkdirpSync} from 'mkdirp';
import Translator from "./lib/translator";
const MESSAGES_PATTERN_EN = "./src/locales/en.json";
const MESSAGES_PATTERN_RU = "./src/locales/ru.json";
const MESSAGE_PATTERN = [
    {
        pattern: MESSAGES_PATTERN_EN,
        lang: 'en'
    },
    {
        pattern: MESSAGES_PATTERN_RU,
        lang: 'ru'
    }
];
const LANG_DIR = "./lib/i18n/lang/";
mkdirpSync(LANG_DIR);

MESSAGE_PATTERN.forEach((item)=>{
    // Aggregates the default messages that were extracted from the example app’s
// React components via the React Intl Babel plugin. An error will be thrown if
// there are messages in different components that use the same `id`. The result
// is a flat collection of `id: message` pairs for the app’s default locale.
    let defaultMessages = globSync(item.pattern)
        .map((filename) => fs.readFileSync(filename, "utf8"))
        .map((file) => JSON.parse(file))
        .reduce((collection, descriptors) => {
            descriptors.forEach(({id, defaultMessage}) => {
                if (collection.hasOwnProperty(id)) {
                    throw new Error(`Duplicate message id: ${id}`);
                }
                collection[id] = defaultMessage;
            });
            return collection;
        }, {});

    fs.writeFileSync(LANG_DIR + item.lang + ".json", JSON.stringify(defaultMessages, null, 2));
});
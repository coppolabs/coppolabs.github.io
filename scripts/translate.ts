import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import * as deepl from "deepl-node";
import dotenv from "dotenv";

dotenv.config();

// Fix for __dirname in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authKey = process.env.DEEPL_API_KEY || "3fff0ab8-bb95-413e-bc45-d43562f264af:fx";
if (!authKey) {
    console.error("Error: DEEPL_API_KEY is missing in your .env file.");
    process.exit(1);
}

const translator = new deepl.Translator(authKey);

const enPath = path.join(__dirname, "../src/locales/en.json");
const dePath = path.join(__dirname, "../src/locales/de.json");

const enData = JSON.parse(fs.readFileSync(enPath, "utf-8"));
const deData = fs.existsSync(dePath) ? JSON.parse(fs.readFileSync(dePath, "utf-8")) : {};

async function translateObject(source: any, target: any): Promise<any> {
    const result: any = { ...target };

    for (const key of Object.keys(source)) {
        if (typeof source[key] === "object" && source[key] !== null) {
            result[key] = await translateObject(source[key], target[key] || {});
        } else {
            if (!target[key]) {
                console.log(`Translating key: "${key}" -> "${source[key]}"`);
                const translation = await translator.translateText(source[key], "en", "de");
                result[key] = translation.text;
            }
        }
    }
    return result;
}

async function run() {
    console.log("Syncing German translations...");
    const updatedDe = await translateObject(enData, deData);
    fs.writeFileSync(dePath, JSON.stringify(updatedDe, null, 2), "utf-8");
    console.log("Translation complete! src/locales/de.json updated.");
}

run().catch(console.error);
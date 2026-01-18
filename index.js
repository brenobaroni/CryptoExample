import { encrypt, decrypt } from "./crypto.js";
import { config } from "dotenv";

config();
const secret = "meuToken"; //text to encript
const passCode = process.env.PASS_CODE;

if (!passCode)
  throw Error("Configure your .env file", {
    cause: "Miss Configuration Environment",
  });

console.log("env: ", passCode);

const encrypted = await encrypt(secret, passCode, "user@email.com");
console.log(encrypted);

const decrypted = await decrypt(encrypted, passCode);
console.log(decrypted);

import crypto from "crypto";

const ALGORITHM = "aes-256-cbc";

export function encrypt(
  text: string,
  key: crypto.CipherKey,
  iv: crypto.BinaryLike
): string | Error {
  try {
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted;
  } catch (error) {
    return new Error("Encryption failed");
  }
}

export function decrypt(
  encryptedText: string,
  key: crypto.CipherKey,
  iv: crypto.BinaryLike
): string | Error {
  try {
    const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  } catch (error) {
    throw new Error("Decryption failed");
  }
}

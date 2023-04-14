import crypto from "crypto";
import { decrypt, encrypt } from "./aes";

describe("AES-256-CBC Encryption/Decryption", () => {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const text = "This is a secret message!";

  test("encrypts the text correctly", () => {
    const encrypted = encrypt(text, key, iv);
    expect(encrypted).not.toBe(text);
    expect(encrypted).toBeTruthy();
  });

  test("decrypts the encrypted text back to the original text", () => {
    const encrypted = encrypt(text, key, iv) as string;
    const decrypted = decrypt(encrypted, key, iv);
    expect(decrypted).toBe(text);
  });

  test("fails encryption with incorrect key or iv", () => {
    const wrongKey = crypto.randomBytes(16); // Key length should be 32 bytes for aes-256-cbc
    const wrongIv = crypto.randomBytes(8); // Initialization vector length should be 16 bytes for aes-256-cbc
    expect(encrypt(text, wrongKey, iv)).toBeInstanceOf(Error);
    expect(encrypt(text, key, wrongIv)).toBeInstanceOf(Error);
  });

  test("fails decryption with incorrect key or iv", () => {
    const encrypted = encrypt(text, key, iv) as string;
    const wrongKey = crypto.randomBytes(32);
    const wrongIv = crypto.randomBytes(16);
    expect(() => decrypt(encrypted, wrongKey, iv)).toThrow();
    expect(() => decrypt(encrypted, key, wrongIv)).not.toEqual(encrypted);
  });
});

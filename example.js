/*
Filename: complex_code

This code is an implementation of a multi-level encryption algorithm. It takes as input a secret message and performs a series of complex operations to encode and decode the message using encryption keys and special characters. The code is designed to ensure maximum security and confidentiality of the data.

*/

// Encryption keys
const privateKey = "Ae81$H";
const specialKey1 = "x2#k!a";
const specialKey2 = "!p3T#u";

// Special characters used in encryption
const specialChars = {
  "A": "@",
  "B": "#",
  "C": "$",
  "D": "%",
  // ... more special characters
};

// Helper function to apply character substitution based on special characters
function substituteChars(input) {
  let output = "";
  for (let i = 0; i < input.length; i++) {
    const char = input.charAt(i);
    output += specialChars[char] || char;
  }
  return output;
}

// Encryption function
function encryptMessage(message) {
  let encrypted = message;

  // First level encryption
  encrypted = substituteChars(encrypted);

  // Second level encryption
  encrypted = encrypted.split("").reverse().join("");

  // Third level encryption
  for (let i = 0; i < privateKey.length; i++) {
    const keyChar = privateKey.charAt(i);
    encrypted = encrypted.replace(new RegExp(keyChar, "gi"), specialKey1);
  }

  // Fourth level encryption
  for (let i = 0; i < encrypted.length; i++) {
    const char = encrypted.charAt(i);
    if (char === "e" || char === "E") {
      encrypted = encrypted.slice(0, i) + specialKey2 + encrypted.slice(i + 1);
    }
  }

  return encrypted;
}

// Decryption function
function decryptMessage(encryptedMessage) {
  let decrypted = encryptedMessage;

  // Fourth level decryption
  decrypted = decrypted.replace(new RegExp(specialKey2, "gi"), "e");

  // Third level decryption
  for (let i = privateKey.length - 1; i >= 0; i--) {
    const keyChar = privateKey.charAt(i);
    decrypted = decrypted.replace(new RegExp(specialKey1, "gi"), keyChar);
  }

  // Second level decryption
  decrypted = decrypted.split("").reverse().join("");

  // First level decryption
  decrypted = substituteChars(decrypted);

  return decrypted;
}

// Example usage
const secretMessage = "This is a highly confidential message!";
const encryptedMessage = encryptMessage(secretMessage);
console.log("Encrypted Message:", encryptedMessage);
const decryptedMessage = decryptMessage(encryptedMessage);
console.log("Decrypted Message:", decryptedMessage);
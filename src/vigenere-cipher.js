const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    return this.process(message, key, "encrypt");
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arguments!");
    return this.process(message, key, "decrypt");
  }

  process(message, key, mode) {
    const A = 65;
    const Z = 90;
    const ALPHABET_LENGTH = 26;
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);
      if (charCode >= A && charCode <= Z) {
        let shift = key.charCodeAt(keyIndex % key.length) - A;
        if (mode === "decrypt") shift = -shift;

        let newCharCode =
          ((charCode - A + shift + ALPHABET_LENGTH) % ALPHABET_LENGTH) + A;
        result += String.fromCharCode(newCharCode);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

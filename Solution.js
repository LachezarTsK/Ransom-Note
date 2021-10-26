
const LETTERS_IN_ALPHABET = 26;
const ASCII_CODE_LOWERCASE_A = 97;

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    const frequency = new Array(LETTERS_IN_ALPHABET);
    frequency.fill(0);

    let n = magazine.length;
    for (let i = 0; i < n; i++) {
        frequency[magazine.codePointAt(i) - ASCII_CODE_LOWERCASE_A]++;
    }

    n = ransomNote.length;
    for (let i = 0; i < n; i++) {
        if (--frequency[ransomNote.codePointAt(i) - ASCII_CODE_LOWERCASE_A] < 0) {
            return false;
        }
    }
    return true;
};

/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Mon Jun 06 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/longest-nice-substring/submissions/

interface ILetter {
  hasUppercase: boolean;
  hasLowercase: boolean;
}

const isUpperCase = (s: string): boolean => /^[A-Z]*$/.test(s);

const getAlphabet = (): ILetter[] => {
  const alphabet: ILetter[] = [];
  for (let i = 0; i < 26; i++) {
    alphabet.push({
      hasLowercase: false,
      hasUppercase: false,
    });
  }
  return alphabet;
};

const getAllSubstrings = (
  str: string,
  size: number,
): string[] => {
  const result: string[] = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = str.length; j - i >= size; j--) {
      result.push(str.slice(
        i, j,
      ));
    }
  }
  return result;
};

const checkIfNiceString = (str: string): boolean => {
  const alphabet = getAlphabet();

  for (let i = 0; i < str.length; i++) {
    const index = str[i].toLowerCase().charCodeAt(0) - 97;
    const key = isUpperCase(str[i]) ? 'hasUppercase' : 'hasLowercase';
    alphabet[index][key] = true;
  }

  for (let i = 0; i < 26; i++) {
    const isPresent = alphabet[i].hasLowercase || alphabet[i].hasUppercase;
    const bothCasePresent = alphabet[i].hasLowercase && alphabet[i].hasUppercase;

    if (isPresent && !bothCasePresent) {
      return false;
    }
  }
  return true;
};

const longestNiceSubstring = (s: string): string => {
  let str = s;
  let longestNiceSubString = '';

  if (str.length === 1) {
    return longestNiceSubString;
  }
  if (str.length === 2) {
    const index0 = str[0].toLowerCase().charCodeAt(0) - 97;
    const index1 = str[1].toLowerCase().charCodeAt(0) - 97;

    if (index0 === index1) {
      return str;
    }
    return longestNiceSubString;
  }

  const alphabet = getAlphabet();

  for (let i = 0; i < str.length; i++) {
    const index = str[i].toLowerCase().charCodeAt(0) - 97;
    const key = isUpperCase(str[i]) ? 'hasUppercase' : 'hasLowercase';
    alphabet[index][key] = true;
  }

  for (let i = 0; i < str.length; i++) {
    const index = str[i].toLowerCase().charCodeAt(0) - 97;

    if (!alphabet[index].hasLowercase || !alphabet[index].hasUppercase) {
      str = `${str.substring(
        0, i,
      )} ${str.substring(i + 1)}`;
    }
  }

  const splittedStrings = str.split(' ');
  const niceStrings: string[] = [];

  for (let i = 0; i < splittedStrings.length; i++) {
    if (splittedStrings[i].length < 2) {
      continue;
    }
    let subStrings = [splittedStrings[i]];

    if (splittedStrings[i].length > 2) {
      subStrings = getAllSubstrings(
        splittedStrings[i], 2,
      );
    }

    for (let j = 0; j < subStrings.length; j++) {
      const isNice = checkIfNiceString(subStrings[j]);
      if (isNice) {
        niceStrings.push(subStrings[j]);
      }
    }
  }

  for (let i = 0; i < niceStrings.length; i++) {
    if (niceStrings[i].length > longestNiceSubString.length) {
      longestNiceSubString = niceStrings[i];
    }
  }

  // console.log(splittedStrings);
  // console.log(niceStrings);
  // console.log('longestNiceSubString = ', longestNiceSubString);

  return longestNiceSubString;
};

const inputs = ['abABB', 'YazaAay', 'Bb', 'c'];
const outputs = ['abABB', 'aAa', 'Bb', ''];

for (let i = 0; i < inputs.length; i++) {
  if (longestNiceSubstring(inputs[i]) === outputs[i]) {
    console.log('PASSED');
    continue;
  }
  console.log('FAILED');
}

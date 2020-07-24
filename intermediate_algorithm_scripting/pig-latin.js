function translatePigLatin(str) {
  let regex = /([aeiou]|[^aeiou]+)(.*)/i;
  let result = str.match(regex);
  let vowelArray = ['a', 'e', 'i', 'o', 'u']
  // result[0] will always hold the matching string.
  // result[1] holds the first matching group which would either be a vowel character or a collection of consonant characters.
  // result[2] holds the next matching group which would be the remaining string excluding result[1].
  // If present, other matching groups will be available via further index.
  if (vowelArray.includes(result[1].toLowerCase())){
    return str.replace(regex, "$1$2way")
  } else {
    return str.replace(regex, "$2$1ay");
  }
}

console.log(translatePigLatin("Airway"));

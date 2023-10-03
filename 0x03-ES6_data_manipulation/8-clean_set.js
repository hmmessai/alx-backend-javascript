export default function cleanSet(set, startString) {
  const newString = [];

  for (const element of set.values()) {
    if (typeof element === 'string' && element.startsWith(startString)) {
      const subStr = element.substring(startString.length);

      if (subStr && subStr !== element) {
        newString.push(subStr);
      }
    }
  }
  return newString.join('-');
}

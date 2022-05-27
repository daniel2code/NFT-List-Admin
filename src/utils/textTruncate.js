export const textTruncate = (text, num) => {
  return text.split("").slice(0, num).join('')
};

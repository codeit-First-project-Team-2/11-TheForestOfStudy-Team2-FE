// useTruncatedText.js
export const useTruncatedText = (text = '', maxLength = 30) => {
  // text가 없거나 undefined일 때를 대비
  if (!text) return '';

  const truncated =
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return truncated;
};

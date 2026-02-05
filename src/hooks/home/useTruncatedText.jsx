export const useTruncatedText = (text = '', maxLength = 30) => {
  if (!text) return '';

  const truncated =
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  return truncated;
};

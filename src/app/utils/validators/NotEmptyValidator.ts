export const NotEmptyValidator = (value: string) => {
  const normStrValue = (value || "").trim();
  const nrChars = normStrValue.length;

  if (nrChars === 0) {
    return false;
  }

  return true;
};

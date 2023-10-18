export const PhoneNumberValidator = (value: string) => {
  const pattern = /^[0-9+\-\s]+$/;

  const normStrValue = (value || "").trim();
  const nrChars = normStrValue.length;

  if (nrChars === 0 || !pattern.test(value)) {
    return false;
  }
  return true;
};

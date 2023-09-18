export const PhoneNumberValidator = (value: string) => {
  const pattern =
    /^(?:(?:\+46|0)\s?[7-9]\d{1,9}|(?:\+1|1)?\s?\(\d{3}\)\s?\d{3}[-.\s]?\d{4}|[2-9]\d{2}[-.\s]?\d{3}[-.\s]?\d{4})$/;

  const normStrValue = (value || "").trim();
  const nrChars = normStrValue.length;

  console.log("value", value);
  if (nrChars === 0 || !pattern.test(value)) {
    console.log("yikes, its not valid");
    return false;
  }
  return true;
};

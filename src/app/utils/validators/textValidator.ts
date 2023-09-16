export const TextValidator = (value: string, min?: number, max?: number) => {
  const pattern = /^.*\S.*$/; // matches strings with at least one non-whitespace character
  const normStrValue = (value || "").trim();
  const nrChars = normStrValue.length;

  if (nrChars === 0 || !pattern.test(normStrValue)) {
    return false;
  }

  if (min && min > nrChars) {
    return false;
  }

  if (max && max < nrChars) {
    return false;
  }

  return true;
};
export const formatDate = (str) => {
  const ensure2Digits = (num) => (`${num}`.length == 1 ? `0${num}` : `${num}`);
  const date = new Date(str);
  const year = date.getFullYear();
  const month = ensure2Digits(date.getMonth());
  const day = ensure2Digits(date.getDate());
  const hour = ensure2Digits(date.getHours());
  const minute = ensure2Digits(date.getMinutes());
  return `${day}-${month}-${year} ${hour}:${minute}`;
};

export const empty = (val) => val === undefined || val === null;
export const compareEmpty = (a, b) => {
  if (empty(a)) {
    return -1;
  } else if (empty(b)) {
    return 1;
  }
  return false;
};

export const compareNumbers = (fieldName) => (a, b) => {
  const goOn = compareEmpty(a[fieldName], b[fieldName]);
  return goOn === false ? a[fieldName] - b[fieldName] : goOn;
};

export const compareDates = (fieldName) => (a, b) => {
  const goOn = compareEmpty(a[fieldName], b[fieldName]);
  return goOn === false ? new Date(a[fieldName]) - new Date(b[fieldName]) : goOn;
};

export const compareLengths = (fieldName) => (a, b) => {
  const goOn = compareEmpty(a[fieldName], b[fieldName]);
  return goOn === false ? a[fieldName].length - b[fieldName].length : goOn;
};

export const compareStrings = (fieldName) => (a, b) => {
  const goOn = compareEmpty(a[fieldName], b[fieldName]);
  return goOn === false ? b[fieldName].localeCompare(a[fieldName]) : goOn;
};

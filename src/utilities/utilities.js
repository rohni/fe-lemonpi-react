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

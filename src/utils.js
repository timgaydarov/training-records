import { regex } from "./constants";

export const sortByDate = (a, b) => {
  if (a.date < b.date) {
    return 1;
  }
  if (a.date > b.date) {
    return -1;
  }
  return 0;
};

export const isValidDate = (date) => {
  const dateOk = regex.test(date);
  return dateOk;
};

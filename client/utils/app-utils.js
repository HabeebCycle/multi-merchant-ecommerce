import moment from "moment";

export const getInitial = (name = "") =>
  name
    .replace(/\s+/, " ")
    .split(" ")
    .slice(0, 2)
    .map((v) => v && v[0].toUpperCase())
    .join("");

export const stringToColor = (string) => {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};

export const getChartLabel = (days) => {
  const today = moment();
  return Array(days)
    .fill()
    .map(() => today.subtract(1, "d").format("D MMM"))
    .reverse();
};

export const updateNavItems = (navItems, id) => {
  const newItem = [];
  navItems.map((item) => {
    if (item.id === id) {
      newItem.push({ id, open: !item.open });
    } else {
      newItem.push(item);
    }
  });

  return newItem;
};

export const openNavItems = (navItems, id) => {
  const newItem = [];
  navItems.map((item) => {
    if (item.id === id) {
      newItem.push({ id, open: true });
    } else {
      newItem.push(item);
    }
  });

  return newItem;
};

export const resetNavItems = (navItems) => {
  const newItem = [];
  navItems.map((item) => newItem.push({ id: item.id, open: false }));

  return newItem;
};

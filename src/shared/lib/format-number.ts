export const formatNumber = (num: string) => {
  return new Intl.NumberFormat("ru-RU").format(Number(num));
};

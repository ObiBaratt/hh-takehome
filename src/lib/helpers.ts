export const hexToDecimal = (hex: string) => parseInt(hex, 16);
export const decimalToHex = (decimal: number) => {
  let hex = decimal.toString(16).toUpperCase();
  if (hex.length === 1) {
    hex = `0${hex}`;
  }
  return hex;
};

export interface rbgColor {
  hex: string;
  red: number;
  green: number;
  blue: number;
}

export const randomNumbers = (seed: number) => {
  let x = Math.sin(seed) * 10000;
  let rand1 = Math.floor((x - Math.floor(x)) * 256);
  x = Math.sin(x) * 10000;
  let rand2 = Math.floor((x - Math.floor(x)) * 256);
  x = Math.sin(x) * 10000;
  let rand3 = Math.floor((x - Math.floor(x)) * 256);
  return [rand1, rand2, rand3];
};

export const genColor = (seed: number): rbgColor => {
  const [r, g, b] = randomNumbers(seed);
  const toHex = `${decimalToHex(r)}${decimalToHex(g)}${decimalToHex(b)}`;
  const res = {
    hex: toHex,
    red: r,
    green: g,
    blue: b,
  };
  return res;
};

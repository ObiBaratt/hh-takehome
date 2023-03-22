export const hexToDecimal = (hex: string): number => parseInt(hex, 16);

export const decimalToHex = (decimal: number): string => {
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

const min = (val: number, min: number): number => (val < min ? min : val);
const max = (val: number, max: number): number => (val > max ? max : val);

export const clampRGB = (minVal: number, maxVal: number, val: number) => {
  let res = min(val, minVal);
  res = max(res, maxVal);
  return res;
};

export const adjustShade = (color: string, lighter: boolean = true): string => {
  const adjustment = lighter ? 1.1 : 0.9;

  const r = decimalToHex(
    clampRGB(0, 255, Math.round(hexToDecimal(color[0] + color[1]) * adjustment))
  );
  const g = decimalToHex(
    clampRGB(0, 255, Math.round(hexToDecimal(color[2] + color[3]) * adjustment))
  );
  const b = decimalToHex(
    clampRGB(0, 255, Math.round(hexToDecimal(color[4] + color[5]) * adjustment))
  );

  return `${r}${g}${b}`;
};

export const genShadeRow = (color: string): string[] => {
  const light1 = adjustShade(color);
  const light2 = adjustShade(light1);
  const dark1 = adjustShade(color, false);
  const dark2 = adjustShade(dark1, false);

  return [dark2, dark1, color, light1, light2];
};

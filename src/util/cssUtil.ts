export enum ScreenSize {
  SM = "576px",
  MD = "768px",
  LG = "992px",
  XL = "1200px",
}

export const mediaQuery = (size: ScreenSize, css: string) => {
  return `@media(max-width: ${size}) {
    ${css}
  }`;
};

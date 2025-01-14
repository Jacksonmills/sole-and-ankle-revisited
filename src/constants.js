export const COLORS = {
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

const BREAKPOINTS = {
  tableMin: 550,
  laptopMin: 1100,
  laptopMax: 1500,
}

export const QUERIES = {
  'tabletAndUp': `(min-width: ${BREAKPOINTS.tableMin / 16}rem)`,
  'laptopAndUp': `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  'laptopMax': `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}

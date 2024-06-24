const variablesStyles = '@import "./src/scss/utils/_vars.scss"';
const breakpointsStyles = '@import "./src/scss/utils/_breakpoints.scss"';
const mixinsStyles = '@import "./src/scss/utils/_mixins.scss"';
const resetStyles = '@import "./src/scss/utils/_reset.scss"';

const styles = [
  variablesStyles,
  breakpointsStyles,
  mixinsStyles,
  resetStyles,
];

export const globalStylesOptions = styles.reduce((acc, i) => acc + i + ';', '');

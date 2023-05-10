// MyComponent.styles.ts
import { createStyles, MantineNumberSize } from '@mantine/core';

// Styles params are optional
export interface MainContainerStylesParams {
  radius?: MantineNumberSize;
}

export default createStyles((theme, { radius }: MainContainerStylesParams) => ({
  // add all styles as usual
  root: {
    borderRadius: theme.fn.radius(radius),
    margin: '0 auto',
    maxWidth: '1400px',
    height: '100vh',
    background: theme.colors.tealOpacity[0],
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

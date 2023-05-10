// MyComponent.tsx
import { DefaultProps, Selectors, MantineNumberSize, Box } from '@mantine/core';
import useStyles, { MainContainerStylesParams } from './MainContainer.styles';

// This type will contain a union with all selectors defined in useStyles,
// in this case it will be `'root' | 'title' | 'description'`
type MyComponentStylesNames = Selectors<typeof useStyles>;

// DefaultProps adds system props support (margin, padding, sx, unstyled, styles and classNames).
// It accepts 2 types: styles names and styles params, both of them are optional
interface MyComponentProps
  extends DefaultProps<MyComponentStylesNames, MainContainerStylesParams> {
  radius?: MantineNumberSize;
  children: React.ReactNode;
}

export const MainContainer = ({
  classNames,
  styles,
  unstyled,
  radius,
  className,
  children,
}: MyComponentProps) => {
  const { classes, cx } = useStyles(
    // First argument of useStyles is styles params
    { radius },
    // Second argument is responsible for styles api integration
    { name: 'MainContainer', classNames, styles, unstyled },
  );

  // Use Box component as a base and spread ...others prop.
  // By doing so, you will add sx, padding (pt, pb, px, etc.) and margin (my, m, mt, etc.) props support
  return <Box className={cx(classes.root, className)}>{children}</Box>;
};

import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const child = getRef('child');

  return {
    wrapper: {
      // subscribe to color scheme changes right in your styles
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
      maxWidth: 400,
      width: '100%',
      height: 180,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: theme.radius.sm,

      // Dynamic media queries, define breakpoints in theme, use anywhere
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        // Type safe child reference in nested selectors via ref
        [`& .${child}`]: {
          fontSize: theme.fontSizes.xs,
        },
      },
    }
  };
});

function Demo() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles demo</div>
    </div>
  );
}

import classNames from "classnames";
import { createUseStyles, useTheme } from "react-jss";
import { Theme } from "../../utils/theme";

type Props = {
  id?: string;
};

const useStyles = createUseStyles<string, Props, Theme>({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    maxWidth: "80rem",
    columnGap: "2rem",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: ({ theme }) => theme.backgroundColor,
  },
  imageWrapper: {
    display: "block",
    borderRadius: "0.5rem",
    overflow: "hidden",
    position: "relative",
    paddingBottom: "calc(var(--tw-aspect-h) / var(--tw-aspect-w)* 100%)",
    "--tw-aspect-h": 4,
    "--tw-aspect-w": 3,
  },
  imageWrapperHalf: {
    "--tw-aspect-h": 2,
  },
  halfColumn: {
    display: "grid",
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    rowGap: "2rem",
  },
  image: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "center",
  },
});

export const ProductDetail = ({ id }: Props) => {
  const theme = useTheme<Theme>();
  const classes = useStyles({ theme });

  return (
    <>
      Juhuu product detail with ID: {id}
      <div className={classes.grid}>
        <div className={classes.imageWrapper}>
          <img
            alt="Velmi krásný obrázek"
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            className={classes.image}
          />
        </div>
        <div className={classes.halfColumn}>
          <div
            className={classNames(
              classes.imageWrapper,
              classes.imageWrapperHalf
            )}
          >
            <img
              alt="Velmi krásný obrázek"
              src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              className={classes.image}
            />
          </div>
          <div
            className={classNames(
              classes.imageWrapper,
              classes.imageWrapperHalf
            )}
          >
            <img
              alt="Velmi krásný obrázek"
              src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              className={classes.image}
            />
          </div>
        </div>
        <div className={classes.imageWrapper}>
          <img
            alt="Velmi krásný obrázek"
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            className={classes.image}
          />
        </div>
      </div>
    </>
  );
};
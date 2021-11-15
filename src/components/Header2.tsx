/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "react-router-dom"

import globalStyles from "../utils/globalStyles"

import Logo from "./Logo"

function Header2() {
  return (
    <header role="banner" css={styles.header}>
      <div style={{ display: "flex", justifyContent: "flex-start" }}>
        <div>
          <a
            href="https://travail-emploi.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            // css={[styles.containerLogo, layoutType === "desktop" && styles.containerLogoDesktop]}
          >
            <Logo />
          </a>
        </div>
        {/* <div css={styles.headerInner}> */}
        <div css={styles.titles}>
          <Link to="/" css={styles.title}>
            Index&nbsp;Egapro
          </Link>
          <p css={styles.subtitle}>
            L’outil de calcul et de déclaration de votre index égalité professionnelle Femmes-Hommes
          </p>
        </div>
      </div>
    </header>
  )
}

const styles = {
  header: css({
    backgroundColor: "#FFF",
    margin: "10px 8px 0 8px",
    paddingBottom: "20px",
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #EFECEF",
  }),
  // headerLeft: css({
  //   display: "flex",
  //   flexDirection: "row",
  //   marginLeft: globalStyles.grid.gutterWidth,
  //   marginRight: globalStyles.grid.gutterWidth,
  //   "@media print": {
  //     marginLeft: 0,
  //   },
  // }),
  // headerLeftPrint: css({
  //   "@media print": {
  //     width: "auto",
  //   },
  // }),
  // containerLogo: css({
  //   marginLeft: "auto",
  //   marginRight: 0,
  //   textDecoration: "none",
  //   color: "currentColor",
  // }),
  // containerLogoDesktop: css({
  //   marginRight: 25,
  // }),
  // headerInner: css({
  //   display: "flex",
  //   flexDirection: "row",
  //   flexGrow: 1,
  //   alignItems: "baseline",
  // }),
  titles: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (min-width: 780px)": {
      flexDirection: "row",
      alignItems: "center",
    },
  }),
  title: css({
    fontFamily: "'Gabriela', serif",
    marginRight: 24,
    fontSize: 24,
    color: globalStyles.colors.default,
    textDecoration: "none",
  }),
  subtitle: css({
    fontFamily: "'Gabriela', serif",
    fontSize: 12,
  }),
}

export default Header2

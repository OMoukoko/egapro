/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import globalStyles from "../utils/globalStyles";
import Logo from "./Logo";

import { useColumnsWidth, useLayoutType } from "./GridContext";

function Footer() {
  const width = useColumnsWidth(2);
  const layoutType = useLayoutType();
  return (
    <footer
      css={[
        styles.footer,
        layoutType === "desktop" &&
          css({ marginLeft: -(width + globalStyles.grid.gutterWidth) })
      ]}
    >
      <div
        css={[
          styles.footerLeft,
          layoutType === "desktop" && css({ width }),
          styles.footerLeftPrint
        ]}
      >
        <a
          href="https://travail-emploi.gouv.fr/"
          target="_blank"
          rel="noopener noreferrer"
          css={[
            styles.containerLogo,
            layoutType === "mobile" && styles.containerLogoMobile
          ]}
        >
          <Logo />
        </a>
      </div>

      <div css={styles.footerLinks}>
        <a
          href="https://travail-emploi.gouv.fr/"
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
        >
          téléchargez le simulateur au format excel
        </a>
        <a
          href="https://travail-emploi.gouv.fr/"
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
        >
          téléchargez la liste des référents
        </a>
        <a
          href="https://solen1.enquetes.social.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          css={styles.link}
        >
          accèdez à SOLEN, l’outil de déclaration en ligne
        </a>
      </div>

      <div css={styles.footerInfo}>
        <em style={styles.info}>
          L’outil Egapro a été développé par les équipes de l’incubateur des
          ministères sociaux
        </em>
        <span style={styles.info}>
          Aidez-nous à améliorer cet outil
          <a
            href="https://travail-emploi.gouv.fr/"
            target="_blank"
            rel="noopener noreferrer"
            css={styles.infoLink}
          >
            donnez-nous votre avis
          </a>
          <a
            href="https://github.com/SocialGouv/egapro"
            target="_blank"
            rel="noopener noreferrer"
            css={styles.infoLink}
          >
            contribuez sur Github
          </a>
        </span>
      </div>
    </footer>
  );
}

const styles = {
  footer: css({
    backgroundColor: "#FFF",
    height: 80,
    marginTop: 54,
    flexShrink: 0,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderTop: "1px solid #EFECEF",
    "@media print": {
      display: "none"
    }
  }),
  footerLeft: css({
    display: "flex",
    flexDirection: "row",
    marginLeft: globalStyles.grid.gutterWidth,
    marginRight: globalStyles.grid.gutterWidth,
    "@media print": {
      marginLeft: 0
    }
  }),
  footerLeftPrint: css({
    "@media print": {
      width: "auto"
    }
  }),
  containerLogo: css({
    marginLeft: "auto",
    marginRight: 25,
    textDecoration: "none",
    color: "currentColor"
  }),
  containerLogoMobile: css({
    marginRight: 0
  }),

  footerLinks: { display: "flex", flexDirection: "column" as "column" },
  link: {
    fontSize: 10,
    lineHeight: "11px",
    color: globalStyles.colors.default,
    textDecoration: "underline",
    margin: "2px 0"
  },

  footerInfo: {
    alignSelf: "flex-end",
    flex: 1,
    display: "flex",
    flexDirection: "column" as "column",
    textAlign: "right" as "right",
    marginBottom: 6,
    marginRight: globalStyles.grid.gutterWidth
  },
  info: {
    fontSize: 12,
    lineHeight: "15px",
    marginBottom: 4
  },
  infoLink: {
    color: globalStyles.colors.default,
    textDecoration: "underline",
    marginLeft: 4
  }
};

export default Footer;

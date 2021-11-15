/** @jsx jsx */
import { css, jsx } from "@emotion/core"

function Logo() {
  return (
    <div css={[styles.container]}>
      <img css={[styles.image]} src={process.env.PUBLIC_URL + "/marianne.svg"} alt="Ministère du Travail" />
    </div>
  )
}

const styles = {
  container: css({
    flexShrink: 0,
    display: "flex",
    marginLeft: 16,
    marginRight: 16,
  }),
  image: css({
    display: "block",
    width: 90,
  }),
  imageMobile: css({
    width: 60,
    height: 36,
    marginRight: 3,
  }),
  text: css({
    marginTop: 3,
    fontSize: 9,
    textAlign: "center",
  }),
}

export default Logo

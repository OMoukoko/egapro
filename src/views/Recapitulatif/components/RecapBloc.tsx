/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { ReactNode } from "react";

import globalStyles from "../../../utils/globalStyles";

import ResultBubble, {
  Props as ResultBubbleProps
} from "../../../components/ResultBubble";

import { useColumnsWidth } from "../../../components/GridContext";

interface Props {
  title: string;
  children: ReactNode;
  resultBubble: ResultBubbleProps;
}

export function RecapBloc({ title, children, resultBubble }: Props) {
  const width = useColumnsWidth(4);

  return (
    <div css={styles.container}>
      <div css={[styles.blocInfo, css({ width })]}>
        <div css={styles.title}>{title}</div>

        {children && (
          <div css={styles.bloc}>
            <div css={styles.background} />

            <div css={styles.bloc}>{children}</div>
          </div>
        )}

        <div
          css={[styles.borderBottomBloc, !children && styles.borderNoChildren]}
        />
        <div
          css={[styles.borderLeftBloc, !children && styles.borderNoChildren]}
        />
      </div>

      <div css={styles.blocResult}>
        <div
          css={[
            styles.borderBottomResult,
            !children && styles.borderNoChildren
          ]}
        />
        <div
          css={[styles.borderRightResult, !children && styles.borderNoChildren]}
        />
        <ResultBubble {...resultBubble} />
      </div>
    </div>
  );
}

const styles = {
  container: css({
    position: "relative",
    display: "flex",
    flexDirection: "row"
  }),
  background: css({
    backgroundColor: "#FFF",
    position: "absolute",
    top: -20,
    bottom: -20,
    left: -38,
    right: -38,
    borderRadius: "100%",
    border: "1px solid #EFECEF"
  }),

  blocInfo: css({
    position: "relative",
    flexShrink: 0,
    paddingLeft: globalStyles.grid.gutterWidth
  }),
  title: css({
    marginBottom: 20,
    fontSize: 18,
    lineHeight: "22px",
    textTransform: "uppercase"
  }),

  bloc: css({
    position: "relative"
  }),
  borderBottomBloc: css({
    position: "absolute",
    height: 1,
    backgroundColor: globalStyles.colors.default,
    bottom: 0,
    left: 0,
    right: 0
  }),
  borderLeftBloc: css({
    position: "absolute",
    width: 1,
    backgroundColor: globalStyles.colors.default,
    bottom: 0,
    top: 0,
    left: 0
  }),

  borderBottomResult: css({
    position: "absolute",
    height: 1,
    backgroundColor: globalStyles.colors.default,
    bottom: 0,
    left: -globalStyles.grid.gutterWidth,
    right: "50%"
  }),
  borderRightResult: css({
    position: "absolute",
    width: 1,
    backgroundColor: globalStyles.colors.default,
    bottom: 0,
    top: 0,
    right: "50%"
  }),
  blocResult: css({
    position: "relative",
    maxWidth: 250,
    flex: 1,
    marginLeft: globalStyles.grid.gutterWidth,
    display: "flex",
    flexDirection: "column"
  }),

  borderNoChildren: css({
    bottom: "50%"
  })
};

export default RecapBloc;

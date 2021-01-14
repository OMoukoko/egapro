/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useField, FieldMetaState } from "react-final-form";

import globalStyles from "../utils/globalStyles";

import { CellHead, Cell } from "./Cell";
import CellInput, { hasFieldError } from "./CellInput";
import { IconValid, IconInvalid } from "./Icons";

const hasIntegerInputError = (meta: FieldMetaState<string>) =>
  meta.error && meta.touched && meta.error.mustBeInteger;

const hasMinMaxInputError = (meta: FieldMetaState<string>) =>
  meta.error && meta.touched && (meta.error.minNumber || meta.error.maxNumber);

const hasPreviousFieldInputError = (meta: FieldMetaState<string>) =>
  meta.error && meta.touched && meta.error.previousField;

interface Props {
  fieldName: string;
  label: string;
  readOnly: boolean;
  theme?: "hommes" | "femmes";
}

function FieldInput({ fieldName, label, readOnly, theme = "femmes" }: Props) {
  const field = useField(fieldName);
  const error = hasFieldError(field.meta);
  const integerError = hasIntegerInputError(field.meta);
  const minMaxError = hasMinMaxInputError(field.meta);
  const previousFieldError = hasPreviousFieldInputError(field.meta);

  return (
    <div css={styles.container}>
      <div css={styles.row}>
        <CellHead style={[styles.cellHead, error && styles.cellHeadError]}>
          <div css={styles.cellHeadInner}>
            {field.meta.valid ? (
              <div css={styles.cellHeadIcon}>
                <IconValid />
              </div>
            ) : error ? (
              <div css={styles.cellHeadIcon}>
                <IconInvalid />
              </div>
            ) : null}
            <span>{label}</span>
          </div>
        </CellHead>

        {readOnly ? (
          <Cell
            style={[
              styles.cellEmpty,
              theme === "hommes" ? styles.cellEmptyMen : styles.cellEmptyWomen,
            ]}
          >
            {field.input.value}
          </Cell>
        ) : (
          <CellInput
            field={field}
            style={theme === "hommes" ? styles.cellMen : styles.cellWomen}
          />
        )}
      </div>
      {error &&
        (integerError ? (
          <div css={styles.error}>
            ce champ doit contenir une valeur entière, sans virgule
          </div>
        ) : minMaxError ? (
          <div css={styles.error}>
            ce champ doit contenir une valeur entre 0 et 10
          </div>
        ) : previousFieldError ? (
          <div css={styles.error}>
            ce champ ne peut être supérieur au précédent
          </div>
        ) : (
          <div css={styles.error}>
            ce champ n’est pas valide, renseignez une valeur numérique
          </div>
        ))}
    </div>
  );
}

export const HEIGHT = 58;
export const MARGIN_TOP = 10;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    height: HEIGHT,
    marginTop: MARGIN_TOP,
  }),
  row: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
  }),
  cellHead: css({
    height: 29,
    paddingBottom: 2,
    display: "flex",
    alignItems: "flex-end",
    borderBottom: `solid ${globalStyles.colors.default} 1px`,
    fontSize: 14,
  }),
  cellHeadInner: css({
    display: "flex",
    alignItems: "baseline",
  }),
  cellHeadError: css({
    color: globalStyles.colors.error,
    borderColor: "transparent",
  }),
  cellHeadIcon: css({
    marginRight: 5,
  }),
  cellMen: css({
    borderColor: globalStyles.colors.men,
  }),
  cellWomen: css({
    borderColor: globalStyles.colors.women,
  }),
  cellEmpty: css({
    height: 22,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
  cellEmptyMen: css({
    color: globalStyles.colors.men,
  }),
  cellEmptyWomen: css({
    color: globalStyles.colors.women,
  }),
  error: css({
    display: "flex",
    alignItems: "center",
    height: 18,
    marginTop: 5,
    color: globalStyles.colors.error,
    fontSize: 12,
    fontStyle: "italic",
    lineHeight: "12px",
    borderBottom: `solid ${globalStyles.colors.error} 1px`,
  }),
};

export default FieldInput;

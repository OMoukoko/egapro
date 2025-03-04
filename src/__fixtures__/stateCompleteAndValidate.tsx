import { FormState } from "../globals"
import AppReducer from "../AppReducer"

import stateComplete from "./stateComplete"

const actionValidateInformationsSimulation = {
  type: "validateInformationsSimulation" as const,
  valid: "Valid" as FormState,
}

const actionValidateEffectif = {
  type: "validateEffectif" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurUnCoefGroup = {
  type: "validateIndicateurUnCoefGroup" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurUnCoefEffectif = {
  type: "validateIndicateurUnCoefEffectif" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurUn = {
  type: "validateIndicateurUn" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurDeux = {
  type: "validateIndicateurDeux" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurTrois = {
  type: "validateIndicateurTrois" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurDeuxTrois = {
  type: "validateIndicateurDeuxTrois" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurQuatre = {
  type: "validateIndicateurQuatre" as const,
  valid: "Valid" as FormState,
}

const actionValidateIndicateurCinq = {
  type: "validateIndicateurCinq" as const,
  valid: "Valid" as FormState,
}

const actionValidateInformationsEntreprise = {
  type: "validateInformationsEntreprise" as const,
  valid: "Valid" as FormState,
}

const actionValidateInformationsDeclarant = {
  type: "validateInformationsDeclarant" as const,
  valid: "Valid" as FormState,
}

const actionValidateDeclaration = {
  type: "validateDeclaration" as const,
  valid: "Valid" as FormState,
  effectifData: {
    nombreSalariesTotal: 52,
  },
  indicateurUnData: {
    nombreCoefficients: 6,
    nonCalculable: false,
    motifNonCalculable: "",
    motifNonCalculablePrecision: "",
    remunerationAnnuelle: [],
    coefficient: [],
    resultatFinal: 8.0,
    sexeSurRepresente: "femmes" as undefined | "femmes" | "hommes",
    noteFinale: 31,
  },
  indicateurDeuxData: {
    nonCalculable: false,
    motifNonCalculable: "",
    motifNonCalculablePrecision: "",
    tauxAugmentation: [],
    resultatFinal: 5.0,
    sexeSurRepresente: "femmes" as undefined | "femmes" | "hommes",
    noteFinale: 10,
    mesuresCorrection: false,
  },
  indicateurTroisData: {
    nonCalculable: false,
    motifNonCalculable: "",
    motifNonCalculablePrecision: "",
    tauxPromotion: [],
    resultatFinal: 3.0,
    sexeSurRepresente: "femmes" as undefined | "femmes" | "hommes",
    noteFinale: 15,
    mesuresCorrection: false,
  },
  indicateurDeuxTroisData: {
    nonCalculable: false,
    motifNonCalculable: "",
    motifNonCalculablePrecision: "",
    resultatFinalEcart: 25,
    resultatFinalNombreSalaries: 5,
    sexeSurRepresente: "femmes" as undefined | "femmes" | "hommes",
    noteEcart: 25,
    noteNombreSalaries: 5,
    noteFinale: 25,
    mesuresCorrection: false,
  },
  indicateurQuatreData: {
    nonCalculable: false,
    motifNonCalculable: "",
    motifNonCalculablePrecision: "",
    resultatFinal: 80.0,
    noteFinale: 0,
  },
  indicateurCinqData: {
    resultatFinal: 4.0,
    sexeSurRepresente: "hommes" as undefined | "egalite" | "femmes" | "hommes",
    noteFinale: 10,
  },
  noteIndex: 78,
  totalPoint: 66,
  totalPointCalculable: 85,
}

// Mock the Date for tests
const realDate = global.Date
// @ts-ignore
global.Date = jest.fn(() => new realDate(1578393480399))

const stateDefault = AppReducer(
  AppReducer(
    AppReducer(
      AppReducer(
        AppReducer(
          AppReducer(
            AppReducer(
              AppReducer(
                AppReducer(
                  AppReducer(
                    AppReducer(
                      AppReducer(
                        AppReducer(stateComplete, actionValidateInformationsSimulation),
                        actionValidateEffectif,
                      ),
                      actionValidateIndicateurUnCoefGroup,
                    ),
                    actionValidateIndicateurUnCoefEffectif,
                  ),
                  actionValidateIndicateurUn,
                ),
                actionValidateIndicateurDeux,
              ),
              actionValidateIndicateurTrois,
            ),
            actionValidateIndicateurDeuxTrois,
          ),
          actionValidateIndicateurQuatre,
        ),
        actionValidateIndicateurCinq,
      ),
      actionValidateInformationsEntreprise,
    ),
    actionValidateInformationsDeclarant,
  ),
  actionValidateDeclaration,
)

// Restore the Date
global.Date = realDate

export default stateDefault

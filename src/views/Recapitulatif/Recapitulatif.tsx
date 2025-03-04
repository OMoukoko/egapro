/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Fragment } from "react"
import { RouteComponentProps } from "react-router-dom"

import { AppState } from "../../globals"

import calculIndicateurUn from "../../utils/calculsEgaProIndicateurUn"
import calculIndicateurDeux from "../../utils/calculsEgaProIndicateurDeux"
import calculIndicateurTrois from "../../utils/calculsEgaProIndicateurTrois"
import calculIndicateurDeuxTrois from "../../utils/calculsEgaProIndicateurDeuxTrois"
import calculIndicateurQuatre from "../../utils/calculsEgaProIndicateurQuatre"
import calculIndicateurCinq from "../../utils/calculsEgaProIndicateurCinq"
import { calculNoteIndex } from "../../utils/calculsEgaProIndex"
import totalNombreSalaries from "../../utils/totalNombreSalaries"

import Page from "../../components/Page"
import ActionBar from "../../components/ActionBar"
import ButtonAction from "../../components/ButtonAction"
import { ButtonSimulatorLink } from "../../components/SimulatorLink"

import RecapitulatifIndex from "./RecapitulatifIndex"
import RecapitulatifInformations from "./RecapitulatifInformations"
import RecapitulatifIndicateurUn from "./RecapitulatifIndicateurUn"
import RecapitulatifIndicateurDeux from "./RecapitulatifIndicateurDeux"
import RecapitulatifIndicateurTrois from "./RecapitulatifIndicateurTrois"
import RecapitulatifIndicateurDeuxTrois from "./RecapitulatifIndicateurDeuxTrois"
import RecapitulatifIndicateurQuatre from "./RecapitulatifIndicateurQuatre"
import RecapitulatifIndicateurCinq from "./RecapitulatifIndicateurCinq"
import { useTitle } from "../../utils/hooks"

interface Props extends RouteComponentProps {
  state: AppState
}

const title = "Récapitulatif"

function Recapitulatif({ state }: Props) {
  useTitle(title)

  const trancheEffectifs = state.informations.trancheEffectifs

  const {
    effectifsIndicateurCalculable: effectifsIndicateurUnCalculable,
    effectifEtEcartRemuParTranche,
    indicateurEcartRemuneration,
    indicateurSexeSurRepresente: indicateurUnSexeSurRepresente,
    noteIndicateurUn,
  } = calculIndicateurUn(state)

  const {
    effectifsIndicateurCalculable: effectifsIndicateurDeuxCalculable,
    indicateurCalculable: indicateurDeuxCalculable,
    effectifEtEcartAugmentParGroupe,
    indicateurEcartAugmentation,
    indicateurSexeSurRepresente: indicateurDeuxSexeSurRepresente,
    noteIndicateurDeux,
    correctionMeasure: correctionMeasureIndicateurDeux,
  } = calculIndicateurDeux(state)

  const {
    effectifsIndicateurCalculable: effectifsIndicateurTroisCalculable,
    indicateurCalculable: indicateurTroisCalculable,
    effectifEtEcartPromoParGroupe,
    indicateurEcartPromotion,
    indicateurSexeSurRepresente: indicateurTroisSexeSurRepresente,
    noteIndicateurTrois,
    correctionMeasure: correctionMeasureIndicateurTrois,
  } = calculIndicateurTrois(state)

  const {
    effectifsIndicateurCalculable: effectifsIndicateurDeuxTroisCalculable,
    indicateurCalculable: indicateurDeuxTroisCalculable,
    indicateurEcartAugmentationPromotion,
    indicateurEcartNombreEquivalentSalaries,
    indicateurSexeSurRepresente: indicateurDeuxTroisSexeSurRepresente,
    noteIndicateurDeuxTrois,
    correctionMeasure: correctionMeasureIndicateurDeuxTrois,
    tauxAugmentationPromotionHommes,
    tauxAugmentationPromotionFemmes,
    plusPetitNombreSalaries,
  } = calculIndicateurDeuxTrois(state)

  const {
    indicateurCalculable: indicateurQuatreCalculable,
    indicateurEcartNombreSalarieesAugmentees,
    noteIndicateurQuatre,
  } = calculIndicateurQuatre(state)

  const {
    indicateurSexeSousRepresente: indicateurCinqSexeSousRepresente,
    indicateurNombreSalariesSexeSousRepresente,
    noteIndicateurCinq,
  } = calculIndicateurCinq(state)

  const allIndicateurValid =
    (state.indicateurUn.formValidated === "Valid" ||
      // Si l'indicateurUn n'est pas calculable par coefficient, forcer le calcul par CSP
      (!effectifsIndicateurUnCalculable && state.indicateurUn.csp)) &&
    (trancheEffectifs !== "50 à 250"
      ? (state.indicateurDeux.formValidated === "Valid" || !effectifsIndicateurDeuxCalculable) &&
        (state.indicateurTrois.formValidated === "Valid" || !effectifsIndicateurTroisCalculable)
      : state.indicateurDeuxTrois.formValidated === "Valid" || !effectifsIndicateurDeuxTroisCalculable) &&
    state.indicateurQuatre.formValidated === "Valid" &&
    state.indicateurCinq.formValidated === "Valid"

  const { noteIndex, totalPoint, totalPointCalculable } = calculNoteIndex(
    trancheEffectifs,
    noteIndicateurUn,
    noteIndicateurDeux,
    noteIndicateurTrois,
    noteIndicateurDeuxTrois,
    noteIndicateurQuatre,
    noteIndicateurCinq,
  )

  const { totalNombreSalariesHomme, totalNombreSalariesFemme } = totalNombreSalaries(state.effectif.nombreSalaries)

  return (
    <Page title="Récapitulatif des résultats de vos indicateurs">
      <RecapitulatifInformations
        informationsFormValidated={state.informations.formValidated}
        trancheEffectifs={state.informations.trancheEffectifs}
        anneeDeclaration={state.informations.anneeDeclaration}
        finPeriodeReference={state.informations.finPeriodeReference}
        nombreSalaries={totalNombreSalariesHomme + totalNombreSalariesFemme}
      />
      <RecapitulatifIndex
        allIndicateurValid={allIndicateurValid}
        noteIndex={noteIndex}
        totalPoint={totalPoint}
        totalPointCalculable={totalPointCalculable}
      />
      <RecapitulatifIndicateurUn
        indicateurUnFormValidated={state.indicateurUn.formValidated}
        effectifsIndicateurUnCalculable={effectifsIndicateurUnCalculable}
        effectifEtEcartRemuParTranche={effectifEtEcartRemuParTranche}
        indicateurEcartRemuneration={indicateurEcartRemuneration}
        indicateurSexeSurRepresente={indicateurUnSexeSurRepresente}
        indicateurUnParCSP={state.indicateurUn.csp}
        noteIndicateurUn={noteIndicateurUn}
      />
      {(trancheEffectifs !== "50 à 250" && (
        <Fragment>
          <RecapitulatifIndicateurDeux
            indicateurDeuxFormValidated={state.indicateurDeux.formValidated}
            effectifsIndicateurDeuxCalculable={effectifsIndicateurDeuxCalculable}
            indicateurDeuxCalculable={indicateurDeuxCalculable}
            effectifEtEcartAugmentParGroupe={effectifEtEcartAugmentParGroupe}
            indicateurEcartAugmentation={indicateurEcartAugmentation}
            indicateurSexeSurRepresente={indicateurDeuxSexeSurRepresente}
            noteIndicateurDeux={noteIndicateurDeux}
            correctionMeasure={correctionMeasureIndicateurDeux}
          />
          <RecapitulatifIndicateurTrois
            indicateurTroisFormValidated={state.indicateurTrois.formValidated}
            effectifsIndicateurTroisCalculable={effectifsIndicateurTroisCalculable}
            indicateurTroisCalculable={indicateurTroisCalculable}
            effectifEtEcartPromoParGroupe={effectifEtEcartPromoParGroupe}
            indicateurEcartPromotion={indicateurEcartPromotion}
            indicateurSexeSurRepresente={indicateurTroisSexeSurRepresente}
            noteIndicateurTrois={noteIndicateurTrois}
            correctionMeasure={correctionMeasureIndicateurTrois}
          />
        </Fragment>
      )) || (
        <RecapitulatifIndicateurDeuxTrois
          indicateurDeuxTroisFormValidated={state.indicateurDeuxTrois.formValidated}
          effectifsIndicateurDeuxTroisCalculable={effectifsIndicateurDeuxTroisCalculable}
          indicateurDeuxTroisCalculable={indicateurDeuxTroisCalculable}
          indicateurEcartAugmentationPromotion={indicateurEcartAugmentationPromotion}
          indicateurEcartNombreEquivalentSalaries={indicateurEcartNombreEquivalentSalaries}
          indicateurSexeSurRepresente={indicateurDeuxTroisSexeSurRepresente}
          noteIndicateurDeuxTrois={noteIndicateurDeuxTrois}
          correctionMeasure={correctionMeasureIndicateurDeuxTrois}
          tauxAugmentationPromotionHommes={tauxAugmentationPromotionHommes}
          tauxAugmentationPromotionFemmes={tauxAugmentationPromotionFemmes}
          plusPetitNombreSalaries={plusPetitNombreSalaries}
        />
      )}
      <RecapitulatifIndicateurQuatre
        indicateurQuatreFormValidated={state.indicateurQuatre.formValidated}
        indicateurQuatreCalculable={indicateurQuatreCalculable}
        indicateurEcartNombreSalarieesAugmentees={indicateurEcartNombreSalarieesAugmentees}
        presenceCongeMat={state.indicateurQuatre.presenceCongeMat}
        nombreSalarieesPeriodeAugmentation={state.indicateurQuatre.nombreSalarieesPeriodeAugmentation}
        noteIndicateurQuatre={noteIndicateurQuatre}
      />
      <RecapitulatifIndicateurCinq
        indicateurCinqFormValidated={state.indicateurCinq.formValidated}
        indicateurSexeSousRepresente={indicateurCinqSexeSousRepresente}
        indicateurNombreSalariesSexeSousRepresente={indicateurNombreSalariesSexeSousRepresente}
        noteIndicateurCinq={noteIndicateurCinq}
      />
      <p>
        La simulation est terminée. Vous pouvez si vous le souhaitez déclarer ces indicateurs en renseignant d'autres
        informations. Il vous sera demandé un email valide pour pouvoir poursuivre.
      </p>
      <ActionBar>
        <ButtonSimulatorLink to="/informations-entreprise" label="poursuivre vers la déclaration" />
      </ActionBar>
      <ActionBar>
        <ButtonAction label="imprimer" outline={true} onClick={() => window.print()} />
        <span css={styles.info}>(possible d'enregistrer en PDF depuis la fenêtre d'impression)</span>
      </ActionBar>

      <a
        href="https://voxusagers.numerique.gouv.fr/Demarches/2240?&view-mode=formulaire-avis&nd_mode=en-ligne-enti%C3%A8rement&nd_source=button&key=73366ddb13d498f4c77d01c2983bab48"
        target="_blank"
        rel="noopener noreferrer"
        css={styles.monAvis}
      >
        <img
          src="https://voxusagers.numerique.gouv.fr/static/bouton-blanc.svg"
          alt="Je donne mon avis"
          title="Je donne mon avis sur cette démarche"
        />
      </a>
    </Page>
  )
}

const styles = {
  info: css({
    marginLeft: 4,
    fontSize: 12,
  }),
  monAvis: css({
    "@media print": {
      display: "none",
    },
  }),
}

export default Recapitulatif

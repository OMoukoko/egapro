import React, { ReactElement } from "react"
import { RouteComponentProps, withRouter } from "react-router-dom"

import ButtonLink from "./ButtonLink"
import TextLink from "./TextLink"

interface MatchParams {
  code: string
}

interface SimulatorLinkProps extends RouteComponentProps<MatchParams> {
  children: (to: string) => ReactElement
}

function SimulatorLink({
  children,
  match: {
    params: { code },
  },
}: SimulatorLinkProps) {
  return children(`/simulateur/${code}`)
}

const SimulatorLinkWithRouter = withRouter(SimulatorLink)

export default SimulatorLinkWithRouter

interface LinkProps {
  label: string
  to: string
}

export function ButtonSimulatorLink({ to, label }: LinkProps) {
  return (
    <SimulatorLinkWithRouter>
      {(toSimulator) => <ButtonLink to={`${toSimulator}${to}`} label={label} />}
    </SimulatorLinkWithRouter>
  )
}

export function TextSimulatorLink({ to, label }: LinkProps) {
  return (
    <SimulatorLinkWithRouter>
      {(toSimulator) => <TextLink to={`${toSimulator}${to}`} label={label} />}
    </SimulatorLinkWithRouter>
  )
}

// @flow

type Props = {
  name: string,
  age?: number,
}

export const getName = (props: Props): string => props.name

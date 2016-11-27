// @flow

type Props = {
  name: string,
  age?: number,
}

const getName = (props: Props): string => props.name

console.log(getName({ name: 'jack' }))
import { TextOption, ColorOption, LogoOption, StyleOption } from "./badge.d";

interface TextOptionInterface {
  front: string|false
  back: string|false
}

interface ColorOptionInterface {
  front: string|false
  back: string|false
  logo: string|false
}

interface BadgeOptionInterface {
  text?: TextOption
  color?: ColorOption
  logo?: LogoOption
  style?: StyleOption
}

export { TextOptionInterface, ColorOptionInterface, BadgeOptionInterface }
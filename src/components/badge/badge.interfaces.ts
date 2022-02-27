type BadgeStyleTypes = 'plastic' | 'flat' | 'flat-square' | 'for-the-badge' | 'social' | ''

interface TextOptionInterface {
  front?: string
  back?: string
}

interface ColorOptionInterface {
  front?: string
  back?: string
  logo?: string
}

export interface BadgeInterface {
  text?: TextOptionInterface
  color?: ColorOptionInterface
  logo?: string
  style?: BadgeStyleTypes
}

export { TextOptionInterface, ColorOptionInterface, BadgeStyleTypes }
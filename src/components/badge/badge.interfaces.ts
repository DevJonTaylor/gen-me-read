type Style = "plastic" | "flat" | "flat-square" | "for-the-badge" | "social" | string

interface TextOptionInterface {
  front: string|false
  back: string|false
}

interface ColorOptionInterface {
  front: string|false
  back: string|false
  logo: string|false
}

export interface BadgeInterface {
  text: { front: string, back: string }
  color: { front: string, back: string, logo: string }
  logo: string
  style: Style
}

export { TextOptionInterface, ColorOptionInterface }
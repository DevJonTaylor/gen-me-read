type Style = "plastic" | "flat" | "flat-square" | "for-the-badge" | "social" | string

interface TextOptionInterface {
  front: string
  back: string
}

interface ColorOptionInterface {
  front: string
  back: string
  logo: string
}

export interface BadgeInterface {
  text: { front: string, back: string }
  color: { front: string, back: string, logo: string }
  logo: string
  style: Style
}

export { TextOptionInterface, ColorOptionInterface }
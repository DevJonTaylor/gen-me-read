type styleParameters = 'plastic'|'flat'|'flat-square'|'for-the-badge'|'social'|boolean

interface colorOptions {
  front: string,
  back: string,
  logo: string
}

interface badgeOptions {
  frontText: string
  backText: string
  color: string|colorOptions
  logo: string|boolean
  style: styleParameters
}

declare class Badge {
  static get html(): Badge
  static get css(): Badge
  static get js(): Badge
  static bulma(version: string): Badge
  static bootstrap(version: string): Badge
  static webpack(version: string): Badge
  static babel(version: string): Badge

  static newBadgeOptions(badgeOptions): badgeOptions;

  constructor(badgeOptions)

  get toObject(): badgeOptions

  toString(): string
}
import { ColorOptionInterface, TextOptionInterface } from "./badge.interfaces";

declare type TextOption = TextOptionInterface|string|undefined
declare type ColorOption = string|ColorOptionInterface|undefined
declare type LogoOption = string|false|''|undefined
declare type StyleOption = false|'plastic'|'flat'|'flat-square'|'for-the-badge'|'social'|''|undefined

export { TextOption, ColorOption, LogoOption, StyleOption }
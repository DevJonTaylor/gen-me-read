import { BadgeInterface } from "./badge.interfaces";
import { writeFile, readFile } from 'fs/promises';

class Badge implements BadgeInterface {
  text = {front: '', back: ''}
  color = {front: '', back: '', logo: ''}
  logo = '';
  style = '';

  static get emptyBadge() {
    return new Badge({text: {front: '', back: ''}, color: {front: '', back: '', logo: ''}, style: '', logo: ''})
  }

  constructor({
                text = {front: '', back: ''},
                color = {front: '', back: '', logo: ''},
                style = '',
                logo = ''
              }: BadgeInterface) {
    this.text = text;
    this.color = color;
    this.style = style;
    this.logo = logo;
  }

  get qTextF(): string | boolean {
    return !this.text.front ? false : this.textUrlReplacement(this.text.front);
  }

  get qTextB(): string | boolean {
    return !this.text.back ? false : this.textUrlReplacement(this.text.back);
  }

  get qColorA(): string | boolean {
    return this.color.front !== '' ? `colorA=${this.color.front}` : false;
  }

  get qColorLogo(): string | boolean {
    return this.color.logo !== '' ? `logoColor=${this.color.logo}` : false;
  }

  get colorQueries(): string | boolean {
    const queries = [];

    if (this.qColorA) queries.push(this.qColorA);
    if (this.qColorLogo) queries.push(this.qColorLogo);
    return queries.length === 0 ? false : queries.join('&');
  }

  get qStyle(): string | boolean {
    switch (this.style.toLowerCase()) {
      case "plastic":
      case "flat":
      case "flat-square":
      case "for-the-badge":
      case "social":
      case '':
        return this.style ? `style=${this.style}` : false;
      default:
        throw new Error(`Badge style provide is not valid: '${this.style}'`);
    }

  }

  get qLogo(): string | boolean {
    return this.logo ? `logo=${this.logo}` : false;
  }

  get box(): string {
    return `![${this.text.front}]`
  }

  get url(): string {
    return `https://img.shields.io/badge/`
  }

  get textOfTwo() {
    const textPieces = [];
    if (this.qTextF) textPieces.push(this.qTextF);
    if (this.qTextB) textPieces.push(this.qTextB);

    return textPieces.length === 0 ? false : textPieces.filter(v => v !== false).join('-');
  }

  get queries() {
    const queryPieces = [this.colorQueries, this.qStyle, this.qLogo].filter(v => v !== false);
    return queryPieces.length === 0 ? '' : `?${queryPieces.join('&')}`;
  }

  get toMarkdown(): string {
    const theArguments = [this.textOfTwo, !this.color.back ? '333' : this.color.back].filter(v => v !== '');

    return [
      this.box, '(', this.url, theArguments.join('-'), this.queries, ')'
    ].filter(v => v !== '')
      .join('');
  }

  get toObject(): BadgeInterface {
    return {
      color: {
        back: this.color.back,
        front: this.color.front,
        logo: this.color.logo
      },
      logo: this.logo,
      style: this.style,
      text: {
        front: this.text.front,
        back: this.text.back
      }
    }
  }

  textUrlReplacement(str: string): string {
    return str
      .replaceAll('-', '--')
      .replaceAll('_', '__')
      .replaceAll(' ', '_')
  }

  toString(): string {
    return this.toMarkdown;
  }

  static async readDb(badgeName: string = ''): Promise<Array<Badge> | Badge | boolean> {
    const db = JSON.parse(await readFile('./saved-badges.json', 'utf8'));
    if (badgeName === '') return db;

    const badge: Array<Badge> = db.filter((badge: Badge) => {
      return badge.text.front.toLowerCase() === badgeName.toLowerCase();
    })

    return badge.length === 0 ? false : new Badge(badge[0]);
  }
}

export { Badge }
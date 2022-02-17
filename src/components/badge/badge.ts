import {BadgeOptionInterface } from "./badge.interfaces";
import { TextOption, ColorOption, LogoOption, StyleOption } from './badge.d';
import { htmlBadge, css3Badge, babelBadge, lodashBadge, bulmaBadge, javascriptBadge, webpackBadge } from "./saved-badges";

class Badge {
  static get html(): Badge {
    return new Badge(htmlBadge)
  }
  static badgeOption:BadgeOptionInterface = {text: '', color: '', style: false, logo: false};
  static get css(): Badge { return new Badge(css3Badge) }
  static get js(): Badge { return new Badge(javascriptBadge) }
  // static bulma(version: string): Badge {
  //   bulmaBadge.text.back = version;
  //   return new Badge(bulmaBadge);
  // }
  // static bootstrap(version: string): Badge {}
  // static webpack(version: string): Badge {}
  // static babel(version: string): Badge {}

  constructor({text, color, style, logo} = Badge.badgeOption) {}
}

export { Badge }
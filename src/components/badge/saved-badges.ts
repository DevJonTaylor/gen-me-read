import {BadgeOptionInterface, ColorOptionInterface} from "./badge.interfaces";

const frontColor = '333';

const logos = {
  html5: {
    name: 'html5',
    color: 'E34F26'
  },
  css3:
    {
      name: 'css3',
      color: '1572B6'
    },
  javascript:
    {
      name: 'javascript',
      color: 'F7DF1E'
    },
  bulma:
    {
      name: 'bulma',
      color: '00D1B2'
    },
  lodash:
    {
      name: 'lodash',
      color: '3492FF'
    },
  webpack:
    {
      name: 'webpack',
      color: '8DD6F9'
    },
  babel:
    {
      name: 'babel',
      color: 'F9DC3E'
    }
}

const htmlBadge: BadgeOptionInterface = {
  text: 'HTML',
  color: {
    front: frontColor,
    back: logos.html5.color,
    logo: logos.html5.color },
  logo: logos.html5.name,
  style: 'plastic'
}
const css3Badge: BadgeOptionInterface = {
  text: "CSS",
  color: {
    front: frontColor,
    back: logos.css3.color,
    logo: logos.css3.color
  },
  logo: logos.css3.name,
  style: "plastic"
}
const javascriptBadge: BadgeOptionInterface = {
  text: "JavaScript",
  color: {
    front: frontColor,
    back: logos.javascript.color,
    logo: logos.javascript.color
  },
  logo: logos.javascript.name,
  style: "plastic"
}
const bulmaBadge: BadgeOptionInterface = {
  text: {
    front: "Bulma",
    back: ''
  },
  color: {
    front: frontColor,
    back: logos.bulma.color,
    logo: logos.bulma.color
  },
  logo: logos.bulma.name,
  style: "plastic"
}
const lodashBadge: BadgeOptionInterface = {
  text: {
    front: "Bootstrap",
    back: ''
  },
  color: {
    front: frontColor,
    back: logos.lodash.color,
    logo: logos.lodash.color
  },
  logo: logos.lodash.name,
  style: "plastic"
}
const webpackBadge: BadgeOptionInterface = {
  text: {
    front: "Webpack",
    back: ''
  },
  color: {
    front: frontColor,
    back: logos.webpack.color,
    logo: logos.webpack.color
  },
  logo: logos.webpack.name,
  style: "plastic"
}
const babelBadge: BadgeOptionInterface = {
  text: {
    front: "Babel",
    back: ''
  },
  color: {
    front: frontColor,
    back: logos.babel.color,
    logo: logos.babel.color
  },
  logo: logos.babel.name,
  style: "plastic"
}


export { htmlBadge, css3Badge, javascriptBadge, bulmaBadge, lodashBadge, webpackBadge, babelBadge }
const badgeOptions = {
  frontText: '',
  backText: '',
  color: '',
  logo: false,
  style: false
}

class Badge {
  static get newBadgeOptions() {
    return {...badgeOptions};
  }

  static get html() {
    const optionEntries = ['HTML', '', 'E34F26', 'html', 'plastic']
    const options = this.newBadgeOptions;
    return new Badge()
  }
  static get css() {}
  static get js() {}
  static bulma(version) {}
  static bootstrap(version) {}
  static webpack(version) {}
  static babel(version) {}

  constructor({frontText, backText, color, logo, style} = badgeOptions) {

  }
}
import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers, misc } = markdown

const licenses = [
  ['Apache License, Version 2.0', 'Apache-2.0'],
  ['The 2-Clause BSD License', 'BSD-2-Clause'],
  ['The 3-Clause BSD License', 'BSD-3-Clause'],
  ['GNU General Public License version 2', 'GPL-2.0'],
  ['GNU General Public License version 3', 'GPL-3.0'],
  ['The MIT License', 'MIT'],
  ['Mozilla Public License 2.0 (MPL-2.0)', 'MPL-2.0'],
  ['Common Development and Distribution License 1.0', 'CDDL-1.0'],
  ['Eclipse Public License version 2.0', 'EPL-2.0'],
]

/**
 * This function creates a badge link.  It also creates a list question asking if the LICENSE file is inside the repo.
 * If the LICENSE file is not included inside the repo then a direct link to the license template will be used.
 * @param {string} license
 * @returns {Promise<string>}
 */
const badge = async (license) => {
  const answers = await QFactory.list(
    'location',
    'Is the LICENSE file already inside your repo?',
      list => list.newChoices(['Yes', 'No'])
  ).answers

  const shieldBadge = misc.image(
    `${license} Badge`,
    `https://img.shields.io/badge/license-${encodeURIComponent(license.replaceAll('-', '--'))}-00ff00`,
    `${license} Badge`
  )
  return misc.link(shieldBadge, answers.location === 'yes' ? './LICENSE' : `https://opensource.org/licenses/${license}`)
}

/**
 * This function creates a badge and the license section.
 * If no argument is passed it returns nothing and adds a list question asking which license they are using.
 * If none is selected an array with two empty strings will be returned.
 * If a license is selected it will return an array.  The first item is just the badge to be included in with the
 * Title/top section.  The second item will be the License section.
 * @param {string} [license]
 * @returns {Promise<Array<string>>}
 */
export default async function(license) {
  if(!license) {
    QFactory
      .list('license', 'Which license are you using?', list => {
      list.newChoice('none')
      for(const lic of licenses) {
        list.newChoice(lic[0], choice => choice.value(lic[1]))
      }
    })
  } else {
    if(license === 'none') return ['', '']
    switch(license) {
      case 'apache20':
        license = 'Apache-2.0'
        break;
      case 'bsd2Clause':
        license = 'BSD-2-Clause'
        break;
      case 'bsd3Clause':
        license = 'BSD-3-Clause'
        break;
      case 'gpl20':
        license = 'GPL-2.0'
        break;
      case 'gpl30':
        license = 'GPL-3.0'
        break;
      case 'mit':
        license = 'MIT'
        break;
      case 'mpl20':
        license = 'MPL-2.0'
        break;
      case 'cddl10':
        license = 'CDDL-1.0'
        break;
      case 'epl20':
        license = 'EPL-2.0'
        break;
    }
    const b = await badge(license)
    return [b, `${headers.h2('License')}${b}`]
  }
}
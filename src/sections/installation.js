import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 *
 * @param {string} [installation]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(installation) {
  if(!installation) QFactory.editor('installation', 'How do you install your project?')
  else return `${headers.h2('Installation')}${installation}`
}
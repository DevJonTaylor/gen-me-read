import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 *
 * @param {string} [usage]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(usage) {
  if(!usage) QFactory.editor('usage', 'How do you use your project?')
  else return `${headers.h2('Usage')}${usage}`
}
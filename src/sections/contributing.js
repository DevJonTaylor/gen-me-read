import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 *
 * @param {string} [contributing]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(contributing) {
  if(!contributing) QFactory.editor('contributing', 'How can someone contribute to your project?')
  else return `${headers.h2('Contributing')}${contributing}`
}
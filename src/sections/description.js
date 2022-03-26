import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 *
 * @param {string} [description]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(description) {
  if(!description) QFactory.editor('description', 'Describe your project')
  else return `${headers.h2('Description')}${description}`
}
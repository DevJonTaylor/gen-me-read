import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 * This function creates the Usage section.  If no argument is passed it will create a question to be asked the content
 * of the Usage section can be received from the user.  If the argument is passed it should be the user input.
 * @param {string} [usage]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(usage) {
  if(!usage) QFactory.editor('usage', 'How do you use your project?')
  else return `${headers.h2('Usage')}${usage}`
}
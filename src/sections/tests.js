import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 * This function creates the Tests section.  If no argument is passed it will create a question to be asked the content
 * of the Tests section can be received from the user.  If the argument is passed it should be the user input.
 * @param {string} [tests]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(tests) {
  if(!tests) QFactory.editor('tests', 'How do you run tests?')
  else return `${headers.h2('Tests')}${tests}`
}
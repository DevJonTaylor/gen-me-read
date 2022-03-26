import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 * If no argument is passed this function adds an editor question.
 * If the argument is included it will be the user input from the question and the Contributing section is created.
 * @param {string} [contributing]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(contributing) {
  if(!contributing) QFactory.editor('contributing', 'How can someone contribute to your project?')
  else return `${headers.h2('Contributing')}${contributing}`
}
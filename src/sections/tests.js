import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers } = markdown

/**
 *
 * @param {string} [tests]
 * @returns { void | string } Only returns if the argument is used.
 */
export default function(tests) {
  if(!tests) QFactory.editor('tests', 'How do you run tests?')
  else return `${headers.h2('Tests')}${tests}`
}
import markdown from 'markdown-builder'
import { snakeCase } from 'lodash'

const { headers, misc, lists } = markdown

const createHeaderLink = text => {
  return misc.link(text, `#${snakeCase(text)}`)
}

/**
 * This function adds a link for each section included and creates a Table Of Contents.
 * @param {ReadmeObject} sections
 * @returns {string}
 */
export default function(sections) {
  const toc = [];

  if(sections.description) toc.push(createHeaderLink('Description'))
  if(sections.installation) toc.push(createHeaderLink('Installation'))
  if(sections.usage) toc.push(createHeaderLink('Usage'))
  if(sections.tests) toc.push(createHeaderLink('Tests'))
  if(sections.contributing) toc.push(createHeaderLink('Contributing'))
  if(sections.questions) toc.push(createHeaderLink('Questions'))
  if(sections.license) toc.push(createHeaderLink('License'))

  return `${headers.h2('Table Of Contents')}${lists.ul(toc)}`
}
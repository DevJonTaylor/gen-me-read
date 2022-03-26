/**
 * @typedef {{
 *   top: string,
 *   tableOfContents?: string,
 *   description?: string,
 *   installation?: string,
 *   usage?: string,
 *   tests?: string,
 *   contributing?: string,
 *   questions?: string,
 *   license?: string,
 *   github?: string,
 *   email?: string
 * }} ReadmeObject
 */
import markdown from 'markdown-builder'
import { isArray } from 'lodash'
import QFactory from '../../lib/Questions/QFactory'
import { toc, description, installation, usage, tests, contributing, questions, license } from '../sections'
const { headers } = markdown

/**
 * @type ReadmeObject
 */
const readme = {}

/**
 * Creates the markdown for the README file
 * @return string
 */
const render = () => {
  const text = [readme.top]

  if(readme.tableOfContents) text.push(toc(readme))
  if(readme.description) text.push(readme.description)
  if(readme.installation) text.push(readme.installation)
  if(readme.usage) text.push(readme.usage)
  if(readme.tests) text.push(readme.tests)
  if(readme.contributing) text.push(readme.contributing)
  if(readme.questions) text.push(readme.questions)
  if(readme.license) text.push(readme.license)

  return text.join('')
}

/**
 *
 * @param { ReadmeObject | Array<string> } sections
 * @returns void
 */
const sortSections = async sections => {
  const isFirstTime = isArray(sections)

  for(const section of isFirstTime ? sections : Object.keys(sections)) {
    switch(section) {
      case 'tableOfContents':
        if(isFirstTime) readme.tableOfContents = 'present'
        break;
      case 'description':
        isFirstTime
          ? description()
          : readme.description = description(sections.description)
        break;
      case 'installation':
        isFirstTime
          ? installation()
          : readme.installation = installation(sections.installation)
        break;
      case 'usage':
        isFirstTime
          ? usage()
          : readme.usage = usage(sections.usage)
        break;
      case 'tests':
        isFirstTime
          ? tests()
          : readme.tests = tests(sections.tests)
        break;
      case 'contributing':
        isFirstTime
          ? contributing()
          : readme.contributing = contributing(sections.contributing)
        break;
      case 'questions':
      case 'email':
      case 'github':
        if(isFirstTime) questions()
        else if(!readme.questions) readme.questions = questions(sections.github, sections.email)
        break;
      case 'license':
        const licenseArray = await license(sections.license)
        readme.top += licenseArray[0]
        readme.license = licenseArray[1]
        break;
    }
  }
}

/**
 *
 * @param {{title: string, sections: Array<string>}} answers
 * @returns {Promise<string>}
 */
export default async function(answers) {
  readme.top = headers.h1(answers.title)
  await license()
  await sortSections(answers.sections)
  await sortSections(await QFactory.answers)

  return render()
}
import { step1, step2, step3, step4 } from './steps'

/**
 * TODO:  At least four license options and create a badge and the LICENSE document
 * TODO:  Questions should include a link to the users GitHub profile
 * TODO:  Questions should include the users email
 * TODO:  TOC should link to each section
 */

step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(console.log)
  .catch(console.error)
import QFactory from '../../lib/Questions/QFactory'
import markdown from 'markdown-builder'

const { headers, misc, lists } = markdown

/**
 * This section creates two input questions.  The first one is requesting the email and the section is the github
 * username.  The questions are only created if no argument is passed.  If the email is passed then it will create the
 * Question section.
 * @param {string} [email]
 * @param {string} [github]
 * @returns { void | string } Only returns if the first argument is used.
 */
export default function(email, github) {
  if(!email) {
    QFactory.input('email', 'What is your email address?', input => input.validateEmail)
    QFactory.input('github', 'What is your GitHub username?', input => input.isEmpty)
  }
  else {
    const contactList = lists.ul([
      'GitHub: ' + misc.link(`@${github}`, `https://github.com/${github}`),
      'Email: ' + misc.link(email, `mailto:${email}`)
    ])
    return `${headers.h2('Questions')}For additional questions you can reach me ${contactList}`
  }
}
import QFactory from '../../lib/Questions/QFactory'


export default async function() {
  const answers = await QFactory
    .input('title', 'What is the name of your project?')
    .checkbox('sections', 'What sections would you like to include?', sections => {
      sections
        .newChoice('Table of Contents', choice => {
          choice.checked
        })
        .newChoice('Description', choice => {
          choice.checked
        })
        .newChoice('Installation', choice => {
          choice.checked
        })
        .newChoice('Usage', choice => {
          choice.checked
        })
        .newChoice('Tests', choice => {
          choice.checked
        })
        .newChoice('Contributing', choice => {
          choice.checked
        })
        .newChoice('Questions', choice => {
          choice.checked
        })
    })
    .answers

  return answers
}
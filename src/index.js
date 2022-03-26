import { step1, step2, step3, step4 } from './steps'

step1()
  .then(step2)
  .then(step3)
  .then(step4)
  .then(() => console.log('README located at dist/README'))
  .catch(console.error)
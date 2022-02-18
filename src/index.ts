import { Badge } from './components/badge';

async function getBadges() {
  const babel = await Badge.readDb('babel');
  const bulma = await Badge.readDb('bulma');
  if(babel instanceof Badge && bulma instanceof Badge) {
    babel.text.back = 'v7.5';
    bulma.text.back = 'v1.14';
  }
  console.log([babel, bulma].join(''));
}

getBadges()
  .catch(console.log)

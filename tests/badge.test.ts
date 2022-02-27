import {Badge, BadgeInterface} from "../src/components/badge";
import { badgeToBe } from "./testing.tools";

interface BadgeArgumentsInterface {
  arg1?: string
  color1?: string
  arg2?: string
  logo?: string
  style?: string
  color2?: string
  logoColor?: string
}

function badgeArguments(...notThese: Array<string>): Array<string> {
  return ['arg2', 'color1'].filter(text => !notThese.includes(text))
}

function badgeQueries(...notThese: Array<string>): Array<string> {
  return ['style', 'color2', 'logo', 'logoColor'].filter(text => !notThese.includes(text));
}

function bootstrap(): BadgeArgumentsInterface
function bootstrap(badgeObject?: false): BadgeArgumentsInterface
function bootstrap(badgeObject?: true): BadgeInterface
function bootstrap(badgeObject: boolean = false): BadgeArgumentsInterface | BadgeInterface {
  return !badgeObject ?
    {
      arg1: 'Bootstrap',
      arg2: 'v4.17.21',
      color1: '7952B3',
      logo: 'bootstrap',
      style: 'plastic',
      color2: '333',
      logoColor: '7952B3'
    } :
    {
      text: { front: 'Bootstrap', back: 'v4.17.21' },
      color: { back: '7952B3', front: '333', logo: '7952B3' },
      style: 'plastic',
      logo: 'bootstrap'
    }
}

function createBadgeUrl(badgeArgs: BadgeArgumentsInterface) {
  const queries = [];
  if(badgeArgs.logo) queries.push(`logo=${badgeArgs.logo}`);
  if(badgeArgs.style) queries.push(`style=${badgeArgs.style}`);
  if(badgeArgs.color2) queries.push(`colorA=${badgeArgs.color2}`);
  if(badgeArgs.logoColor) queries.push(`logoColor=${badgeArgs.logoColor}`);


  return [
    'https://img.shields.io/badge/',
    badgeArgs.arg1,
    badgeArgs.arg2 ? '-' + badgeArgs.arg2 : '',
    badgeArgs.color1 ? '-' + badgeArgs.color1 : '',
    queries.length === 0 ?
      '' :
      `?${queries.join('&')}`
  ]
    .filter(text => text !== '')
    .join('')
}

function bootstrapUrl(keysToRemove: Array<string> | BadgeArgumentsInterface = []): string {
  if(!Array.isArray(keysToRemove))
    return createBadgeUrl({...bootstrap(), ...keysToRemove});

  const args = bootstrap();

  if(keysToRemove.length === 0) return createBadgeUrl(args);

  for(let key of keysToRemove) {
    switch(key) {
      case 'color1':
        delete args.color1;
        break;
      case 'arg2':
        delete args.arg2;
        break;
      case 'logo':
        delete args.logo;
        break;
      case 'style':
        delete args.style;
        break;
      case 'color2':
        delete args.color2;
        break;
      case 'logoColor':
        delete args.logoColor;
        break;
      default:
        break;
    }
  }

  if(!args.logo && args.logoColor) delete args.logoColor;

  return createBadgeUrl(args);
}

function bootstrapBadge(): Badge {
  return new Badge()
    .text('Bootstrap', 'v4.17.21')
    .color('333', '7952B3', '7952B3')
    .logo('bootstrap')
    .plastic();
}

function bootstrapCustomBadge(...keysToRemove: Array<string>): Badge {
  const emptyStringObject: BadgeInterface = bootstrap(true);

  for(let key of keysToRemove) {
    switch(key) {
      case 'arg2':
        if(emptyStringObject.text)
          emptyStringObject.text.back = ''
        break;
      case 'color1':
        if(emptyStringObject.color)
          emptyStringObject.color.back = '';
        break;
      case 'logo':
        emptyStringObject.logo = '';
        break;
      case 'style':
        emptyStringObject.style = '';
        break;
      case 'color2':
        if(emptyStringObject.color)
          emptyStringObject.color.front = '';
        break;
      case 'logoColor':
        if(emptyStringObject.color)
          emptyStringObject.color.logo = '';
        break;
      default:
        break;
    }
  }

  return Badge.objectToBadge(emptyStringObject);
}

function rotateArguments(cb: (arg: string) => void): void {
  for(let arg of badgeArguments()) cb(arg);
}

function rotateQueries(cb: (query: string) => void): void {
  for(let query of badgeQueries()) cb(query)
}

function createKey(...keys: Array<string>) {
  return keys.sort().join('');
}

/**
 * Ensures that the rendering is correct.
 */
function renderTest() {
  badgeToBe(bootstrapBadge(), bootstrapUrl());
}

/**
 * Checks the string interpolation of the Badge class
 */
function implementationTest() {
  const text1 = 'Simmer sweet steaks in a frying pan with ';
  const text2 = ' ricotta for about an hour to soothe their mossiness.';

  badgeToBe(text1 + bootstrapBadge() + text2, text1 + bootstrapUrl() + text2);
}

/**
 * Checks all six styles and ensures they are added correctly.
 * Then checks to ensure if the style is empty it removes it.
 */
function stylesTest() {
  const badge = bootstrapBadge();

  badgeToBe(badge.noStyle(), bootstrapUrl(['style']));
  badgeToBe(badge.social(), bootstrapUrl({ style: 'social' }));
  badgeToBe(badge.forTheBadge(), bootstrapUrl({ style: 'for-the-badge' }));
  badgeToBe(badge.flatSquare(), bootstrapUrl({ style: 'flat-square' }));
  badgeToBe(badge.flat(), bootstrapUrl({ style: 'flat' }));
  badgeToBe(badge.plastic(), bootstrapUrl({ style: 'plastic' }));
}

/**
 * Ensures that all three of the arguments are rendering regardless of the combination.
 * Argument 1 is required and must be included.
 *
 * 1. Argument 1
 * 2. Argument 1 & Right Color
 * 3. Argument 1 & Argument 2
 * 4. Argument 1, Argument 2, and Right Color
 */
function argumentCombinationTest() {
  badgeToBe(bootstrapCustomBadge(), bootstrapUrl());

  rotateArguments(arg => {
    badgeToBe(bootstrapCustomBadge(arg), bootstrapUrl([arg]));
  })

  badgeToBe(bootstrapCustomBadge(...badgeArguments()), bootstrapUrl(badgeArguments()))
}

/**
 * Ensuring that all query requests render properly regardless of the combination.
 *
 * 01. no queries
 * 02. logo
 * 03. color2
 * 04. logoColor (Should not render without logo)
 * 05. style
 * 06. logo & color2
 * 07. logo & logoColor
 * 08. logo & style
 * 09. logoColor & color2 (Should only render color2)
 * 10. logoColor & style (Should only render style)
 * 11. style & color2
 * 12. logoColor, color2, style (logoColor should not render)
 * 13. logoColor, logo, style
 * 14. logoColor, logo, color2
 * 15. logo, color2, style
 * 16. style, color2, logo, logoColor
 */
function queryCombinationsTest() {
  const testedCombinations = new Map();
  rotateQueries(query1 => {
    const removeThese = badgeQueries(query1);
    badgeToBe(bootstrapCustomBadge(...removeThese), bootstrapUrl(removeThese))
    rotateQueries(query2 => {
      const key1 = createKey(query1, query2);
      if(!testedCombinations.has(key1) && query1 !== query2) {
        const removeThese2 = badgeQueries(query1, query2)
        testedCombinations.set(key1, true);
        badgeToBe(bootstrapCustomBadge(...removeThese2), bootstrapUrl(removeThese2));
      }
      rotateQueries(query3 => {
        const key2 = createKey(query1, query2, query3);
        if(!testedCombinations.has(key2) && (query3 !== query1 && query3 !== query2)) {
          testedCombinations.set(key2, true);
          const removeThese3 = badgeQueries(query1, query2, query3);
          badgeToBe(bootstrapCustomBadge(...removeThese3), bootstrapUrl(removeThese3));
        }
      })
    })
  })

  badgeToBe(bootstrapCustomBadge(), bootstrapUrl());
  badgeToBe(bootstrapCustomBadge(...badgeQueries()), bootstrapUrl(badgeQueries()))
}

describe('Badge Class', () => {
  test('Rendering', renderTest);
  test('Implementation', implementationTest);
  test('Styles', stylesTest);
  test('Argument Combinations', argumentCombinationTest);
  test('Query Combinations', queryCombinationsTest);
});

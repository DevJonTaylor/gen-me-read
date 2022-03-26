import { readFile } from 'fs/promises'
import gradient from 'gradient-string'

/**
 * This function clears the screen and populates the splash screen.  It returns Promise no expected argument.
 * @returns {Promise<void>}
 */
export default async function() {
  console.clear()
  const splash = await readFile(`${__rootdir}/lib/figlet/splash`, 'utf8')
  console.log(gradient.retro.multiline(splash))
}
import { readFile } from 'fs/promises'
import gradient from 'gradient-string'

export default async function() {
  console.clear()
  const splash = await readFile(`${__rootdir}/lib/figlet/splash`, 'utf8')
  console.log(gradient.retro.multiline(splash))
}
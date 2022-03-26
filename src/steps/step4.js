import { writeFile } from 'fs/promises'

/**
 * Adds the markdown to the README file inside the dist.
 * @param {string} readme
 * @returns {Promise<void>}
 */
export default async function(readme) {
  await writeFile(`${__rootdir}/dist/README.md`, readme, 'utf8')
}
import { writeFile } from 'fs/promises'

export default async function(readme) {
  await writeFile(`${__rootdir}/dist/README.md`, readme, 'utf8')
}
const renderOrderedList = `   1. hello
   2. hello
   3. hello
   4. hello
`

const renderUnorderedList = `   - hello
   - hello
   - hello
   - hello
`

const nestedList = `   - hello
     - hi
     - hi
     - hi
   - hello
     - sup
       - homes
       - homes
       - homes
`

const listStrings = {
  renderOrderedList,
  renderUnorderedList,
  nestedList
}

export { listStrings }
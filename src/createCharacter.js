const createBackstory = require("./createBackstory")

const createCharacter = () => {
  return {
    name: "Buffy Summers",
    backstory: createBackstory(),
  }
}

module.exports = createCharacter

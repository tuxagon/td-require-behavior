const td = require("testdouble")
const assert = require("assert")

describe("", function() {
  afterEach(function () {
    td.reset()
  })

  describe("", function() {
    beforeEach(function() {
      this.createCharacter = td.replace("./createCharacter")

      this.subject = require("./createStory")
    })

    it("creates story", function() {
      td.when(this.createCharacter()).thenReturn({
        name: "Willow",
        backstory: "Witch",
      })

      const character = this.subject()

      assert.deepEqual(character, {
        name: "Willow",
        backstory: "Witch",
      })
    })
  })

  describe("", function() {
    beforeEach(function() {
      this.createBackstory = td.replace("./createBackstory")

      this.subject = require("./createStory")
    })

    it("creates backstory", function() {
      td.when(this.createBackstory()).thenReturn("Highschooler")

      const character = this.subject()

      assert.deepEqual(character, {
        name: "Buffy Summers",
        backstory: "Highschooler",
      })
    })
  })
})

const expect = require("chai").expect
const code = require("./code")

describe("Variables", () => {
  describe("initializing", () => {
    it("a numeric variable to hold a value of 42", () => {
      expect(code.age).to.eql(42)
    })

    it('a string variable to hold a value of "Joe"', () => {
      expect(code.name).to.eql("Joe")
    })

    it("a boolean variable set to true", () => {
      expect(code.true_value).to.be.true
    })

    it("a boolean variable set to false", () => {
      expect(code.false_value).to.be.false
    })

    it("an object variable", () => {
      expect(code.an_object).to.eql({
        age: code.age,
        name: code.name
      })
    })

    it("an empty array", () => {
      expect(code.empty_array).to.eql([])
    })

    it("a function", () => {
      expect(code.a_function).to.be.an("function")
    })

    it("an array of numbers", () => {
      expect(code.array_of_numbers).to.eql([1, 2, 3, 4])
    })

    it("an array strings", () => {
      expect(code.array_of_strings).to.eql(["1", "2", "3"])
    })

    it("an array of objects", () => {
      expect(code.array_of_objects).to.eql([code.an_object, code.an_object])
    })
  })
})

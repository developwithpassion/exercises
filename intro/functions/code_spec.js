const expect = require("chai").expect
const code = require("./code")

describe("Functions", () => {
  describe("defining", () => {
    it("a function that adds two numbers", () => {
      expect(code.add(2, 3)).to.equal(5)
    })

    it("a function that determines if a number is even", () => {
      expect(code.is_even(3)).to.be.false
      expect(code.is_even(4)).to.be.true
    })

    it("a function that builds a greeting", () => {
      expect(code.greet("JP")).to.eql("Hello there JP")
    })

    it("a function that accepts a function as an argument, which will be called with the arguments to the original function", () => {
      const value = Math.random()

      const my_function = x => {
        expect(value).to.equal(value)
      }

      code.trigger_function(my_function, value)
    })
  })
})

const expect = require("chai").expect
const code_with_no_exports = require("./code_with_no_exports")

describe("Importing code", () => {
  it("a file that exists but has no explicit exports just returns an empty object", () => {
    expect(code_with_no_exports).to.eql({})
  })
})

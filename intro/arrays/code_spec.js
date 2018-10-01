const expect = require("chai").expect
const code = require("./code")

const default_random_options = {
  min: 1,
  max: 100
}

const random_int = ({ min: min, max: max } = default_random_options) =>
  Math.floor(Math.random() * (max - min + 1)) + min

const generate_array = (number = random_int()) => {
  let results = new Array(number)

  for (let i = 0; i < results.length; i++) {
    results[i] = i + 1
  }

  return results
}

describe("Arrays", () => {
  let results

  beforeEach(() => {
    results = []
  })

  it("can iterate forward over the entire contents of an array", () => {
    let items = generate_array()

    code.each(val => {
      results.push(val)
    }, items)

    expect(results).to.have.ordered.members(items)
  })

  it("can iterate backwards over all items in the array", () => {
    let items = generate_array()

    code.each_in_reverse(val => {
      results.push(val)
    }, items)

    expect(results).to.have.ordered.members(items.reverse())
  })

  it("can map all of the elements in an array to another set of elements using a mapper function", () => {
    let items = [1, 2, 3, 4, 5]

    const mapper = x => x * 2

    results = code.map(mapper, items)

    expect(results).to.have.ordered.members([2, 4, 6, 8, 10])
  })

  it("can filter using a criteria", () => {
    let items = [1, 2, 3, 4, 5, 6]

    const is_even = x => x % 2 === 0

    results = code.filter(is_even, items)

    expect(results).to.have.ordered.members([2, 4, 6])
  })
})

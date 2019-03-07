module.exports = {
  age: 42,
  name: "Joe",
  true_value: true,
  false_value: false,
  get an_object() {
    return {
      age: this.age,
      name: this.name
    }
  },
  empty_array: [],
  a_function: function() {},
  array_of_numbers: [1, 2, 3, 4],
  array_of_strings: ["1", "2", "3"],
  get array_of_objects() {
    return [this.an_object, this.an_object]
  }
}

module.exports = {
  add: function(a, b) {
    return a + b
  },
  is_even: function(a) {
    return a % 2 == 0
  },
  greet: function(a) {
    return `Hello there ${a}`
  },
  trigger_function: function(callback, value) {
    return callback(value)
  }
}

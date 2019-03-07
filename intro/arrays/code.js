module.exports = {
  each: function(callback, items) {
    for (let i = 0; i < items.length; i++) {
      callback(items[i])
    }
  },

  each_in_reverse: function(callback, items) {
    for (let i = items.length - 1; i >= 0; i--) {
      callback(items[i])
    }
  },

  map: function(callback, items) {
    let results = []
    for (let i = 0; i < items.length; i++) {
      let result = callback(items[i])
      results.push(result)
    }
    return results
  },

  filter: function(callback, items) {
    let results = []

    for (let i = 0; i < items.length; i++) {
      if (callback(items[i]) == true) {
        results.push(items[i])
      }
    }

    return results
  }
}

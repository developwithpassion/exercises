const each = (action, items, i = 0) => {  // trying recursion as an alternative to using the "for" loop (as per our previous conversation)
  if (i === items.length) return
  action(items[i])
  each(action, items, i+1)
}

const each_in_reverse = (action, items, i = items.length - 1) => {
  if (i === -1) return
  action(items[i])
  each_in_reverse(action, items, i-1)
  }


const map = (mapper, items, traversal = each) => {
  let results = []

  traversal(x => {
    let result = mapper(x)
    results.push(result)
  }, items)

  return results
}

let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

console.log(map(x => x * 2, items))
console.log(map(x => x * 2, items, each_in_reverse))

// Create a function called filter. It should take the following 2 parameters:
//
//  criteria - A function that will be called with each item in the list. The result of this function will be a boolean value
//  items - The set of items to filter
//
//  It should return the set of items that match the criteria that was provided

const filter = (criteria, items) => {
  
  let results = []
  for (i = 0; i < items.length; i++) {
      if (criteria(items[i])) results.push(items[i])
    }
  return results
}
console.log(filter(x => x % 2 === 0, items))

// Running the above code should results in:
// [2,4,6,8,10,12,14,16]

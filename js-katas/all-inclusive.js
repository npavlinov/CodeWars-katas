function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
          return false
      }
    }
    return true
  }



// console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
// console.log(containAllRots("", []), true)
// console.log(containAllRots("", ["bsjq", "qbsj"]), true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
// console.log(containAllRots("12341234", ["DIeF", "IeFD", "12341234", "41234123", "34123412", "23412341"]), true)

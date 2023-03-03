// Fixed stale closure
function createIncrement(incBy) {
  let value = 0

  function increment() {
    value += incBy
    console.log(value)
  }

  function log() {  // log() is no longer stale closure
    const message = `Current value is ${ value }.`
    console.log(message)
  }

  return [increment, log]
}

const [increment, log] = createIncrement(1)
increment()  // 1
increment()  // 2
increment()  // 3
log()  // Current value is 3.

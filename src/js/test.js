/**
 * Created by x03771 on 2018/4/26.
 */
class proxyHandler {
  constructor () {
    this.TAG = 'proxy'
    this.validator = {
      set: function (obj, prop, value) {
        if (prop === 'age') {
          if (!Number.isInteger(value)) {
            throw new TypeError('The age is not an integer')
          }
          if (value > 200) {
            throw new RangeError('The age seems invalid')
          }
        }
        obj[prop] = value
      }
    }
  }
  validatorHandler (obj) {
    return new Proxy(obj, this.validator)
  }
}

const data = {age: 300}
let testProxy = new proxyHandler()
testProxy.validatorHandler(data)

export default proxyHandler

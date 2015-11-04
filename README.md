# ampersand-react-connector

A way to connect [Ampersand.js](https://ampersandjs.com) to React using a [Higher Order Component](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750) pattern instead of mixins.

It's still uses and depends on the methods defined in [ampersand-react-mixin](https://github.com/ampersandjs/ampersand-react-mixin) but provides a mixin-free way of adding the same functionality. Read the linked blog post about Higher Order Components if you want to learn more. 

## How to use it

```js
import ampConnector from 'ampersand-react-connector'
import React from 'react'

const MyComponent = React.createClass({
  const { myAmpersandModel } = this.props

  render () {
    return (
      <div>Hello, {myAmpersandModel.name}</div>
    )
  }
})

// By exporting through the connector
// any time `myAmpersandModel` changes, the
// component will be re-rendered.
export default ampConnector(MyComponent)

```

## License

[MIT](http://mit.joreteg.com)
---
title: React "Hello World" Examples
date: 2015-3-10
tags: [javascript, react]
---
Below are a small collection of React examples to get anyone started using React. They progress from simpler to more complex/full featured.

## First Step

Assuming you install React with Bower, you include React,
then the JSXTransformer which turns JSX into JavaScript 
and then your React code.

In production, you'll want to not use the JSXTransformer
and should instead look at using something like Gulp, Grunt or
WebPack to compile JSX into JavaScript. Also, [check out the tooling docs](http://facebook.github.io/react/docs/tooling-integration.html).


The `scripts.jsx` is where you link to your React code. Can be `.js` or `.jsx` extension, doesn't really matter.

```html
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Hello World</title>
  </head>
  <body>
    <script src="http://fb.me/react-0.12.2.min.js"></script>
    <script src="http://fb.me/JSXTransformer-0.12.2.js"></script>
    <script src="scripts.jsx" type="text/jsx"></script>
  </body>
</html>
```


## The Basics

The simplest React component ever.

It just renders an `<h1>` tag into the body of the page. Since
JSX is basically just HTML, you can use any valid tag you want.

```javascript
React.render(<h1>Hello World</h1>, document.body);
```


## Creating a component

The most simple component has a `render` method that returns some
JSX. `props` are attributes that are passed into the component 
when you instantiate it. 

One caveat is that `render` must return a single parent element;
you can't return multiple adjacent JSX tags but must wrap them
in one parent element.

```javascript
var HelloMessage = React.createClass({
  render: function () {
    return <h1>Hello {this.props.message}!</h1>;
  }
});

React.render(<HelloMessage message="World" />, document.body);
```


## Managing State

Sets the intial state of the component and then,
when a link is clicked, updates the state.

When the state updates, the component intelligently 
and efficiently re-renders.

Note that the `onClick` is the same as the JavaScript
`onClick` event handler. There are many common browser
events that are supported by React. See them all at:
http://facebook.github.io/react/docs/events.html

```javascript
var ToggleText = React.createClass({
  getInitialState: function () {
    return {
      showDefault: true
    }
  },
  
  toggle: function (e) {
    // Prevent following the link.
    e.preventDefault();
    
    // Invert the chosen default.
    // This will trigger an intelligent re-render of the component.
    this.setState({ showDefault: !this.state.showDefault })
  },
  
  render: function () {
    // Default to the default message.
    var message = this.props.default;
    
    // If toggled, show the alternate message.
    if (!this.state.showDefault) {
      message = this.props.alt;
    }
    
    return (
      <div>
        <h1>Hello {message}!</h1>
        <a href="" onClick={this.toggle}>Toggle</a>
      </div>
    );
  }
});

React.render(<ToggleText default="World" alt="Mars" />, document.body);
```


## Combining components together

The most fundamental and useful part of React is that
you can create any number of components and nest them
just like you would any HTML tag. You pass down data
to your components from parent components in a one-way
data flow.

*Note: If you use something like Flux/Reflux you have a bit
more power when it comes to data storage and event handling.
Using a Flux-like framework with React is very helpful but beyond
the scope of this article.*

```javascript
var ProductItem = React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
});

var ProductsList = React.createClass({
  render: function () {
    var products = _.map(this.props.products, function (product, index) {
      return (
        <ProductItem
          key={index}
          name={product.name}
          price={product.price}
        />;
      );
    });
    
    return (
      <table>
        {products}
      </table>
    );
  }
});

// Could come from an API, LocalStorage, another component, etc...
var products = [
  { name: 'Toast', price: 1499 },
  { name: 'Bacon', price: 3245 },
  { name: 'Coffee', price 300 }
];

React.render(<ProductList products={products} />, document.body);
```


## Whole Shebang

This example shows most of the commonly used React functionality including:

- Component lifecycle events
- Mixins
- Default props
- Prop validation
- Looping
- DOM refs
- Browser events

See more here lifecycle events here:
http://facebook.github.io/react/docs/component-specs.html

```javascript
/*
Mixins are just objects with properties that are merged with the compoent
they are included in. 

See: http://facebook.github.io/react/docs/reusable-components.html#mixins
*/
var MyMixin = {
  queryAPIorSomething: function (url, options, successCallback) {
    // Do some API magic here...
  },
  
  // This does not overwrite the components 
  // `componentWillUnmount` method but will
  // be called along side it.
  componetWillUnmount: function () {
    // Abort XHR request or something else...
  }
};


var WholeShebang = React.createClass({
  mixins: [MyMixin],
  
  propTypes: {
    // This will log a message on the console if 
    // items is not defined or if the wrong type
    // is supplied.
    items: React.PropTypes.array.isRequired
    
    // This will only log if the type is wrong.
    prefix: React.PropTypes.string
  },
  
  // Sane defaults for your component...
  getDefaultProps: function () {
    return {
      prefix: 'Hello'
    }
  },
  
  componentWillMount: function () {
    // Here you could setState, fetch data from a server or something else...
    this.queryAPIorSomething('path/to/api.json', {} , function (data) {
      this.setState({ data: data });
    }.bind(this));
  },
  
  componentDidMount: function () {
    // You now have access to the DOM:
    console.log(this.getDOMNode().html);
    
    // ... or to component references:
    console.log(this.refs.foobar.getDOMNode().html);
  },
  
  componentWillUpdate: function () {
    console.log('component about to update!');
  },
  
  componentDidUpdate: function () {
    console.log('component updated!');
    // DOM is available here...
  },
  
  componentWillUnmount: function () {
    // Use this to tear down any event listeners
    // or do other cleanup before the compoennt is
    // destroyed.
    console.log('component will unmount!');
  },
  
  shouldComponentUpdate: function () {
    // This is called when state/props changed and is 
    // an opportunity where you can return false if
    // you don't want the component to update for
    // some reason.
    return true;
  },
  
  toggle: function (e) {
    // Prevent following the link.
    e.preventDefault();
    
    // Invert the chosen default.
    // This will trigger an intelligent re-render of the component.
    this.setState({ showDefault: !this.state.showDefault })
  },
  
  render: function () {
    var items = _.map(this.props.items, function (item, index) {
      // Any time you construct a list of elements or components,
      // you need to set the `key` so React can more easily work
      // with the DOM.
      return <li key={index}>{item}</li>;
    });
    
    return (
      <div>
        <span ref="foobar">Show default: {this.state.showDefault}</span>
        <ul>
          {items}
        </ul>
        <a href="" onClick={this.toggle}>Toggle</a>
    </div>
    );
  }
});

React.render(
  <WholeShebang items=['Bob', 'Mary', 'Sally'] />,
  $('.some-place-in-the-dom').get(0) // Use jQuery to get a place on the page if you want...
);<F37>
```

## Going Further

- [React documentation](http://facebook.github.io/react/docs/getting-started.html)
- Flux architecture using [Reflux](https://github.com/spoike/refluxjs) (see [this blog post for more](http://spoike.ghost.io/deconstructing-reactjss-flux/))
- React routing with [react-router](https://github.com/rackt/react-router)
- My other Gist on using [React + Reflux + WebSockets](https://gist.github.com/danawoodman/fa6145ee35caae3cd0a2)

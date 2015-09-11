---
title: Use the "const" keyword for a quick FP win
date: 2015-07-20
---

If you want a quick way to enforce some FP (Functional Programming) in your JavaScript code then use the `const` keyword instead of `var` and `let`.

Using `const` will raise an exception if it's value is redefined, forcing you to create new variables instead of mutating existing ones.

Of course you'll need to be using something like [Babel](https://babeljs.io/) since this is a feature in ES6 (ES2015).

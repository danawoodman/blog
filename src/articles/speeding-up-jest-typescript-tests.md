---
title: Speeding up Jest Typescript tests
date: 2020-04-03
tags: [jest, testing, typescript, javascript]
---

In you `tsconfig.json`, make sure you ignore test files, like:

```js
{
  // ... rest of your tsconfig.json...
  "exclude": [
    "node_modules",
    "**/*.test.tsx?"
  ]
}
```

This will often drastically speed up your test runs.

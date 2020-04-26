---
title: How I Organize React Projects
date: 2020-04-26
tags: [react]
---

React is an incredibly powerful tool in that you can use it any way you like. The side effect of this, however, is that **you must make a lot of decisions yourself** as to how to use it and how to structure your React applications.

I've been working with React since 2014 and have written over 20 production applications in React and literally thousands of components. Through the years, I've tried nearly every convention under the sun but **I continually come back to the basics**. This short article will outline how I tend to go about structuring React applications and some rationale around these decisions. If my thinking evolves on this subject, I will attempt to keep this post updated to reflect my new thinking.

YMMV: In the end, there is no right choice and you should **pick what works best for your project and team**. Don't overthink this stuff 🤔.

## tl;dr

If you're an impatient type like me, here is the high level summary of what I tend to use in React applications, which boils down to the saying **KISS: keep it simple stupid**.

- Use a flat `src/components` directory structure for all components (no `containers`/`pages`/`screens`/etc folders)
- One folder per component which matches the name of the component (e.g. `Button`)
- An index file that exports a named export for the component.
- The component files named the same as the component (e.g. `Button.tsx`)
- All files prefixed with component name including tests, stories, CSS modules, etc.
- Any other assets/files needed for the component that aren't shared elsewhere also live along side the component, like images for example.

This has been working well for most medium to large React apps I've worked on across browser, Electron and React Native projects, even with dozens of components.

Keep reading for the rationale that went into these decisions.

## Flat `components` directory

I now prefer one flat structure for components even for things like "container components", "pages", and "scenes". In those cases, I just call the component something like `UserDetailPage` which makes it quite clear what the component represents without needing to make a decision as to where it needs to live.

Here is an example of how a directory following this convention could look like:

```markup
src/
  components/
    Button/
      index.ts <- exports component
      Button.tsx
      Button.test.tsx
      Button.story.tsx
      Button.module.css
    Logo/
      index.ts
      Logo.tsx
      Logo.test.tsx
      Logo.story.tsx
      Logo.module.css
      logo.svg
    etc...
```

One flat tree makes finding and importing things easier and **reduces the amount of decisions you have to make** when organizing your components.

I have found having separate folders just makes importing and finding things harder and also forces you to have to make a lot more decisions about where things should live which is often harder than it should be.

In additon, a flat structure makes renaming and importing slightly easier because you don't have to deal with inconsistent relative import paths as you would if you had components in a more complicated directory structure.

For projects with hundreds of components, this structure may fall apart, but I would argue that developers tend to use search to find things more than scrolling down a directly list, so I think the productivity impact is limited.

## File name conventions

Having the component file name match the component name **makes quickly finding the file in your editor easy**. For fuzzy search for example just type `"button story"` and you get `Button.story.tsx`.

Also, the `index.ts` file does a named export to get better editor import support:

```typescript
export { Button } from './Button'
```

Then you can import this component elsewhere in another component like:

```typescript
import { Button } from '../Button'
```

In my experience, editors like VSCode, handle this better than a `default` export because it ensures consistent naming of components when importing and editor knows exactly what to call the import.

This also makes it so you don't need to enable `allowSyntheticDefaultImports` in your `tsconfig.json` or do any `*` type imports, making your code a bit more idiomatic Typescript, which is a small win as well.

A final benefit is renaming, which becomes easier when all imports of a component are named exactly the same. **If you used default exports, the imported name could be anything**:

```typescript
import SomeObscureName from '../Button'
```

Now renaming becomes a lot more difficult and makes code harder to understand because of possible confusing import names.

## Internal components

Sometimes you need to refactor a complex component into a simpler one by abstracting it into more components. A lot of times, you can turn these components into more generic ones in which case you should move them to the `src/components` directory like all your other components.

However, sometimes it just doesn't make sense to abstract a component. In these cases, I tend to just include the component in the file as an unexported component which I use in the parent componet.

If I feel the component needs its own set of tests, then I will export it and import it into the main test file:

`ComplexComponent.tsx`:

```typescript
import React from 'react'

export function ComplexComponent() {
  return (
    <>
      {/* other stuf... */}
      <SomeHelperComponent />
    </>
  )
}

export function SomeHelperComponent() {
  return <>{/* some abstracted component... */}</>
}
```

Then in my `ComplexComponent.test.tsx`, I can import them like:

```typescript
import { ComplexComponent, SomeHelperComponent } from './ComplexComponent'
```

Since almost always I only want to export a single component from a component directory, I will not add this internal component to the `index.ts` file's exports.

## Using a generator

Obviously having this much structure for every component means if you're doing this manually it can become a pain.

So, to make this easier, I made a simple Yeoman generator to make components in this structure with a basic test file, Storybook story, etc.

This makes it a one-command step to have a new component with tests, stories and start styles and component structure. An additional benefit is it helps new developers get started quickly without having to learn a lot about how components are made. The newly created components are basically self-documenting most structural conventions automatically.

## Conclusion

Of course there are many ways to structure React applications and it will depend on the tools you're using (for example, Next.js and Gatsby have their own conventions).

That said, this has been working well on my team. Give it a shot in your own projects and let me know your thoughts!

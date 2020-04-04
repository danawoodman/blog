---
title: Shotgun intro to clojure
date: 2014-05-14
tags: [clojure]
draft: true
---

- lein is a pacakage management and task running tool, similar to Bundler/rake or pip/Fabric

Create a new clojure app with `lein new app my-app` where the first argument is the template to use. If you omit it, you will be setup with a library style project.

Running any `lein` command will automatically update your dependencies which means you don't need to remember to run Bundle after one of you collaborators updates a dependency.

Functions _must have arguments_.

https://github.com/technomancy/leiningen/blob/stable/doc/TUTORIAL.md

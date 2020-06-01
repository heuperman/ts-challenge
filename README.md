# TypeScript Challenge

This repo is ready to be migrated to TypeScript. The intention is to show you what it is like to go through the process and how to do so in steps.

## Getting started:

- Clone this repo
- Have a look at the ts-config file
- Run `npm install -save-dev typescript`
- Change logger.js to logger.ts

You should see a number of errors pop up immediately. None of these are TypeScript specific or linting errors, they were all runtimes errors that become visible thanks to TypeScript's static checking.

See if you can solve all the errors, then change cakeFactory.js to cakeFactory.ts and do the same.

## Adding types

By now we probably have something that works but doesn't do quite what we want yet. So let's start using types to make sure we've got our inputs and outputs right.

- In tsconfig.json, under `compilerOptions` add `"noImplicitAny": true`

This will bring up a lot of errors. Have a look at the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/basic-types.html) and see if you can add some basic types

Bonus points for creating an [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html) for logs.

Once that's done change `noImplicitAny` to `strict`. This will turn on all strict checking options. Fix any more errors that pop up.

## Reap the rewards

Now your factory should be bug free and ready to bake.

- Run `npm run start`

Enjoy your cake! 🍰

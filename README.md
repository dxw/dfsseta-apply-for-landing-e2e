# Apply for landing: end-to-end tests

This is a suite of [end-to-end tests](https://martinfowler.com/articles/practical-test-pyramid.html#End-to-endTests) for the dxw Apply for landing example apps, using [Playwright](https://playwright.dev/).

Our first implementation of the example app is the [Ruby implementation](https://github.com/dxw/dfsseta-apply-for-landing-ruby), and this implementation will serve as the model for others (Node, .NET, Kotlin/SpringBoot etc).

## Getting started

We strongly recommend using the [VS Code Playwright plugin](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) and use the plugin's commands.

### Prerequisites

- Node.JS
- NPM

### Setup

Install the dependencies with:

```bash
npm install
npm run install-playwright
```

### Environment variables

Add a `.env` file to the root of the project with the following variables:

```text
RUBY_IMPLEMENTATION_DEPLOYED_URL= # the url at which the Ruby deployed implementation is to be found
RUBY_IMPLEMENTATION_LOCAL_URL= # the url at which the local Ruby is to be found
```

## Running the tests

### Against the deployed environment

To run the tests locally against the deployed application environment, run the following command:

```bash
npm run test
```

or to run using the Playwright user interface:

```bash
npm run test:ui
```

### Against your local enviroment

Alternatively you can run the tests against your local environment with the following command:

```bash
npm run test:local
```

or to run using the Playwright user interface:

```bash
npm run test:local:ui
```


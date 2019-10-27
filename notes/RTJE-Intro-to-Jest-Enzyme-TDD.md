# Introduction to Jest, Enzyme & TDD

## It's Efficient

- Re-run tests "for free" after changes
- Better coverage
- Incremental approach to build projects

### Enzyme

- Allows you to search through the DOM using jQuery style selector

### Shallow Rendering

- Renders components one level deep
- Renders parent, but use placeholders for children

#### Shallow

```js
<div id="word-input-form">
  <p>Input Word Here!</p>
  <InputFieldComponent />
  <SubmitButtonComponent />
</div>
```

#### Mount

```js
<div id="word-input-form">
  <p>Input Word Here!</p>
  <div>
    <span>Enter some text</span>
    <input type="text" />
  </div>
  <button type="submit">Submit Data</button>
</div>
```

## Package Setup

- [`ajv` is an NPM package](https://www.npmjs.com/package/ajv). It's an acronym for Another JSON (Schema) Validator.
- [`jest` is a Javascript TESTing framework.](jestjs.io) Comes preloaded in `create-react-app`.
- [`enzyme` is a Javascript testing utility for React](https://www.npmjs.com/package/enzyme) that makes it easier to test your React Components' output. It has two parts
  - The library itself, `enzyme`
  - The adapter, which is dependent on the version of React used. As of Oct 2019, React is at 16.11, so we're using `enzyme-adapter-react-16`.
    - [Full version table.](https://www.npmjs.com/package/enzyme)
- [`jest-enzyme` helps with setup](https://www.npmjs.com/package/jest-enzyme) of the React testing environment for use with Jest.

In project root:

```
▶ npm i ajv
# installs ajv

▶ npm i --save-dev jest enzyme jest-enzyme enzyme-adapter-react-16
# installs jest, enzyme, jest-enzyme and the adapter for react 16+
```

## Adding Enzyme to `create-react-app`

### Imports

In `app.test.js`, we remove the `ReactDOM` import and add in its place:

```js
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
```

### Adapter Configuration
```js
Enzyme.configure({adapter: new Adapter()})
```

### Using `shallow`

We can bring `shallow` in by destructuring it from the `enzyme` import.

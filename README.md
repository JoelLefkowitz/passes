# Passes

Operations on sets of booleans.

![Review](https://img.shields.io/github/actions/workflow/status/JoelLefkowitz/passes/review.yaml)
![Version](https://img.shields.io/npm/v/passes)
![Downloads](https://img.shields.io/npm/dw/passes)
![Size](https://img.shields.io/bundlephobia/min/passes)
![Quality](https://img.shields.io/codacy/grade/4cffed43723349a9bdf86fcfbd0f974a)
![Coverage](https://img.shields.io/codacy/coverage/4cffed43723349a9bdf86fcfbd0f974a)

## Installing

```bash
npm install passes
```

## Motivation

The JavaScript standard is missing lots of standard operations on sets of booleans:

`all`

```ts
all([true, false]);
```

```json
false
```

`any`

```ts
any([true, false]);
```

```json
true
```

`passes`

```ts
passes([true, false]);
```

```json
1
```

## Documentation

Documentation and more detailed examples are hosted on [Github Pages](https://joellefkowitz.github.io/passes).

## Tooling

### Dependencies

To install dependencies:

```bash
yarn install
```

### Tests

To run tests:

```bash
yarn test
```

### Documentation

To generate the documentation locally:

```bash
yarn docs
```

### Linters

To run linters:

```bash
yarn lint
```

### Formatters

To run formatters:

```bash
yarn format
```

## Contributing

Please read this repository's [Code of Conduct](CODE_OF_CONDUCT.md) which outlines our collaboration standards and the [Changelog](CHANGELOG.md) for details on breaking changes that have been made.

This repository adheres to semantic versioning standards. For more information on semantic versioning visit [SemVer](https://semver.org).

Bump2version is used to version and tag changes. For example:

```bash
bump2version patch
```

### Contributors

- [Joel Lefkowitz](https://github.com/joellefkowitz) - Initial work

## Remarks

Lots of love to the open source community!

<div align='center'>
    <img width=200 height=200 src='https://media.giphy.com/media/osAcIGTSyeovPq6Xph/giphy.gif' alt='Be kind to your mind' />
    <img width=200 height=200 src='https://media.giphy.com/media/KEAAbQ5clGWJwuJuZB/giphy.gif' alt='Love each other' />
    <img width=200 height=200 src='https://media.giphy.com/media/WRWykrFkxJA6JJuTvc/giphy.gif' alt="It's ok to have a bad day" />
</div>

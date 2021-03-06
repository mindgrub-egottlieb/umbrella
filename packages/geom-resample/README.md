# @thi.ng/geom-resample

[![npm (scoped)](https://img.shields.io/npm/v/@thi.ng/geom-resample.svg)](https://www.npmjs.com/package/@thi.ng/geom-resample)
![npm downloads](https://img.shields.io/npm/dm/@thi.ng/geom-resample.svg)
[![Twitter Follow](https://img.shields.io/twitter/follow/thing_umbrella.svg?style=flat-square&label=twitter)](https://twitter.com/thing_umbrella)

This project is part of the
[@thi.ng/umbrella](https://github.com/thi-ng/umbrella/) monorepo.

<!-- TOC depthFrom:2 depthTo:3 -->

- [About](#about)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage examples](#usage-examples)
- [Authors](#authors)
- [License](#license)

<!-- /TOC -->

## About

Customizable nD polyline interpolation, re-sampling, splitting & nearest
point computation, Douglas-Peucker polyline / polygon simplifaction.

## Installation

```bash
yarn add @thi.ng/geom-resample
```

## Dependencies

- [@thi.ng/checks](https://github.com/thi-ng/umbrella/tree/master/packages/checks)
- [@thi.ng/geom-api](https://github.com/thi-ng/umbrella/tree/master/packages/geom-api)
- [@thi.ng/geom-closest-point](https://github.com/thi-ng/umbrella/tree/master/packages/geom-closest-point)
- [@thi.ng/math](https://github.com/thi-ng/umbrella/tree/master/packages/math)
- [@thi.ng/vectors](https://github.com/thi-ng/umbrella/tree/master/packages/vectors)

## Usage examples

```ts
import { resample, simplify } from "@thi.ng/geom-resample";

// resample polygon w/ uniform distance
const pts = resample([[0,0], [100,0], [100,100], [0,100]], { dist: 25 }, true)

// [ [ 0, 0 ], [ 25, 0 ], [ 50, 0 ], [ 75, 0 ],
//   [ 100, 0 ], [ 100, 25 ], [ 100, 50 ], [ 100, 75 ],
//   [ 100, 100 ], [ 75, 100 ], [ 50, 100 ], [ 25, 100 ],
//   [ 0, 100 ], [ 0, 75 ], [ 0, 50 ], [ 0, 25 ] ]

// simply polygon
// (epsilon = 0 only removes co-linear points, increase if necessary)
simplify(pts, 0, true)

// [ [ 0, 0 ], [ 100, 0 ], [ 100, 100 ], [ 0, 100 ] ]
```

## Authors

- Karsten Schmidt

## License

&copy; 2018 Karsten Schmidt // Apache Software License 2.0

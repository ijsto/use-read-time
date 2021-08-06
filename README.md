# use-read-time

> React Hook to estimate read time for a provided text.

[![NPM](https://img.shields.io/npm/v/use-read-time.svg)](https://www.npmjs.com/package/use-read-time) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-read-time
```

## Usage

```jsx
import React, { Component } from "react";

import { useReadTime } from "use-read-time";

const Example = () => {
  const example = useReadTime();
  return <div>{example}</div>;
};
```

## License

MIT © [ScottAgirs](https://github.com/ScottAgirs)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

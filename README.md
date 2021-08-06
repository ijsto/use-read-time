# use-read-time

> React Hook to estimate read time for a provided text.

[![NPM](https://img.shields.io/npm/v/use-read-time.svg)](https://www.npmjs.com/package/use-read-time) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-read-time
```

## Usage

```jsx
import { useReadTime } from "use-read-time";

const ExampleMinuteNumber = () => {
  const { readTime } = useReadTime({
    text: "Hello book with all but long paragraphs.",
  });

  console.log("ExampleMinuteNumber :: readTime", readTime); // 1

  return <h1>🤓 🔢</h1>;
};
```

```jsx
import { useReadTime } from "use-read-time";

const ExampleReadTimeLabel = () => {
  const { readTimeLabel } = useReadTime({
    text: "Hello book with all but long paragraphs.",
  });

  console.log("ExampleReadTimeLabel :: readTime", readTime); // Around 1 minute.

  return <h1>🤓 🏷️</h1>;
};
```

```jsx
import { useReadTime } from "use-read-time";

const ExampleReadTimeInfo = () => {
  const { readTimeLabel } = useReadTime({
    text: "Hello book with all but long paragraphs.",
  });

  console.log("ExampleReadTimeInfo :: readTimeInfo", readTimeInfo); // 1 min read

  return <h1>🤓 🗣</h1>;
};
```

### **API**

| Field | Type   | Description                                                                                  | Required | Default |
| ----- | ------ | -------------------------------------------------------------------------------------------- | -------- | ------- |
| text  | String | Text to calculate the amount of reading minutes for.                                         | yes      |         |
| speed | Enum   | `fast` (`240` wpm), `normal` (`180` wpm), `slow` (`100` wpm) - indicating the reading speed. | no       |         |
| wpm   | Int    | Number representing the word per minute to calculate the estimate time to read.              | no       | `180`   |

## License

MIT © [@ScottAgirs](https://ijs.to/u/scottagirs)

---

#### **Credits**

Package by [@ScottAgirs](https://ijs.to/u/scottagirs).

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

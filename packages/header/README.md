# Heading Tool


Provides Headings Blocks for the [Editor.js](https://ifmo.su/editor).

## Installation

Get the package

```shell
yarn add editorjs-plugin-header
```

Include module at your application

```javascript
import Header from 'editorjs-plugin-header';
```


## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    header: Header,
  },

  ...
});
```

## Shortcut

You can insert this Block by a useful shortcut. Set it up with the `tools[].shortcut` property of the Editor's initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    header: {
      class: Header,
      shortcut: 'CMD+SHIFT+H',
    },
  },

  ...
});
```

## Config Params

All properties are optional.

| Field        | Type       | Description                 |
| ------------ | ---------- | --------------------------- |
| placeholder  | `string`   | header's placeholder string |
| levels       | `number[]` | enabled heading levels      |
| defaultLevel | `number`   | default heading level       |

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    header: {
      class: Header,
      config: {
        placeholder: 'Enter a header',
        levels: [2, 3, 4],
        defaultLevel: 3
      }
    }
  }

  ...
});
```

## Tool's settings

You can select one of six levels for heading.

## Output data

| Field | Type     | Description                                      |
| ----- | -------- | ------------------------------------------------ |
| text  | `string` | header's text                                    |
| level | `number` | level of header: 1 for H1, 2 for H2 ... 6 for H6 |

```json
{
  "type": "header",
  "data": {
    "text": "Why Telegram is the best messenger",
    "level": 2
  }
}
```

# string-utils

TypeScript utility functions for trimming, padding, and truncating strings.

## Functions

### `trim(str, chars?)`
Removes whitespace (or custom characters) from both ends of a string.

### `trimStart(str, chars?)`
Removes whitespace (or custom characters) from the start of a string.

### `trimEnd(str, chars?)`
Removes whitespace (or custom characters) from the end of a string.

### `pad(str, length, fillChar?, align?)`
Pads a string to a fixed length. `align` can be `"start"`, `"end"` (default), or `"both"`.

### `truncate(str, maxLength, ellipsis?)`
Truncates a string from the end, appending `"..."` by default.

### `truncateMiddle(str, maxLength, ellipsis?)`
Truncates the middle of a string, keeping the start and end intact.

## Usage

```ts
import { trim, pad, truncate, truncateMiddle } from "./stringUtils";

trim("  hello  ");                        // "hello"
trim("--hello--", "-");                   // "hello"

pad("hi", 5);                             // "hi   "
pad("hi", 5, " ", "start");              // "   hi"
pad("hi", 6, " ", "both");              // "  hi  "

truncate("hello world", 8);              // "hello..."
truncateMiddle("hello world", 8);        // "hell...d"
```

## Testing

```bash
npm install
npm test
```

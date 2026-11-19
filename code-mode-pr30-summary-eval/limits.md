# Clamp Function: Bounds Validation

## Inverted Bounds Throw RangeError

The `clamp(value, min, max)` function enforces a strict constraint: **min must not exceed max**.

### Why This Matters

When bounds are inverted (min > max), the clamping operation becomes logically impossible:
- There is no valid range to constrain the value to
- The function cannot satisfy both constraints simultaneously
- Silently returning a value would mask a programming error

### Behavior

If `min > max`, the function throws a `RangeError`:

```javascript
const clamp = require('./clamp.cjs');

// Valid bounds
clamp(5, 0, 10);  // Returns 5

// Inverted bounds
clamp(5, 10, 0);  // Throws RangeError: min (10) cannot be greater than max (0)
```

### Error Message

The error message includes both the min and max values for debugging:

```
RangeError: min (10) cannot be greater than max (0)
```

This explicit error handling prevents subtle bugs where inverted bounds might silently produce unexpected results.

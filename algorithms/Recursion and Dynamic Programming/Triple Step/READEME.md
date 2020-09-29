# Triple Step

A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs

## Examples

2 steps -> 2 possible ways: {1,1}, {2}
3 steps -> 4 possible ways: {1,1,1}, {1,2}, {2,1}, {3}

## Solutions

```text
f(0) = 1
f(n) =
    n > 1 && f(n - 1)
  +
    n > 2 && f(n - 2)
  +
    n > 3 && f(n - 3)

return f(stepCount)
```

## References

1. Cracking the Coding Interview 6th Edition (page 342)

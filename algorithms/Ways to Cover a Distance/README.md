# Ways to Cover a Distance

## Solutions

```text
distance: number
steps: number[]
count = steps.length

f(0) => 1
f(n) => sum(
  f(n - steps[0]) if n >= steps[0],
  f(n - steps[1]) if n >= steps[1],
  ...,
  f(n - steps[count - 1]) if n >= steps[count - 1],
)

return f(distance)
```

## References

1. [[GeeksforGeeks] Count number of ways to cover a distance](https://www.geeksforgeeks.org/count-number-of-ways-to-cover-a-distance/)
2. [[GeeksforGeeks] Count number of ways to cover a distance | Set 2](https://www.geeksforgeeks.org/count-number-of-ways-to-cover-a-distance-set-2/)

## Related

1. Sum combination: the same problem
1. Coin Change Problem: similar problem but doesn't count combinations that differ only in order, e.g. [1, 2, 3] and [2, 3, 1] are considered 1 combination.

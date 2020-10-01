# Sum Combination

## Solutions

```text
total: number
numbers: number[]
count = numbers.length

f(0) => 1
f(n) => sum(
  f(n - numbers[0]) if n >= numbers[0],
  f(n - numbers[1]) if n >= numbers[1],
  ...,
  f(n - numbers[count - 1]) if n >= numbers[count - 1]
)

return f(total)
```

## References

1. [[GeeksforGeeks] How to solve a Dynamic Programming Problem ?](https://www.geeksforgeeks.org/solve-dynamic-programming-problem/)
1. [[GeeksforGeeks] Count of different ways to express N as the sum of 1, 3 and 4](https://www.geeksforgeeks.org/count-ofdifferent-ways-express-n-sum-1-3-4/)

## Related

1. Ways to Cover a Distance: the same problem
1. Coin Change Problem: similar problem but doesn't count combinations that differ only in order, e.g. [1, 2, 3] and [2, 3, 1] are considered 1 combination.

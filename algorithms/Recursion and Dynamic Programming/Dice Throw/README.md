# Dice Throw

Given n dice each with m faces, numbered from 1 to m, find the number of ways to get sum X. X is the summation of values on each face when all the dice are thrown.

## Solutions

```text
diceCount: number
faceCount: number
sum: number

f(0, 0) = 1
f(0, s) = 0
f(n, s) = sum(
  (s >= 1 && f(n - 1, s - 1)),
  (s >= 2 && f(n - 1, s - 2)),
  ...
  (s >= faceCount && f(n - 1, s - faceCount))
)
```

## References

1. [Dice Throw](https://www.geeksforgeeks.org/dice-throw-dp-30/)

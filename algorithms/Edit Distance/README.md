# Edit Distance

## Solutions

```text
s1: string
s2: string

f(0, n2) => n2
f(n1, 0) => n1
f(n1, n2) => s1[n1 - 1] === s2[n2- 1]
    ? f(n1 - 1, n2 - 1)
    : 1 + min(
      f(n1 - 1, n2),
      f(n1, n2 - 1),
      f(n1 - 1, n2 - 1),
    )

return f(s1.length, s2.length)
```

## References

1. [[GeeksforGeeks] Edit Distance](https://www.geeksforgeeks.org/edit-distance-dp-5/)

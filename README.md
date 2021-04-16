# iCue Gradient Helper
This is a script that lets you easily generate a gradient of hex colors you can enter in iCue.

## Installation
1. Clone the repo
2. Install dependencies with `npm i`

## Usage
```npm run gradient FROM TO SEGMENTS```

- `FROM` and `TO` are the bounds of the gradient

- `SEGMENTS` is the number of segments in the gradient

### Example
#### Input:

```npm run gradient 000000 ffffff 10```

#### Output:
```
000000
1c1c1c
393939
555555
717171
8e8e8e
aaaaaa
c6c6c6
e3e3e3
ffffff
```

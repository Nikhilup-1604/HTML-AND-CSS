// Understanding about call stack

const multiply = (x,y) => x * y;
const square = (x) => x * x;

const isRightTriangle = (a,b,c) => (
    square(a) + square(b) === square(c)
)
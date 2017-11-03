// http://www.geeksforgeeks.org/find-n-th-term-sequence-1-1-2-1-2-3-1-2-3-4/
const findNumb = (position, i = 1) => position - i <= 0 ? position : findNumb(position - i, i + 1);

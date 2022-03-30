# Pipe
You can use the pipe operator to transform any value using a sequence of functions. The flow of control can be modelled as follows. The first function's return will be the params for the next functions in the flow such as below:

A -> (A->B) -> (B->C) -> (C->D)

# 学习资料：
https://rlee.dev/practical-guide-to-fp-ts-part-1

## Practice1: 
Implement given we have a number we need to add 1 to this number then multiple the result with 24 with the pipe functions.

## Practice2: 
Refactor the code with the pipe
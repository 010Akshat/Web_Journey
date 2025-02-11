/* This whole code is a comment.  Refer To copy for this.

1. In this video , we will understand how Js program executes and how call stacks are maintained for function calls.
Diagrams are in copy
The working of the JavaScript works on three phases:
1. Global Execution Context
2. Function Execution Phase

Phase 1: Global Execution Context
The value of `this` keyword is set to Global Execution Context (which is an empty Object in NODE environment, & window object in browser environment)

Phase 2 : FUnction Execution Phase
sub phase 1: Memory phase
During this phase, JS engine scans the code and assigns the initial values for the variables , functions, etc.. For variables they are 'undefined' and for functions they are set to their function definition

sub phase 2: Execution phase
After the creation phase completed, the execution phase begins where actual values of the variables are set. And when the functions are called it creates a new 'Function Execution' context which consists of two phases (they works same as explained above but only for the particular function scope):
1. Memory phase 
2. Execution phase 
The return value of the 'Function Execution' context is passed to the Global Execution Context  */

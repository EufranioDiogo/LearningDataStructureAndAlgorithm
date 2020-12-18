```js
class Stack {
    constructor(size) {
        this.stackArray = new Array(size);
        this.topStack = 0;
        this.totalSize = size;
    }

    push(item) {
        if (this.topStack < this.totalSize) {
            this.stackArray[this.topStack] = item;
            this.topStack++;
            return true;
        }
        return false;
    }

    pop() {
        if (this.topStack > 0) {
            let aux = this.stackArray[this.topStack - 1];
            this.topStack--;

            return aux;
        }
        return null;
    }

    peek() {
        if (this.topStack > 0) {
            return this.stackArray[this.topStack - 1];
        }
    }

    size() {
        return this.topStack;
    }

    isEmpty() {
        return this.topStack == 0;
    }
}
```

<h1>Algorithm Analise</h1>

<h3>Constructor</h3>
In the constructor we have 3 instructions one the set the size of the internal Array, other to set top of the Stack that will be the form that we will track where to put the new value or if the Stack is full and we can't add anything, and the last variable will only store the limited size of Stack.

After this description we can say that we will have every time that we create a Stack we will execute the same amount of time to create the array, initialize the topStack and the totalSize. Because of it we can say that the time complexity of this constructor is **O(n)**.

<h3>Push</h3>
Let's analise it, at the first line of the function(method) we verify if the topStack is less than the totalSize, if it's true it means that the stack or the array that is playing the role of the stack is not full of value.

You may ask, why it's true? By doing this comparation we can notice that the stack if full?

Think wi me please, if we start our stack with the size of 3 our topStack variable will have the value of 0 and when we add new element to the stack we will compare if 0 is less than 3 and if it's true we gonna enter at the if block where we say stackArray at pos topStack insert the value(let assume that it's 0) and after that we add the topStack to 1 and when we insert onether value we will do the same thing, we will compare if 1 is less than 3 and insert the value at the pos 1 of our stackArray and increment the value of stackTop and when we do another insertion to our stack we gonna compare if 2 is less than 3 and it's one more time we insert the value at the pos of the stackTop our variable that's pointing to next index to insert the new value that is pointing now to 2 and we insert the value and increment it, after this our stackTop will have the value of the 3 and now when we try to insert onether value we will compare 3 is less than 3 and it's not, and we will return false, simple as it's.

Basically I explained how the insertion method of the stack will work, and let's analise the time complexity of it.

first we have a comparation that will cost to us a constant time and after that we gonna have a insertion to the stackArray variable at a especific index and this operation will also take a constant time too, and after this we will increment the stackTop and we will return true those operation will cost to me a constant time to each, let's say that our constant time is 1. And if we sum the cost of each operation to make the total cost we gonna have: 1 + 1 + 1 + 1 = 4, the first 1 is comparation the second 1 is the insertion of the value in the stackArray and the other if the incrementation of the topStack and the last one is the return of true athe total will be 4 and it will happen to every insertion in the Stack. 

<h3>Pop</h3>
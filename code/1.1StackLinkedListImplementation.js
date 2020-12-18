class Node {
    constructor(item) {
        this.data = item;
        this.previousElement = null;
    }
}

class Stack {
    constructor() {
        this.stackTop = null;
        this.totalSize = 0;
    }

    push(item) {
        let newElement = new Node(item);

        if (this.isEmpty()) {
            this.stackTop = newElement;
        } else {
            newElement.previousElement = this.stackTop;
            this.stackTop = newElement;
        }
        this.totalSize++;
    }

    pop() {
        if (!this.isEmpty()) {
            let aux = this.stackTop.data;
            this.stackTop = this.stackTop.previousElement;

            this.totalSize--;
            return aux;
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.stackTop.data;
        }
    }

    size() {
        return this.totalSize;
    }

    isEmpty() {
        return this.stackTop == null;
    }
}


function recursiveRemove(stack) {
    if (stack.size() != 0) {
        let aux = stack.pop();
        recursiveRemove(stack);
        console.log(aux);
    }
}

let stack = new Stack();


console.log(stack.isEmpty())
stack.push(5);
stack.push(3);
stack.pop();
stack.push(2);
stack.push(8);
stack.pop();
stack.pop();
stack.push(9);
stack.push(1);
stack.pop()
stack.push(7);
stack.push(6);
stack.pop()
stack.pop()
stack.push(4);
stack.pop()
stack.pop()

console.log(stack.isEmpty())

while(stack.size() > 0) {
    console.log(stack.pop());
}

console.log(stack.isEmpty())
console.log("Recursive Remove");

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
recursiveRemove(stack);
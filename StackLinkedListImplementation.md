```js
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
        return null;
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
```
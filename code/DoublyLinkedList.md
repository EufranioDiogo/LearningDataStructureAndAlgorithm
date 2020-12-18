```js
class Node {
    constructor(item) {
        this.previous = null;
        this.data = item;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(item) {
        let newItem = new Node(item);

        if (this.isEmpty()) {
            this.head = newItem;
            this.head.next = this.head;
            this.head.previous = this.head;
            this.tail = this.head;
        } else {
            newItem.next = this.head;
            newItem.previous = this.tail;
            this.tail.next = newItem;
            this.head.previous = newItem;
            this.tail = newItem;
        }
        this.size++;
    }
    isEmpty() {
        return this.size == 0;
    }
    getSize() {
        return this.size;
    }
    printList() {
        if (!this.isEmpty()) {
            let outputString = '';
            outputString += this.head.data + ' -> ';
            let auxNode = this.head.next;

            while(auxNode != this.head) {
                outputString += auxNode.data + ' -> ';
                auxNode = auxNode.next;
            }
            console.log(outputString);
        }
    }
}

function printReverseOrder(list) {
    if (list.head) {
        let outputString = list.tail.data + ' -> ';
        let auxNode = list.tail.previous;

        while (auxNode != list.tail) {
            outputString += auxNode.data + ' -> ';
            auxNode = auxNode.previous;
        }
        console.log(outputString);
    }
}

function insertBegin(item, list) {
    let newNode = new Node(item);

    newNode.next = list.head;
    newNode.previous = list.tail;
    list.head.previous = newNode;
    list.tail.next = newNode;
    list.head = newNode;
    list.size++;
}


function insertEnd(item, list) {
    let newNode = new Node(item);

    newNode.previous = list.tail;
    newNode.next = list.head;
    list.tail.next = newNode;
    list.head.previous = newNode;
    list.tail = newNode;
    list.size++;
}

function insertMiddle(item, index, list) {
    if (list.head) {
        if (index > list.getSize()) {
            insertEnd(item, list);
        } else {
            if (index == 1) {
                insertBegin(item, list);
            } else {
                let newNode = new Node(item);
                let auxNode = list.head;
                index -= 1;

                while (index > 0) {
                    auxNode = auxNode.next;
                    index--;
                }

                newNode.next = auxNode;
                newNode.previous = auxNode.previous;
                auxNode.previous.next = newNode;
                auxNode.previous = newNode;
                list.size++;
            }
        }
    }
}

function removeBegin(list) {
    let auxData = null;
 
    if(list.head) {
        auxData = list.head.data;

        if (list.getSize() == 1) {
            list.head = null;
            list.tail = null;
        } else {
            list.head = list.head.next;
            list.head.previous = list.tail;
            list.tail.next = list.head;
        }

        list.size--;
    }
    return auxData;
}

function removeEnd(list) {
    let auxData = null;
 
    if(list.head) {
        auxData = list.tail.data;

        if (list.getSize() == 1) {
            list.head = null;
            list.tail = null;
        } else {
            list.tail = list.tail.previous;
            list.tail.next = list.head;
            list.head.previous = list.tail;
        }

        list.size--;
    }
    return auxData;
}


function removeMiddle(index, list) {
    let auxData = null;

    if (list.head) {
        if (index >= list.getSize()) {
            auxData = removeEnd(list);
        } else {
            if (index == 1) {
                auxData = removeBegin(list);
            } else {
                let auxNode = list.head;
                index -= 1;

                while (index > 0) {
                    auxNode = auxNode.next;
                    index--;
                }

                auxData = auxNode.data;

                auxNode.previous.next = auxNode.next;
                auxNode.next.previous = auxNode.previous;
                
                list.size--;
            }
        }
    }
    return auxData;
}

function findMaximum(list) {
    if (list.head) {
        let maxium = list.head.data;
        let auxNode = list.head.next;

        while(auxNode != list.head) {
            if (auxNode.data > maxium) {
                maxium = auxNode.data;
            }
            auxNode = auxNode.next;
        }
        return maxium;
    }
}


let doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.add(1);
doublyLinkedList.add(2);
doublyLinkedList.add(3);
doublyLinkedList.add(4);
doublyLinkedList.add(5);

doublyLinkedList.printList();

console.log('Printing the list in reverse order: ');
printReverseOrder(doublyLinkedList);

console.log('Inserting 2 at the begin of the list: ');
insertBegin(2, doublyLinkedList);
doublyLinkedList.printList();

console.log('Inserting -15 at the END of the list: ');
insertEnd(-15, doublyLinkedList);
doublyLinkedList.printList();

console.log('Inserting at pos 6 the value "Eufránio" of the list: ');
insertMiddle('Eufránio', 6, doublyLinkedList);
doublyLinkedList.printList();

console.log('Remove item at the begin of the list: ');
removeBegin(doublyLinkedList);
doublyLinkedList.printList();

console.log('Remove item at the end of the list: ');
removeEnd(doublyLinkedList);
doublyLinkedList.printList();

console.log('Remove item at the pos 5 of the list: ');
removeMiddle(5, doublyLinkedList);
doublyLinkedList.printList();

console.log('Find Maximum:');
console.log(findMaximum(doublyLinkedList));
```
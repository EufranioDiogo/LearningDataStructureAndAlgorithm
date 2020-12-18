```js
class Node {
   constructor(item) {
      this.data = item;
      this.next = null;
   }
}

class SinglyLinkedList1 {
   constructor() {
      this.head = null;
      this.size = 0;
   }

   add(item) {
      let newNode = new Node(item);

      if (this.size == 0) {
         this.head = newNode; 
      } else {
         let auxNode = this.head;

         while(auxNode.next != null) {
            auxNode = auxNode.next;
         }
         auxNode.next = newNode;
      }
      this.size++;
   }

   printElements() {
      if (this.size != 0) {
         let auxNode = this.head;
         let outputString = ''

         while(auxNode != null) {
            outputString += `${auxNode.data} -> `;
            auxNode = auxNode.next;
         }
         console.log(outputString)
      }
   }

}

function orderSinglyLinkedList(list) {
   if (list != null) {
       let quantNodes = 0;
       let auxNodeTrasverse = list.head;

       while(auxNodeTrasverse != null) {
           quantNodes += 1;
           auxNodeTrasverse = auxNodeTrasverse.next;
       }

       let auxArray = new Array(quantNodes);
       let i = 0;
       auxNodeTrasverse = list.head;

       while(i < quantNodes) {
           auxArray[i] = auxNodeTrasverse.data;
           auxNodeTrasverse = auxNodeTrasverse.next;
           i++;
       }

       i = 0;
       let flagSwap = false;
       let auxSwap;

       for (; i < auxArray.length - 1; i++) {
           min_index = i;

           for(let j = i + 1; j < auxArray.length; j++) {
               if(auxArray[min_index] > auxArray[j]) {
                   min_index = j;
                   flagSwap = true;
               }
           }
           if(flagSwap == true) {
               auxSwap = auxArray[i];
               auxArray[i] = auxArray[min_index];
               auxArray[min_index] = auxSwap;
           }
           flagSwap = false;
       }

       i = 1;
       list.head = new Node(auxArray[0]);
       list.head.next = null;
       let auxNode = list.head;

       for (; i < quantNodes; i++) {
           auxNode.next = new Node(auxArray[i]);
           auxNode = auxNode.next;
       }
   }
}

function printReverseLinkedList(head) {
   /*
   if (head != null) {
      let outputString = '';
      let aux = head;

      while(aux != null) {
         outputString = aux.data + ' -> ' + outputString;
         aux = aux.next;
      }
      console.log(outputString)
   }*/

   if (head != null) {
      let aux = head;
      let quantNodes = 0;

      while(aux != null) {
         quantNodes++;
         aux = aux.next;
      }

      aux = head;
      let stack = new Array(quantNodes);
      let stackTop = 0;

      while(stackTop < quantNodes) {
         stack[stackTop] = aux.data;
         aux = aux.next;
         stackTop++;
      }

      while(stackTop > 0) {
         console.log(stack[stackTop - 1], '->',);
         stackTop--;
      }
   }
}

function insertAtTheBeginning(newItem, list) {
   if (list) {
      let newNode = new Node(newItem);

      if (list.head != null){
         newNode.next = list.head;
      }
      list.head = newNode;
   }
}

function insertAtTheEnd(newItem, list) {
   if (list) {
      let newNode = new Node(newItem);
      

      if (list.head == null) {
         list.head = newNode;
      } else {
         let auxNode = list.head;

         while(auxNode.next != null) {
            auxNode = auxNode.next;
         }
         auxNode.next = newNode;
      }
   }
}

function insertAtTheMiddle(newItem, index, list) {
   if (list) {
      let newNode = new Node(newItem);

      if (list.head == null) {
         list.head = newNode;
      } else {
         let auxNode = list.head;
         index -= 1;
         if (index == 0) {
            newNode.next = list.head;
            list.head = newNode;
         } else {
            let previousNode;

            while(index > 0) {
               previousNode = auxNode;
               auxNode = auxNode.next;
               index--;
            }
            previousNode.next = newNode;
            newNode.next = auxNode;
         }
      }
   }
}

function removeFront(list) {
   if (list.head) {
      let auxData = list.head.data;

      list.head = list.head.next;
      return auxData;
   }
}

function removeMiddle(index, list) {
   if (list.head) {
      index -= 1;
      let auxData;

      if (index == 0) {
         auxData = list.head.data;
      } else {
         let previousNode;
         let auxNode = list.head;

         while (index > 0) {
            previousNode = auxNode;
            auxNode = auxNode.next;
            index--;
         }
         auxData = auxNode.data;
         previousNode.next = auxNode.next;
      }
      return auxData;
   }
}

function removeBack(list) {
   if (list.head) {
      let auxData;
      let previousNode = null;
      let auxNode = list.head;

      while (auxNode.next != null) {
         previousNode = auxNode;
         auxNode = auxNode.next;
      }

      auxData = auxNode.data;

      if (previousNode == null) {
         list.head = null;
      } else {
         previousNode.next = null;
      }
      return auxData;
   }
}

function searchElement(element, list) {
   if (list.head) {
      let auxNode = list.head;

      while (auxNode != null) {
         if(auxNode.data == element) {
            return true;
         }
         auxNode = auxNode.next;
      }
      return false;
   }
}


let list = new SinglyLinkedList1();

list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);

list.printElements();
orderSinglyLinkedList(list);
list.printElements();

console.log('Print inverse order: ');
printReverseLinkedList(list.head);

console.log('Insert new Number at the front of the list: ');
insertAtTheBeginning(0, list);
list.printElements();

console.log('Insert new Number at the back of the list: ');
insertAtTheEnd(0, list);
list.printElements();

console.log('Insert new Number at the front of the list: ');
insertAtTheMiddle(10, 3, list);
list.printElements();

console.log('Order list')
orderSinglyLinkedList(list);
list.printElements();

console.log('Remove from front 2 times: ')
removeFront(list);
removeFront(list);
list.printElements();

console.log('Remove the element in position 2: ')
removeMiddle(2, list);
list.printElements();

console.log('Remove From back times: ')
removeBack(list);
list.printElements();

console.log('Search the number 3 on the list: ')
console.log('Result: ', searchElement(3, list));
```
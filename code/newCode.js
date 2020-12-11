class Node {
   constructor(item) {
      this.data = item;
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.head = null;
   }
   add(item) {
      let newNode = new Node(item);

      if (this.isEmpty()) {
         this.head = newNode;
      } else {
         let auxNode = this.head;

         while (auxNode.next != null) {
            auxNode = auxNode.next;
         }
         auxNode.next = newNode;
      }
   }
   remove() {
      let dataAux = null;

      if (this.head) {
         dataAux = this.head.data;
         this.head = this.head.next;
      }
      return dataAux;
   }
   size() {
      let counter = 0;

      if (!this.isEmpty()) {
         let auxNode = this.head;

         while(auxNode) {
            auxNode = auxNode.next;
            counter += 1;
         }
      }
      return counter;
   }
   printList() {
      let outputString = '';

      if (!this.isEmpty()) {
         let auxNode = this.head;

         while(auxNode) {
            outputString += auxNode.data + ' -> ';
            auxNode = auxNode.next;
         }
      }
      console.log(outputString)
   }
   isEmpty() {
      return this.head == null;
   }
}

let list = new SinglyLinkedList();

list.add(5);
list.add(4);
list.add(3);
list.add(2);
list.add(1);
list.printList();
list.remove();
list.printList();
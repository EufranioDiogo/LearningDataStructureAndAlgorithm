class Node {
   constructor(item) {
      let data = item;
      let nextNode = null;
   }
}

class SinglyLinkedList {
   constructor() {
      let head = null;
   }

   add(item) {
      let newNode = Node(item);

      if (this.isEmpty()) {
         this.head = newNode;
      } else {
         let auxNodeTraverse = this.head;

         while (auxNodeTraverse.nextNode != null) {
            auxNodeTraverse = auxNodeTraverse.nextNode;
         }
         auxNodeTraverse.nextNode = newNode;
      }
   }

   add(index, item) {
      if (index < this.size()) {
         let newNode = Node(item);

         if (index == 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
         } else {
            let auxNodeTraverse = this.head;
            let auxNodeTraversePrevious = null;

            while (index > 0) {
               auxNodeTraversePrevious = auxNodeTraverse;
               auxNodeTraverse = auxNodeTraverse.nextNode;
               index--;
            }
            newNode.nextNode = auxNodeTraverse;
            auxNodeTraversePrevious.next = newNode;
         }
      } else {
         this.add(item);
      }
   }

   isEmpty() {
      return this.head == null;
   }

   remove() {
      let auxData = null;

      if (!this.isEmpty()) {
         auxData = this.head.data;

         this.head = this.head.nexNode;
         return auxData;
      }
      return auxData;
   }

   remove(index) {
      let auxData = null;

      if (index < this.size()) {
         if (index == 0) {
            auxData = this.head.data;
            this.head = this.head.nextNode;
         } else {
            let auxNodeTraverse = this.head;
            let auxNodeTraversePrevious = null;

            while (index > 0) {
               auxNodeTraversePrevious = auxNodeTraverse;
               auxNodeTraverse = auxNodeTraverse.nextNode;
               index--;
            }
            auxData = auxNodeTraverse.data;
            auxNodeTraversePrevious.nextNode = auxNodeTraverse.nextNode;
         }
      }
      return auxData;
   }

   size() {
      if (!this.isEmpty()) {
         let auxNodeTraverse = this.head;
         let counter = 0;

         while (auxNodeTraverse != null) {
            auxNodeTraverse = auxNodeTraverse.nextNode;
            counter++;
         }
         return counter;
      }
      return 0;
   }

   search(item) {
      if (!this.isEmpty()) {
         let auxNodeTraverse = this.head;

         while (auxNodeTraverse != null) {
            if (auxNodeTraverse.data == item) {
               return item;
            }
            auxNodeTraverse = auxNodeTraverse.nextNode;
         }
      }
      return null;
   }
}
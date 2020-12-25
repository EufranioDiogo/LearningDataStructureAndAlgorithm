<h1 id="Stack">Stack</h1>

What is a stack for you?
In my opinion a stack is kind of thing that we stack up things, like I can have a stack of laptops, a stack of books, a stack of papers, a stack of t-shirts, and so on.

And basically it's a stack it's not a very different thing that we never seen before, the unique difference here is that we are going to use it in computer.

<h2>How implement a Stack?</h2>

Basically we have 2 approaches that I know, the first one is using an array and the second one is using a linked structure.

<h3>Array Approach</h3>

In the array approach the main thing is to have an array and a variable to identify the next index that we going to insert the new value to the Stack, and here we are going to have a Stack with a specific size, not a dynamic one.

<h3>Singly Linked List Approach</h3>

In this approach we are going to need a auxiliar ADT(Abstract Data Type) called node and inside of this ADT we are going to have a field to store the value of the item and also a variable to store the address of the previous element.

Notice that Inside of the Stack data structure we are going to have a variable to refer to the top of the Stack.

<h2>Stack Operations</h2>
Some stack operations that a Stack has are:

  - Insert value in to the stack.
  - Remove item from the stack.
  - See the top of it.
  - Count the number of items.


| Array Implementation | Linked Implementation |
|---|---|
| [Implementation](StackArrayImplementation.md) | [Implementation](StackLinkedListImplementation.md) |

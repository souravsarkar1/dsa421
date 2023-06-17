class Stack {
    constructor() {
      this.items = [];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow";
      }
      return this.items.pop();
    }
  
    // Return the top element of the stack without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Print the elements of the stack
    printStack() {
      let stackStr = "Top -> ";
      for (let i = this.items.length - 1; i >= 0; i--) {
        stackStr += this.items[i] + " -> ";
      }
      stackStr += "Bottom";
      console.log(stackStr);
    }
  }
  
  // Example usage
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.printStack(); // Output: Top -> 3 -> 2 -> 1 -> Bottom
  
  console.log(stack.pop()); // Output: 3
  console.log(stack.peek()); // Output: 2
  console.log(stack.size()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  
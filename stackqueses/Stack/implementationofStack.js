class Stack {
    constructor() {
        this.items = [];
        this.size = 5;
    }

    push(element) {
        if (this.size <= this.items.length) return `Stack overflow`;
        this.items.push(element);
        this.size++;
    }

    pop() {
        if (this.size === 0) return `Stack underflow`;
        this.size--;
        return this.items.pop();
    }

    peek() {
        if (this.size === 0) return `No stack element available`;
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printStack() {
        for (let i = this.items.length - 1; i >= 0; i--) {
            console.log(this.items[i]);
        }
    }
}

let stack = new Stack();
stack.push(5);
stack.push(10);
stack.push(15);
stack.printStack(); // Output: 15, 10, 5
console.log(stack.peek()); // Output: 15
console.log(stack.isEmpty()); // Output: false

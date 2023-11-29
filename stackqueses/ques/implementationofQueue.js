class Queue {
    constructor() {
        this.queue = [];
    }

    // Add an element to the queue
    enqueue(element) {
        this.queue.push(element);
    }

    // Remove and return an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue.shift();
    }

    // Get the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.queue[0];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }

    // Get the size of the queue
    size() {
        return this.queue.length;
    }

    // Print the queue elements
    printQueue() {
        console.log(this.queue);
    }
}

// Example usage of the Queue class
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.printQueue(); // Output: [1, 2, 3]
console.log("Front element: " + queue.front()); // Output: Front element: 1
console.log("Dequeued element: " + queue.dequeue()); // Output: Dequeued element: 1
queue.printQueue(); // Output: [2, 3]

const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return {
      'value': this.value,
      'next': this.next
    }
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.value) {this.value = value}
    else if (!this.next) {this.next = new Queue(value)}
    else {this.next.enqueue(value)}
    return this;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let current = this.value;
    if (this.next) {
      this.value = this.next.value;
      this.next = this.next.next;
    } else {
      this.value = null;
      this.next = null;
    }
    return current;
  }
}

module.exports = {
  Queue
};

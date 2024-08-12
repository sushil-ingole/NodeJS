function Node(value) {
    this.value = value;
    this.nextNode = null;
}

// Function implementation of a LL
// function LinkedList() {
//     this.start = null;
//     this.add = function(value) {
//         const currentNode = new Node(value);
//         currentNode.nextNode = this.start;
//         this.start = currentNode;
//     }
// }

// Class implementation of a LL
class LinkedList {
    constructor() {
        this.start = null;
    }
    add(value) {
        const currentNode = new Node(value);
        currentNode.nextNode = this.start;
        this.start = currentNode;
    }
}

const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
console.log(linkedList);
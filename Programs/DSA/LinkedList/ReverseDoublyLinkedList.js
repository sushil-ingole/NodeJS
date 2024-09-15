class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function print(head) {
    let output = [];
    while(head) {
        output.push(head.data);
        head = head.next;
    }
    console.log(output.join(" "));
}

// function reverseDoublyLinkedList(head, tail) {
//     tail.next = tail.prev;
//     head = tail;
//     let prevNode = tail.prev;
//     tail.prev = null;
//     let curr = prevNode;
//     while(prevNode) {
//         prevNode = curr.prev;
//         curr.prev = curr.next;
//         curr.next = prevNode;
//         curr = prevNode;
//     }
//     return head;
// }
function reverseDoublyLinkedList(head) {
    let current = head;
    let prevNode = null;

    while (current) {
        // Swap the next and prev pointers
        let nextNode = current.next;
        current.next = prevNode;
        current.prev = nextNode;

        // Move the prevNode and current pointers forward
        prevNode = current;
        current = nextNode;
    }

    // After the loop, prevNode is the new head of the reversed list
    return prevNode;
}

let head = null;
let tail = null;
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);

one.next = two;
two.next = three; two.prev = one;
three.next = four; three.prev = two;
four.next = five; four.prev = three;
five.next = six; five.prev = four;
six.prev = five;

head = one;
tail = six;

print(head);
head = reverseDoublyLinkedList(head, tail);
print(head);

// OUTPUT:-
// 1 2 3 4 5 6
// 6 5 4 3 2 1
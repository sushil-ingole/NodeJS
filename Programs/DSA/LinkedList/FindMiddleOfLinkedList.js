class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findMiddleOfLinkedList(head) {
    let slow = head, fast = head;
    while(fast?.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow.data;
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
two.next = three;
three.next = four;
four.next = five;
five.next = six;

head = one;
tail = six;

console.log(`Middle of linked list is: ${findMiddleOfLinkedList(head)}`);
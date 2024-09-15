class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function findLength(head) {
    let len = 0;
    while(head) {
        len++;
        head = head.next;
    }
    return len;
}

function findLoopInLinkedList(head) {
    let slow = head, fast = head;
    while(fast?.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) return true;
    }
    return false;
}

let head = null;
let tail = null;
let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);

one.next = two;
two.next = three;
three.next = four;
four.next = one;

head = one;

console.log(findLoopInLinkedList(head));


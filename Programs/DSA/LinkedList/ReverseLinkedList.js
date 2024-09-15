class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
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

function reverseLinkedList(head) {
    let curr = head;
    let prev = null;
    while(curr) {
        let forward = curr.next;
        curr.next = prev;
        prev = curr;
        curr = forward;
    }
    return prev;
}

function reverseLinkedListUsingRecursion(prev, curr) {
    if(!curr) return prev;
    let forward = curr.next;
    curr.next = prev;
    return reverseLinkedListUsingRecursion(curr, forward);
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

print(head);
// head = reverseLinkedList(head);
head = reverseLinkedListUsingRecursion(null, head);
print(head);
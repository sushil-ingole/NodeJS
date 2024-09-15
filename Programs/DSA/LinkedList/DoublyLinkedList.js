class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

function print(head) {
    let temp = head;
    let output = [];
    while(temp) {
        output.push(temp.data);
        temp = temp.next;
    }
    console.log(output.join(" , "));
}

function findLength(head) {
    let count = 0;
    while(head) {
        count++;
        head = head.next;
    }
    return count;
}

function insertAtHead(head, data) {
    const newNode = new Node(data);
    if(head === null) {
        head = tail = prev = newNode;
        return {head, tail};
    }
    newNode.next = head;
    head.prev = newNode;
    head = newNode;
    return {head, tail};
}

function insertAtTail(head, tail, data) {
    const newNode = new Node(data);
    if(head === null) {
        head = tail = prev = newNode;
        return {head, tail};
    }
    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
    return {head, tail};
}

function insertAtPosition(pos, head, tail, data) {
    const newNode = new Node(data);
    if(pos <= 1) {
        ({head, tail} = insertAtHead(head, data));
        return {head, tail};
    }
    let len = findLength(head);
    if(pos > len) {
        ({head, tail} = insertAtTail(head, tail, data));
        return {head, tail};
    }
    let temp = head;
    let i = 1;
    while(i < pos) {
        i++;
        temp = temp.next;
    }
    
    let prevNode = temp.prev;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = temp;
    temp.prev = newNode;
    return {head, tail};
}

let head = null;
let tail = null;
({head, tail} = insertAtHead(head, 3));
({head, tail} = insertAtHead(head, 2));
({head, tail} = insertAtHead(head, 1));
({head, tail} = insertAtTail(head, tail, 4));
({head, tail} = insertAtPosition(2, head, tail, 5));
({head, tail} = insertAtPosition(7, head, tail, 6));
print(head);
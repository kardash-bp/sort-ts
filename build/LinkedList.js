"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.at = function (index) {
        if (!this.head)
            throw new Error('Index out of bounds!');
        var node = this.head;
        var counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds!');
    };
    LinkedList.prototype.compare = function (left, right) {
        if (!this.head) {
            throw new Error('Index out of bounds!');
        }
        return this.at(left).data > this.at(right).data;
    };
    LinkedList.prototype.swap = function (left, right) {
        var lN = this.at(left);
        var rN = this.at(right);
        var temp = lN.data;
        lN.data = rN.data;
        rN.data = temp;
    };
    LinkedList.prototype.print = function () {
        if (!this.head) {
            console.log('empty ll');
            return;
        }
        var node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;

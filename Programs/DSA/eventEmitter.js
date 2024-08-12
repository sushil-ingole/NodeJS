class Emitter {
    constructor() {
        this.events = {};
    }
    subscribe(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName].push(callback);
        } else {
            this.events[eventName] = [callback];
        }

        return {
            release: () => {
                const callbacks = this.events[eventName];
                if (callbacks.length) {
                    const index = callbacks.indexOf(callback);
                    callbacks.splice(index, 1);
                } else {
                    delete this.events[eventName];
                }
            }
        }
    }

    emit(eventName, ...args) {
        const callbacks = this.events[eventName];
        for (let i = 0; i < callbacks.length; i++) {
            callbacks[i](...args);
        }
    }
}

const emitter = new Emitter();
const callback1 = (a, b) => console.log('Callback1', a, b);
const callback2 = () => console.log('Callback2');

const sub1  = emitter.subscribe('event1', callback1);
const sub2 = emitter.subscribe('event2', callback2);
const sub3 = emitter.subscribe('event1', callback1);

emitter.emit('event1', 1, 2);
emitter.emit('event2', 1, 2);

sub1.release();
sub3.release();

// This will not trigger callback1 anymore
emitter.emit('event1', 3, 4);
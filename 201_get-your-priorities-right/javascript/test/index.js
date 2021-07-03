const assert = require('assert'), index = require("../index.js");

describe('Unit Tests', function() {
    it('`DequeueA` ... returns the string from the priority queue with the highest priority A value.', () => {
        let queue = generateExampleQueue();
        let item = queue.DequeueA();
        assert.strictEqual(item.string, "InjectXpress Platinum Plated Needle");
    });

    it('`DequeueB` ... returns the string from the priority queue with the highest priority B value.', () => {
        let queue = generateExampleQueue();
        let item = queue.DequeueB();
        assert.strictEqual(item.string, "SuperSaver Syringe");
    });

    it('`DequeueA` ... If two entries have the same A priority, return whichever was enqueued first.', () => {
        let queue = generateExampleQueue();
        let item = queue.DequeueA();
        assert.notStrictEqual(item.string, "Competitor Platinum Plated Needle");
    });

    it('`DequeueB` ... If two entries have the same B priority, return whichever was enqueued first.', () => {
        let queue = generateExampleQueue();
        let item = queue.DequeueB();
        assert.notStrictEqual(item.string, "Competitor Syringe");
    });

    it('`Count`. This method returns the number of strings in the queue', () => {
        let queue = generateExampleQueue();
        assert.strictEqual(queue.Count(), 5);
    });

    it('`Clear`. This removes all entries from the priority queue.', () => {
        let queue = generateExampleQueue();
        queue.Clear();
        assert.strictEqual(queue.Count(), 0);
    });
});

function generateExampleQueue() {
    let queue = new index.PriorityQueue();
    queue.Enqueue("Hyperion Hypodermic Needle", 1.99, 3);
    queue.Enqueue("SuperSaver Syringe", 0.89, 7);
    queue.Enqueue("InjectXpress Platinum Plated Needle", 2.49, 2);
    queue.Enqueue("Competitor Platinum Plated Needle", 2.49, 5);
    queue.Enqueue("Competitor Syringe", 2.18, 7);
    return queue;
}
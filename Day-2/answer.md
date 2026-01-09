Node.js Architecture

Node.js is a JavaScript runtime that allows JavaScript to run outside the browser. It is designed to build fast, scalable, and efficient applications using a non-blocking, event-driven model.

Node.js internally combines multiple components to achieve high performance:

JavaScript Engine (V8)

Core APIs

Native bindings

Event Loop

libuv

JavaScript Engine (V8)

The JavaScript engine used by Node.js is V8, developed by Google.

Role of V8

Executes JavaScript code

Converts JavaScript into machine-level code using Just-In-Time (JIT) compilation

Manages memory allocation and garbage collection

V8 is only responsible for executing JavaScript. It does not handle file systems, networking, or asynchronous I/O.

Node.js Core APIs

Node.js Core APIs are built-in modules that provide commonly required functionalities.

Purpose of Core APIs

Provide access to system features

Avoid the need for external libraries

Expose functionality in JavaScript-friendly form

Examples

fs – file system operations

http – server creation

path – file path handling

os – operating system information

timers – scheduling tasks

Core APIs internally rely on native bindings and libuv.

Native Bindings

Native bindings act as a connection layer between JavaScript and low-level system code written in C or C++.

Why Native Bindings Are Needed

JavaScript cannot directly access OS-level features

Native bindings translate JS calls into native operations

Enable interaction with system resources

Example:
When fs.readFile() is called, native bindings connect JavaScript to C++ code, which then uses libuv.

Event Loop

The event loop is the mechanism that allows Node.js to perform non-blocking operations.

Role of the Event Loop

Continuously checks for completed asynchronous tasks

Executes their callbacks

Ensures the main JavaScript thread is not blocked

The event loop is implemented using libuv.

libuv
What is libuv?

libuv is a multi-platform C library used by Node.js to handle asynchronous operations.

Why Node.js Needs libuv

JavaScript alone cannot manage asynchronous system-level tasks

libuv abstracts operating system differences

Enables non-blocking I/O and concurrency

Responsibilities of libuv

Event loop management

Asynchronous file system operations

Network I/O (TCP/UDP)

Timers

Thread pool management

Thread Pool
What is a Thread Pool?

A thread pool is a set of background threads managed by libuv to handle blocking operations.

Why Node.js Uses a Thread Pool

Some tasks cannot be handled asynchronously by the OS

Prevents blocking the main JavaScript thread

Improves performance and responsiveness

Operations Handled by the Thread Pool

File system operations

DNS lookups

Cryptographic functions

Compression tasks

The default thread pool size is 4 threads.

Worker Threads
What Are Worker Threads?

Worker threads allow running JavaScript code in parallel across multiple threads.

Why Are Worker Threads Needed?

Node.js runs JavaScript on a single thread

CPU-intensive tasks can block the event loop

Worker threads enable parallel execution for heavy computations

Difference Between Thread Pool and Worker Threads
Thread Pool	Worker Threads
Managed by libuv	Managed by Node.js
Executes native C/C++ code	Executes JavaScript code
Used for I/O and system tasks	Used for CPU-heavy JS tasks
Not directly controlled by developers	Explicitly created by developers
Event Loop Queues
Macro Task Queue

Description

Contains large asynchronous tasks

Executed after microtasks

Examples

setTimeout

setInterval

setImmediate

I/O callbacks

Micro Task Queue

Description

Higher priority queue

Executed immediately after current execution

Examples

Promise.then()

Promise.catch()

queueMicrotask()

Execution Priority Between Queues

Synchronous code

Micro Task Queue

Macro Task Queue

Microtasks always execute before macrotasks.




Node.js is a JavaScript runtime that allows JavaScript code to run outside the browser. It is mainly used to build fast and scalable server-side applications.

Key Characteristics

Single-threaded execution model

Event-driven architecture

Non-blocking I/O operations

Efficient handling of concurrent requests

Main Components

JavaScript Engine (V8)

Node.js Core APIs

Native Bindings

Event Loop

libuv

JavaScript Engine (V8)
What is V8?

V8 is an open-source JavaScript engine developed by Google and written in C++.

Role of V8 in Node.js

Executes JavaScript code

Converts JavaScript into machine code using JIT compilation

Manages memory and garbage collection

Note: V8 only executes JavaScript and does not handle I/O operations.

Node.js Core APIs
Definition

Node.js Core APIs are built-in modules that provide system-level functionality in JavaScript.

Purpose

Simplify access to system features

Reduce dependency on external libraries

Provide commonly used functionalities

Examples

fs – File system

http – Web servers

path – File paths

os – System information

timers – Time-based operations

Native Bindings
What Are Native Bindings?

Native bindings connect JavaScript code with low-level C/C++ implementations.

Why Native Bindings Are Needed

JavaScript cannot directly interact with the OS

Enable access to system-level operations

Convert JavaScript calls into native code execution

Example

fs.readFile() → Native C++ code → libuv

Event Loop
Definition

The event loop is the mechanism that allows Node.js to execute asynchronous operations without blocking the main thread.

Responsibilities

Monitors callback queues

Executes completed asynchronous tasks

Keeps the application responsive

Implementation

The event loop is implemented using libuv

libuv
What is libuv?

libuv is a multi-platform C library used by Node.js to manage asynchronous operations.

Why Node.js Needs libuv

Handles low-level asynchronous tasks

Abstracts OS-specific behaviors

Enables cross-platform compatibility

Responsibilities of libuv

Event loop management

Asynchronous file system operations

Network I/O

Timers

Thread pool management

Thread Pool
What is a Thread Pool?

A thread pool is a group of background threads used to execute blocking or time-consuming tasks.

Why Node.js Uses a Thread Pool

Some operations are blocking in nature

Prevents blocking the main JavaScript thread

Improves performance

Operations Handled by the Thread Pool

File system operations

DNS resolution

Cryptographic functions

Compression tasks

Default Size

4 threads (configurable)

Worker Threads
What Are Worker Threads?

Worker threads allow JavaScript code to run in parallel using multiple threads.

Why Worker Threads Are Needed

JavaScript in Node.js runs on a single thread

CPU-heavy tasks can block the event loop

Worker threads enable parallel execution

Thread Pool vs Worker Threads
Thread Pool	Worker Threads
Managed by libuv	Managed by Node.js
Runs native C/C++ code	Runs JavaScript code
Used for I/O tasks	Used for CPU-intensive tasks
Not directly controlled	Explicitly created by developers
Event Loop Queues
Macro Task Queue
Definition

The macro task queue contains asynchronous tasks that are executed after microtasks.

Examples

setTimeout

setInterval

setImmediate

I/O callbacks

Micro Task Queue
Definition

The micro task queue contains high-priority tasks that are executed immediately after the current execution.

Examples

Promise.then()

Promise.catch()

queueMicrotask()

Execution Priority Between Queues

Synchronous code

Micro Task Queue

Macro Task Queue

Microtasks always execute before macrotasks.
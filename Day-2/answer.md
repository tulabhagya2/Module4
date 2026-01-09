

## 1. Node.js Architecture
Node.js is a runtime environment that allows JavaScript to run on the server-side. Its architecture is designed to handle asynchronous operations efficiently and consists of several key components:

- **JavaScript Engine (V8):** Executes JavaScript code.
- **Node.js Core APIs:** Provides modules for file system, HTTP, streams, etc.
- **libuv:** Handles asynchronous I/O operations.
- **Event Loop:** Manages execution of asynchronous callbacks.
- **Thread Pool:** Supports certain blocking operations using threads.

Node.js uses a **single-threaded, non-blocking, event-driven** architecture to improve performance and scalability.

---

## 2. JavaScript Engine (V8)
- Developed by **Google**.
- Compiles JavaScript code to **machine code** for faster execution.
- Provides **high-performance runtime** for Node.js applications.
- Executes both synchronous and asynchronous JavaScript code.

---

## 3. Node.js Core APIs
Node.js provides built-in modules that allow developers to interact with the system:

- `fs` → File system operations
- `http` → HTTP server/client
- `events` → Event-driven programming
- `stream` → Streaming data handling
- `buffer` → Binary data processing

**Purpose:** Core APIs simplify development without requiring external libraries.

---

## 4. Native Bindings
- Native bindings are interfaces that connect Node.js with **C/C++ libraries**.
- They allow Node.js to access **low-level system resources** efficiently.
- Examples:
  - File system operations
  - Networking operations

---

## 5. Event Loop
- The **Event Loop** is the heart of Node.js asynchronous behavior.
- It continuously checks the **task queues** and executes pending callbacks.
- Ensures Node.js can perform **non-blocking I/O** even on a single thread.

---

## 6. libuv

### What is libuv?
- A **C library** that provides an **event-driven, cross-platform abstraction layer**.
- Handles asynchronous I/O operations like file system, network, and timers.

### Why Node.js needs libuv
- JavaScript alone cannot perform **non-blocking I/O**.
- libuv enables **asynchronous execution** of heavy tasks.

### Responsibilities of libuv
- Handles **asynchronous file system operations**
- Manages **network operations**
- Implements **timers**
- Coordinates the **thread pool**

---

## 7. Thread Pool

### What is a thread pool?
- A **pool of worker threads** used to execute multiple tasks concurrently.
- Prevents the main thread from blocking during heavy operations.

### Why Node.js uses a thread pool
- Node.js is **single-threaded**.
- The thread pool handles **blocking operations** efficiently.

### Operations handled by the thread pool
- File system operations (read/write)
- DNS lookups
- Compression and decompression
- Crypto operations

---

## 8. Worker Threads

### What are worker threads?
- Worker threads allow Node.js to **run JavaScript in parallel**.
- Each worker has its **own event loop, memory, and V8 instance**.

### Why are worker threads needed?
- To perform **CPU-intensive tasks** without blocking the main event loop.

### Difference between thread pool and worker threads
| Feature               | Thread Pool                      | Worker Threads                   |
|-----------------------|---------------------------------|---------------------------------|
| Language              | C/C++ (via libuv)               | JavaScript                      |
| Purpose               | I/O operations                  | CPU-intensive tasks             |
| Event Loop            | Shared with main thread         | Separate event loop             |
| Scalability           | Limited (default 4 threads)     | Can create multiple workers     |

---

## 9. Event Loop Queues

### Macro Task Queue
- Tasks scheduled for **later execution**.
- Examples:
  - `setTimeout()`
  - `setInterval()`
  - `setImmediate()`
  - I/O callbacks

### Micro Task Queue
- Tasks that run **immediately after the current operation**.
- Examples:
  - Promises (`.then()`, `.catch()`)
  - `process.nextTick()`

### Execution priority
- **Micro task queue** is executed **before** the macro task queue in each loop iteration.
- Ensures **promises and critical tasks** run as soon as possible.

---

## Summary
Node.js achieves **high performance** through:

- V8 engine for fast JS execution
- Non-blocking, event-driven architecture
- libuv for asynchronous I/O
- Thread pool for blocking operations
- Worker threads for CPU-intensive tasks
- Event loop with prioritized task queues (macro and micro)


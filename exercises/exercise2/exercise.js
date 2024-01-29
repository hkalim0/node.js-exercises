// Basic Logging
console.log("This is a basic log message.");

// Info Logging
console.info("This is an informational message.");

// Warning Logging
console.warn("This is a warning message.");

// Error Logging
console.error("This is an error message.");

// Debug Logging
console.debug("This is a debug message.");

// Grouping Logs
console.group("Grouping Example");
console.log("Message 1");
console.log("Message 2");
console.groupEnd();

// Counting Logs
console.count("Counter");
console.count("Counter");
console.count("Counter");

// Timing Logs
console.time("Timer");
// Some code to measure
console.timeEnd("Timer");

// Table Logs
const data = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 }
];
console.table(data);

// Clearing Logs
console.clear();

// Asserting Logs
console.assert(2 + 2 === 5, "Error: 2 + 2 is not equal to 5");

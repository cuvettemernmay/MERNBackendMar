// Events

// The EventEmitter Class

// const EventEmitter = require("events")

// Create an instance of EventEmitter
// const myEmitter = new EventEmitter()

// All EventEmitter instances have the following methods:-
// - emitter.on(eventName, listener) -- Adds a Listener.
// - emitter.emit(eventName[, ...args]) -- Triggers an event.

const EventEmitter = require("events")
const emitter = new EventEmitter()


// Register a listener for the "greet" event
// emitter.on("greet", () => {
//   console.log("hello there...")
// })

// emitter.on("greet", () => {
//   console.log("Hurray......")
// })

// emitter.emit("greet")

// emitter.on("userJoined", (username, age) => {
//   console.log(`New User: ${username}, age ${age}`)
// })

// emitter.emit("userJoined", "Shubham", 28)


//


// emitter.on("firstConnection", () => {
//   console.log("Welcome for the first time!")
// })

// emitter.emit("firstConnection")
// emitter.emit("firstConnection")



console.log("Start")

emitter.on("event", () => {
  setImmediate(() => {
    console.log("First Listener")
  })
})

// emitter.on("event", () => {
//   console.log("Second Listener")
// })

emitter.emit("event")

console.log("End")
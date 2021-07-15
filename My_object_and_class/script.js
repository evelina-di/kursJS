/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// const car = {
//     type: "Volvo",
//     color: "blue",
//     doors: 5,
//     seats: 5,
//     windowsOpen: false,
// openWindow: function (windowStatus) {
// this.windowsOpen = windowStatus 
// },
//     engineOn: false,
// startEngine: function (engineStatus) {
// this.engineOn = engineStatus
// },  
// }

class Car {
    constructor(
        type,
        color,
        doors,
        seats,
        windowsOpen,
        engineOn
    ) {
        this.type = type,
        this.color = color,
        this.doors = doors,
        this.seats = seats,
        this.windowsOpen = windowsOpen,
        this.engineOn = engineOn
    } 
    openWindow(windowStatus) {
        this.windowsOpen = windowStatus; }
    startEngine(engineStatus) {
        this.engineOn = engineStatus; }
    }

export default Car;
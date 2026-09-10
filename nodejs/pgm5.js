//import events
var event=require("events")

//create object to events emitter
var eventEmitter=new event.EventEmitter();

//bind event(called)
eventEmitter.on("harini",()=>{
 console.log("events called")
})

//fire event(calling)--calling can be many but called should be only one
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
//import events
var event=require("events")

//create object to events emitter
var eventEmitter=new event.EventEmitter();

//bind event(called)
const dis=()=>
{
    console.log("events called")
}
eventEmitter.on("harini",dis)

//fire event(calling)--calling can be many but called should be only one
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
eventEmitter.emit("harini")
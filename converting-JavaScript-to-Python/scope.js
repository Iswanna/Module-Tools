if (true) {
    var message = "Hello!"; 
    console.log(message); // This works
}

// ERROR! message was "born" inside the if-block. 
// It cannot be seen out here.
console.log("Message accessed outside if block", message);

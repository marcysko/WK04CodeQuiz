var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    var taskActionsEl = createTaskActions(taskIdCounter);
    console.log(taskActionsEl);
    tasksToDoEl.appendChild(listItemEl);
};
  buttonEl.addEventListener("click" , taskFormHandler);


  var counter = 10
  var countdown = function(){
      console.log(counter);
      counter--;
      if(counter === 0){
        console.log("blastoff");
        clearInterval(startCountdown);
      };
    };

    var SayHello = function(){
        console.log("Hello there");
    };
    var timedGreeting = setTimeout(SayHello, 2000);
  
    clearTimeout(timedGreeting);
  
  
  var startCountdown = setInterval(countdown, 1000);

  var questions = [
    {
      prompt: "what color are apples?\n(a) Red/Green\n\
                (b) Purple\n(c) Orange",
      answer: "a"          
    },
    {
      prompt: "what color are Bananas?\n(a) Red/Green\n\
                (b) Purple\n(c) Yellow",
      answer: "c"          
    },
    {
      prompt: "what color are strawberries?\n(a) Red/Green\n\
                (b) Purple\n(c) red",
      answer: "c"          
    },


  var score = 0;

  for(var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!");
    }
    }
alert("you got " + score + "/" + questions.length);
  

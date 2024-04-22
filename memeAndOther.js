const btn = document.querySelectorAll("button");
const divi = document.querySelectorAll("div");

let rand = function () {
  return Math.floor(Math.random() * 10);
};

const image = [
  "Images\\download (2).jpg",
  "Images\\download (3).jpg",
  "Images\\download (4).jpg",
  "Images\\download (5).jpg",
  "Images\\download (1).jpg",
  "Images\\download.jpg",
  "Images\\images (1).jpg",
  "Images\\images (2).jpg",
  "Images\\images (3).jpg",
  "Images\\images.jpg",
];

const dadJoke = [
  "I once submitted 10 puns to a joke competition. I really thought with that many, one was sure to be a winner. Sadly, no pun in ten did.",
  "Why did the old man fall down the well? He couldn’t see that well.",
  "I tried to make up a joke about ghost but I couldn't. It had plenty of spirit but no body.",
  "Dad: What is the difference between a piano, a tuna, and a pot of glue? \nMe: I don't know. \nDad: You can tuna piano but you can't piano a tuna.\nMe: What about the pot of glue?\nDad: I knew you'd get stuck on that.",
  "Two windmills were sitting on a hill. One asks the other, Do you have a favorite song? The other replies, Well... all my life I have been a heavy metal fan.",
  "Today at the bank, an old lady asked me to check her balance... So I pushed her over.",
  "I got an A on my origami assignment when I turned my paper into my teacher.",
  "How many storm troopers does it take to change a lightbulb? None, because they are all on the dark side.",
  "If your house is cold, just stand in the corner. It’s always 90 degrees there.",
  "Hi, I’m Cliff. Drop over sometime.",
];

const quotes = [
  "You must be the change you wish to see in the world. -Mahatma Gandhi",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -Mother Teresa",
  "The only thing we have to fear is fear itself. -Franklin D. Roosevelt",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. -Martin Luther King Jr.",
  "Do one thing every day that scares you. -Eleanor Roosevelt",
  "Well done is better than well said. -Benjamin Franklin",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen ",
  "It is during our darkest moments that we must focus to see the light. -Aristotle",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson",
  "Be yourself; everyone else is already taken. -Oscar Wild",
];

const riddle = [
  {
    Riddle: "What has to be broken before you can use it?",
    Answer: "An egg",
  },

  {
    Riddle: "I’m tall when I’m young, and I’m short when I’m old. What am I?",
    Answer: "A candle",
  },

  { Riddle: "What month of the year has 28 days?", Answer: "All of them" },

  {
    Riddle: "What is full of holes but still holds water?",
    Answer: "A sponge",
  },

  {
    Riddle: "What question can you never answer yes to?",
    Answer: "Are you asleep yet?",
  },

  {
    Riddle: "What is always in front of you but can’t be seen?",
    Answer: "The future",
  },

  {
    Riddle:
      "There’s a one-story house in which everything is yellow. Yellow walls, yellow doors, yellow furniture. What color are the stairs?",
    Answer: "There aren’t any—it’s a one-story house.",
  },

  {
    Riddle: "What can you break, even if you never pick it up or touch it?",
    Answer: "A promise",
  },

  { Riddle: "What goes up but never comes down?", Answer: "Your age" },

  {
    Riddle:
      "A man who was outside in the rain without an umbrella or hat didn’t get a single hair on his head wet. Why?",
    Answer: "He was bald.",
  },
];


  function clearAll() {
    const para1 = document.getElementById("w");
    const para3 = document.getElementById("p");
    const para4 = document.getElementById("a");

    document.querySelector("img").removeAttribute("src");
    document.querySelector("img").removeAttribute("height");
    document.querySelector("img").removeAttribute("width");
    para1.innerHTML = "";
    divi[3].innerHTML = "";
    para3.innerHTML = "";
    divi[4].innerHTML = "";
  };

  btn[0].addEventListener("click", () => {
    clearAll();
    const img = document.querySelector("img");
    img.setAttribute("height", "250");
    img.setAttribute("width", "250");
    img.src = image[rand()];
  });

btn[1].addEventListener("click", () => {
  clearAll();
  const para = document.getElementById("p");
  const text = document.createTextNode(dadJoke[rand()]);
  const para1 = document.createElement("p");
  para1.setAttribute("id", "p");
  para1.appendChild(text);
  divi[1].replaceChild(para1, para);
});

btn[2].addEventListener("click", () => {
  clearAll();
  const para = document.getElementById("w");
  const text = document.createTextNode(quotes[rand()]);
  const para1 = document.createElement("w");
  para1.setAttribute("id", "w");
  para1.appendChild(text);
  divi[2].replaceChild(para1, para);
});

const randomRiddle = function () {
  return riddle[rand()];
};
  btn[3].addEventListener("click", () => {
    clearAll();
    let rr = randomRiddle();
    const que = document.createElement("p");
    const ans = document.createElement("p");
    que.textContent = rr.Riddle;
    ans.textContent = rr.Answer;
    que.setAttribute("id", "r");
    ans.setAttribute("id", "a");
    divi[3].appendChild(que);
    divi[4].appendChild(ans);
    ans.hidden = true;
    divi[3].appendChild(que);
    divi[4].appendChild(ans);
  });

  btn[4].addEventListener("click", () => {
    const que = divi[3].querySelector("#r");
    const ans = document.querySelector("#a");

    if(que&& ans.hidden){
      ans.hidden=false;
    }
    else if (que){
      alert("Answer is already revealed.");
    }
    else{
      alert("There is no riddle.");
    }
    
  });


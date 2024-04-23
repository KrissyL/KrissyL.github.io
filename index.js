const quizData = [
    {
      question: "What does a single click on the left button on a mouse do?",
      image: "",
      options: ["Select an item", "Open a menu", "Scroll", "Open an item"],
      answer: "Select an item",
      tag: "Using a mouse"
    },
    {
      question: "What does a single click on the right button on a mouse do?",
      image: "",
      options: ["Select an item", "Open a menu", "Scroll", "Open an item"],
      answer: "Open a menu",
      tag: "Using a mouse"
    },
    {
      question: "What does a double click on the left button on a mouse do?",
      image: "",
      options: ["Select an item", "Open a menu", "Scroll", "Open an item"],
      answer: "Open an item",
      tag: "Using a mouse"
    },
    {
      question: "What does moving the wheel on a mouse do?",
      image: "",
      options: ["Select an item", "Open a menu", "Scroll", "Open an item"],
      answer: "Scroll",
      tag: "Using a mouse"
    },
    {
      question: "What does this mean?",
      image: "Assets/load-symbol.gif",
      options: ["Loading", "Error", "404 Not Found", "Screen Frozen"],
      answer: "Loading",
      tag: "Common symbols"
    },
    {
      question: "What does this mean?",
      image: "Assets/attach-icon.png",
      options: ["Delete", "Undo", "Save", "Attach"],
      answer: "Attach",
      tag: "Common symbols"
    },
    {
      question: "What does this button do?",
      image: "Assets/close-window.png",
      options: ["Close Window", "Open Window", "Minimize Window", "Restore Window"],
      answer: "Close Window",
      tag: "Common symbols"
    },
    {
      question: "What does this button do?",
      image: "Assets/minimize-window.png",
      options: ["Close Window", "Open Window", "Minimize Window", "Restore Window"],
      answer: "Minimize Window",
      tag: "Common symbols"
    },
    {
      question: "What does this button do?",
      image: "Assets/restore-window.png",
      options: ["Close Window", "Open Window", "Minimize Window", "Restore Window"],
      answer: "Restore Window",
      tag: "Common symbols"
    },
    {
      question: "What does this mean?",
      image: "Assets/delete-icon.png",
      options: ["Delete", "Undo", "Save", "Attach"],
      answer: "Delete",
      tag: "Common symbols"
    },
    {
      question: "What does this mean?",
      image: "Assets/save-icon.png",
      options: ["Delete", "Undo", "Save", "Attach"],
      answer: "Save",
      tag: "Common symbols"
    },
    {
      question: "What does this mean?",
      image: "Assets/undo-icon.png",
      options: ["Delete", "Undo", "Save", "Attach"],
      answer: "Undo",
      tag: "Common symbols"
    },
    {
      question: "Which key deletes a character to the right of the cursor?",
      image: "",
      options: ["Num lock", "Caps lock", "Backspace", "Delete"],
      answer: "Delete",
      tag: "Keyboarding"
    },
    {
      question: "Which key activates the number keys on the righthand side of the keyboard?",
      image: "",
      options: ["Num lock", "Caps lock", "Backspace", "Delete"],
      answer: "Num lock",
      tag: "Keyboarding"
    },
    {
      question: "Which key deletes a character to the left of the cursor?",
      image: "",
      options: ["Num lock", "Caps lock", "Backspace", "Delete"],
      answer: "Backspace",
      tag: "Keyboarding"
    },
    {
      question: "Which key capitalizes all characters?",
      image: "",
      options: ["Num lock", "Caps lock", "Backspace", "Delete"],
      answer: "Caps lock",
      tag: "Keyboarding"
    },
    {
      question: "Which key adds an indentation when typing?",
      image: "",
      options: ["Backspace", "Tab", "Enter", "Spacebar"],
      answer: "Tab",
      tag: "Keyboarding"
    },
    {
      question: "Which key adds a small separation when typing?",
      image: "",
      options: ["Backspace", "Tab", "Enter", "Spacebar"],
      answer: "Spacebar",
      tag: "Keyboarding"
    },
    {
      question: "Which key does the same thing as clicking on an OK button?",
      image: "",
      options: ["Backspace", "Tab", "Enter", "Spacebar"],
      answer: "Enter",
      tag: "Keyboarding"
    },
    {
      question: "Which key is used MOST for making a single capital letter?",
      image: "",
      options: ["Caps lock", "Shift", "Home", "Num lock"],
      answer: "Shift",
      tag: "Keyboarding"
    },
    {
      question: "What are these?",
      image: "Assets/desktop-shortcuts.png",
      options: ["Desktop Shortcuts", "Desktop Buttons", "Desktop Menus", "Desktop Apps"],
      answer: "Desktop Shortcuts",
      tag: "Using the desktop"
    },
    {
      question: "What is this?",
      image: "Assets/start-menu.png",
      options: ["Taskbar", "Start Menu", "Settings", "Apps"],
      answer: "Start Menu",
      tag: "Using the desktop"
    },
    {
      question: "What is this?",
      image: "Assets/taskbar.png",
      options: ["Taskbar", "Start Menu", "Settings", "Apps"],
      answer: "Taskbar",
      tag: "Using the desktop"
    },
    {
      question: "Where is this?",
      image: "Assets/settings.png",
      options: ["Taskbar", "Start Menu", "Settings", "Apps"],
      answer: "Settings",
      tag: "Using the desktop"
    },
    {
      question: "What are these?",
      image: "Assets/apps.png",
      options: ["Taskbar", "Start Menu", "Settings", "Apps"],
      answer: "Apps",
      tag: "Using the desktop"
    },    
    // Add more questions here...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  let currentQuestion = 0;
  let totalScore = 0;

    const totalResults = {};
    let totalCounts = {};

  function showQuestion() {

    const randomOptions = [];
        
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
    
    if (question.image.length > 0) {
      let img = document.createElement("img");
      let ImgSrc = question.image;
      img.src = ImgSrc;
      questionElement.appendChild(img);     
    }
 
    optionsElement.innerHTML = "";
    question.options.forEach(option => {                  
      const button = document.createElement("button");
      button.innerText = option;
      randomOptions.push(button);    
    });

    randomOptions.sort(() => Math.random() - 0.5);
    for (let i = 0; i < randomOptions.length; i++) {
      button = randomOptions[i];
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    };
  }

  function selectAnswer(e) {
    
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
    const topic = quizData[currentQuestion].tag;
    
    if (selectedButton.innerText === answer) {
      
      totalResults[topic] = (totalResults[topic] || 0) +1;
      totalScore++;
      
    } else {
      alert(`Sorry, the correct answer is ${answer}`);
    }     

    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function getTags() {
    let topics = quizData.map((question) => question.tag);
    
    
    for (let i = 0; i < topics.length; i++) {
      totalCounts[topics[i]] = 1 + (totalCounts[topics[i]] || 0);      
    }

    let resultsContainer = document.createElement("div");
    let resultsText = "";
    
    for (let [tag, tagTotal] of Object.entries(totalResults)) {
      resultsText += tag + ": " + tagTotal + "/" + totalCounts[tag] + "<br>";
      resultsContainer.innerHTML = resultsText;

    }
    
      quiz.appendChild(resultsContainer);    
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${totalScore}/${quizData.length}</p>
      <h1>Results Breakdown</h1>
    `;
    getTags();
  }
  
  showQuestion();
export const courses = {
  html: {
    title: 'HTML Complete Guide',
    description: 'A comprehensive roadmap of HTML from scratch to advanced, designed for interviews and real-world development.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9ivBf_eKCPIAYXWzLlPAm6G',
    curriculum: [
      {
        chapter: '1. HTML Basics (Foundation)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+HTML%20Basics%20(Foundation)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+HTML%20Basics%20(Foundation)' }
        ],
        content: 'HTML (HyperText Markup Language) is the standard markup language used to structure web pages. Basic structure includes DOCTYPE, html, head, and body. Core tags include headings (h1 to h6), paragraphs (p), line breaks (br), and horizontal lines (hr).',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1>Hello World</h1>
    <p>This is a foundational HTML document.</p>
</body>
</html>`
      },
      {
        chapter: '2. Text & Formatting',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Text%20%26%20Formatting' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Text%20%26%20Formatting' }
        ],
        content: 'Tags used to format text. Important distinction: <b> vs <strong>. Both make text bold, but <strong> adds semantic meaning (importance) for screen readers and SEO.',
        code: `<p><b>Bold text</b> (presentational)</p>
<p><strong>Important text</strong> (semantic)</p>
<p><i>Italic</i> and <em>Emphasis</em></p>
<p><u>Underline</u> and <mark>Highlight</mark></p>
<p><del>Deleted</del> and <ins>Inserted</ins></p>`
      },
      {
        chapter: '3. Links & Images',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Links%20%26%20Images' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Links%20%26%20Images' }
        ],
        content: 'Anchor tags (<a>) link to other pages. Valid targets include "_blank" (new tab). Image tags (<img>) display images and must include an "alt" attribute for accessibility.',
        code: `<!-- Anchor Tag -->
<a href="https://google.com" target="_blank">Visit Google</a>

<!-- Image Tag -->
<img src="image.jpg" alt="Description for visually impaired users" width="200">`
      },
      {
        chapter: '4. Lists & Tables',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Lists%20%26%20Tables' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Lists%20%26%20Tables' }
        ],
        content: 'HTML supports Ordered (<ol>), Unordered (<ul>), and Description (<dl>) lists. Tables use <table>, <tr> (row), <th> (header), and <td> (data). Advanced table features include rowspan, colspan, thead, tbody, and tfoot.',
        code: `<!-- Lists -->
<ul>
  <li>Unordered Item</li>
</ul>
<ol>
  <li>Ordered Item</li>
</ol>

<!-- Table -->
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>`
      },
      {
        chapter: '5. Forms (Crucial for Interviews)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Forms%20(Crucial%20for%20Interviews)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Forms%20(Crucial%20for%20Interviews)' }
        ],
        content: 'Forms gather user input. Common input types: text, email, password, radio, checkbox, file, submit. Important attributes: name, value, required, placeholder, readonly (sends to server), and disabled (does not send).',
        code: `<form action="/submit" method="POST">
  <label for="username">Name:</label>
  <input type="text" id="username" name="username" placeholder="Enter name" required>
  
  <label for="pwd">Password:</label>
  <input type="password" id="pwd" name="pwd" required>
  
  <input type="submit" value="Login">
</form>`
      },
      {
        chapter: '6. Semantic HTML & SEO',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Semantic%20HTML%20%26%20SEO' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Semantic%20HTML%20%26%20SEO' }
        ],
        content: 'Semantic elements clearly describe their meaning (e.g., <header>, <footer>, <article>, <section>, <aside>, <nav>) rather than generic <div> tags. This significantly improves SEO and Accessibility.',
        code: `<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <section>
    <p>Main content of the section goes here.</p>
  </section>
  <footer>Published details</footer>
</article>`
      },
      {
        chapter: '7. Block vs Inline & Attributes',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Block%20vs%20Inline%20%26%20Attributes' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Block%20vs%20Inline%20%26%20Attributes' }
        ],
        content: 'Block Elements (e.g., <div>, <p>, <h1>) take the full width available. Inline Elements (e.g., <span>, <a>, <img>) take only necessary space. They are often styled via attributes like "id" (unique, one per page) and "class" (reusable).',
        code: `<!-- Block element taking full width -->
<div id="unique-container" class="box-layout">
  <!-- Inline elements taking only needed width -->
  <span class="text-highlight">Inline text</span>
  <a href="#">Another inline</a>
</div>`
      },
      {
        chapter: '8. HTML5 Advanced Features',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+HTML5%20Advanced%20Features' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+HTML5%20Advanced%20Features' }
        ],
        content: 'HTML5 introduced native multimedia tags without needing Flash. <audio> and <video> elements. It also introduced <canvas> for rendering graphics via JavaScript, and APIs like Local Storage and Geolocation.',
        code: `<!-- Video -->
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<!-- Local Storage via JS -->
<script>
  localStorage.setItem("username", "TechScribe User");
</script>`
      },
      {
        chapter: '9. Meta Tags & Iframe',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Meta%20Tags%20%26%20Iframe' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Meta%20Tags%20%26%20Iframe' }
        ],
        content: 'Meta tags provide metadata about the webpage (character set, viewport scaling, descriptions for SEO). Iframes embed another webpage inside the current webpage.',
        code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="SEO optimized description">
</head>
<body>
  <iframe src="https://example.com" width="400" height="300"></iframe>
</body>`
      },
      {
        chapter: '10. Interview Q&A Highlight',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Interview%20Q%26A%20Highlight' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Interview%20Q%26A%20Highlight' }
        ],
        content: '1. What is the DOM? (Document Object Model -> HTML structure as a tree used by JS).\n2. Difference between GET and POST? (GET parameters are in the URL -> less secure. POST body -> more secure/larger payload).\n3. localStorage vs sessionStorage? (localStorage is permanent, sessionStorage clears on tab close).',
        code: `/* Example of setting Local vs Session storage */
localStorage.setItem('keepForever', 'Yes'); // Stays forever
sessionStorage.setItem('keepTillClose', 'Yes'); // Clears on close`
      }
    ]
  },
  css: {
    title: 'CSS Complete Guide',
    description: 'Master styling web pages from basic selectors to flexbox, grid, animations, and Tailwind CSS.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLgGwUBP2a82n21fB8-S1iNofRzE_6Q1xP',
    curriculum: [
      {
        chapter: '1. What is CSS?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20CSS%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20CSS%3F' }
        ],
        content: 'CSS (Cascading Style Sheets) is a stylesheet language used to control the presentation and layout of HTML elements, including colors, spacing, fonts, and positioning.',
        code: `/* Syntax */
selector {
  property: value;
}

/* Example */
h1 {
  color: red;
  font-size: 24px;
}`
      },
      {
        chapter: '2. Selectors & Specificity',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Selectors%20%26%20Specificity' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Selectors%20%26%20Specificity' }
        ],
        content: 'Selectors target specific HTML elements for styling (Element, Class `.`, ID `#`). Specificity determines which rule applies when conflicts exist. Order: Inline > ID > Class > Element.',
        code: `/* Element */
p { color: blue; }

/* Class */
.box { background: yellow; }

/* ID */
#header { font-size: 20px; }`
      },
      {
        chapter: '3. Box Model',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Box%20Model' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Box%20Model' }
        ],
        content: 'The box model represents the structure of elements as rectangular boxes, consisting of: Content (actual text), Padding (space inside), Border (edge), and Margin (outer space).',
        code: `div {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
  margin: 20px;
}`
      },
      {
        chapter: '4. Position & Display',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Position%20%26%20Display' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Position%20%26%20Display' }
        ],
        content: 'Position controls how elements are placed (static, relative, absolute, fixed, sticky). Display defines how elements are presented (block, inline, flex, grid).',
        code: `div {
  /* Position Example */
  position: absolute;
  top: 50px;
  left: 20px;
  
  /* Display Example */
  display: flex;
}`
      },
      {
        chapter: '5. Modern Layouts (Flex & Grid)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Modern%20Layouts%20(Flex%20%26%20Grid)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Modern%20Layouts%20(Flex%20%26%20Grid)' }
        ],
        content: 'Flexbox is a one-dimensional layout system for aligning items. Grid is a two-dimensional layout system for rows and columns.',
        code: `/* Flexbox */
.flex-container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center;     /* vertical */
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}`
      },
      {
        chapter: '6. CSS3 Animations & Transitions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+CSS3%20Animations%20%26%20Transitions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+CSS3%20Animations%20%26%20Transitions' }
        ],
        content: 'Transitions allow smooth changes between property values. Animations allow complex movements using @keyframes.',
        code: `/* Transition */
button { transition: background 0.3s; }
button:hover { background: blue; }

/* Animation */
@keyframes move {
  from { left: 0; }
  to { left: 100px; }
}`
      },
      {
        chapter: '7. Media Queries (Responsive)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Media%20Queries%20(Responsive)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Media%20Queries%20(Responsive)' }
        ],
        content: 'Media queries apply styles based on screen size or device capabilities.',
        code: `@media (max-width: 600px) {
  body {
    background: lightblue;
  }
}`
      },
      {
        chapter: '8. Tailwind CSS',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Tailwind%20CSS' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Tailwind%20CSS' }
        ],
        content: 'Tailwind CSS is a utility-first framework that provides predefined classes to design UI directly in HTML. It offers built-in responsive prefixes (sm:, md:, lg:) and flex utilities.',
        code: `<!-- Tailwind Usage Example -->
<div class="flex justify-center items-center h-screen bg-blue-500 text-white p-4 rounded">
  <p class="text-sm md:text-lg lg:text-2xl">
    Responsive Tailwind Content
  </p>
</div>`
      }
    ]
  },
  js: {
    title: 'JavaScript Complete Guide',
    description: 'Learn JavaScript from basics to advanced ES6 features, including DOM manipulation, events, and asynchronous programming.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7qtP8Lo9TReqUMkiOpPBILN',
    curriculum: [
      {
        chapter: '1. What is JavaScript?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20JavaScript%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20JavaScript%3F' }
        ],
        content: 'JavaScript is a high-level, interpreted programming language used to create dynamic and interactive web pages.',
        code: `// Syntax Example
let message = "Hello JavaScript";

// console.log() prints output to the developer console
console.log(message);`
      },
      {
        chapter: '2. Variables & Data Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Variables%20%26%20Data%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Variables%20%26%20Data%20Types' }
        ],
        content: 'Variables store data values (let, const, var). JavaScript is dynamically typed, meaning types are decided at runtime (Number, String, Boolean, Null, Undefined).',
        code: `let name = "Chandu";    // String (can change)
const age = 22;         // Number (cannot change)
var city = "Hyderabad"; // Old way (avoid)

let isStudent = true;   // Boolean
let x = null;           // Null`
      },
      {
        chapter: '3. Operators & Conditionals',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Operators%20%26%20Conditionals' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Operators%20%26%20Conditionals' }
        ],
        content: 'Operators perform operations (+, -, ==, ===). Conditionals (if/else) are used to make decisions based on conditions.',
        code: `let sum = 5 + 3;
let age = 18;

// Strict equality check (checks value and type)
if (age === 18) {
  console.log("Just became an adult");
} else if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}`
      },
      {
        chapter: '4. Loops',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Loops' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Loops' }
        ],
        content: 'Loops are used to repeat code multiple times (for, while, do...while).',
        code: `// for (initialization; condition; increment)
for (let i = 0; i < 3; i++) {
  // Runs 3 times, outputs: 0, 1, 2
  console.log(i);
}`
      },
      {
        chapter: '5. Functions & Arrow Functions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Functions%20%26%20Arrow%20Functions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Functions%20%26%20Arrow%20Functions' }
        ],
        content: 'Functions are blocks of reusable code. Arrow functions introduced in ES6 provide a shorter syntax.',
        code: `/* Traditional Function */
function greet(name) {
  return "Hello " + name;
}

/* Arrow Function */
// Shorter syntax, no "function" keyword
const add = (a, b) => a + b;

console.log(greet("Chandu")); // "Hello Chandu"
console.log(add(5, 10));      // 15`
      },
      {
        chapter: '6. Arrays & Objects',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Arrays%20%26%20Objects' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Arrays%20%26%20Objects' }
        ],
        content: 'Arrays store multiple values in a single variable. Objects store data in key-value pairs.',
        code: `/* Array */
let fruits = ["apple", "banana"];
console.log(fruits[0]); // apple

/* Object */
let person = {
  name: "Chandu",
  age: 22
};
console.log(person.name); // Chandu`
      },
      {
        chapter: '7. DOM & Events',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+DOM%20%26%20Events' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+DOM%20%26%20Events' }
        ],
        content: 'The DOM (Document Object Model) represents HTML as objects so JS can modify elements. Events are actions performed by users (clicks, typing).',
        code: `// Modify DOM element dynamically
const demoSpan = document.getElementById("demo");
// demoSpan.innerHTML = "Hello";

// Event Listener
const button = document.getElementById("myBtn");
// button.addEventListener("click", () => {
//   alert("Button was clicked!");
// });`
      },
      {
        chapter: '8. Timers (setTimeout / setInterval)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Timers%20(setTimeout%20%2F%20setInterval)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Timers%20(setTimeout%20%2F%20setInterval)' }
        ],
        content: 'Timers execute code after a delay (setTimeout) or repeatedly at intervals (setInterval).',
        code: `// Runs ONCE after 2 seconds (2000 milliseconds)
setTimeout(() => {
  console.log("Delayed Hello");
}, 2000);

// Runs REPEATEDLY every 1 second
/*
let intervalId = setInterval(() => {
  console.log("Tick");
}, 1000);
*/`
      },
      {
        chapter: '9. Asynchronous JS (Promises & Async/Await)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Asynchronous%20JS%20(Promises%20%26%20Async%2FAwait)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Asynchronous%20JS%20(Promises%20%26%20Async%2FAwait)' }
        ],
        content: 'Promises represent the result of an asynchronous operation. Async/Await provides a cleaner, synchronous-looking way to handle Promises.',
        code: `/* Promise */
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success data"), 1000);
});

/* Async / Await */
async function fetchData() {
  try {
    // await pauses execution until the promise resolves
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`
      },
      {
        chapter: '10. Modern ES6+ Features',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Modern%20ES6%2B%20Features' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Modern%20ES6%2B%20Features' }
        ],
        content: 'Modern JS features include Destructuring (extracting values) and the Spread/Rest operator (copying or merging elements).',
        code: `const person = { name: "Chandu", role: "Dev" };
const arr1 = [1, 2];

// Destructuring
let { name } = person; // name = "Chandu"

// Spread Operator
let arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
let newPerson = { ...person, age: 22 };`
      }
    ]
  },
  react: {
    title: 'React Complete Guide',
    description: 'A comprehensive guide from basics to advanced React concepts, structured like a professional learning platform.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLC3y8-rCajAU1IciR8M3S2386n_z_t4Gj',
    curriculum: [
      {
        chapter: '1. What is React?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20React%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20React%3F' }
        ],
        content: 'React is a declarative, component-based JavaScript library used to build user interfaces (UI). It is fast (uses Virtual DOM), features reusable components, and makes it easy to manage UI updates.',
        code: `// Key Characteristics:
// 1. Declarative UI
// 2. Component-based architecture
// 3. Virtual DOM for performance
// 4. Unidirectional data flow`
      },
      {
        chapter: '2. Project Setup (Vite)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Project%20Setup%20(Vite)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Project%20Setup%20(Vite)' }
        ],
        content: 'Vite is a modern frontend build tool that provides a faster and leaner development experience for modern web projects. It is faster than older tools and simple to set up.',
        code: `# Terminal commands to set up a new Vite project:
npm create vite@latest my-app
cd my-app
npm install
npm run dev`
      },
      {
        chapter: '3. JSX (JavaScript XML)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+JSX%20(JavaScript%20XML)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+JSX%20(JavaScript%20XML)' }
        ],
        content: 'JSX is a syntax extension that allows writing HTML-like code inside JavaScript. It is syntactic sugar for React.createElement(). JSX makes code clean and readable.\n\nRules:\n- Only one parent element\n- Use {} for JavaScript expressions',
        code: `function App() {
  const name = "Chandu";
  // HTML inside JS
  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}`
      },
      {
        chapter: '4. Components',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Components' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Components' }
        ],
        content: 'A component is an independent, reusable piece of UI that returns React elements. Think of components like functions that return UI instead of repeating UI code.',
        code: `// Define a component
function Welcome() {
  return <h1>Welcome to React</h1>;
}

// Reuse the component
function App() {
  return (
    <div>
      <Welcome />
      <Welcome />
    </div>
  );
}`
      },
      {
        chapter: '5. Props',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Props' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Props' }
        ],
        content: 'Props (properties) are read-only inputs passed from a parent component to a child component to make components dynamic & reusable. Data flows one-way (parent → child).',
        code: `// Child component receiving props
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

// Parent component passing props
function App() {
  return (
    <div>
      <Greeting name="Ram" />
      <Greeting name="Krishna" />
    </div>
  );
}`
      },
      {
        chapter: '6. State (useState)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+State%20(useState)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+State%20(useState)' }
        ],
        content: 'State is a built-in object that stores dynamic data that can change inside a component. When state changes, React re-renders the UI to update it dynamically.',
        code: `import { useState } from 'react';

function Counter() {
  // count is the state, setCount is the updater function
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}`
      },
      {
        chapter: '7. Virtual DOM & Concept',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Virtual%20DOM%20%26%20Concept' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Virtual%20DOM%20%26%20Concept' }
        ],
        content: 'The Virtual DOM is a lightweight copy of the real DOM maintained by React. React compares the Virtual DOM with the previous version (diffing) and only updates changed elements (efficient rendering). This significantly improves performance.',
        code: `// Core logic:
// 1. Data changes
// 2. React creates a new Virtual DOM
// 3. Compares with old Virtual DOM (Diffing)
// 4. Updates ONLY the changed parts in Real DOM`
      },
      {
        chapter: '8. Event Handling',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Event%20Handling' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Event%20Handling' }
        ],
        content: 'Handling user actions like click, input, typing, etc., to make the UI interactive. Events in React use camelCase syntax (e.g., onClick, onChange) and pass a function as the event handler.',
        code: `function Button() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`
      },
      {
        chapter: '9. Conditional Rendering',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Conditional%20Rendering' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Conditional%20Rendering' }
        ],
        content: 'Showing UI elements based on conditions using standard JavaScript operators like `if`, ternary `? :`, or logical `&&`. Useful when UI changes depending on user state.',
        code: `function WelcomeBanner({ isLogin }) {
  // Using ternary operator for conditional rendering
  return (
    <div>
      {isLogin ? <h1>Welcome Dashboard</h1> : <h1>Please Login</h1>}
    </div>
  );
}`
      },
      {
        chapter: '10. Lists & Keys',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Lists%20%26%20Keys' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Lists%20%26%20Keys' }
        ],
        content: 'Rendering multiple elements using arrays using map(). A key is a unique identifier used by React to track elements in a list, helping React optimize rendering. Keys should be unique and stable.',
        code: `function ItemList() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        // Using index as key (use unique IDs if available)
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}`
      },
      {
        chapter: '11. Forms (Controlled Components)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Forms%20(Controlled%20Components)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Forms%20(Controlled%20Components)' }
        ],
        content: 'A controlled component is a form element whose value is controlled by React state. The input value is linked with state, and changes are handled via onChange. React controls the input value, not the DOM.',
        code: `import { useState } from 'react';

function NameForm() {
  const [name, setName] = useState("");

  return (
    <input 
      type="text"
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      placeholder="Enter name"
    />
  );
}`
      },
      {
        chapter: '12. Side Effects (useEffect)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Side%20Effects%20(useEffect)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Side%20Effects%20(useEffect)' }
        ],
        content: 'useEffect is a React Hook used to perform side effects in functional components like API calls, DOM manipulation, timers. It runs after render, and its execution is controlled by a dependency array.',
        code: `import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Empty array [] means run only once on mount
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? data.title : "Loading..."}</div>;
}`
      },
      {
        chapter: '13. Routing (React Router)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Routing%20(React%20Router)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Routing%20(React%20Router)' }
        ],
        content: 'Routing is navigating between different views/pages without a page reload (Single Page Application). It maps URL paths to components.',
        code: `import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`
      },
      {
        chapter: '14. Global State (useContext)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Global%20State%20(useContext)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Global%20State%20(useContext)' }
        ],
        content: 'Context API is a way to share data globally across components without passing props manually (avoiding prop drilling). Uses a Provider to pass down values and a Consumer or useContext hook to access them.',
        code: `import { createContext, useContext } from 'react';

const UserContext = createContext();

function Child() {
  const user = useContext(UserContext);
  return <h1>User: {user}</h1>;
}

function App() {
  return (
    <UserContext.Provider value="Chandu">
      <Child />
    </UserContext.Provider>
  );
}`
      },
      {
        chapter: '15. Complex State (useReducer)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Complex%20State%20(useReducer)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Complex%20State%20(useReducer)' }
        ],
        content: 'useReducer is a Hook used for managing complex state logic. It works like the Redux pattern using state, an action, and a reducer function.',
        code: `import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case "inc": return { count: state.count + 1 };
    case "dec": return { count: state.count - 1 };
    default: return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </div>
  );
}`
      },
      {
        chapter: '16. Custom Hooks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Custom%20Hooks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Custom%20Hooks' }
        ],
        content: 'A custom hook is a JavaScript function that uses React hooks to reuse logic across components. By rule, custom hooks must start with "use".',
        code: `import { useState } from 'react';

// Custom Hook
function useCounter() {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  return { count, increment };
}

// Usage
function App() {
  const { count, increment } = useCounter();
  return <button onClick={increment}>{count}</button>;
}`
      },
      {
        chapter: '17. Performance Optimization',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Performance%20Optimization' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Performance%20Optimization' }
        ],
        content: 'Tools to improve speed for large apps:\n- React.memo: HOC that prevents unnecessary re-rendering (memoizes output).\n- useMemo: Hook to memoize expensive computed values.\n- useCallback: Hook to memoize functions to prevent re-creation on every render.',
        code: `import { useState, useMemo, useCallback, memo } from 'react';

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Click</button>;
});

function App() {
  const [val, setVal] = useState(0);

  // Caches function to prevent Child from re-rendering
  const handleClick = useCallback(() => console.log('Clicked'), []);
  
  // Caches value calculation
  const expensiveVal = useMemo(() => val * 1000, [val]);

  return <Child onClick={handleClick} />;
}`
      },
      {
        chapter: '18. Advanced Concepts & Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Concepts%20%26%20Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Concepts%20%26%20Architecture' }
        ],
        content: 'Folder Structure: components (reusable UI), pages (screens), hooks (custom logic), services (API).\nCode Splitting: React.lazy() to load components on demand.\nHOC: Wrap components for extra functionality.\nError Boundaries: Catch UI crashes (class components).',
        code: `import React, { Suspense } from 'react';

// Code Splitting Example
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`
      }
    ]
  },
  python: {
    title: 'Python Complete Guide',
    description: 'A comprehensive, structured guide to Python from basic syntax and data structures to OOP, generators, and advanced concepts.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU',
    curriculum: [
      {
        chapter: '1. What is Python & Features',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Python%20%26%20Features' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Python%20%26%20Features' }
        ],
        content: 'Python is a high-level, interpreted, object-oriented programming language designed by Guido van Rossum. It is highly valued for its easy syntax, dynamic typing, cross-platform capabilities, and a massive ecosystem of libraries.',
        code: `# Features
# 1. Easy syntax (beginner-friendly)
# 2. Dynamically typed
# 3. Interpreted (no explicit compilation)
# 4. Large ecosystem (libraries, frameworks)`
      },
      {
        chapter: '2. Basic Syntax & Data Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Basic%20Syntax%20%26%20Data%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Basic%20Syntax%20%26%20Data%20Types' }
        ],
        content: 'Python does not require explicit variable declarations. It supports Primitives (int, float, string, boolean) and Complex Types (lists, tuples, sets, dictionaries). Type casting is natively supported.',
        code: `name = "Chaitanya"
age = 25

# Primitive Types
x = 10          # int
y = 10.5        # float
name = "chai"   # string
flag = True     # boolean

# Complex Types
lst = [1, 2, 3]          # list
tup = (1, 2, 3)          # tuple
st = {1, 2, 3}           # set
d = {"name": "chai"}     # dict

# Type Conversion
x = int("10")
y = str(100)`
      },
      {
        chapter: '3. Control Flow',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Control%20Flow' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Control%20Flow' }
        ],
        content: 'Python uses indentation to define code blocks for conditionals and loops (for, while).',
        code: `# If-Else
if age > 18:
    print("Adult")
else:
    print("Minor")

# Loops
for i in range(5):
    print(i)

while True:
    break`
      },
      {
        chapter: '4. Functions & Lambda',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Functions%20%26%20Lambda' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Functions%20%26%20Lambda' }
        ],
        content: 'Functions are defined using the \`def\` keyword. Default arguments are supported. Python also supports anonymous inline functions known as Lambdas.',
        code: `def add(a, b):
    return a + b

# Default Arguments
def greet(name="Guest"):
    return f"Hello {name}"

# Lambda Functions
add_lambda = lambda a, b: a + b
print(add_lambda(2, 3))`
      },
      {
        chapter: '5. Strings, Lists & Comprehensions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Strings%2C%20Lists%20%26%20Comprehensions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Strings%2C%20Lists%20%26%20Comprehensions' }
        ],
        content: 'Strings and Lists are heavily used. Strings are immutable sequence types while Lists are mutable arrays. List comprehensions provide a concise way to create lists.',
        code: `text = "hello"
print(text.upper())

# Lists
nums = [1, 2, 3]
nums.append(4)
nums.remove(2)

# List Comprehension
squares = [x*x for x in range(5)]
print(squares) # [0, 1, 4, 9, 16]`
      },
      {
        chapter: '6. Tuples, Sets & Dictionaries',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Tuples%2C%20Sets%20%26%20Dictionaries' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Tuples%2C%20Sets%20%26%20Dictionaries' }
        ],
        content: 'Tuples are immutable sequences. Sets store unique elements and perform fast set operations. Dictionaries store data in key-value pairs (hash maps).',
        code: `# Tuples (immutable)
t = (1, 2, 3)

# Sets (unique elements)
s = {1, 2, 3}
s.add(4)

# Dictionaries (Key-Value)
user = {"name": "chai", "age": 25}
print(user["name"])`
      },
      {
        chapter: '7. Object-Oriented Programming (OOP)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Object-Oriented%20Programming%20(OOP)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Object-Oriented%20Programming%20(OOP)' }
        ],
        content: 'Python fully supports Classes, Objects, Inheritance, Encapsulation, and Polymorphism. The \`self\` keyword refers to the current instance of the class.',
        code: `# Class & Encapsulation
class Person:
    def __init__(self, name):
        self.name = name       # public
        self.__balance = 1000  # private

    def greet(self):
        print("Hello", self.name)

# Inheritance
class Student(Person):
    def study(self):
        print("Studying")

p = Student("chai")
p.greet()`
      },
      {
        chapter: '8. Modules, Packages & Ecosystem',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Modules%2C%20Packages%20%26%20Ecosystem' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Modules%2C%20Packages%20%26%20Ecosystem' }
        ],
        content: 'A module is a file containing Python statements. You use \`import\` to bring modules into your namespace. Python has popular libraries like NumPy, Pandas, Matplotlib, and Requests.',
        code: `# mymodule.py
def say_hello():
    print("Hello")

# main.py
import mymodule
mymodule.say_hello()

# Popular Libs:
# NumPy -> numerical
# Pandas -> data analysis
# Requests -> network API`
      },
      {
        chapter: '9. File Handling',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+File%20Handling' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+File%20Handling' }
        ],
        content: 'Python uses the \`open()\` function. Using \`with\` ensures the file is safely closed when the block ends.',
        code: `# Writing to a file
with open("file.txt", "w") as f:
    f.write("Hello")

# Reading from a file
with open("file.txt", "r") as f:
    content = f.read()
    print(content)`
      },
      {
        chapter: '10. Exception Handling',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Exception%20Handling' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Exception%20Handling' }
        ],
        content: 'Python handles errors using try-except blocks gracefully. \`finally\` blocks ensure code execution concludes whether errors hit or not.',
        code: `try:
    x = 10 / 0
except ZeroDivisionError:
    print("Error: Math constraint")
except Exception as e:
    print(e)
finally:
    print("Done")`
      },
      {
        chapter: '11. Iterators, Generators & Decorators',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Iterators%2C%20Generators%20%26%20Decorators' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Iterators%2C%20Generators%20%26%20Decorators' }
        ],
        content: 'An iterator accesses items one by one. Generators (\`yield\`) pause function execution to save memory. Decorators are advanced wrappers to modify a function without altering its core code.',
        code: `# Generator
def gen():
    yield 1
    yield 2

g = gen()
print(next(g)) # 1

# Decorator
def my_decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@my_decorator
def say_hi():
    print("Hi")`
      },
      {
        chapter: '12. Multithreading & Advanced Concepts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Multithreading%20%26%20Advanced%20Concepts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Multithreading%20%26%20Advanced%20Concepts' }
        ],
        content: 'Python supports \`threading\` for concurrent execution, though the GIL limits it to logical concurrency rather than pure parallel CPU execution. Async/await patterns heavily utilize an event loop.',
        code: `import threading

def task():
    print("Running Thread")

t = threading.Thread(target=task)
t.start()
t.join()

# Advanced:
# GIL (Global Interpreter Lock)
# Async programming (async/await)
# Context managers`
      },
      {
        chapter: '13. Virtual Environments & Real-World Script',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Virtual%20Environments%20%26%20Real-World%20Script' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Virtual%20Environments%20%26%20Real-World%20Script' }
        ],
        content: 'Virtual environments isolate project dependencies safely. Here is a simple in-memory User CRUD example.',
        code: `# Create virtualenv
# python -m venv env
# source env/bin/activate

# Real-World in-memory CRUD
users = []

def add_user(name):
    users.append(name)

def get_users():
    return users

add_user("chai")
print(get_users())`
      },
      {
        chapter: '14. Python vs JavaScript & Interview Hacks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Python%20vs%20JavaScript%20%26%20Interview%20Hacks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Python%20vs%20JavaScript%20%26%20Interview%20Hacks' }
        ],
        content: 'Python is used dominantly for Backend/AI with simple syntax. JS is the Web Frontend standard with extreme async flexibility. In interviews, expect questions regarding Generators vs iterators, Decorators, the GIL, and OOP concepts.',
        code: `# Common Mistakes to Avoid:
# 1. Indentation errors
# 2. Overusing global variables
# 3. Mutable default arguments in functions
# 4. Ignoring exception handling block specificity`
      }
    ]
  },
  java: {
    title: 'Java Complete Guide',
    description: 'A robust, object-oriented roadmap targeting enterprise development, encompassing core Java rules, OOPs, Collections, and Java 8 features.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLsyeobzWxl7pe_IiTfNyr55kwJPWbgxB5',
    curriculum: [
      {
        chapter: '1. What is Java & Features',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Java%20%26%20Features' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Java%20%26%20Features' }
        ],
        content: 'Java is a high-level, object-oriented, platform-independent programming language created by Sun Microsystems. Its key advantage is WORA (Write Once Run Anywhere), memory management via Garbage Collection, and strong, secure typing.',
        code: `// Features of Java:
// 1. Platform Independent
// 2. Object-Oriented
// 3. Strongly Typed
// 4. Secure & Robust
// 5. Automatic Memory Management (GC)`
      },
      {
        chapter: '2. Basic Syntax & Data Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Basic%20Syntax%20%26%20Data%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Basic%20Syntax%20%26%20Data%20Types' }
        ],
        content: 'All Java code runs inside a Class and executes from the main() method. It strictly divides types into Primitive (int, double, char, boolean) and Non-Primitive (String, Arrays, Objects).',
        code: `// Entry point = main() method
class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");

        // Primitive
        int a = 10;
        double b = 10.5;
        char c = 'A';
        boolean flag = true;

        // Non-Primitive
        String name = "Chai";
        int[] arr = {1, 2, 3};
    }
}`
      },
      {
        chapter: '3. Control Statements',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Control%20Statements' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Control%20Statements' }
        ],
        content: 'Control structures manage execution flow through conditionals (If-Else) and repetitive loops (for, while).',
        code: `int a = 20;

if (a > 10) {
    System.out.println("Greater");
} else {
    System.out.println("Smaller");
}

// Loops
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

while (true) {
    break;
}`
      },
      {
        chapter: '4. Methods & Constructors',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Methods%20%26%20Constructors' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Methods%20%26%20Constructors' }
        ],
        content: 'Methods enclose logic that can be repeatedly called. Constructors are special methods named exactly like the class used to initialize new objects.',
        code: `class Car {
    String name;

    // Constructor
    Car(String n) {
        name = n;
    }

    // Method
    static int add(int a, int b) {
        return a + b;
    }
}`
      },
      {
        chapter: '5. Object-Oriented Programming (Core 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Object-Oriented%20Programming%20(Core%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Object-Oriented%20Programming%20(Core%20%F0%9F%94%A5)' }
        ],
        content: 'Java centers heavily on OOPs. Concepts like Encapsulation (hiding data), Inheritance (reusing code), Polymorphism (Overloading vs. Overriding), and Abstraction (Interfaces & abstract classes) form the absolute core of Java engineering.',
        code: `class Person {
    private int balance; // Encapsulation

    public void setBalance(int b) { balance = b; }
    public int getBalance() { return balance; }
}

// Inheritance & Polymorphism
class Animal {
    void sound() { System.out.println("Animal sound"); }
}

class Dog extends Animal {
    @Override
    void sound() { System.out.println("Bark"); } 
}

// Interface
interface Drawable {
    void draw();
}`
      },
      {
        chapter: '6. Arrays & Strings',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Arrays%20%26%20Strings' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Arrays%20%26%20Strings' }
        ],
        content: 'Arrays hold sets of data of the same type. Strings are immutable sequence sequences of characters handled by the specialized String class.',
        code: `// Array
int[] arr = new int[5];
arr[0] = 10;

// String
String s = "Hello";
System.out.println(s.length());`
      },
      {
        chapter: '7. Collections Framework (Important 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Collections%20Framework%20(Important%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Collections%20Framework%20(Important%20%F0%9F%94%A5)' }
        ],
        content: 'The Collections Framework provides pre-built data structures like Lists (ordered sequences), Sets (unique elements), and Maps (Key-Value associations).',
        code: `import java.util.*;

// List
ArrayList<String> list = new ArrayList<>();
list.add("A");

// HashMap
HashMap<Integer, String> map = new HashMap<>();
map.put(1, "Chai");`
      },
      {
        chapter: '8. Exception Handling',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Exception%20Handling' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Exception%20Handling' }
        ],
        content: 'Code runtime errors are caught and mitigated natively using the try-catch-finally block construct, ensuring the program does not randomly crash.',
        code: `try {
    int x = 10 / 0;
} catch (Exception e) {
    System.out.println("Error: " + e.getMessage());
} finally {
    System.out.println("Always runs lastly");
}`
      },
      {
        chapter: '9. Multithreading',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Multithreading' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Multithreading' }
        ],
        content: 'Threads allow programs to process things concurrently (simultaneously) utilizing CPU efficiency beautifully. Extended from the Thread class or implementing Runnable.',
        code: `class MyThread extends Thread {
    public void run() {
        System.out.println("Running thread implicitly");
    }
}

MyThread t = new MyThread();
t.start(); // Invokes the run() internally`
      },
      {
        chapter: '10. File Handling & JDBC Connection',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+File%20Handling%20%26%20JDBC%20Connection' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+File%20Handling%20%26%20JDBC%20Connection' }
        ],
        content: 'Java utilizes the \`java.io\` package for creating, reading, and modifying files. Enterprise apps often use JDBC (\`java.sql\`) to connect queries to databases.',
        code: `import java.io.*;
import java.sql.*;

// File Creation
FileWriter fw = new FileWriter("file.txt");
fw.write("Hello");
fw.close();

// DB Connection Simulation
// Connection con = DriverManager.getConnection(
//   "jdbc:mysql://localhost:3306/db", "user", "pass"
// );`
      },
      {
        chapter: '11. Java 8 Features (Very Important 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Java%208%20Features%20(Very%20Important%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Java%208%20Features%20(Very%20Important%20%F0%9F%94%A5)' }
        ],
        content: 'Java 8 massively improved functional programming efficiency using Lambda Expressions, the Stream API specifically for Collections manipulation, and Functional Interfaces (\`@FunctionalInterface\`).',
        code: `import java.util.*;

// Lambda Expression
// (a, b) -> a + b;

class Demo {
  public static void main(String[] args) {
      List<String> list = Arrays.asList("A", "B", "C");
      
      // Stream API
      list.stream().forEach(System.out::println);
  }
}`
      },
      {
        chapter: '12. Advanced Concepts & Spring Framework',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Concepts%20%26%20Spring%20Framework' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Concepts%20%26%20Spring%20Framework' }
        ],
        content: 'Advanced Java deals deeply with the JVM architecture, Garbage collector tracing, and Design Patterns. For enterprise applications, the Spring Framework (and Spring Boot) dominates modern backend API development utilizing Dependency Injection.',
        code: `// Advanced Roadmap Elements:
// JVM, JRE, JDK inner differences
// Class loaders and Reflection API mapping
// Object Serialization protocols

// Ecosystem:
// - Spring Boot (Rapid REST API scaffolding)
// - Maven/Gradle (Dependency Build Tools)`
      },
      {
        chapter: '13. Real-World CRUD Example',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Real-World%20CRUD%20Example' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Real-World%20CRUD%20Example' }
        ],
        content: 'Combining OOPs with Collections provides the groundwork for an in-memory CRUD environment effectively mimicking small Databases.',
        code: `import java.util.*;

class User {
    int id; String name;
    User(int id, String name) { this.id = id; this.name = name; }
}

class Main {
    public static void main(String[] args) {
        List<User> users = new ArrayList<>();
        users.add(new User(1, "Chai"));

        for (User u : users) {
            System.out.println(u.name);
        }
    }
}`
      },
      {
        chapter: '14. Java vs Python & Interview Hacks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Java%20vs%20Python%20%26%20Interview%20Hacks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Java%20vs%20Python%20%26%20Interview%20Hacks' }
        ],
        content: 'Java ensures extreme stability with strong static typing making it favorable for large corporations. Common interview checks revolve around Interface vs Abstract rules, the Collection map nuances, and the underlying JVM memory structure.',
        code: `// Mistakes to Avoid:
// 1. Not understanding OOP properly
// 2. Memory leaks (keeping static references indefinitely)
// 3. Confusion between interface & abstract class
// 4. Ignoring explicit exception handling protocols`
      }
    ]
  },
  nodejs: {
    title: 'Node.js Complete Guide',
    description: 'A comprehensive guide exploring Node.js from standard architecture to robust REST API creation, Event Loops, and Express middleware architectures.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwHX',
    curriculum: [
      {
        chapter: '1. What is Node.js & Architecture?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Node.js%20%26%20Architecture%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Node.js%20%26%20Architecture%3F' }
        ],
        content: 'Node.js is a JavaScript runtime environment allowing JS execution outside browsers, powered heavily by the specialized Chrome V8 Engine. It is famous for its Event Loop architecture, which employs a single-threaded format managing asynchronous, non-blocking requests perfectly using callbacks efficiently.',
        code: `// Why Node.js?
// 1. Non-blocking (asynchronous I/O)
// 2. High-speed V8 execution mechanism
// 3. Unifies front and backend language (JavaScript)
// 4. Heavily reliant on Event-Driven processes`
      },
      {
        chapter: '2. Setup, Modules & File System',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%2C%20Modules%20%26%20File%20System' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%2C%20Modules%20%26%20File%20System' }
        ],
        content: 'NPM tracks standard dependencies via \`npm init\`. Node supports pulling modular logic using \`require()\`. You can pull built-in core modules (like \`fs\` for the filesystem) or construct custom module exports.',
        code: `const fs = require('fs');

// Custom module logic (math.js)
// exports.add = (a, b) => a + b;
// const math = require('./math');

// Reading the File System
const data = fs.readFileSync('file.txt', 'utf-8');

// Writing data seamlessly
fs.writeFileSync('file.txt', 'New Data');`
      },
      {
        chapter: '3. Web Server & Async Principles',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Web%20Server%20%26%20Async%20Principles' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Web%20Server%20%26%20Async%20Principles' }
        ],
        content: 'Node runs naturally asynchronous protocols. Instead of freezing up an application process during reads/writes, Node fires parallel functions resolving asynchronously via basic Callbacks, Promises, or syntactical Async/Await structures.',
        code: `// 1. The HTTP Module Strategy
const http = require('http');
http.createServer((req, res) => {
  res.end("Hello Server");
}).listen(3000);

// 2. Modern Async/Await execution
async function run() {
  const data = await fetchLocalData();
  console.log(data);
}`
      },
      {
        chapter: '4. Express.js Ecosystem & Middleware',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Express.js%20Ecosystem%20%26%20Middleware' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Express.js%20Ecosystem%20%26%20Middleware' }
        ],
        content: 'Express.js is effectively the standard framework running optimally on top of Node. It gracefully constructs routing architectures. Middleware lies in the middle (intercepting the Request to Response pipeline) ideal for authorizations and request logging.',
        code: `const express = require('express');
const app = express();

// Middleware Integration
app.use((req, res, next) => {
  console.log("Request received!");
  next(); // Pushes request along the pipeline
});

app.get('/', (req, res) => {
  res.send("Hello Express Environment");
});

// Server listener
app.listen(3000);`
      },
      {
        chapter: '5. Real-World REST API (CRUD)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Real-World%20REST%20API%20(CRUD)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Real-World%20REST%20API%20(CRUD)' }
        ],
        content: 'Constructing Create, Read, Update, and Delete endpoints via API mapping provides the basis of almost all Node backends.',
        code: `app.use(express.json()); // Essential body parsing config
let users = [];

// CREATE Request
app.post('/users', (req, res) => {
  users.push(req.body);
  res.send("User added seamlessly");
});

// READ Request
app.get('/users', (req, res) => {
  res.json(users);
});`
      },
      {
        chapter: '6. Databases & Authentication',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Databases%20%26%20Authentication' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Databases%20%26%20Authentication' }
        ],
        content: 'Typically operating cleanly with NoSQL structures like Mongoose (MongoDB). APIs securely lock transactions integrating methodologies like JWT (JSON Web Tokens) or direct Sessions encoding.',
        code: `// Database Setup Simulation
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// JWT Security Checks natively passed through Middleware
// const jwt = require('jsonwebtoken');`
      },
      {
        chapter: '7. Streams & Event Emitters',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Streams%20%26%20Event%20Emitters' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Streams%20%26%20Event%20Emitters' }
        ],
        content: 'Node expertly manages massive processes (e.g., video streaming) using fragmented Streams avoiding crashing RAM capabilities. Emitters construct custom pub/sub patterns natively.',
        code: `// Stream Fragmentation
const stream = fs.createReadStream('file.txt');
stream.on('data', chunk => console.log(chunk));

// Event Emitters Setup
const EventEmitter = require('events');
const event = new EventEmitter();

event.on('start', () => console.log("Started Process cleanly"));
event.emit('start');`
      },
      {
        chapter: '8. Node vs Java & Advanced Theory',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Node%20vs%20Java%20%26%20Advanced%20Theory' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Node%20vs%20Java%20%26%20Advanced%20Theory' }
        ],
        content: 'Java utilizes a Multi-threaded approach (Fast CPU processing) whereas Node relies on a single Event-Driven scope (Fast I/O processing). Be careful to avoid "Callback Hell" and severely lagging out architectures executing blocking fs.readFileSync synchronously in production deployments.',
        code: `// Deep Architectural Components natively supported:
// 1. Clustering -> Max multi-core utilization
// 2. Worker Threads
// 3. Redis integration caching methodologies
// 4. process.env environment variables loading (.env files)`
      }
    ]
  },
  express: {
    title: 'ExpressJS Framework Guide',
    description: 'A focused deep-dive into Express.js, covering everything from core routing syntax and modular API setups to advanced middleware handling.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL_c9BZzLwBRJOJ4K8I-6P7JkFq618q3f5',
    curriculum: [
      {
        chapter: '1. What is Express.js?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Express.js%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Express.js%3F' }
        ],
        content: 'Express.js is a minimal, lightweight, and extremely flexible web application framework built on top of the Node.js runtime. It dramatically speeds up development by providing built-in routing architectures and seamless Middlewares mapping.',
        code: `// Why Express.js?
// 1. Un-opinionated and highly customizable
// 2. Simplifies routing and HTTP commands natively
// 3. Excellent REST API development ecosystem
// 4. Handles parsing effortlessly (req.body)`
      },
      {
        chapter: '2. Setup & Basic Web Server',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Basic%20Web%20Server' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Basic%20Web%20Server' }
        ],
        content: 'Express simplifies spinning up a web server. To start, you bind the \`express()\` instance to a variable and instruct it to listen natively on a specific port.',
        code: `// Setup: npm install express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("Hello Express Server");
});

// Fire up the listener
app.listen(3000, () => {
  console.log("Server running on port 3000");
});`
      },
      {
        chapter: '3. HTTP Routing (Core Concept 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+HTTP%20Routing%20(Core%20Concept%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+HTTP%20Routing%20(Core%20Concept%20%F0%9F%94%A5)' }
        ],
        content: 'Routing determines how an application responds to a client request to a particular endpoint mapped by uniquely HTTP methods (GET, POST, PUT, DELETE).',
        code: `app.get('/users', (req, res) => {
  res.send("Fetching Users");
});

app.post('/users', (req, res) => {
  res.send("Creating a new user...");
});`
      },
      {
        chapter: '4. The Request & Response',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20Request%20%26%20Response' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20Request%20%26%20Response' }
        ],
        content: 'The Callback function for routes has crucial \`(req, res)\` parameters. \`(req)\` captures headers, queries, strings, parameters and body sizes dynamically. \`(res)\` governs the outgoing response data mapping types like JSON natively.',
        code: `// Route Parameters & Query Strings
app.get('/user/:id', (req, res) => {
  const query = req.query; // Captures ?name=chai URL param
  const id = req.params.id; // Captures the /user/123 Route param
  
  res.status(200).json({ message: "OK", id: id });
});`
      },
      {
        chapter: '5. Middleware Interceptors (Crucial 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Middleware%20Interceptors%20(Crucial%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Middleware%20Interceptors%20(Crucial%20%F0%9F%94%A5)' }
        ],
        content: 'Middleware functions have access to the request and response object, sitting squarely in the middle of the cycle. They execute logic, make modifications, and jump to the next middleware via the \`next()\` function.',
        code: `// Custom Logging Middleware
app.use((req, res, next) => {
  console.log(\`Request executed at: \${new Date()}\`);
  next(); // Must be called!
});

// Built-in Middleware (Parses JSON request bodies)
app.use(express.json());`
      },
      {
        chapter: '6. Express Router (Modularity)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Express%20Router%20(Modularity)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Express%20Router%20(Modularity)' }
        ],
        content: 'In large applications, dumping all routes in \`app.js\` is catastrophic. The \`express.Router\` natively spins up modular, mountable route handlers separating models effectively.',
        code: `// usersRoute.js file
const router = require('express').Router();

router.get('/', (req, res) => res.send("User Module"));

module.exports = router;

// app.js file
// const userRoutes = require('./usersRoute');
// app.use('/users', userRoutes);`
      },
      {
        chapter: '7. REST API (CRUD Environment)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+REST%20API%20(CRUD%20Environment)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+REST%20API%20(CRUD%20Environment)' }
        ],
        content: 'The staple of intermediate Express mapping relies on full Create, Read, Update, and Delete endpoints.',
        code: `app.use(express.json());
let users = [];

// Create
app.post('/api/user', (req, res) => { users.push(req.body); res.send("Added"); });

// Read
app.get('/api/user', (req, res) => { res.json(users); });

// Update
app.put('/api/user/:id', (req, res) => {
    users[req.params.id] = req.body; res.send("Updated");
});

// Delete
app.delete('/api/user/:id', (req, res) => {
    users.splice(req.params.id, 1); res.send("Deleted");
});`
      },
      {
        chapter: '8. Authentication & Database',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Authentication%20%26%20Database' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Authentication%20%26%20Database' }
        ],
        content: 'Express commonly integrates dynamically with NoSQL (Mongoose/MongoDB). You construct verification pipelines via JSON Web Tokens directly locked into Custom Route Middlewares.',
        code: `// MongoDB Database Mapping
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test');

// JWT (JSON Web Tokens)
// const jwt = require('jsonwebtoken');
// const token = jwt.sign({ id: 1 }, "secret_key");`
      },
      {
        chapter: '9. Error Handling & Async Concepts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Error%20Handling%20%26%20Async%20Concepts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Error%20Handling%20%26%20Async%20Concepts' }
        ],
        content: 'Express captures centralized, uniform asynchronous errors elegantly via an \`(err, req, res, next)\` signature interceptor preventing random server panics.',
        code: `// Async/Await
app.get('/data', async (req, res) => {
  const data = await Promise.resolve("Testing String");
  res.send(data);
});

// Global Error Catcher Mechanism
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Global Server Error");
});`
      },
      {
        chapter: '10. Structure & Interview Mastery',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Structure%20%26%20Interview%20Mastery' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Structure%20%26%20Interview%20Mastery' }
        ],
        content: 'Best practice architectures cleanly segregate \`models/\` (DB templates), \`controllers/\` (logic execution), and \`routes/\` (endpoint paths) independently.\\nNode.js is the engine, Express.js is the application wrapper built on top of it. Typical developer struggles include omitting \`express.json()\`, getting stranded without invoking \`next()\`, or experiencing CORS blocking policies.',
        code: `// Advanced Security Concepts tested during Interviews:
// 1. CORS configuring (app.use(cors()))
// 2. Helmet headers (app.use(helmet()))
// 3. API Rate limiting (express-rate-limit)
// 4. File injections handling (multer middleware)`
      }
    ]
  },
  spring: {
    title: 'Spring Boot Framework Guide',
    description: 'An industry-standard guide to the Java Spring ecosystem, emphasizing Spring Boot auto-configuration, MVC patterns, REST API endpoints, and JPA integrations.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTYTEooakHchTGglSvkZAjnE',
    curriculum: [
      {
        chapter: '1. What is Spring & Spring Boot?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Spring%20%26%20Spring%20Boot%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Spring%20%26%20Spring%20Boot%3F' }
        ],
        content: 'The Spring Framework is an incredibly powerful Java framework targeting enterprise-level scale applications utilizing Dependency Injection (DI) and Model-View-Controller (MVC) pipelines. Spring Boot is the modern extension that eliminates complex configuration, supplying Auto-Configuration and Embedded Tomcats automatically.',
        code: `// The Spring vs Spring Boot Diff:
// Spring -> Manual configuration, XML setups, Slower startup time.
// Spring Boot -> Auto-config properties, No XML required, Fast production deployment.`
      },
      {
        chapter: '2. Core Foundations (DI & IoC)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Core%20Foundations%20(DI%20%26%20IoC)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Core%20Foundations%20(DI%20%26%20IoC)' }
        ],
        content: 'Dependency Injection (DI) allows the Spring Container to create and securely manage "Beans" (objects) rather than developers manually assigning \`new Object()\`. This gives control over the lifecycle back to Spring, known as Inversion of Control (IoC).',
        code: `// Dependency Injection example natively handling Class allocation:
@Component
class Engine {}

@Component
class Car {
    @Autowired  // Spring automatically injects the Engine dependency here
    Engine engine;
}`
      },
      {
        chapter: '3. Setup & Main Application Class',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Main%20Application%20Class' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Main%20Application%20Class' }
        ],
        content: 'Spring Boot projects are typically initialized rapidly via the "Spring Initializr". The core execution requires exactly one Main root class wrapped with \`@SpringBootApplication\`.',
        code: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// This single annotation handles Configuration, Component scanning, and EnableAutoConfiguration
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}`
      },
      {
        chapter: '4. The REST API Controller Layer',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20REST%20API%20Controller%20Layer' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20REST%20API%20Controller%20Layer' }
        ],
        content: 'Constructing REST endpoints is declarative. A class annotated with \`@RestController\` tells Spring that this component fields web requests, and it automatically serializes internal Object returns into flawless JSON payloads.',
        code: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @GetMapping
    public String getUsers() {
        return "List of users via GET";
    }

    @PostMapping
    public String addUser() {
        return "User securely added via POST";
    }
}`
      },
      {
        chapter: '5. N-Tier Architecture (Layers)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+N-Tier%20Architecture%20(Layers)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+N-Tier%20Architecture%20(Layers)' }
        ],
        content: 'The most commonly accepted best-practice architecture separates concerns strictly: Controller Layer (receives requests) -> Service Layer (calculates business logic) -> Repository Layer (interacts with Database mappings).',
        code: `// 1. Controller calls Service:
// @RestController class API { public API(UserService us){} }
//
// 2. Service computes logic:
@Service
public class UserService {
    public String handleData() { return "Strict Business Logic Data"; }
}`
      },
      {
        chapter: '6. JPA Repository & Entity Mappings',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+JPA%20Repository%20%26%20Entity%20Mappings' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+JPA%20Repository%20%26%20Entity%20Mappings' }
        ],
        content: 'Spring leverages Java Persistence API (JPA) for dynamic Object-Relational Mappings (ORM). Writing an Interface extending \`JpaRepository\` allows 100% automated CRUD queries without writing SQL.',
        code: `import jakarta.persistence.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// Entity Mapper (Maps Object memory to Database Table format)
@Entity
public class User {
    @Id
    @GeneratedValue
    private int id;
    private String name;
}

// Out-of-the-box native CRUD commands (findAll(), save(), deleteById())
@Repository
public interface UserRepo extends JpaRepository<User, Integer> {}`
      },
      {
        chapter: '7. Database Binding & Full CRUD Example',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Database%20Binding%20%26%20Full%20CRUD%20Example' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Database%20Binding%20%26%20Full%20CRUD%20Example' }
        ],
        content: 'You bind local DBs dynamically inside the \`application.properties\` file rather than hardcoding. Mapping out a completely functional Database CRUD interaction looks elegant.',
        code: `// application.properties environment config:
// spring.datasource.url=jdbc:mysql://localhost:3306/db
// spring.datasource.username=root
// spring.datasource.password=pass

@RestController
@RequestMapping("/api/users")
class ApiEndpoint {
    @Autowired UserRepo repo; // Injects the JPA interface above

    @PostMapping
    public User create(@RequestBody User user) { return repo.save(user); }

    @GetMapping
    public List<User> getAll() { return repo.findAll(); }
}`
      },
      {
        chapter: '8. Global Exception Handling',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Global%20Exception%20Handling' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Global%20Exception%20Handling' }
        ],
        content: 'Spring intercepts and sanitizes random errors globally using \`@ControllerAdvice\` guarding the API from spitting raw stack trace details to end users during exceptions.',
        code: `import org.springframework.web.bind.annotation.*;

@ControllerAdvice
public class GlobalExceptionConfig {

    @ExceptionHandler(Exception.class)
    public String handleGeneralCrashes() {
        return "A safe generic error response string.";
    }
}`
      },
      {
        chapter: '9. Spring Cloud & Microservices',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Spring%20Cloud%20%26%20Microservices' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Spring%20Cloud%20%26%20Microservices' }
        ],
        content: 'Spring rules the Enterprise ecosystem utilizing massive scalability via Spring Cloud mapping. A Microservices architecture breaks one massive "Monolith" codebase into a web of multiple small independent services interacting cooperatively via REST architectures natively.',
        code: `// Advanced Enterprise Features & Stack Components:
// 1. Actuator (Metrics & Monitoring)
// 2. Spring Security (Authentication blocking via JWT & OAuth2 architectures)
// 3. Aspect-Oriented Programming (AOP) for global logging traces
// 4. Server configuration Profiles separating (dev vs prod rules)`
      },
      {
        chapter: '10. Spring vs Node & Interview Points',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Spring%20vs%20Node%20%26%20Interview%20Points' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Spring%20vs%20Node%20%26%20Interview%20Points' }
        ],
        content: 'Node.js accelerates rapid IO processing. Spring heavily accelerates raw CPU capabilities reliably via the JVM layout. Common errors involve breaking Architectural boundaries (writing HTTP code in Repository) and cyclic dependencies. Expect intense queries regarding DI definitions, Hibernate/JPA functionality, and native Annotations.',
        code: `// Top Spring Backend Annotations:
// @Component (Generic Bean handler)
// @Service (Business logic proxy Bean pattern)
// @Repository (Database persistence proxy)
// @RestController (Web API payload)
// @Autowired (Forceful dependency injection injection)`
      }
    ]
  },
  dotnet: {
    title: '.NET Complete Guide',
    description: 'A comprehensive, structured guide to the .NET ecosystem, covering C# fundamentals, Object-Oriented Principles, Entity Framework, and modern ASP.NET Core web architecture.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLLWMQd6PeGY0bEMxObA6dtYZuJcAhupVh',
    curriculum: [
      {
        chapter: '1. What is .NET & Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20.NET%20%26%20Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20.NET%20%26%20Architecture' }
        ],
        content: '.NET is an open-source, cross-platform development platform built by Microsoft. Modern .NET operates on the CLR (Common Language Runtime) with a massive Base Class Library (BCL). Unlike the older Windows-only .NET Framework, the modern .NET is built natively for cross-platform speed.',
        code: `// Key Components:
// 1. CLR -> Executes Code
// 2. BCL -> Built-in libraries
// 3. Languages -> C#, F#, VB.NET
// 4. SDK -> Development Toolchain`
      },
      {
        chapter: '2. C# Basics & Data Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+C%23%20Basics%20%26%20Data%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+C%23%20Basics%20%26%20Data%20Types' }
        ],
        content: 'C# is the primary language used in .NET. It enforces strong typing. The execution starts predictably from the Main() method in a console environment. It separates variables broadly into Primitives (value types) and Arrays/Strings (reference types).',
        code: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello .NET");
        
        // Value Types
        int a = 10;
        double b = 10.5;
        bool flag = true;

        // Reference Types
        string name = "Chai";
        int[] arr = {1, 2, 3};
    }
}`
      },
      {
        chapter: '3. Control Statements & Methods',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Control%20Statements%20%26%20Methods' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Control%20Statements%20%26%20Methods' }
        ],
        content: 'Control structures follow standard C-like syntax utilizing if-else branching and loops. Methods encapsulate reusable executable logic.',
        code: `int a = 20;

if (a > 10) {
    Console.WriteLine("Greater");
} else {
    Console.WriteLine("Smaller");
}

for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

static int Add(int x, int y) {
    return x + y;
}`
      },
      {
        chapter: '4. Object-Oriented Programming (Core 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Object-Oriented%20Programming%20(Core%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Object-Oriented%20Programming%20(Core%20%F0%9F%94%A5)' }
        ],
        content: 'C# is a deeply object-oriented language. You map real-world objects using properties (Encapsulation), inherit abilities gracefully (Inheritance) using the \`:\` syntax, and override underlying behaviors (Polymorphism) logically through virtual and override keywords.',
        code: `class Person {
    public string Name { get; set; } // Auto-property
}

// Inheritance & Polymorphism
class Animal {
    public virtual void Sound() { Console.WriteLine("Roar"); }
}

class Dog : Animal {
    public override void Sound() { Console.WriteLine("Bark"); }
}

// Abstraction
abstract class Shape {
    public abstract void Draw();
}`
      },
      {
        chapter: '5. Interfaces & Collections',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Interfaces%20%26%20Collections' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Interfaces%20%26%20Collections' }
        ],
        content: 'Interfaces dictate contracts (using an "I" prefix by convention) that classes must fulfill. The System.Collections.Generic namespace offers dynamic data arrays (Lists) and lookup tables (Dictionaries).',
        code: `using System.Collections.Generic;

interface IAnimal {
    void Speak();
}

class App {
    static void Main() {
        List<string> list = new List<string>();
        list.Add("Chai");
        
        Dictionary<int, string> map = new Dictionary<int, string>();
        map.Add(1, "Developer");
    }
}`
      },
      {
        chapter: '6. Exceptions & Async/Await',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Exceptions%20%26%20Async%2FAwait' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Exceptions%20%26%20Async%2FAwait' }
        ],
        content: 'Exceptions prevent crashing when untoward events happen. Async/Await is arguably the most critical feature in modern C#, halting threads cleanly until Tasks resolve without blocking the entire interface or request.',
        code: `try {
    int x = 10 / 0;
} catch (Exception e) {
    Console.WriteLine("Math constraint hit!");
} finally {
    Console.WriteLine("Runs regardless");
}

// Async programming
async Task<string> GetDataAsync() {
    // Simulates DB call
    await Task.Delay(1000); 
    return "Data incoming";
}`
      },
      {
        chapter: '7. ASP.NET Core & Middleware',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+ASP.NET%20Core%20%26%20Middleware' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+ASP.NET%20Core%20%26%20Middleware' }
        ],
        content: 'ASP.NET Core is the top-tier Microsoft web framework. It builds web apps, microservices, and REST APIs. The Middleware acts as a pipeline seamlessly intercepting requests (like an authentication layer) before they hit endpoints.',
        code: `var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Custom Middleware Pipeline
app.Use(async (context, next) => {
    Console.WriteLine("Request passing through");
    await next();
});

// Minimal API syntax
app.MapGet("/", () => "Hello World");

app.Run();`
      },
      {
        chapter: '8. Dependency Injection & Entity Framework',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Dependency%20Injection%20%26%20Entity%20Framework' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Dependency%20Injection%20%26%20Entity%20Framework' }
        ],
        content: 'ASP.NET Core natively features Dependency Injection (DI) allowing decoupled testable architectures. Entity Framework Core (EF Core) is an Object-Relational Mapper (ORM) letting developers perform DB migrations without writing direct SQL.',
        code: `// Built-in Dependency Injection
// builder.Services.AddScoped<IMyService, MyService>();

// Entity Framework Core Model
public class User {
    public int Id { get; set; }
    public string Name { get; set; }
}
// EF automatically maps this User class into a SQL 'Users' table.`
      },
      {
        chapter: '9. Advanced Concepts & CLI',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Concepts%20%26%20CLI' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Concepts%20%26%20CLI' }
        ],
        content: 'Language Integrated Query (LINQ) brings SQL-like functionality to C# arrays. For running .NET processes efficiently, developers mostly use the "dotnet" CLI interface.',
        code: `// LINQ Example
var result = list.Where(x => x.StartsWith("A")).ToList();

// CLI Commands
// dotnet new console
// dotnet build
// dotnet run`
      },
      {
        chapter: '10. Real-World Minimal API',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Real-World%20Minimal%20API' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Real-World%20Minimal%20API' }
        ],
        content: 'In modern .NET, spinning up robust microservices using the Minimal API structure is remarkably concise. Look at how flawlessly objects transform into JSON outputs.',
        code: `var app = WebApplication.Create();

app.MapGet("/users", () => {
    return new[] { 
        new { Id = 1, Name = "Chai" },
        new { Id = 2, Name = "Admin" }
    };
});

app.Run();`
      },
      {
        chapter: '11. .NET vs Java & Interview Hacks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+NET%20vs%20Java%20%26%20Interview%20Hacks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+NET%20vs%20Java%20%26%20Interview%20Hacks' }
        ],
        content: '.NET runs on the CLR utilizing C# heavily while Java runs via JVM utilizing Java. Common mistakes in .NET include blocking async threads (.Result vs await) and incorrectly scoping DI. Expect interview queries to deeply cross-examine the Middleware pipeline, ASP.NET Core Architecture, and Entity Framework setups.',
        code: `// Common Mistakes to Avoid:
// 1. Not understanding Scoped vs Transient vs Singleton in DI
// 2. Blocking async code (using thread.Wait instead of Await)
// 3. Ignoring the Middleware sequence (order genuinely matters!)
// 4. Overcomplicating Exception Handling`
      }
    ]
  },
  redux: {
    title: 'Redux Complete Guide',
    description: 'Master state management with Redux and Redux Toolkit, ensuring predictable global state in Javascript applications.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLC3y8-rCajAU1IciR8M3S2386n_z_t4Gj',
    curriculum: [
      {
        chapter: '1. What is Redux?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Redux%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Redux%3F' }
        ],
        content: 'Redux is a predictable state management library for JavaScript applications, commonly used with React to manage global state. It ensures a unidirectional data flow: UI → Action → Reducer → Store → UI.',
        code: `// Think of Redux like a bank system:
// User -> Request (withdraw money)
// Action -> Request slip
// Reducer -> Bank rules
// Store -> Account balance
// UI -> Updated balance`
      },
      {
        chapter: '2. UI & Actions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+UI%20%26%20Actions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+UI%20%26%20Actions' }
        ],
        content: 'The UI (React component) initiates a change by dispatching an Action. An Action is a plain JavaScript object that describes what happened. Actions are the only way to send data to the Redux store.',
        code: `// Component triggers action
// User interacts (click, input) and component calls dispatch()
dispatch({ type: "INCREMENT" });

// Action structure:
const myAction = {
  type: "INCREMENT",  // mandatory
  payload: data       // optional data
};`
      },
      {
        chapter: '3. Reducers',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Reducers' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Reducers' }
        ],
        content: 'A reducer is a pure function that determines how state changes based on the action. It takes the current state and an action, returning a new state. It must have no side effects.',
        code: `function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}`
      },
      {
        chapter: '4. The Store & Updated UI',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20Store%20%26%20Updated%20UI' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20Store%20%26%20Updated%20UI' }
        ],
        content: 'The Store is a centralized container holding the entire application state (single source of truth). React components re-render automatically when they read data from the store using hooks like useSelector().',
        code: `import { createStore } from "redux";
const store = createStore(reducer);

// Important Store Concepts:
// - getState() -> Returns current state
// - dispatch(action) -> Function to send action
// - subscribe() -> Listens for state changes

// In a React Component:
const count = useSelector(state => state.count);`
      },
      {
        chapter: '5. Redux Toolkit (Modern Approach)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Redux%20Toolkit%20(Modern%20Approach)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Redux%20Toolkit%20(Modern%20Approach)' }
        ],
        content: 'Redux Toolkit is the modern, recommended approach to Redux. It features less boilerplate, easier syntax, and built-in best practices like Immer for simpler state mutation logic.',
        code: `import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increment: (state) => {
      // Modifying state directly is allowed here (via Immer)
      state.count += 1;
    }
  }
});

export const { increment } = counterSlice.actions;
export default counterSlice.reducer;`
      }
    ]
  },
  ts: {
    title: 'TypeScript Complete Guide',
    description: 'A structured, end-to-end guide to TypeScript (TS)—from fundamentals to advanced concepts, aligned for interview prep and real-world usage.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI',
    curriculum: [
      {
        chapter: '1. What is TypeScript?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20TypeScript%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20TypeScript%3F' }
        ],
        content: 'TypeScript is a strongly typed superset of JavaScript that compiles into plain JavaScript. Developed by Microsoft. It adds static typing, improves code quality & maintainability, provides better IDE support (auto-complete, error checking), and helps in large-scale applications.',
        code: `// JavaScript
let name = "Chaitanya";

// TypeScript (string is a type annotation)
let name: string = "Chaitanya";`
      },
      {
        chapter: '2. Setup & Compilation',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Compilation' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Compilation' }
        ],
        content: 'Install TypeScript globally. Initialize a tsconfig.json file for tracking settings inside your project. Compile TS -> JS using the tsc command.',
        code: `# Install
npm install -g typescript

# Initialize project
tsc --init

# Compile TS → JS
tsc app.ts`
      },
      {
        chapter: '3. Data Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Data%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Data%20Types' }
        ],
        content: 'TypeScript supports all JS primitives plus special types. "any" disables type checking, "unknown" forces type checking before use. "void" is for functions without return. "never" is for functions that throw or indefinitely loop.',
        code: `// Primitive Types
let age: number = 25;
let username: string = "chai";
let isActive: boolean = true;

// Special Types
let value: any = "hello"; // avoid using much
let data: unknown = 10;   // safer than any
let nothing: void = undefined;
let neverValue: never;    // for functions that never return`
      },
      {
        chapter: '4. Arrays & Tuples',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Arrays%20%26%20Tuples' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Arrays%20%26%20Tuples' }
        ],
        content: 'Arrays hold multiple elements of a specific type. Tuples are a typed array with a pre-defined length and types for each index.',
        code: `// Arrays
let numbers: number[] = [1, 2, 3];

// Tuple
let user: [string, number] = ["chai", 25];`
      },
      {
        chapter: '5. Functions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Functions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Functions' }
        ],
        content: 'Functions allow type annotations for parameters and return values. You can define optional or default parameters.',
        code: `function add(a: number, b: number): number {
  return a + b;
}

// Optional & Default Params
function greet(name: string = "Guest"): string {
  return \`Hello \${name}\`;
}`
      },
      {
        chapter: '6. Objects & Interfaces',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Objects%20%26%20Interfaces' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Objects%20%26%20Interfaces' }
        ],
        content: 'Objects can be typed inline, but Interfaces are highly recommended for object structures because they support inheritance and remain cleaner.',
        code: `// Object Type
let person: { name: string; age: number } = {
  name: "chai",
  age: 25
};

// Interface (Recommended)
interface User {
  name: string;
  age: number;
}

let u1: User = { name: "chai", age: 25 };`
      },
      {
        chapter: '7. Classes, OOP & Modifiers',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Classes%2C%20OOP%20%26%20Modifiers' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Classes%2C%20OOP%20%26%20Modifiers' }
        ],
        content: 'TypeScript adds class-based Object-Oriented Programming features like Access Modifiers (`public`, `private`, `protected`).',
        code: `class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let p = new Person("chai");
p.greet();`
      },
      {
        chapter: '8. Union & Intersection Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Union%20%26%20Intersection%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Union%20%26%20Intersection%20Types' }
        ],
        content: 'Type Aliases represent custom types. Union (`|`) means a value can be of one type OR another. Intersection (`&`) combines multiple types into one.',
        code: `// Type Aliases
type ID = number | string;
let userId: ID = 101;

// Union
let value: string | number = "hello";

// Intersection
type A = { name: string };
type B = { age: number };
type C = A & B;`
      },
      {
        chapter: '9. Enums & Type Assertion',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Enums%20%26%20Type%20Assertion' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Enums%20%26%20Type%20Assertion' }
        ],
        content: 'Enums define a set of named constants. Type inference automatically assigns types based on assignment. Type assertion acts like type casting.',
        code: `// Enums
enum Role { Admin, User, Guest }
let r: Role = Role.Admin;

// Type Inference
let x = 10; // TS automatically assigns number

// Type Assertions
let value: any = "hello";
let strLength: number = (value as string).length;`
      },
      {
        chapter: '10. Generics (Very Important 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Generics%20(Very%20Important%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Generics%20(Very%20Important%20%F0%9F%94%A5)' }
        ],
        content: 'Generics create reusable, flexible, and type-safe components or functions that work with multiple data types rather than a single one.',
        code: `function identity<T>(value: T): T {
  return value;
}

identity<string>("Hello");
identity<number>(10);`
      },
      {
        chapter: '11. Advanced Types & Utility Types',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Types%20%26%20Utility%20Types' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Types%20%26%20Utility%20Types' }
        ],
        content: 'Literal Types restrict values to specific literals. Utility types like `Partial` making properties optional and `Readonly` making properties immutable.',
        code: `// Literal Types
let direction: "left" | "right";

// Nullable Types
let value: string | null = null;

// Utility Types
interface User { name: string; age: number; }

let u: Partial<User> = { name: "chai" };
let r: Readonly<User> = { name: "chai", age: 25 };`
      },
      {
        chapter: '12. Modules & Async',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Modules%20%26%20Async' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Modules%20%26%20Async' }
        ],
        content: 'Promises and Async/Await can define their explicit return types using `Promise<T>`. Modules use `export` and `import` for breaking down large codebases.',
        code: `// file1.ts
export const name = "chai";

// file2.ts
import { name } from "./file1";

// Async / Promise
async function fetchData(): Promise<string> {
  return "data";
}`
      },
      {
        chapter: '13. Decorators & TSConfig',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Decorators%20%26%20TSConfig' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Decorators%20%26%20TSConfig' }
        ],
        content: 'Decorators are advanced, experimental features used with classes. \`tsconfig.json\` holds compiler rules such as enforcing strict mode and changing compile targets.',
        code: `// Decorators
function Log(target: any) {
  console.log(target);
}

@Log
class Test {}

// tsconfig.json (Core Config)
/*
{
  "compilerOptions": {
    "target": "ES6",
    "strict": true,
    "module": "commonjs"
  }
}
*/`
      },
      {
        chapter: '14. Real-World Example (CRUD User)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Real-World%20Example%20(CRUD%20User)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Real-World%20Example%20(CRUD%20User)' }
        ],
        content: 'Common mistakes include overusing "any", ignoring strict mode, and not using Generics. See this mini real-world example handling user interactions simply.',
        code: `interface User {
  id: number;
  name: string;
}

let users: User[] = [];

function addUser(user: User): void {
  users.push(user);
}

addUser({ id: 1, name: "chai" });`
      },
      {
        chapter: '15. TS vs JS & Interview Points',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+TS%20vs%20JS%20%26%20Interview%20Points' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+TS%20vs%20JS%20%26%20Interview%20Points' }
        ],
        content: 'JavaScript => Dynamic typing, Runtime errors, Limited OOP. TypeScript => Static typing, Compile-time checking, Strong OOP.\\nKey Points: TS = JS + Types. Compiles to JS. Differences between Interfaces & Types. Strict mode importance.',
        code: `// TS helps you:
// - Catch errors early
// - Write scalable applications
// - Improve developer productivity

// Next steps:
// Real projects like Node + Express + TS CRUD
// Mastery Roadmap setup`
      }
    ]
  },
  angular: {
    title: 'Angular Complete Guide',
    description: 'A comprehensive, structured guide to Angular from setup to advanced concepts, optimized for real-world projects and interviews.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLC3y8-rCajAUGHNrs81a9vV8FfC1Fh69-',
    curriculum: [
      {
        chapter: '1. What is Angular? & Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Angular%3F%20%26%20Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Angular%3F%20%26%20Architecture' }
        ],
        content: 'Angular is a TypeScript-based front-end framework developed by Google used to build single-page applications (SPAs). It offers component-based architecture, two-way data binding, built-in routing, HTTP, and Dependency Injection (DI). Core building blocks include Modules, Components, Templates, Services, Directives, and Pipes.',
        code: `// Why Angular?
// 1. Component-based architecture
// 2. Built-in routing & HTTP
// 3. Two-way data binding
// 4. Strong TypeScript support`
      },
      {
        chapter: '2. Setup & Installation',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Installation' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Installation' }
        ],
        content: 'To start using Angular, install the Angular CLI globally and create a new project. The CLI provides a powerful development server and scafolding tools.',
        code: `# Install Angular CLI
npm install -g @angular/cli

# Create Project
ng new my-app
cd my-app

# Run server (http://localhost:4200)
ng serve`
      },
      {
        chapter: '3. Modules & Components',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Modules%20%26%20Components' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Modules%20%26%20Components' }
        ],
        content: 'Every Angular app has at least one module (AppModule) and one core component. A component controls a part of the UI and defines its behavior.',
        code: `// Module (app.module.ts)
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// Component (app.component.ts)
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: \`<h1>Hello Angular</h1>\`
})
export class AppComponent {}`
      },
      {
        chapter: '4. Templates & Data Binding',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Templates%20%26%20Data%20Binding' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Templates%20%26%20Data%20Binding' }
        ],
        content: 'Templates define HTML with Angular features. Angular supports 4 types of data binding: Interpolation, Property Binding, Event Binding, and Two-Way Binding.',
        code: `<!-- 1. Interpolation -->
<h1>{{ title }}</h1>

<!-- 2. Property Binding -->
<img [src]="imageUrl">

<!-- 3. Event Binding -->
<button (click)="clickMe()">Click</button>

<!-- 4. Two-Way Binding -->
<input [(ngModel)]="name">`
      },
      {
        chapter: '5. Directives & Pipes',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Directives%20%26%20Pipes' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Directives%20%26%20Pipes' }
        ],
        content: 'Directives add behavior or transform the DOM. Structural directives change the DOM layout (*ngIf, *ngFor), while attribute directives change appearances ([ngClass]). Pipes transform data straight in templates.',
        code: `<!-- Structural Directives -->
<div *ngIf="isVisible">Hello</div>
<div *ngFor="let item of items">{{ item }}</div>

<!-- Attribute Directive -->
<p [ngClass]="{active: isActive}">Text</p>

<!-- Pipes -->
<p>{{ today | date }}</p>
<p>{{ name | uppercase }}</p>`
      },
      {
        chapter: '6. Services & Dependency Injection',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Services%20%26%20Dependency%20Injection' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Services%20%26%20Dependency%20Injection' }
        ],
        content: 'Services are used to share code, fetch data, and hold business logic outside components. Angular automatically injects requested dependencies via the constructor.',
        code: `import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getData() {
    return "Hello Data";
  }
}

// In Component
constructor(private service: DataService) {}`
      },
      {
        chapter: '7. Routing & HTTP Client',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Routing%20%26%20HTTP%20Client' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Routing%20%26%20HTTP%20Client' }
        ],
        content: 'Angular uses RouterModule for managing views and HTTPClient for making API calls. Routing helps map URL paths to specific components.',
        code: `// Routing
const routes: Routes = [
  { path: 'home', component: HomeComponent }
];

// Context injection for HTTP
import { HttpClient } from '@angular/common/http';
constructor(private http: HttpClient) {}

getUsers() {
  return this.http.get('https://api.example.com/users');
}`
      },
      {
        chapter: '8. Forms & Lifecycle Hooks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Forms%20%26%20Lifecycle%20Hooks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Forms%20%26%20Lifecycle%20Hooks' }
        ],
        content: 'Forms can be Template-driven or Reactive (Preferred). Components implement lifecycle hooks allowing visibility into key events like creation (ngOnInit) or destruction (ngOnDestroy).',
        code: `// Reactive Forms
import { FormControl } from '@angular/forms';
name = new FormControl('');

// Lifecycle Hook Example
import { OnInit } from '@angular/core';
export class MyComponent implements OnInit {
  ngOnInit() {
    console.log("Component initialized");
  }
}`
      },
      {
        chapter: '9. Guards & Lazy Loading',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Guards%20%26%20Lazy%20Loading' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Guards%20%26%20Lazy%20Loading' }
        ],
        content: 'Guards protect unauthorized users from accessing specific routes (e.g., AuthGuard using CanActivate). Lazy loading boosts performance by loading modules only when needed.',
        code: `// Route Guard
canActivate(): boolean {
  return true; // or false if unauthorized
}

// Lazy Loading Module
{
  path: 'admin',
  loadChildren: () => import('./admin.module').then(m => m.AdminModule)
}`
      },
      {
        chapter: '10. Observables (RxJS)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Observables%20(RxJS)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Observables%20(RxJS)' }
        ],
        content: 'Angular uses RxJS for handling asynchronous operations. Observables pass messages between publishers and subscribers.',
        code: `import { Observable } from 'rxjs';

let obs = new Observable(observer => {
  observer.next("Hello");
});

obs.subscribe(value => console.log(value));`
      },
      {
        chapter: '11. Advanced Concepts, Real-World & Mistakes',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Concepts%2C%20Real-World%20%26%20Mistakes' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Concepts%2C%20Real-World%20%26%20Mistakes' }
        ],
        content: 'Advanced topics involve Change Detection, Zone.js, and AOT compilation. Common mistakes include ignoring RxJS, overusing two-way binding, and poor architectural structure.',
        code: `// Real-World Service
interface User { id: number; name: string; }

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
  }
}`
      },
      {
        chapter: '12. Angular vs React & Interview Hacks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Angular%20vs%20React%20%26%20Interview%20Hacks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Angular%20vs%20React%20%26%20Interview%20Hacks' }
        ],
        content: 'Angular is a full framework targeting TypeScript with two-way binding. React is a JS library with one-way binding. Core interview questions target DI, Observables vs Promises, and Component lifecycles.',
        code: `// Key Interview Areas:
// 1. Component boundaries and data-sharing via Input()/Output()
// 2. Reactive Forms vs Template Forms
// 3. Dependency Injection hierarchy
// 4. Change Detection strategy (OnPush vs Default)`
      }
    ]
  },
  nextjs: {
    title: 'Next.js Complete Guide',
    description: 'A comprehensive, structured guide to Next.js—from architecture and App Router to Server Components and advanced rendering strategies.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLC3y8-rCajAWMvA5k1oHwP2kZp38iJ_gO',
    curriculum: [
      {
        chapter: '1. What is Next.js? & Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Next.js%3F%20%26%20Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Next.js%3F%20%26%20Architecture' }
        ],
        content: 'Next.js is a React-based full-stack framework developed by Vercel. It is used to build fast, SEO-friendly web applications with both frontend and backend capabilities. Key concepts include Pages/App Router, Server/Client Components, built-in Routing, Data Fetching strategies, API Routes, and Middleware.',
        code: `// Why Next.js?
// 1. Server-Side Rendering (SSR) & Static Site Generation (SSG)
// 2. File-based routing
// 3. API routes (backend inside frontend)
// 4. Built-in optimizations (images, fonts, SEO)`
      },
      {
        chapter: '2. Setup & Installation',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Installation' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Installation' }
        ],
        content: 'To create a Next.js project, use the create-next-app CLI. The development server usually starts on http://localhost:3000.',
        code: `# Install Next.js (App Router recommended)
npx create-next-app@latest my-app
cd my-app

# Run development server
npm run dev`
      },
      {
        chapter: '3. Folder Structure & Routing',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Folder%20Structure%20%26%20Routing' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Folder%20Structure%20%26%20Routing' }
        ],
        content: 'Next.js uses a file-based routing system. In the modern App Router, directories act as routes, and special files like \`page.tsx\`, \`layout.tsx\` determine the UI.',
        code: `// File Structure Example
app/
 ├── page.tsx        // Home page (/)
 ├── layout.tsx      // Global Layout
 ├── about/
 │    └── page.tsx   // About page (/about)

// app/about/page.tsx
export default function About() {
  return <h1>About Page</h1>;
}`
      },
      {
        chapter: '4. Server vs Client Components',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Server%20vs%20Client%20Components' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Server%20vs%20Client%20Components' }
        ],
        content: 'Next.js uses Server Components by default for better performance and SEO, generating HTML on the server. Client Components should be opted into using the \`"use client"\` directive when interactivity (like useState) is needed.',
        code: `// Server Component (Default)
export default function Home() {
  return <h1>Server Component</h1>;
}

// Client Component
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}`
      },
      {
        chapter: '5. Data Fetching (Core Concept 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Data%20Fetching%20(Core%20Concept%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Data%20Fetching%20(Core%20Concept%20%F0%9F%94%A5)' }
        ],
        content: 'Data fetching occurs easily on the server. You can fetch data dynamically on every request or tell Next.js to cache/revalidate data.',
        code: `// Server-side Fetch (App Router)
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <div>{data.name}</div>;
}

// ISR (Incremental Static Regeneration)
export const revalidate = 60; // Revalidate every 60s`
      },
      {
        chapter: '6. API Routes & Dynamic Routes',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+API%20Routes%20%26%20Dynamic%20Routes' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+API%20Routes%20%26%20Dynamic%20Routes' }
        ],
        content: 'API Routes allow you to build backend endpoints directly inside Next.js using \`route.ts\`. Dynamic Routes let you parameterize URLs using folder names wrapped in brackets.',
        code: `// API Route (app/api/users/route.ts)
export async function GET() {
  return Response.json({ users: [] });
}

// Dynamic Route (app/blog/[id]/page.tsx)
export default function Blog({ params }: { params: { id: string } }) {
  // Accesible at /blog/1, /blog/2 etc.
  return <h1>{params.id}</h1>;
}`
      },
      {
        chapter: '7. Layouts & Navigation',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Layouts%20%26%20Navigation' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Layouts%20%26%20Navigation' }
        ],
        content: 'Layouts share UI between discrete routes (e.g., a Sidebar). The \`<Link>\` component provides client-side, prefetched navigation linking between routes seamlessly.',
        code: `// Layout (app/layout.tsx)
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// Navigation
import Link from 'next/link';
<Link href="/about">Go to About</Link>`
      },
      {
        chapter: '8. Middleware & Authentication',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Middleware%20%26%20Authentication' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Middleware%20%26%20Authentication' }
        ],
        content: 'Middleware intercepts requests centrally before they complete. Useful for authentication checks, dynamic redirects, and adding headers. Auth logic typically involves checking cookies in Middleware.',
        code: `// Middleware (middleware.ts)
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Check auth cookies, then proceed or redirect
  return NextResponse.next();
}`
      },
      {
        chapter: '9. Optimization & Environment Variables',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Optimization%20%26%20Environment%20Variables' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Optimization%20%26%20Environment%20Variables' }
        ],
        content: 'Next.js provides an internal \`<Image>\` component that auto-optimizes images to WebP/AVIF. Environment variables must be prefixed with \`NEXT_PUBLIC_\` if they need to be accessed by the browser/client side.',
        code: `// Image Optimization
import Image from 'next/image';
<Image src="/img.png" width={300} height={200} alt="img" />

// Environment Variable Example (.env)
NEXT_PUBLIC_API_URL=http://api.com`
      },
      {
        chapter: '10. Rendering Types & Advanced Concepts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Rendering%20Types%20%26%20Advanced%20Concepts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Rendering%20Types%20%26%20Advanced%20Concepts' }
        ],
        content: 'Next.js elegantly structures advanced rendering forms:\\nSSR: Server-Side Rendering\\nSSG: Static Site Generation\\nISR: Incremental Static Regeneration\\nCSR: Client-Side Rendering. Advanced ideas include Server Actions, Suspense Streaming, and Edge Runtime.',
        code: `// Server Actions (Action inside Component)
export default function Form() {
  async function createPost(formData: FormData) {
    'use server'; // Action strictly on server
    // mutate data
  }
  return <form action={createPost}>...</form>;
}`
      },
      {
        chapter: '11. Real-World API + UI Example',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Real-World%20API%20%2B%20UI%20Example' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Real-World%20API%20%2B%20UI%20Example' }
        ],
        content: 'Notice how beautifully the frontend and backend interoperate natively within the exact same project codebase using the App Router structure.',
        code: `// API Endpoint: /app/api/users/route.ts
export async function GET() {
  return Response.json([{ id: 1, name: "chai" }]);
}

// UI Consumer: /app/users/page.tsx
export default async function Users() {
  // Note: Localhost absolute URL required for server fetch
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return (
    <ul>
      {users.map((u: any) => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}`
      },
      {
        chapter: '12. Next.js vs React & Interview Hacks',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Next.js%20vs%20React%20%26%20Interview%20Hacks' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Next.js%20vs%20React%20%26%20Interview%20Hacks' }
        ],
        content: 'React is a library; Next.js is a Framework. React does CSR; Next overrides with SSR/SSG. During interviews, emphasize your understanding of the App Router vs Pages Router, SSR capabilities, catching mistakes like mixing up Server vs Client boundaries, and caching.',
        code: `/* Common mistakes to avoid */
// 1. Mixing Server & Client components incorrectly (using hooks in Server components)
// 2. Not understanding Request Memoization and Data Caching
// 3. Overusing client components ("use client") everywhere
// 4. Missing absolute URLs when fetching from internal API inside Server Components`
      }
    ]
  },
  sql: {
    title: 'SQL Database Mastery',
    description: 'A deep-dive curriculum traversing SQL fundamentals, filtering constraints, advanced aggregations, deep sub-queries, and table constraints.',
    videoUrl: 'https://www.youtube.com/watch?v=HXV3zeQKqGY',
    curriculum: [
      {
        chapter: '1. What is SQL & Setup',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20SQL%20%26%20Setup' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20SQL%20%26%20Setup' }
        ],
        content: 'Structured Query Language (SQL) was introduced by Donald Chamberlin and Raymond Boyce in 1970. Originally called "SEQL" (Structured English Query Language), ANSI officially changed the name to SQL. Every query starts with a clause (like SELECT) and ends with a semicolon (;).',
        code: `-- View table architectural information (Oracle syntax)
SELECT * FROM TAB;

-- Standard table extraction (fetch all data)
SELECT * FROM EMP;

-- Output limit lines trick (Oracle DB)
SET LINES 100;
SET PAGES 100;`
      },
      {
        chapter: '2. Basic Querying (SELECT, FROM, DISTINCT)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Basic%20Querying%20(SELECT%2C%20FROM%2C%20DISTINCT)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Basic%20Querying%20(SELECT%2C%20FROM%2C%20DISTINCT)' }
        ],
        content: 'SELECT picks columns, FROM targets the table addressing, and DISTINCT removes duplicated overlapping values specifically filtering for unique instances.',
        code: `-- Fetch specific columns
SELECT ENAME, JOB, SAL FROM EMP;

-- DISTINCT removes duplicated items (fetch unique salaries)
SELECT DISTINCT SAL FROM EMP;

-- Fetch combined unique records across two columns
SELECT DISTINCT DEPTNO, SAL FROM EMP;`
      },
      {
        chapter: '3. Aliasing and Literals',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Aliasing%20and%20Literals' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Aliasing%20and%20Literals' }
        ],
        content: 'Aliasing is the process of providing an alternative temporary name to an existing column name using the "AS" keyword (or omitting it). Literals involve directly assigning Numbers, Strings (inside single quotes), or Dates into the execution directly.',
        code: `-- Changing column name during output retrieval
SELECT ENAME AS EMPLOYE_NAME FROM EMP;

-- Without using 'AS'
SELECT HIREDATE JOINING_DATE FROM EMP;`
      },
      {
        chapter: '4. Filtering (WHERE Clause)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Filtering%20(WHERE%20Clause)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Filtering%20(WHERE%20Clause)' }
        ],
        content: 'The WHERE clause restricts and filters records. It perfectly isolates exact data points avoiding loading massive raw datasets. For a single SELECT statement, only one WHERE clause is allowed.',
        code: `-- Specific numeric filter
SELECT * FROM EMP WHERE SAL = 1250;

-- Specific String filter (exact match requires Single Quotes)
SELECT ENAME, JOB FROM EMP WHERE JOB = 'SALESMAN';`
      },
      {
        chapter: '5. Arithmetic, Relational & Logical Operators',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Arithmetic%2C%20Relational%20%26%20Logical%20Operators' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Arithmetic%2C%20Relational%20%26%20Logical%20Operators' }
        ],
        content: 'Arithmetic operators (+, -, *, /) calculate dynamic data output temporarily. Relational operators (>, <, >=, ==, !=) compare numerical limits. Logical operators (AND, OR) tie multiple conditions stringently.',
        code: `-- ARITHMETIC: Fetch names alongside dynamically calculating a 1000 hike
SELECT ENAME, SAL, SAL + 1000 AS HIKESAL FROM EMP;

-- RELATIONAL: Combining table selection filtering via inequalities
SELECT EMP.*, SAL * 12 FROM EMP WHERE DEPTNO = 20;

-- LOGICAL: Validating strict combined parameters via AND
SELECT ENAME, SAL FROM EMP WHERE SAL > 2000 AND JOB = 'ANALYST';`
      },
      {
        chapter: '6. Special Range Operators (IN, BETWEEN, NULL, LIKE)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Special%20Range%20Operators%20(IN%2C%20BETWEEN%2C%20NULL%2C%20LIKE)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Special%20Range%20Operators%20(IN%2C%20BETWEEN%2C%20NULL%2C%20LIKE)' }
        ],
        content: 'Special Operators circumvent massive chained Logical queries. IN prevents using multiple OR queries. BETWEEN sets numerical caps tightly. IS NULL filters blank fields, and LIKE drives pattern matching (% matches multiple chars, _ matches one).',
        code: `-- IN Array: Details for specific departments
SELECT * FROM EMP WHERE DEPTNO IN (10, 20);

-- BETWEEN Limits: Numerical range clamping
SELECT ENAME, SAL FROM EMP WHERE SAL BETWEEN 2000 AND 4000;

-- IS NULL: Seeking missing values cleanly
SELECT * FROM EMP WHERE COMM IS NULL;

-- LIKE: Find all combinations of data containing 'A'
SELECT JOB FROM EMP WHERE ENAME LIKE '%A%';`
      },
      {
        chapter: '7. Aggregate Multi-Row Functions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Aggregate%20Multi-Row%20Functions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Aggregate%20Multi-Row%20Functions' }
        ],
        content: 'Functions like MAX(), MIN(), AVG(), COUNT(), and SUM() compute complex calculations compiling sweeping multiple-rows computations securely into localized singular data outputs.',
        code: `-- Determining highest value
SELECT MAX(SAL) FROM EMP WHERE JOB = 'MANAGER';

-- Counting the volume metric
SELECT COUNT(ENAME) FROM EMP WHERE SAL > 1500 AND DEPTNO = 20;

-- Isolating minimum floor values
SELECT MIN(SAL) FROM EMP WHERE JOB = 'CLERK' AND DEPTNO IN (10, 20);`
      },
      {
        chapter: '8. GROUP BY & HAVING Clauses',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+GROUP%20BY%20%26%20HAVING%20Clauses' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+GROUP%20BY%20%26%20HAVING%20Clauses' }
        ],
        content: 'The GROUP BY clause collapses datasets into distinct, summarized blocks, and HAVING filters those calculated aggregate group metrics (acting similarly to WHERE but executing exclusively against Aggregate rows).',
        code: `-- Group multiple aggregate counts segmented per unique department
SELECT DEPTNO, COUNT(ENAME) FROM EMP GROUP BY DEPTNO;

-- Extracting Maximum caps grouped into dedicated distinct Job sectors
SELECT JOB, MAX(SAL) FROM EMP GROUP BY JOB;

-- HAVING sets conditions after the grouping aggregation calculates
SELECT DEPTNO, COUNT(ENAME) FROM EMP GROUP BY DEPTNO HAVING COUNT(ENAME) >= 3;`
      },
      {
        chapter: '9. Core Output Mutation & Ordering',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Core%20Output%20Mutation%20%26%20Ordering' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Core%20Output%20Mutation%20%26%20Ordering' }
        ],
        content: 'String Single-Row manipulations extract or replace distinct text portions seamlessly (UPPER, LOWER, INITCAP, SUBSTR, REPLACE, CONCAT, LENGTH). ORDER BY reliably sorts final ascending (ASC) and descending (DESC) arrays flawlessly.',
        code: `-- MANIPULATIONS: Substrings clamping specific lengths
SELECT ENAME, SUBSTR(ENAME, 1, 1), SUBSTR(ENAME, -1, 1) FROM EMP;

-- Concatenation natively merging two fields using string pipelines
SELECT JOB || SAL FROM EMP;

-- ORDER BY: Sorting results explicitly into Large -> Small ranges
SELECT SAL FROM EMP ORDER BY SAL DESC;`
      },
      {
        chapter: '10. Deep Architectural Structure: Subqueries & Table Constraints',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Deep%20Architectural%20Structure%3A%20Subqueries%20%26%20Table%20Constraints' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Deep%20Architectural%20Structure%3A%20Subqueries%20%26%20Table%20Constraints' }
        ],
        content: 'Subqueries embed secondary queries inside the master query preventing multiple trips. Data Integrity safely restricts bad data formatting by aggressively utilizing Data Constraints securely clamping specific parameters automatically via Primary/Foreign mappings natively.',
        code: `-- SINGLE ROW SUBQUERY (Filtering by abstract value dependencies)
SELECT * FROM EMP WHERE SAL < (SELECT SAL FROM EMP WHERE ENAME = 'MILLER');

-- MULTI ROW SUBQUERY (Dependent constraints)
SELECT * FROM EMP WHERE JOB = (SELECT JOB FROM EMP WHERE ENAME = 'KING');

-- ROWNUM FILTER (Co-Related extracting absolute limits conditionally)
SELECT * FROM (SELECT EMP.*, ROWNUM AS RN FROM EMP) WHERE RN = 5;

/* CRITICAL DB CONSTRAINTS
 1. UNIQUE -> Forbids Duplicates
 2. NOT NULL -> Forbids Missing/Blank slots
 3. PRIMARY KEY -> UNIQUE + NOT NULL (Master Table ID)
 4. FOREIGN KEY -> Sub-Relational mappings locking child tables directly
*/`
      }
    ]
  },
  mysql: {
    title: 'MySQL Master Class',
    description: 'A comprehensive journey into MySQL covering robust backend table integrations, transaction states, internal core engines, and stored procedures.',
    videoUrl: 'https://www.youtube.com/watch?v=7S_tz1z_5bA',
    curriculum: [
      {
        chapter: '1. What is MySQL & Architecture?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20MySQL%20%26%20Architecture%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20MySQL%20%26%20Architecture%3F' }
        ],
        content: 'MySQL is an incredibly prevalent open-source Relational Database Management System (RDBMS) developed by Oracle. Its architecture separates the Client (sends queries) from the Server (processes them) and hits the Storage Engine specifically handling raw data metrics.',
        code: `// Why MySQL matches perfectly with Node.js/Java/.NET/Python combinations:
// 1. Extreme read performance.
// 2. Reliable, standardized SQL transactions.
// 3. Vast open-source ecosystem support.`
      },
      {
        chapter: '2. Setup & Database Management',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Database%20Management' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Database%20Management' }
        ],
        content: 'Interacting with MySQL involves logging into the command-line instance or using a GUI tool. The setup process involves authenticating variables and instantiating targeted Data containers.',
        code: `-- Login via terminal
// mysql -u root -p

-- Creating and allocating the target Database
CREATE DATABASE mydb;
USE mydb;

-- View structures or destroy them
SHOW DATABASES;
DROP DATABASE mydb;`
      },
      {
        chapter: '3. Tables & Constraints',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Tables%20%26%20Constraints' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Tables%20%26%20Constraints' }
        ],
        content: 'Data is tightly clamped inside structured Tables relying on concrete numerical constraints. Primary Keys prevent total overlaps while specific Variables assign limits like default behaviors or strict rules.',
        code: `CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age INT DEFAULT 18,
  email VARCHAR(100) UNIQUE
);

/* Top Modifiers:
 - PRIMARY KEY: Main ID mapping
 - UNIQUE: Ensures no duplicated fields
 - NOT NULL: Demands non-empty entries
 - DEFAULT: Forces a fallback value if unassigned
 - FOREIGN KEY: Ties tables cooperatively
*/`
      },
      {
        chapter: '4. Absolute CRUD Matrix',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Absolute%20CRUD%20Matrix' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Absolute%20CRUD%20Matrix' }
        ],
        content: 'The core functions of any platform rely directly on creating new table metrics, reading values, forcefully updating them cleanly, and deleting garbage records natively using direct commands.',
        code: `-- 1. Insert (Create constraint)
INSERT INTO users (name, age, email) VALUES ('Chai', 25, 'chai@gmail.com');

-- 2. Select (Read constraint)
SELECT * FROM users;

-- 3. Update (Update constraint)
UPDATE users SET age = 26 WHERE id = 1;

-- 4. Delete (Delete constraint)
DELETE FROM users WHERE id = 1;`
      },
      {
        chapter: '5. Filtering, Sorting & Native Aggregations',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Filtering%2C%20Sorting%20%26%20Native%20Aggregations' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Filtering%2C%20Sorting%20%26%20Native%20Aggregations' }
        ],
        content: 'Complex queries avoid extracting million-row tables. Utilizing the WHERE clause filters accurately. Adding ORDER BY sorts the final returns correctly, while Aggregate functions like COUNT(), MAX() compute dynamic metric calculations instantly.',
        code: `-- Filtering via inequalities 
SELECT * FROM users WHERE age > 18;

-- Sort logic and clamp total arrays returned natively
SELECT * FROM users ORDER BY age DESC LIMIT 5;

-- Calculate raw system metrics without dumping data
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;`
      },
      {
        chapter: '6. Joins & Advanced Grouping (Core 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Joins%20%26%20Advanced%20Grouping%20(Core%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Joins%20%26%20Advanced%20Grouping%20(Core%20%F0%9F%94%A5)' }
        ],
        content: 'You rarely hold massive payloads in single tables. Inner Joins stitch separate tables gracefully utilizing Foreign Keys. By implementing GROUP BY, identical arrays cluster up together mathematically.',
        code: `-- Stitching User constraints alongside their Orders elegantly
SELECT u.name, o.order_id
FROM users u
INNER JOIN orders o
ON u.id = o.user_id;

-- Filtering aggregated groups via HAVING
SELECT age, COUNT(*)
FROM users
GROUP BY age
HAVING COUNT(*) > 1;`
      },
      {
        chapter: '7. Transactions & Performance Indexes',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Transactions%20%26%20Performance%20Indexes' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Transactions%20%26%20Performance%20Indexes' }
        ],
        content: 'Transactions ensure that incomplete crashes do not cause partial data updates permanently. Using COMMIT saves successfully, while ROLLBACK aborts changes during an error. Indexes act like the Table of Contents in a sprawling library preventing total system scans during deep lookups.',
        code: `START TRANSACTION;
UPDATE users SET age = 30 WHERE id = 1;
COMMIT; -- OR run ROLLBACK; if server crashes during sync

-- Indexes dramatically speed up queries tracking dedicated specific columns
CREATE INDEX idx_name ON users(name);`
      },
      {
        chapter: '8. Storage Engines & Views',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Storage%20Engines%20%26%20Views' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Storage%20Engines%20%26%20Views' }
        ],
        content: 'MySQL houses multiple distinct internal storage processors. The default InnoDB fully supports heavy row level locking and transaction systems. Views create safe, read-only restricted windows limiting exposing entire structural matrices.',
        code: `/* InnoDB (Default) vs MyISAM:
 - InnoDB supports core Transactions, Foreign Keys, and localized Row-Level locking.
 - MyISAM handles reads faster but lacks transactional safety guarantees.
*/

-- Creating an abstract virtual View to hide raw Data Tables natively:
CREATE VIEW user_view AS
SELECT name, age FROM users;`
      },
      {
        chapter: '9. Triggers, Backups & Stored Procedures',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Triggers%2C%20Backups%20%26%20Stored%20Procedures' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Triggers%2C%20Backups%20%26%20Stored%20Procedures' }
        ],
        content: 'A Procedure executes fully programmed routines server-side blocking massive data transfers. Triggers operate automatically in the background capturing events (like before insertion). Utilizing mysqldump handles structural backups seamlessly natively.',
        code: `-- Setting up a Stored Procedure (Delimiters avoid early ending scopes)
DELIMITER //
CREATE PROCEDURE GetUsers()
BEGIN
  SELECT * FROM users;
END //
DELIMITER ;

-- Before Update Trigger forcing static logic internally
CREATE TRIGGER before_insert BEFORE INSERT ON users
FOR EACH ROW SET NEW.age = 18;`
      },
      {
        chapter: '10. Backend Deployments & Modern Theories',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Backend%20Deployments%20%26%20Modern%20Theories' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Backend%20Deployments%20%26%20Modern%20Theories' }
        ],
        content: 'Integrating MySQL deeply inside environments (Node.js/Java) represents absolute industry standard. During technical interviews, engineers compare it specifically with PostgreSQL highlighting advanced topics like execution plans (EXPLAIN), partition scaling, and extreme replication architectures.',
        code: `// Connecting Node.js reliably via mysql2 npm package:
const mysql = require('mysql2');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
});

// Common Mistakes:
// -> Missing a WHERE clause on DELETE queries wiping entire tables.
// -> Skipping table Indexes locking large search queries.
// -> Operating without transactional structures breaking DBs mid-flight.`
      }
    ]
  },
  mongodb: {
    title: 'MongoDB Comprehensive Guide',
    description: 'Master the premier NoSQL database ecosystem utilizing BSON documents, horizontal scaling networks, and rapid Javascript environment integrations.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJjaOa-IeTU0rG7R',
    curriculum: [
      {
        chapter: '1. What is MongoDB & Architecture?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20MongoDB%20%26%20Architecture%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20MongoDB%20%26%20Architecture%3F' }
        ],
        content: 'MongoDB is a schema-less NoSQL document-oriented database storing data structures utilizing a JSON-like format identically natively (BSON). The Hierarchy is abstract: Database -> contains Collections -> grouped Documents instead of Tables/Rows.',
        code: `// Why MongoDB?
// 1. Extreme flexible schema layouts out-of-the-box
// 2. Heavy horizontal scaling configurations
// 3. Flawless native integrations directly into Node.js architectures

{
  "name": "Chai",
  "age": 25,
  "skills": ["React", "Mongo"]
}`
      },
      {
        chapter: '2. Setup & Collections Engine',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%20%26%20Collections%20Engine' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%20%26%20Collections%20Engine' }
        ],
        content: 'Launching the CLI environment requires accessing the \`mongosh\` environment explicitly. You spin up Collections manually or automatically bypass constraints allowing instant insertions.',
        code: `-- System operations commands:
// mongosh       -> Load terminal instance
// show dbs      -> View existing Databases
// use mydb      -> Create/Enter specific Database
// show collections -> Reveal local containers

db.createCollection("users");`
      },
      {
        chapter: '3. Core Document CRUD Engine',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Core%20Document%20CRUD%20Engine' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Core%20Document%20CRUD%20Engine' }
        ],
        content: 'Queries explicitly command the internal Collections to modify payload documents abstractly without strictly typed tabular models natively.',
        code: `// 1. Insert Target
db.users.insertOne({ name: "Chai", age: 25 });

// 2. Fetch/Read Arrays
db.users.find();
db.users.find({ age: 25 });

// 3. Update Mutation
db.users.updateOne(
  { name: "Chai" },
  { $set: { age: 26 } }
);

// 4. Force Delete Targeting
db.users.deleteOne({ name: "Chai" });`
      },
      {
        chapter: '4. Advanced Query Operators & Projections',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Query%20Operators%20%26%20Projections' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Query%20Operators%20%26%20Projections' }
        ],
        content: 'Complex searches bypass static matches by deploying Abstract Logic Operators ($gt, $lt, $in, $ne). Projections selectively exclude/include massive payload elements during transport preventing bloated network deliveries.',
        code: `// Searching values strictly Greater Than 18
db.users.find({ age: { $gt: 18 } });

// Operators:
// $gt (greater), $lt (lesser), $gte (greater=), $lte (lesser=)
// $in (contains inside array), $ne (not equal)

// Projection: Extracts only 'name', blocks '_id'
db.users.find({}, { name: 1, _id: 0 });`
      },
      {
        chapter: '5. Relational Trees & BSON References',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Relational%20Trees%20%26%20BSON%20References' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Relational%20Trees%20%26%20BSON%20References' }
        ],
        content: 'While MongoDB lacks formal Join constraints, it achieves relations through Embedding Data explicitly or Referencing Secondary IDs dynamically targeting separate collections.',
        code: `// Strategy 1: Embedded Document (Read Heavy Architecture)
{
  name: "Chai",
  address: {
    city: "Hyderabad"
  }
}

// Strategy 2: Referencing Document IDs (Write Heavy Architecture)
{
  userId: "123",
  orderId: "456"
}`
      },
      {
        chapter: '6. The Aggregation Pipeline (Crucial 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20Aggregation%20Pipeline%20(Crucial%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20Aggregation%20Pipeline%20(Crucial%20%F0%9F%94%A5)' }
        ],
        content: 'The Aggregation Framework executes sweeping abstract logic queries merging data arrays locally. It replaces SQL complex joins deploying pipelines passing returned data progressively from operator back into operators continuously.',
        code: `// Pass documents through a sequenced pipeline:
db.users.aggregate([
  // 1. Match specific constraints first:
  { $match: { age: { $gt: 18 } } },
  
  // 2. Group the remaining filtered datasets out together:
  { $group: { _id: "$age", count: { $sum: 1 } } }
]);`
      },
      {
        chapter: '7. Schemas, Validation & Transactions',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Schemas%2C%20Validation%20%26%20Transactions' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Schemas%2C%20Validation%20%26%20Transactions' }
        ],
        content: 'Despite being "schema-less", MongoDB strictly supports internal Schema Validations stopping garbage assignments preventing rogue structures. Heavy operations demand wrapped Transactions seamlessly locking logic sequences from breaking.',
        code: `// Forcing strict Types on "schema-less" tables natively
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name"],
      properties: {
        name: { bsonType: "string" }
      }
    }
  }
});

// ACID Transactions 
// session.startTransaction();
// session.commitTransaction();`
      },
      {
        chapter: '8. Node.js Ecosystem Mappings',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Node.js%20Ecosystem%20Mappings' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Node.js%20Ecosystem%20Mappings' }
        ],
        content: 'Most major Javascript ecosystems handle MongoDB schemas natively utilizing Object Document Mappers (ODM) like Mongoose enforcing types locally seamlessly mapping models out automatically.',
        code: `// Node.js Express integrations natively:
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');

// Mongoose automatically structures Schema validations efficiently:
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});`
      },
      {
        chapter: '9. Indexing & Production Realities',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Indexing%20%26%20Production%20Realities' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Indexing%20%26%20Production%20Realities' }
        ],
        content: 'To prevent massive collection parsing scans slowing server reads significantly, Indexes are injected locally. High availability Production systems leverage Sharding to fragment data globally alongside Replica Sets ensuring data mirrors across servers preventing total failovers natively.',
        code: `// Indexing deeply improves performance queries parsing specific variables
db.users.createIndex({ name: 1 });

/* Deep Backend Concepts:
 - Sharding: Horizontal database capacity splitting algorithms
 - Replica Sets: High capacity mirror data backups natively
 - TTL Indexes: Time-to-Live variables deleting old garbage
*/`
      },
      {
        chapter: '10. Mongo vs SQL & Job Preparedness',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Mongo%20vs%20SQL%20%26%20Job%20Preparedness' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Mongo%20vs%20SQL%20%26%20Job%20Preparedness' }
        ],
        content: 'MERN stack queries invariably lock onto MongoDB vs SQL differences conceptually. Mongo is inherently horizontally scaling natively utilizing flexible BSON vs SQL utilizing strict Column/Row vertical structures cleanly. Typical structural mistakes involve no-indexing setups severely crashing query speeds or improperly over-embedding large datasets instead of explicitly referencing discrete containers.',
        code: `-- Interview Highlights Strategy Matrix:
// 1. Describe precisely why NoSQL lacks JOINS but uses References.
// 2. Walk through scaling differences between Vertical and Horizontal configurations natively.
// 3. Replicate Aggregation Pipeline architectures ($match => $group => $sort).`
      }
    ]
  },
  postgresql: {
    title: 'PostgreSQL Relational DB',
    description: 'An advanced enterprise-ready database known for absolute transaction integrity, JSON payload flexibility, and Multi-Version Concurrency validation architectures.',
    videoUrl: 'https://www.youtube.com/watch?v=qw--VYLpxG4',
    curriculum: [
      {
        chapter: '1. What is PostgreSQL & Architecture?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20PostgreSQL%20%26%20Architecture%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20PostgreSQL%20%26%20Architecture%3F' }
        ],
        content: 'Maintained by the global development group, PostgreSQL is a heavy-duty Relational DBMS strictly adhering to ACID (safe transactions). It separates the Client Parser natively from the internal Storage Engine and exclusively manages Write-Ahead Logging (WAL) ensuring zero data loss upon crash.',
        code: `-- Key Features mapping vs MySQL:
// 1. Extreme JSONB integration natively supporting unstructured payloads.
// 2. MVCC (Multi-Version Concurrency) blocking read-writes cleanly.
// 3. Extensible functions safely tying GIS/PostGIS natively.`
      },
      {
        chapter: '2. Setup, Login & Database CLI',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Setup%2C%20Login%20%26%20Database%20CLI' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Setup%2C%20Login%20%26%20Database%20CLI' }
        ],
        content: 'Launching Postgres commands relies heavily on the \`psql\` native console interface connecting safely using dedicated roles. Managing internal nodes runs directly inside the root interface.',
        code: `-- System Access via CLI (default user postgres)
// psql -U postgres

-- Core Engine database macros:
CREATE DATABASE mydb;
\\c mydb;         -- Connect into targeted database
\\l              -- List all existing databases natively
DROP DATABASE mydb;`
      },
      {
        chapter: '3. Tables & Postgres Constraints',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Tables%20%26%20Postgres%20Constraints' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Tables%20%26%20Postgres%20Constraints' }
        ],
        content: 'PostgreSQL manages Tables natively with powerful auto-incrementing integers named \`SERIAL\` and ties them to precise relational restrictions locking primary IDs perfectly to related external Table keys.',
        code: `CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100) UNIQUE
);

/* Top Constraints logic:
 - SERIAL: Safely calculates the Auto-Incremented iteration.
 - PRIMARY KEY: Denotes mapping IDs cleanly.
 - UNIQUE: Blocks duplicate array configurations.
 - FOREIGN KEY: Ties Table queries to a parent ID limit constraint.
 - CHECK: Verifies inserted items meet a math/string condition limit native.
*/`
      },
      {
        chapter: '4. Heavy CRUD Mutations',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Heavy%20CRUD%20Mutations' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Heavy%20CRUD%20Mutations' }
        ],
        content: 'Standard manipulation locks perfectly inline with all SQL architectures. Insertions, Retrievals, target-modifications, and deletion executions bypass locks successfully utilizing MVCC architectures natively.',
        code: `-- 1. Insert Array (Note double value encapsulation logic)
INSERT INTO users (name, age, email) VALUES ('Chai', 25, 'chai@gmail.com');

-- 2. Reading payload streams
SELECT * FROM users;

-- 3. Update mutations 
UPDATE users SET age = 26 WHERE id = 1;

-- 4. Delete executions
DELETE FROM users WHERE id = 1;`
      },
      {
        chapter: '5. Query Filtering, Sorting & Aggregations',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Query%20Filtering%2C%20Sorting%20%26%20Aggregations' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Query%20Filtering%2C%20Sorting%20%26%20Aggregations' }
        ],
        content: 'Complex logic requires blocking useless data dynamically. \`WHERE\` filters arrays aggressively, \`ORDER BY\` and \`LIMIT\` restrict data streams safely, and metrics (AVG/MAX) aggregate numerical matrices out.',
        code: `-- Native Array Limitors (Filtering out bad scopes)
SELECT * FROM users WHERE age > 18;

-- Sort logic and clamp total arrays returned natively directly preventing crashes
SELECT * FROM users ORDER BY age DESC LIMIT 5;

-- Calculate raw system metrics abstractly
SELECT COUNT(*) FROM users;
SELECT AVG(age) FROM users;`
      },
      {
        chapter: '6. Relational Joins & Groupings (Critical 🔥)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Relational%20Joins%20%26%20Groupings%20(Critical%20%F0%9F%94%A5)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Relational%20Joins%20%26%20Groupings%20(Critical%20%F0%9F%94%A5)' }
        ],
        content: 'Connecting relational constraints relies on INNER JOINS successfully tying Foreign limits. Abstract Grouping calculates massive system aggregates against localized buckets combining logic tightly via HAVING constraints.',
        code: `-- Clean INNER JOIN linking Users to their Orders
SELECT u.name, o.order_id
FROM users u
INNER JOIN orders o
ON u.id = o.user_id;

-- GROUP BY computing aggregated buckets safely
SELECT age, COUNT(*)
FROM users
GROUP BY age
HAVING COUNT(*) > 1;`
      },
      {
        chapter: '7. The ACID Transactions Model',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20ACID%20Transactions%20Model' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20ACID%20Transactions%20Model' }
        ],
        content: 'PostgreSQL heavily prioritizes Atomicity, Consistency, Isolation, and Durability (ACID) during large table queries. Executing \`BEGIN\` wraps mutations safely blocking external reads until \`COMMIT\` drops or \`ROLLBACK\` executes.',
        code: `// Start a fully isolated database container mutation:
BEGIN;

// Update arrays confidently knowing partial failures won't persist locally:
UPDATE users SET age = 30 WHERE id = 1;

// Solidify the mutation to disk:
COMMIT;

// OR if exception triggers:
ROLLBACK;`
      },
      {
        chapter: '8. Indexes & Unstructured JSONB Layouts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Indexes%20%26%20Unstructured%20JSONB%20Layouts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Indexes%20%26%20Unstructured%20JSONB%20Layouts' }
        ],
        content: 'PostgreSQL is arguably significantly faster than standard SQL parsing Unstructured JSON data! It fully supports advanced JSONB binary architectures out of the box dynamically storing massive Document hierarchies inside standard cells.',
        code: `// Indexing deeply improves query read times natively mapping B-Trees:
CREATE INDEX idx_name ON users(name);

// Injecting massive payload JSON data (MongoDB style) seamlessly:
CREATE TABLE products (
  id SERIAL,
  data JSONB
);

INSERT INTO products (data) 
VALUES ('{"name": "Laptop", "price": 50000}');`
      },
      {
        chapter: '9. Views, PL/pgSQL Functions & Triggers',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Views%2C%20PL%2FpgSQL%20Functions%20%26%20Triggers' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Views%2C%20PL%2FpgSQL%20Functions%20%26%20Triggers' }
        ],
        content: 'Isolating logic Server-side significantly boosts total API speeds using specific Stored Functions. Views hide heavy structural constraints under simple lookup names, while Triggers automatically boot functions against mutating rows.',
        code: `-- Creating virtual Read-Only abstraction layers
CREATE VIEW user_view AS SELECT name, age FROM users;

-- Creating Server Functions internally blocking network lag bottlenecks
CREATE FUNCTION get_users() RETURNS TABLE(name TEXT) AS $$
BEGIN
  RETURN QUERY SELECT name FROM users;
END;
$$ LANGUAGE plpgsql;

-- Attaching Triggers enforcing logic natively
CREATE TRIGGER before_insert BEFORE INSERT ON users FOR EACH ROW EXECUTE FUNCTION my_function();`
      },
      {
        chapter: '10. Backend Nodes & Master Theories',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Backend%20Nodes%20%26%20Master%20Theories' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Backend%20Nodes%20%26%20Master%20Theories' }
        ],
        content: 'Hooking Postgres into an API depends heavily upon connecting the backend runtime client perfectly. The fundamental difference relies heavily on Postgres optimizing heavy Complex Queries perfectly versus simple reads, leaning into MVCC controls flawlessly.',
        code: `// Connecting Node.js reliably via the 'pg' npm package
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'mydb',
  password: 'password',
  port: 5432,
});

// Common Structural Failures:
// -> Missing Indexes drastically bottlenecking system reads.
// -> Skipping Transactions allowing partial data cascades.
// -> Poor normalization setups inflating storage allocations blindly.`
      }
    ]
  },
  mern: {
    title: 'MERN Stack Developer Guide',
    description: 'A complete Full-Stack masterclass connecting MongoDB, Express.js, React, and Node.js together seamlessly inside single-language (Javascript) pipelines.',
    videoUrl: 'https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzN6O_F',
    curriculum: [
      {
        chapter: '1. What is the MERN Stack?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20the%20MERN%20Stack%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20the%20MERN%20Stack%3F' }
        ],
        content: 'MERN Stack is a full-stack JavaScript framework architecture utilized universally in modern application deployments. Data flows strictly via REST APIs starting from User Frontends (React) down into the Backend Servers (Node/Express) ultimately fetching/storing persistent states into NoSQL (MongoDB).',
        code: `// The ultimate architecture stack:
// M -> MongoDB (NoSQL Database backend)
// E -> Express.js (HTTP Routing API framework)
// R -> React.js (Client UI rendering layer)
// N -> Node.js (V8 Javascript Server runtime)`
      },
      {
        chapter: '2. Project Structure & Ecosystem',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Project%20Structure%20%26%20Ecosystem' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Project%20Structure%20%26%20Ecosystem' }
        ],
        content: 'Mastering Full-stack means structurally mapping the separations of concerns cleanly. By using Javascript across both domains, engineers can scale rapid monolithic or microservice architectures safely natively.',
        code: `// Common Real-World Architecture folder structures:
my-fullstack-app/
 ├── client/     // (React logic exclusively frontend)
 │     ├── src/
 │     └── package.json
 ├── server/     // (Node.js/Express.js APIs natively backend)
 │     ├── models/
 │     ├── controllers/
 │     ├── routes/
 │     └── package.json
 └── .env        // Configuration variables globally`
      },
      {
        chapter: '3. Express.js API Routing',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Express.js%20API%20Routing' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Express.js%20API%20Routing' }
        ],
        content: 'Express wraps clunky raw Node HTTP operations wrapping them inside beautiful API routing logic parsing incoming arrays safely.',
        code: `// Building a Core Express Backend Server dynamically:
const express = require('express');
const app = express();

// Middleware unblocking JSON payload limits
app.use(express.json());

let users = [];

app.post('/api/users', (req, res) => {
  users.push(req.body);
  res.send("User added successfully!");
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log('Server spun strictly on 3000'));`
      },
      {
        chapter: '4. MongoDB Configuration via Mongoose',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+MongoDB%20Configuration%20via%20Mongoose' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+MongoDB%20Configuration%20via%20Mongoose' }
        ],
        content: 'Mongoose sits exclusively upon Node.js acting as a powerful Object Document Mapping (ODM) tool translating logic objects directly into Schema-restricted MongoDB Collections.',
        code: `// Connect MongoDB to Node natively securely:
const mongoose = require('mongoose');

// Avoid hardcoding URIs, natively load configs via environment keys 
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log("Connected specifically to MongoDB Data Storage safely!");`
      },
      {
        chapter: '5. React Data Fetching Integration',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+React%20Data%20Fetching%20Integration' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+React%20Data%20Fetching%20Integration' }
        ],
        content: 'React dynamically drives Frontend structures utilizing local browser APIs specifically invoking the \`fetch()\` or \`axios\` plugins retrieving targeted Express APIs payload JSON objects.',
        code: `import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  // Fire targeted fetch specifically during component mounts natively
  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user, idx) => <li key={idx}>{user.name}</li>)}
    </ul>
  );
}`
      },
      {
        chapter: '6. Server Authentication (JWT)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Server%20Authentication%20(JWT)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Server%20Authentication%20(JWT)' }
        ],
        content: 'Full-Stack apps prevent unauthorized accesses by locking HTTP paths heavily using JSON Web Tokens (JWT). Servers encode temporary validation Strings sending it to Clients to stash securely natively.',
        code: `// Generating native tokens server-side during Login checks safely:
const jwt = require('jsonwebtoken');

// A User correctly inputs User/Password matches...
// We issue a Token holding their DB ID using our Server Secret key
const token = jwt.sign({ id: 1 }, "super_secret_token_signature", {
    expiresIn: "1h" // Tokens destroy themselves mitigating persistent hacks
});`
      },
      {
        chapter: '7. Advanced Global MERN Concepts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Global%20MERN%20Concepts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Global%20MERN%20Concepts' }
        ],
        content: 'Mastering MERN moves past simple fetches into massive configurations managing extreme state sizes, integrating WebSocket connections (Socket.io) dynamically mapping updates globally.',
        code: `/* Advanced Full-Stack Systems mapping:
 - State Management: Redux or Context APIs globally pushing array limits.
 - Fetch protocols: Upgrading from REST APIs to extreme GraphQL query limits.
 - Production Deployments: Shipping React (Frontend -> Vercel) & Node (Backend -> AWS).
 - Security middlewares: Activating Helmet, CORS arrays, and API limiters natively.
*/`
      },
      {
        chapter: '8. Architecture Best Practices (MVC)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Architecture%20Best%20Practices%20(MVC)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Architecture%20Best%20Practices%20(MVC)' }
        ],
        content: 'Dumping logic inside monolithic server scripts ruins massive codebases. Implement strictly mapped Model-View-Controller (MVC) layers grouping queries safely.',
        code: `// M - Model (Mongoose Schemas specifically interacting heavily into MongoDB)
// V - View (React Client UI layer rendering objects exclusively)
// C - Controller (Express.js Router logic parsing/validating queries)

// Implement Express validation filters strictly avoiding bad hacks:
// Avoid: app.post('/api', (req, res) => { db.save(req.body) })
// Better: Use JOI or Express-Validator cleanly preventing bad inputs natively.`
      },
      {
        chapter: '9. MERN vs MEAN Disparity',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+MERN%20vs%20MEAN%20Disparity' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+MERN%20vs%20MEAN%20Disparity' }
        ],
        content: 'The major structural industry variance swaps out React Native for Angular exclusively natively.',
        code: `-- Full-Stack JavaScript Mappings:

// MERN Stack -> MongoDB, Express, React (High UI Flexibility), Node
// MEAN Stack -> MongoDB, Express, Angular (Extremely rigid standard layout), Node
// MEVN Stack -> MongoDB, Express, Vue.js (Simple clean configurations), Node`
      },
      {
        chapter: '10. The Real-World Ultimate Flow Execution',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20Real-World%20Ultimate%20Flow%20Execution' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20Real-World%20Ultimate%20Flow%20Execution' }
        ],
        content: 'To dominate Full Stack Systems interviews, engineers memorize extreme request life-cycles from Form-submits hitting MongoDB memory allocations effectively.',
        code: `/* Complete User API Life-Cycle Flow Matrix:
1. User interacts with Form clicking Submit (React).
2. Fetch pushes POST Payload arrays over network (Browser).
3. Express captures req.body safely extracting data (Backend).
4. Mongoose Schema verifies formatting structurally (Model).
5. Document saved safely into targeted MongoDB Collection natively.
6. Server replies containing Status 201 Created (Backend).
7. React automatically pushes new UI component Array natively rendering!*/`
      }
    ]
  },
  mean: {
    title: 'MEAN Stack Enterprise Masterclass',
    description: 'Transform into a full-stack engineer mastering the rigorous, heavily opinionated architecture tying MongoDB, Express, Angular, and Node.js.',
    videoUrl: 'https://www.youtube.com/watch?v=wXmI9I2j20A',
    curriculum: [
      {
        chapter: '1. What is the MEAN Stack?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20the%20MEAN%20Stack%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20the%20MEAN%20Stack%3F' }
        ],
        content: 'MEAN is an incredibly structured, opinionated Full-Stack architecture uniquely relying on Angular (TypeScript) on the frontend while routing data strictly via REST APIs identically alongside Express.js & MongoDB schemas natively.',
        code: `// The Strict Architecture Definition:
// M -> MongoDB (Dynamic JSON/BSON Data Matrix)
// E -> Express.js (Fast API Routing Abstraction)
// A -> Angular (Google's highly structured TypeScript TS framework)
// N -> Node.js (V8 Backend Javascript Engine)`
      },
      {
        chapter: '2. Project Structure & Ecosystem',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Project%20Structure%20%26%20Ecosystem' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Project%20Structure%20%26%20Ecosystem' }
        ],
        content: 'Angular demands heavy structure globally. Integrating full-stack architecture requires extreme separations isolating Frontend Angular logics completely from backend API routers natively.',
        code: `// Real-World Architecture File Trees:
mean-enterprise-app/
 ├── client/     // (Angular Module routing exclusively)
 │     ├── src/app/
 │     │    ├── components/
 │     │    ├── services/
 │     │    └── app.module.ts
 ├── server/     // (Express APIs handling Node threads)
 │     ├── models/
 │     ├── controllers/
 │     └── routes/
 └── database/   // (Local MongoDB mapping)`
      },
      {
        chapter: '3. Express.js Dynamic Routing',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Express.js%20Dynamic%20Routing' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Express.js%20Dynamic%20Routing' }
        ],
        content: 'Node servers bypass the HTML delivery completely and operate strictly as a JSON Data API responding to Angular HTTP module fetches securely natively.',
        code: `// Core Express Server API Routing Array:
const express = require('express');
const app = express();

app.use(express.json()); // Allow JSON Body mapping natively

let users = [];

app.post('/api/users', (req, res) => {
  users.push(req.body);
  res.send("User successfully logged to backend!");
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => console.log('Backend spun on :3000'));`
      },
      {
        chapter: '4. Mongoose MongoDB Intercepts',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Mongoose%20MongoDB%20Intercepts' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Mongoose%20MongoDB%20Intercepts' }
        ],
        content: 'Mongoose handles massive MongoDB operations smoothly translating local backend Objects (ODM) cleanly into NoSQL arrays flawlessly.',
        code: `// Ensure the Server cleanly talks to Database allocations natively:
const mongoose = require('mongoose');

// Always isolate URIs into .env variables out of open GitHub pushes
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});

console.log('MongoDB successfully bonded natively!')`
      },
      {
        chapter: '5. Angular HTTP Fetch Protocols',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Angular%20HTTP%20Fetch%20Protocols' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Angular%20HTTP%20Fetch%20Protocols' }
        ],
        content: 'Unlike React, Angular handles fetches exclusively through highly isolated Injectable Services ensuring the UI component only handles data rendering logic instead of API data manipulation.',
        code: `import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// 1. Separate The API Data Logics
@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() { return this.http.get('http://localhost:3000/api/users'); }
}

// 2. Consume Data solely in Components
@Component({ selector: 'app-users', template: '<li *ngFor="let u of users">{{u.name}}</li>' })
export class AppComponent {
  users: any[] = [];
  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().subscribe(data => this.users = data);
  }
}`
      },
      {
        chapter: '6. Server Authentication (JWT)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Server%20Authentication%20(JWT)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Server%20Authentication%20(JWT)' }
        ],
        content: 'Authentication relies on Node issuing temporary Tokens (JWT). The Angular client stores them internally (Local Storage) and attaches them alongside every single HTTP header natively.',
        code: `// Server-Side Node Token Configuration Arrays:
const jwt = require('jsonwebtoken');

// Generating an encrypted lock identifying Client natively
const token = jwt.sign({ id: 1 }, "super_secret_env_password", {
    expiresIn: "1h"
});

// Sends the Token -> Angular intercepts -> Stores locally securely.`
      },
      {
        chapter: '7. Advanced Typescript & Observables',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Typescript%20%26%20Observables' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Typescript%20%26%20Observables' }
        ],
        content: 'The major pivot pushing MEAN architectures is mastering RxJS. Instead of Promises, Angular leverages Data Streams (Observables) allowing real-time mapping or cancellation internally natively.',
        code: `/* Heavy MEAN Architectural Capabilities
 - RxJS Observables: Mapping dynamic HTTP API streams flawlessly.
 - Angular Reactive Forms: Structured validation natively pushing tight limits.
 - NgRx State Control: Global state management replacing Context API.
 - Lazy Loading Modules: Dynamically importing routes only when clicked.
 - Microservices Architecture: Scaling servers cleanly via Kubernetes globally.
*/`
      },
      {
        chapter: '8. Application Best Practices',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Application%20Best%20Practices' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Application%20Best%20Practices' }
        ],
        content: 'Because Angular explicitly drives opinionated logic layouts locally, the main failures execute by skipping validation schemas ruining total structures significantly natively.',
        code: `// 1. Force the Layered Architecture safely:
// (Controller endpoints -> Business Service Logics -> Database Mongoose Models)

// 2. Input Validation limits locally:
// Joi or Validation Middleware intercepting garbage inputs locally smoothly.

// 3. Centralized Node Error limits:
// App middlewares collecting errors universally handling massive failures natively.`
      },
      {
        chapter: '9. MEAN vs MERN Divergence',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+MEAN%20vs%20MERN%20Divergence' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+MEAN%20vs%20MERN%20Divergence' }
        ],
        content: 'Differentiating Fullstack structures generally hinges solely on the UI engine (React vs Angular). While MERN is wildly flexible, MEAN forces highly typed TS structures producing heavy Enterprise architectures.',
        code: `/* Master Hierarchy Diff:
 - Frontend UI: Angular (Structured strict) vs React (Wildly flexible).
 - Learning Curve: Angular's RxJS drives the curve significantly higher natively.
 - Data Bindings: Angular executes strict Two-way natively vs React One-way maps.
*/`
      },
      {
        chapter: '10. The Definitive Core Execution Pathway',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%20Definitive%20Core%20Execution%20Pathway' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%20Definitive%20Core%20Execution%20Pathway' }
        ],
        content: 'Interviews mandate outlining the complex multi-node architecture mapping exactly how Angular forms cascade logic directly into backend NoSQL deployments natively.',
        code: `/* Complete MEAN Flow API Execution Trace:
1. User interacts with UI typing into Reactive Forms (Angular).
2. HTTP POST triggers via targeted HttpClient Services parsing data safely.
3. Express captures API request arrays manipulating data (Backend).
4. Mongoose translates data into exact MongoDB mapping schemas cleanly.
5. MongoDB confirms data lock saving permanently (Database).
6. Node answers HTTP Request containing Success Code 201 cleanly.
7. RxJS Observable receives data, notifying Angular UI to update gracefully!*/`
      }
    ]
  },
  'python-full': {
    title: 'Python Full Stack Mastery',
    description: 'An advanced data-centric engineering curriculum bridging Javascript frontends strictly to heavy-duty Python backend environments (Flask & Django).',
    videoUrl: 'https://www.youtube.com/playlist?list=PLzMcBGfZo4-kRO_2RkXlV_ZqLdY3Z-3dY',
    curriculum: [
      {
        chapter: '1. What is Python Full Stack?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Python%20Full%20Stack%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Python%20Full%20Stack%3F' }
        ],
        content: 'Python Full-Stack refers to operating Client-Side UI bindings alongside Backend Server Logic parsing persistent Database data strictly deploying Python integrations dynamically. It dominates Data, Web, and AI industries natively.',
        code: `// The Architecture Tech Stack Flow:
// 1. Frontend (Browser): React.js / Angular pushing raw JSON objects.
// 2. Backend (Server): Python mapping API endpoints handling Logic securely.
// 3. Database (Memory): NoSQL (MongoDB) or Relational sets (PostgreSQL).`
      },
      {
        chapter: '2. Backend Frameworks: Flask vs Django',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Backend%20Frameworks%3A%20Flask%20vs%20Django' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Backend%20Frameworks%3A%20Flask%20vs%20Django' }
        ],
        content: 'Python relies completely exclusively on massive frameworks executing Server tasks natively. Flask is an inherently lightweight "Micro" framework natively scaling abstractly. Django conversely operates as an enterprise "Batteries-Included" heavy framework instantly shipping pre-built Administration Panels securely natively.',
        code: `/* Industry standard framework allocations:
 - Flask: Fast REST APIs, Microservices, Asynchronous flexibility.
 - Django: Rapid Enterprise applications, strictly mapped MVT structures.
 - FastAPI: High performance Async endpoints dominating AI integrations.
*/`
      },
      {
        chapter: '3. Flask Micro-Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Flask%20Micro-Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Flask%20Micro-Architecture' }
        ],
        content: 'Flask avoids structured folder layers forcing you into structuring codebases uniquely. It operates purely on basic URL routing attaching responses dynamically securely.',
        code: `// Initializing a Core Flask Server Setup
from flask import Flask

app = Flask(__name__)

# Basic endpoint routing mapped dynamically
@app.route('/')
def home():
    return "Hello Flask Abstract Environment!"

app.run() # Boots local environment server cleanly`
      },
      {
        chapter: '4. Flask REST API Design',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Flask%20REST%20API%20Design' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Flask%20REST%20API%20Design' }
        ],
        content: 'Since Flask contains minimal built-in arrays, it maps JSON data streams seamlessly natively. Extensions like "Flask-SQLAlchemy" and "Flask-JWT" inject massive plugins effortlessly bypassing native limits.',
        code: `from flask import Flask, jsonify

app = Flask(__name__)

# Abstract JSON REST API payload 
@app.route('/api/users')
def get_users():
    return jsonify([{"id": 1, "name": "Chai"}])

# Run native environment 
if __name__ == '__main__':
    app.run(debug=True)`
      },
      {
        chapter: '5. Django MVT Architecture',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Django%20MVT%20Architecture' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Django%20MVT%20Architecture' }
        ],
        content: 'Django enforces absolute structural integrity natively mapping the MVT Pipeline (Model -> View -> Template). "Models" lock database schemas safely. "Views" parse incoming business payload requests natively, updating the backend.',
        code: `// Core Django Architectural Directory structure locally:
project/
 ├── manage.py    // Target Master CLI Terminal executor
 ├── app/
 │   ├── models.py  // Database Schemas configuration mappings
 │   ├── views.py   // Server Logic parsing requests cleanly
 │   └── urls.py    // Routing URLs directing traffic
`
      },
      {
        chapter: '6. Django Models & ORM',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Django%20Models%20%26%20ORM' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Django%20Models%20%26%20ORM' }
        ],
        content: 'Django obliterates massive SQL queries deploying powerful Object-Relational Mapping (ORM) models structurally. Python objects translate automatically cleanly into relational SQL architectures smoothly without standard vulnerabilities.',
        code: `from django.db import models

# Class natively mirroring PostgreSQL/MySQL Table architecture
class User(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
        
# Django natively provisions Tables parsing migrating commands locally!`
      },
      {
        chapter: '7. Advanced Global Integrations',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Global%20Integrations' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Global%20Integrations' }
        ],
        content: 'Building Python-Full Stack systems implies scaling backend systems massively integrating background WebSockets globally bridging environments natively securely.',
        code: `/* Heavy Execution Integrations mapping:
 - Asynchronous: Upgrading async/await deploying heavy AI computations cleanly.
 - Real-Time Streams: WebSockets deploying persistent Chat or Live environments natively.
 - Task Queues: Deploying Celery executing massive parsing requests externally cleanly.
 - Caching Layers: Integrating Redis preventing total database scans significantly Native.
*/`
      },
      {
        chapter: '8. Security, Validation & JWT',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Security%2C%20Validation%20%26%20JWT' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Security%2C%20Validation%20%26%20JWT' }
        ],
        content: 'Authenticating React clients inside an isolated Python API locks into Stateless deployments natively strictly generating JSON Web Tokens natively enforcing session limits securely.',
        code: `import jwt

# Locking API fetches pushing encoded limits safely
encoded_jwt = jwt.encode({"userId": 1}, "super_secret_env", algorithm="HS256")

# Real-World Implementations:
# 1. Never embed tokens openly inside scripts.
# 2. Deploy Session-based architectures parsing cookies dynamically natively.
# 3. Always apply HTTP limits dropping automated massive injection arrays natively.`
      },
      {
        chapter: '9. Database Integrations & Setup',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Database%20Integrations%20%26%20Setup' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Database%20Integrations%20%26%20Setup' }
        ],
        content: 'Django includes a dynamic native Admin panel allowing direct graphical database manipulations without executing custom SQL scripts natively saving unbelievable production lifecycles continuously.',
        code: `/* Master Real-World Allocations Matrix: 
 - Database Integrations: Deploying PostgreSQL natively tying Django's Model layer locally.
 - API Operations: Django utilizes "Django REST Framework (DRF)" cleanly bridging endpoints cleanly targeting Frontend fetches seamlessly.
*/`
      },
      {
        chapter: '10. Python vs Javascript (MERN vs Django)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Python%20vs%20Javascript%20(MERN%20vs%20Django)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Python%20vs%20Javascript%20(MERN%20vs%20Django)' }
        ],
        content: 'During interviews, distinguishing standard architectures safely dictates precise engineering allocations structurally heavily.',
        code: `/* End Execution Trace Architecture diff:
1. Python Full Stack (Django + React) natively isolates extremely robust ML logic inside Backend routing perfectly.
2. MERN Full Stack uses Javascript exclusively heavily targeting raw JSON endpoints dynamically scaling vertically perfectly natively.
3. Django deploys complete authentication setups identically while Flask & Node.js require manual custom structures specifically structurally.
*/`
      }
    ]
  },
  'java-full': {
    title: 'Java Full Stack Architect',
    description: 'Master the premier Enterprise configuration, linking scalable React/Angular Frontends strictly into robust Java Spring Boot Microservices and secure Database layers.',
    videoUrl: 'https://www.youtube.com/playlist?list=PLqq-6Pq4lTTZSKAFG6aCDVDP86Qx4lNas',
    curriculum: [
      {
        chapter: '1. What is Java Full Stack?',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+What%20is%20Java%20Full%20Stack%3F' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+What%20is%20Java%20Full%20Stack%3F' }
        ],
        content: 'A Java Full-Stack architecture bridges modern Client-side UIs (React/Angular) solidly against heavy-duty Java Server APIs (Spring Boot) and persistent Databases safely cleanly driving the entire enterprise standard natively.',
        code: `// The Architecture Tech Stack Flow:
// 1. Frontend (Browser): React.js / Angular pushing raw JSON objects.
// 2. Backend (Server): Spring Boot parsing Logic & authenticating payloads.
// 3. Database (Memory): MySQL, PostgreSQL, or NoSQL arrays directly.`
      },
      {
        chapter: '2. Project Structure & Ecosystem',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Project%20Structure%20%26%20Ecosystem' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Project%20Structure%20%26%20Ecosystem' }
        ],
        content: 'Enterprise Java deployments demand rigorous structural isolation distinguishing Frontend repositories completely natively from standard Backend Java packages avoiding monolithic crashes.',
        code: `// Common Real-World Architecture folder structures:
project-root/
 ├── frontend/         // React or Angular repository dynamically
 │     ├── src/
 │     └── package.json
 ├── backend/          // Spring Boot Project (Maven/Gradle)
 │     ├── src/main/java/
 │     │    ├── controllers/
 │     │    ├── services/
 │     │    └── repositories/
 │     └── pom.xml
 └── database/         // RDBMS SQL logic sets`
      },
      {
        chapter: '3. Spring Boot Backend APIs',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Spring%20Boot%20Backend%20APIs' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Spring%20Boot%20Backend%20APIs' }
        ],
        content: 'Spring Boot aggressively accelerates API development stripping away clunky manual configurations natively bridging HTTP endpoints gracefully utilizing Annotations seamlessly.',
        code: `// Building a Core Spring Boot Controller Endpoint:
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @GetMapping
    public List<String> getUsers() {
        return List.of("Chai", "Navi");
    }
}
// Automatically spins up embedded Tomcat parsing REST Requests!`
      },
      {
        chapter: '4. Layered Architecture (Best Practice)',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Layered%20Architecture%20(Best%20Practice)' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Layered%20Architecture%20(Best%20Practice)' }
        ],
        content: 'Java engineers strictly abide by N-Tier architectural layers isolating concerns safely: Controllers (Route data), Services (Process business logic), and Repositories (Fetch Database arrays).',
        code: `// 1. Controller calls Service:
@GetMapping
public List<User> getUsers() { return userService.getUsers(); }

// 2. Service processes Logic and calls Repository Array:
public List<User> getUsers() { return repo.findAll(); }

// 3. Repository exclusively parses Database natively:
public interface UserRepo extends JpaRepository<User, Integer> {}`
      },
      {
        chapter: '5. JPA Entities & Database Models',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+JPA%20Entities%20%26%20Database%20Models' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+JPA%20Entities%20%26%20Database%20Models' }
        ],
        content: 'Translating Java objects seamlessly into strictly tabular Relational Data rows utilizes the Java Persistence API (JPA), allowing clean Database architectures generated directly from Java code.',
        code: `import jakarta.persistence.*;

// Locking Model natively into PostgreSQL/MySQL Table format
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    
    private String name;
    
    // Getters and Setters omitted for brevity...
}`
      },
      {
        chapter: '6. Frontend React Data Integration',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Frontend%20React%20Data%20Integration' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Frontend%20React%20Data%20Integration' }
        ],
        content: 'React dynamically consumes the Spring Boot backend REST APIs seamlessly parsing JSON data via standard Fetch calls or Axios loading UIs efficiently dynamically natively.',
        code: `import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Specifically hits the Spring Boot Tomcat Backend natively safely
    fetch('http://localhost:8080/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((u, idx) => <li key={idx}>{u.name}</li>)}
    </ul>
  );
}`
      },
      {
        chapter: '7. Automation, Auth & Spring Security',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Automation%2C%20Auth%20%26%20Spring%20Security' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Automation%2C%20Auth%20%26%20Spring%20Security' }
        ],
        content: 'Protecting massive enterprise architectures demands heavily configured Authentication layers natively handled by Spring Security processing Stateless JSON Web Tokens (JWT) across CORS configurations securely.',
        code: `/* Heavy Backend Security Mappings
 - JWT: Client securely stores encoded tokens avoiding repetitive Login requests natively.
 - CORS: Spring natively configures @CrossOrigin unlocking React Frontend HTTP traffic carefully.
 - Testing: JUnit & Mockito forcefully simulate mock data catching errors prior to CI/CD deploys. 
*/`
      },
      {
        chapter: '8. Advanced Enterprise Capabilities',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Advanced%20Enterprise%20Capabilities' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Advanced%20Enterprise%20Capabilities' }
        ],
        content: 'Transitioning into severe architecture relies totally on scaling monolithic layers laterally globally mapping Microservices natively.',
        code: `/* Master Real-World Allocations Matrix: 
 - Microservices: Severing Monoliths into distinct independent Spring Boot nodes (Spring Cloud).
 - Messaging: Deploying Apache Kafka handling massive asynchronous data streaming.
 - Caching Layers: Integrating Redis preventing total database latency scans significantly natively.
 - Deployments: Dockerizing the Backend Java JAR files directly loading logic into AWS/Azure.
*/`
      },
      {
        chapter: '9. Java Full Stack vs MERN',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+Java%20Full%20Stack%20vs%20MERN' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+Java%20Full%20Stack%20vs%20MERN' }
        ],
        content: 'Distinguishing structures maps specifically back to the Server technology natively cleanly utilized.',
        code: `/* End Execution Trace Architecture diff:
 - Java Full Stack: Relies structurally on strictly typed Java backend logic cleanly processing extreme Enterprise volumes confidently natively.
 - MERN Tech Stack: Deploys solely Javascript natively speeding up Frontend-Backend integrations flexibly.
 - Use Case: Java absolutely dominates Finance/Banking/Healthcare architectures identically cleanly.
*/`
      },
      {
        chapter: '10. The 6-Step Ultimate User API Flow',
        references: [
          { name: 'W3Schools', url: 'https://www.google.com/search?q=site:w3schools.com+The%206-Step%20Ultimate%20User%20API%20Flow' },
          { name: 'GeeksforGeeks', url: 'https://www.google.com/search?q=site:geeksforgeeks.org+The%206-Step%20Ultimate%20User%20API%20Flow' }
        ],
        content: 'A complete Full Stack architecture completes exactly this execution lifecycle precisely flawlessly avoiding failures natively continuously.',
        code: `/* Complete User Real-World API Tracement Flow:
1. User interacts with Form clicking Submit cleanly inside Frontend (React).
2. Fetch pushes POST Payload arrays over network (Browser).
3. Spring Boot Controller intercepts Request mapped logic data (Backend).
4. Service Layer validates constraints natively parsing Data mapping (Business Logic).
5. Document saved successfully across targeted Database structurally natively (Repository).
6. React successfully retrieves HTTP 200 mapping dynamic array updates dynamically UI components!*/`
      }
    ]
  }
  // This structure can easily be expanded for all other topics.
};

const lessons = [
{
  id:1, part:1,
  title:"Getting Started with React",
  desc:"Why React, Vite setup, project structure, first component",
  content:`<h2>Why React?</h2>
<p>React is a JavaScript library by Meta for building user interfaces. It uses a <strong>component-based</strong> architecture — each piece of UI is an isolated, reusable function.</p>
<div class="note"><strong>Key ideas:</strong> Component tree · Virtual DOM · Declarative rendering · One-way data flow</div>

<h3>Why Vite over CRA?</h3>
<p>Create React App is slow and outdated. Vite is the modern standard:</p>
<ul>
<li><strong>Instant</strong> dev server start (no bundling upfront)</li>
<li><strong>Lightning HMR</strong> — updates in &lt;50ms</li>
<li><strong>10x faster</strong> cold starts than CRA</li>
</ul>

<h3>Installation</h3>
<pre><span class="cm"># Scaffold a new React + Vite project</span>
<span class="kw">npm</span> create vite@latest my-app <span class="str">-- --template react</span>
<span class="kw">cd</span> my-app
<span class="kw">npm</span> install
<span class="kw">npm</span> run dev</pre>

<h3>Project Structure</h3>
<pre>my-app/
+-- public/           <span class="cm"># static assets</span>
+-- src/
|   +-- <span class="fn">App.jsx</span>       <span class="cm"># root component</span>
|   +-- <span class="fn">main.jsx</span>      <span class="cm"># entry point</span>
|   +-- index.css
+-- index.html
+-- vite.config.js</pre>

<h3>Your First Component</h3>
<pre><span class="cm">// src/App.jsx</span>
<span class="kw">function</span> <span class="fn">App</span>() {
  <span class="kw">return</span> (
    <span class="jsx">&lt;div&gt;</span>
      <span class="jsx">&lt;h1&gt;</span>Hello React! [*]<span class="jsx">&lt;/h1&gt;</span>
      <span class="jsx">&lt;p&gt;</span>My first component<span class="jsx">&lt;/p&gt;</span>
    <span class="jsx">&lt;/div&gt;</span>
  );
}

<span class="kw">export default</span> App;</pre>`,
  quiz:[
    {q:"What is the main advantage of Vite over Create React App?",opts:["Smaller bundle size","Instant dev server -- ~10x faster","More component templates","Better CSS support"],ans:1,exp:"Vite skips bundling during development, making cold starts nearly instant vs CRA's slow webpack process."},
    {q:"What does the Virtual DOM do?",opts:["Stores data in a virtual database","Caches API responses","Lets React compute the minimum DOM changes needed","Renders components server-side"],ans:2,exp:"React diffs a lightweight JS copy of the DOM against the real DOM, then applies only the minimal changes needed."},
    {q:"Which file is the JavaScript entry point of a Vite React app?",opts:["index.html","App.jsx","main.jsx","vite.config.js"],ans:2,exp:"main.jsx bootstraps React by calling ReactDOM.createRoot() and rendering the App component."}
  ],
  challenge:"Build a greeting component that accepts a `name` prop and renders 'Hello, [name]! Welcome to React.' with a styled heading.",
  projects:[
    {tag:"EASY",title:"Personal Card",desc:"Profile card component",reqs:["Display your name, role, and a short bio","Show a placeholder avatar (ASCII art or colored block)","Add 3 skill tags styled as badges","Use at least 2 nested components"]},
    {tag:"MEDIUM",title:"Team Directory",desc:"Reusable card grid",reqs:["Create a TeamCard component with props: name, role, avatar, email","Render a grid of at least 4 team members","Add a search/filter input to filter by name","Show an empty state message when no results match"]}
  ]
},
{
  id:2, part:1,
  title:"JSX & Rendering",
  desc:"JSX syntax, expressions, conditional rendering, fragments",
  content:`<h2>What is JSX?</h2>
<p>JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. Babel compiles it to <code>React.createElement()</code> calls.</p>

<h3>Embedding Expressions</h3>
<pre><span class="kw">const</span> name = <span class="str">"Alex"</span>;
<span class="kw">const</span> score = <span class="num">42</span>;
<span class="kw">const</span> el = <span class="jsx">&lt;h1&gt;</span>Score for {name}: {score * <span class="num">2</span>}<span class="jsx">&lt;/h1&gt;</span>;</pre>

<h3>JSX Rules</h3>
<ul>
<li>Use <strong>className</strong> not class</li>
<li>Use <strong>htmlFor</strong> not for</li>
<li>Self-close empty tags: &lt;img /&gt;, &lt;input /&gt;</li>
<li>Must return a <strong>single root element</strong></li>
</ul>

<h3>Conditional Rendering</h3>
<pre><span class="cm">// Ternary -- best for two outcomes</span>
{isLoggedIn ? <span class="jsx">&lt;Dashboard /&gt;</span> : <span class="jsx">&lt;Login /&gt;</span>}

<span class="cm">// && -- best for optional content</span>
{hasError && <span class="jsx">&lt;ErrorBanner msg={error} /&gt;</span>}

<span class="cm">// Early return -- for full component branches</span>
<span class="kw">if</span> (loading) <span class="kw">return</span> <span class="jsx">&lt;Spinner /&gt;</span>;</pre>

<h3>Fragments</h3>
<pre><span class="cm">// Avoids extra wrapper divs in the DOM</span>
<span class="kw">function</span> <span class="fn">Meta</span>() {
  <span class="kw">return</span> (
    <span class="jsx">&lt;&gt;</span>
      <span class="jsx">&lt;title&gt;</span>My App<span class="jsx">&lt;/title&gt;</span>
      <span class="jsx">&lt;meta</span> <span class="attr">name</span>=<span class="str">"desc"</span> <span class="jsx">/&gt;</span>
    <span class="jsx">&lt;/&gt;</span>
  );
}</pre>`,
  quiz:[
    {q:"How do you embed a JavaScript expression in JSX?",opts:["{{value}}","${value}","{value}","<!--value-->"],ans:2,exp:"Single curly braces {} embed any JS expression -- variables, function calls, ternaries."},
    {q:"Which is the correct JSX attribute for CSS classes?",opts:["class","cssClass","className","classList"],ans:2,exp:"'class' is a reserved JS keyword, so JSX uses className instead."},
    {q:"What problem do Fragments solve?",opts:["They speed up rendering","They allow multiple root elements without adding extra DOM nodes","They replace useState","They handle errors"],ans:1,exp:"React requires a single root, but Fragments (<></>) group elements without injecting a real DOM wrapper."}
  ],
  challenge:"Create a StatusBadge component. If status is 'online' show a green badge, 'away' shows yellow, 'offline' shows grey. Use conditional rendering.",
  projects:[
    {tag:"EASY",title:"Notification Banner",desc:"Conditional alert component",reqs:["Accept type prop: success | error | warning | info","Render different icon and color per type","Add a dismiss button that hides the banner","Show nothing if no message prop is passed"]},
    {tag:"MEDIUM",title:"Feature Flag Dashboard",desc:"Toggle UI features on/off",reqs:["Render a list of features, each with a name and enabled boolean","Show different UI based on feature flag state","Use && and ternary operators for at least 3 conditional renders","Add a reset all button using Fragment for the button group"]}
  ]
},
{
  id:3, part:1,
  title:"Components & Props",
  desc:"Functional components, props, destructuring, children, composition",
  content:`<h2>The Building Blocks</h2>
<p>React apps are trees of components. Each component is a function that takes <strong>props</strong> (inputs) and returns JSX (output).</p>

<h3>Props</h3>
<pre><span class="cm">// Parent passes props</span>
<span class="jsx">&lt;Button</span> <span class="attr">label</span>=<span class="str">"Save"</span> <span class="attr">onClick</span>={handleSave} <span class="jsx">/&gt;</span>

<span class="cm">// Child receives and destructures props</span>
<span class="kw">function</span> <span class="fn">Button</span>({ label, onClick, disabled = <span class="kw">false</span> }) {
  <span class="kw">return</span> <span class="jsx">&lt;button</span> <span class="attr">onClick</span>={onClick}<span class="jsx">&gt;</span>{label}<span class="jsx">&lt;/button&gt;</span>;
}</pre>

<div class="warn"><strong>Rule:</strong> Props are read-only. Never mutate them inside the component.</div>

<h3>Children Prop</h3>
<pre><span class="kw">function</span> <span class="fn">Card</span>({ title, children }) {
  <span class="kw">return</span> (
    <span class="jsx">&lt;div&gt;</span>
      <span class="jsx">&lt;h2&gt;</span>{title}<span class="jsx">&lt;/h2&gt;</span>
      {children}
    <span class="jsx">&lt;/div&gt;</span>
  );
}

<span class="jsx">&lt;Card</span> <span class="attr">title</span>=<span class="str">"Profile"</span><span class="jsx">&gt;</span>
  <span class="jsx">&lt;p&gt;</span>Content here<span class="jsx">&lt;/p&gt;</span>
<span class="jsx">&lt;/Card&gt;</span></pre>`,
  quiz:[
    {q:"Can a component directly modify the props it receives?",opts:["Yes, that's the purpose of props","No -- props are read-only","Only primitive props can be modified","Yes, using the spread operator"],ans:1,exp:"Props flow one way -- parent to child. Modifying them would break React's predictable data flow."},
    {q:"What is the 'children' prop?",opts:["An array of all child components in the app","JSX content passed between a component's opening and closing tags","A special state for child components","Props filtered from parent"],ans:1,exp:"children is whatever you put between <MyComp>...</MyComp> -- text, elements, or other components."},
    {q:"What is the correct destructuring syntax for props?",opts:["function C([name, age])","function C({name, age})","function C(name, age)","function C(<name, age>)"],ans:1,exp:"Props are a plain object, so object destructuring {name, age} extracts them cleanly."}
  ],
  challenge:"Build a reusable Card component that accepts title, subtitle, and children props. Create three different cards using it in App.",
  projects:[
    {tag:"EASY",title:"Product Card",desc:"E-commerce style card component",reqs:["Props: name, price, image (ASCII), category, inStock","Show Out of stock badge when inStock is false","Add default prop values","Render a grid of 4 products"]},
    {tag:"MEDIUM",title:"Article Layout System",desc:"Composable layout components",reqs:["Create Section, Article, Sidebar, and Tag components","Section wraps children with a title and optional subtitle","Tags are rendered inside Article from a tags prop array","Compose a full page with 2 articles and a sidebar"]}
  ]
},
{
  id:4, part:1,
  title:"State & useState Hook",
  desc:"What is state, useState basics, multiple state, immutability",
  content:`<h2>What is State?</h2>
<p>State is data that <strong>changes over time</strong> and lives inside a component. When state changes, React re-renders the component with fresh values.</p>

<h3>useState Basics</h3>
<pre><span class="kw">import</span> { useState } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">function</span> <span class="fn">Counter</span>() {
  <span class="kw">const</span> [count, setCount] = <span class="fn">useState</span>(<span class="num">0</span>);

  <span class="kw">return</span> (
    <span class="jsx">&lt;div&gt;</span>
      <span class="jsx">&lt;p&gt;</span>Count: {count}<span class="jsx">&lt;/p&gt;</span>
      <span class="jsx">&lt;button</span> <span class="attr">onClick</span>={() => <span class="fn">setCount</span>(count + <span class="num">1</span>)}<span class="jsx">&gt;</span>[+]<span class="jsx">&lt;/button&gt;</span>
    <span class="jsx">&lt;/div&gt;</span>
  );
}</pre>

<h3>State Immutability</h3>
<pre><span class="cm">// [X] Wrong -- mutates directly</span>
user.name = <span class="str">"Bob"</span>;

<span class="cm">// [+] Correct -- spread to new object</span>
<span class="fn">setUser</span>({ ...user, name: <span class="str">"Bob"</span> });

<span class="cm">// [+] Arrays -- never push/splice</span>
<span class="fn">setItems</span>([...items, newItem]);
<span class="fn">setItems</span>(items.<span class="fn">filter</span>(i => i.id !== targetId));</pre>`,
  quiz:[
    {q:"What does useState return?",opts:["The state value only","A setState function only","An array: [currentValue, setterFunction]","An object with get and set"],ans:2,exp:"useState returns a 2-element array. By convention we destructure it as [value, setValue]."},
    {q:"Why use functional updates (prev => prev + 1)?",opts:["It's faster","It avoids stale state when updates are batched","It allows async state","It only works with numbers"],ans:1,exp:"React may batch state updates. The function form guarantees you operate on the latest state, not a stale closure value."},
    {q:"What's wrong with: state.name = 'Bob'?",opts:["Nothing, it works fine","It throws a TypeError","React doesn't detect the change and won't re-render","It only works in class components"],ans:2,exp:"React uses reference equality to detect changes. Mutating in-place keeps the same reference, so React sees no difference."}
  ],
  challenge:"Build a shopping cart item with quantity controls. Show item name, price x quantity = total, plus [+] and [-] buttons. Minimum quantity is 1.",
  projects:[
    {tag:"EASY",title:"Stopwatch",desc:"Functional timer with state",reqs:["Display seconds and centiseconds (00:00)","Start, Stop, and Reset buttons","Use a single time number in state","Disable Start when running, Stop when paused"]},
    {tag:"MEDIUM",title:"Multi-Step Form",desc:"Wizard-style form with state",reqs:["3 steps: Personal Info -> Contact -> Confirmation","State holds all form data across steps","Progress bar shows current step","Confirmation step displays all collected data"]}
  ]
},
{
  id:5, part:1,
  title:"Events & Forms",
  desc:"Event handling, controlled inputs, form validation, multiple fields",
  content:`<h2>Handling Events</h2>
<pre><span class="kw">function</span> <span class="fn">Btn</span>() {
  <span class="kw">const</span> <span class="fn">handleClick</span> = (e) => {
    e.<span class="fn">stopPropagation</span>();
    console.<span class="fn">log</span>(<span class="str">'clicked'</span>, e.target);
  };
  <span class="kw">return</span> <span class="jsx">&lt;button</span> <span class="attr">onClick</span>={handleClick}<span class="jsx">&gt;</span>[CLICK]<span class="jsx">&lt;/button&gt;</span>;
}</pre>

<h3>Controlled Components</h3>
<pre><span class="kw">function</span> <span class="fn">SearchBox</span>() {
  <span class="kw">const</span> [query, setQuery] = <span class="fn">useState</span>(<span class="str">""</span>);
  <span class="kw">return</span> (
    <span class="jsx">&lt;input</span>
      <span class="attr">value</span>={query}
      <span class="attr">onChange</span>={(e) => <span class="fn">setQuery</span>(e.target.value)}
      <span class="attr">placeholder</span>=<span class="str">"Search..."</span>
    <span class="jsx">/&gt;</span>
  );
}</pre>

<h3>Form Submit</h3>
<pre><span class="kw">const</span> <span class="fn">handleSubmit</span> = (e) => {
  e.<span class="fn">preventDefault</span>(); <span class="cm">// [!] prevent page reload</span>
  <span class="kw">if</span> (!email.<span class="fn">includes</span>(<span class="str">"@"</span>)) {
    <span class="fn">setError</span>(<span class="str">"Invalid email"</span>);
    <span class="kw">return</span>;
  }
  console.<span class="fn">log</span>(<span class="str">"Submit:"</span>, email);
};</pre>`,
  quiz:[
    {q:"How do you prevent a form from refreshing the page on submit?",opts:["return false","e.preventDefault()","e.stopPropagation()","formData.prevent()"],ans:1,exp:"e.preventDefault() cancels the browser's default behavior -- in forms, that's the page reload/redirect."},
    {q:"What makes a component a 'controlled component'?",opts:["It has a ref","Its value is driven by React state and onChange","It uses useEffect","It has no props"],ans:1,exp:"A controlled input has value={state} and onChange that updates state -- React fully owns the value."},
    {q:"Where does onChange get the input's new value from?",opts:["e.value","e.target.value","e.currentTarget","onChange.value"],ans:1,exp:"e.target refers to the DOM input element, and .value is its current string value."}
  ],
  challenge:"Build a password strength meter. As the user types, show Weak/Medium/Strong based on length and whether it contains numbers and symbols.",
  projects:[
    {tag:"EASY",title:"Contact Form",desc:"Validated contact form",reqs:["Fields: name (required), email (valid format), message (min 20 chars)","Show inline errors per field on blur or submit","Green indicator when a field is valid","Disable submit button until all fields pass"]},
    {tag:"MEDIUM",title:"Dynamic Survey Builder",desc:"Add/remove custom questions",reqs:["Input to add a new question (text or yes/no type)","Render all questions as controlled inputs","Delete individual questions","Show a Preview Answers panel with current responses"]}
  ]
},
{
  id:6, part:1,
  title:"Lists & Keys",
  desc:"Rendering with map(), key prop, filtering, sorting, CRUD",
  content:`<h2>Rendering Lists</h2>
<pre><span class="kw">const</span> items = [<span class="str">"Alpha"</span>, <span class="str">"Beta"</span>, <span class="str">"Gamma"</span>];

<span class="kw">function</span> <span class="fn">List</span>() {
  <span class="kw">return</span> (
    <span class="jsx">&lt;ul&gt;</span>
      {items.<span class="fn">map</span>((item, i) => (
        <span class="jsx">&lt;li</span> <span class="attr">key</span>={i}<span class="jsx">&gt;</span>{item}<span class="jsx">&lt;/li&gt;</span>
      ))}
    <span class="jsx">&lt;/ul&gt;</span>
  );
}</pre>

<div class="warn">Prefer stable IDs over array indexes. Index keys cause bugs when items are reordered or removed.</div>

<h3>Filter + Sort</h3>
<pre><span class="kw">const</span> visible = users
  .<span class="fn">filter</span>(u => u.name.<span class="fn">toLowerCase</span>().<span class="fn">includes</span>(search))
  .<span class="fn">sort</span>((a, b) => a.name.<span class="fn">localeCompare</span>(b.name));</pre>

<h3>CRUD Patterns</h3>
<pre><span class="cm">// [+] Add</span>
<span class="fn">setItems</span>(prev => [...prev, newItem]);
<span class="cm">// [-] Remove</span>
<span class="fn">setItems</span>(prev => prev.<span class="fn">filter</span>(i => i.id !== id));
<span class="cm">// [~] Update</span>
<span class="fn">setItems</span>(prev => prev.<span class="fn">map</span>(i =>
  i.id === id ? { ...i, ...changes } : i
));</pre>`,
  quiz:[
    {q:"Why are keys important in React lists?",opts:["For styling individual items","React uses them to match old and new list items during re-render","They set the render order","They prevent duplicates"],ans:1,exp:"Keys are React's identity system for list items -- they enable smart diffing so React only updates changed items."},
    {q:"Why is using array index as key problematic?",opts:["It's slower","Indexes shift when items are added/removed, confusing React's reconciler","You can't have duplicate indexes","It only works with numbers"],ans:1,exp:"If you remove item at index 0, everything shifts. React sees index 0 still exists and thinks it's the same item."},
    {q:"Which method correctly removes an item from state without mutation?",opts:["state.splice(i, 1)","state.remove(id)","state.filter(i => i.id !== id)","delete state[id]"],ans:2,exp:"filter() returns a new array excluding the matched item, leaving the original unchanged."}
  ],
  challenge:"Build a task list with add, delete, and toggle-complete functionality. Show a count of remaining tasks.",
  projects:[
    {tag:"EASY",title:"Filterable User List",desc:"Searchable user directory",reqs:["Render 8+ users from an array with name, email, role","Search input filters by name or email in real-time","Sort toggle: A->Z / Z->A by name","Show result count: Showing 3 of 8 users"]},
    {tag:"MEDIUM",title:"Kanban Board",desc:"Column-based task manager",reqs:["3 columns: Todo, In Progress, Done","Add new tasks to any column","Move tasks between columns with arrow buttons","Show task counts per column -- delete tasks"]}
  ]
},
{
  id:7, part:1,
  title:"useEffect Hook",
  desc:"Side effects, dependency array, cleanup, data fetching, lifecycle",
  content:`<h2>Side Effects</h2>
<p>A side effect is anything that reaches outside a component -- fetching data, setting timers, updating the document title, or subscribing to events.</p>

<h3>Dependency Array Patterns</h3>
<pre><span class="cm">// [~] Runs after every render</span>
<span class="fn">useEffect</span>(() => { document.title = <span class="str">"App"</span>; });

<span class="cm">// [1] Runs once on mount</span>
<span class="fn">useEffect</span>(() => { <span class="fn">fetchUser</span>(); }, []);

<span class="cm">// [=] Runs when userId changes</span>
<span class="fn">useEffect</span>(() => { <span class="fn">fetchUser</span>(userId); }, [userId]);</pre>

<h3>Data Fetching + Cleanup</h3>
<pre><span class="fn">useEffect</span>(() => {
  <span class="kw">let</span> cancelled = <span class="kw">false</span>;

  <span class="kw">async function</span> <span class="fn">load</span>() {
    <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'/api/data'</span>);
    <span class="kw">const</span> data = <span class="kw">await</span> res.<span class="fn">json</span>();
    <span class="kw">if</span> (!cancelled) <span class="fn">setData</span>(data);
  }
  <span class="fn">load</span>();

  <span class="kw">return</span> () => { cancelled = <span class="kw">true</span>; }; <span class="cm">// cleanup</span>
}, []);</pre>

<div class="note">Return a function from useEffect to clean up timers, subscriptions, or pending fetches when the component unmounts.</div>`,
  quiz:[
    {q:"What does an empty dependency array [] mean for useEffect?",opts:["Run after every render","Run never","Run once after the first render (on mount)","Run on unmount only"],ans:2,exp:"An empty array means no dependencies -- the effect fires once after mount and cleanup fires on unmount."},
    {q:"Why should you return a cleanup function from useEffect?",opts:["To return data","To prevent memory leaks from timers, subscriptions, or abandoned fetches","It's required for all effects","To trigger a re-render"],ans:1,exp:"Without cleanup, effects like setInterval or event listeners accumulate and cause bugs/leaks when the component unmounts."},
    {q:"When does useEffect run relative to rendering?",opts:["Before the component renders","During the render","After the component renders and the DOM is updated","Only on user interaction"],ans:2,exp:"useEffect is asynchronous and runs after React has painted the DOM -- it never blocks the browser."}
  ],
  challenge:"Build a component that fetches a random dog image from https://dog.ceo/api/breeds/image/random every time a button is clicked. Show a loading state.",
  projects:[
    {tag:"EASY",title:"Live Clock",desc:"Self-updating clock with cleanup",reqs:["Display HH:MM:SS updating every second","Use setInterval in useEffect","Clean up the interval on unmount","Add a date display and toggle 12/24hr format"]},
    {tag:"MEDIUM",title:"GitHub User Search",desc:"Live API search with debounce",reqs:["Input searches GitHub API for a username","Debounce requests by 400ms using setTimeout","Show avatar, name, bio, repos count","Handle user not found and network errors"]}
  ]
},
{
  id:8, part:1,
  title:"useContext & useRef",
  desc:"Context API, useContext, useRef for DOM and persistent values",
  content:`<h2>Context API</h2>
<p>Context solves <strong>prop drilling</strong> -- passing data through many components that don't need it.</p>

<h3>Create -> Provide -> Consume</h3>
<pre><span class="cm">// [1] Create context</span>
<span class="kw">const</span> ThemeCtx = <span class="fn">createContext</span>(<span class="str">'dark'</span>);

<span class="cm">// [2] Provide at root</span>
<span class="jsx">&lt;ThemeCtx.Provider</span> <span class="attr">value</span>={{ theme, setTheme }}<span class="jsx">&gt;</span>
  <span class="jsx">&lt;App /&gt;</span>
<span class="jsx">&lt;/ThemeCtx.Provider&gt;</span>

<span class="cm">// [3] Consume anywhere</span>
<span class="kw">const</span> { theme } = <span class="fn">useContext</span>(ThemeCtx);</pre>

<h3>useRef</h3>
<pre><span class="cm">// DOM reference</span>
<span class="kw">const</span> inputRef = <span class="fn">useRef</span>(<span class="kw">null</span>);
<span class="jsx">&lt;input</span> <span class="attr">ref</span>={inputRef} <span class="jsx">/&gt;</span>
<span class="jsx">&lt;button</span> <span class="attr">onClick</span>={() => inputRef.current.<span class="fn">focus</span>()}<span class="jsx">&gt;</span>Focus<span class="jsx">&lt;/button&gt;</span>

<span class="cm">// Persisting mutable value (no re-render)</span>
<span class="kw">const</span> renderCount = <span class="fn">useRef</span>(<span class="num">0</span>);
<span class="fn">useEffect</span>(() => { renderCount.current += <span class="num">1</span>; });</pre>`,
  quiz:[
    {q:"What problem does Context solve?",opts:["Slow renders","Prop drilling through many component levels","Async state","Large bundle size"],ans:1,exp:"Context lets any component in the tree access shared data without threading props through every intermediate component."},
    {q:"What happens when useRef's .current changes?",opts:["React re-renders the component","An effect fires","Nothing -- refs are mutable without triggering renders","The ref resets to null"],ans:2,exp:"Unlike state, mutating ref.current doesn't trigger a re-render. It's just a plain mutable box."},
    {q:"Where does the Provider need to be placed?",opts:["Inside the consuming component","As a sibling of consuming components","Above (ancestor of) all components that need the context","It can go anywhere"],ans:2,exp:"Context flows downward -- the Provider must wrap all components that need to consume it."}
  ],
  challenge:"Create a global notification system using Context. Any component can call addNotification(msg). Show notifications in a fixed corner and auto-dismiss after 3 seconds.",
  projects:[
    {tag:"EASY",title:"Theme Context",desc:"Dark/light mode with Context",reqs:["ThemeContext provides current theme and toggle function","Apply theme CSS classes to the entire app","Theme toggle button works from any depth","Persist preference to localStorage"]},
    {tag:"MEDIUM",title:"Auth Context",desc:"Global authentication state",reqs:["AuthContext provides: user, login(email, password), logout()","Simulate login with a 1-second async delay","Protected routes show content only when authenticated","Display user info in navbar, logout clears context"]}
  ]
},
{
  id:9, part:1,
  title:"Advanced Hooks",
  desc:"useReducer, useMemo, useCallback -- complex state & performance",
  content:`<h2>useReducer</h2>
<p>For complex state with multiple actions, useReducer is cleaner than multiple useState calls.</p>

<pre><span class="kw">function</span> <span class="fn">reducer</span>(state, action) {
  <span class="kw">switch</span> (action.type) {
    <span class="kw">case</span> <span class="str">'INC'</span>: <span class="kw">return</span> { ...state, count: state.count + <span class="num">1</span> };
    <span class="kw">case</span> <span class="str">'DEC'</span>: <span class="kw">return</span> { ...state, count: state.count - <span class="num">1</span> };
    <span class="kw">default</span>:    <span class="kw">return</span> state;
  }
}
<span class="kw">const</span> [state, dispatch] = <span class="fn">useReducer</span>(reducer, { count: <span class="num">0</span> });</pre>

<h3>useMemo -- Cache Computations</h3>
<pre><span class="kw">const</span> filtered = <span class="fn">useMemo</span>(
  () => items.<span class="fn">filter</span>(i => i.active && i.name.<span class="fn">includes</span>(query)),
  [items, query]
);</pre>

<h3>useCallback -- Stable References</h3>
<pre><span class="kw">const</span> handleDelete = <span class="fn">useCallback</span>(
  (id) => <span class="fn">setItems</span>(prev => prev.<span class="fn">filter</span>(i => i.id !== id)),
  []
);</pre>

<div class="note">Profile first. useMemo/useCallback add overhead. Only use them when you have measured a performance problem.</div>`,
  quiz:[
    {q:"When should you prefer useReducer over useState?",opts:["Always","When state has a single value","When state has multiple sub-values or complex update logic","When you need async state"],ans:2,exp:"useReducer shines when next state depends on multiple current values or when you have many action types."},
    {q:"What does useMemo return?",opts:["A function","The memoized result of a computation","A ref","A dispatch function"],ans:1,exp:"useMemo caches the return value of its function and only recomputes when listed dependencies change."},
    {q:"What does useCallback memoize?",opts:["A computed value","A state variable","A function reference","A DOM element"],ans:2,exp:"useCallback returns the same function reference across renders, preventing unnecessary re-renders of child components that receive it as a prop."}
  ],
  challenge:"Build a shopping cart using useReducer. Actions: ADD_ITEM, REMOVE_ITEM, UPDATE_QTY, CLEAR_CART. Show total price computed with useMemo.",
  projects:[
    {tag:"EASY",title:"Todo with useReducer",desc:"Full CRUD todos with a reducer",reqs:["Actions: ADD, TOGGLE, DELETE, CLEAR_DONE","Filter: All / Active / Done tabs","useReducer manages all list state","Total and remaining counts in footer"]},
    {tag:"MEDIUM",title:"Virtualized List",desc:"Performance for large datasets",reqs:["Generate 10,000 items","useMemo for filtered/sorted results","Only render visible rows (simple windowing)","useCallback on row event handlers","Show render time benchmark"]}
  ]
},
{
  id:10, part:1,
  title:"Custom Hooks & Patterns",
  desc:"Creating custom hooks, HOC pattern, compound components, portals",
  content:`<h2>Custom Hooks</h2>
<p>Extract stateful logic into reusable hook functions. Must start with <strong>use</strong>.</p>

<h3>useLocalStorage</h3>
<pre><span class="kw">function</span> <span class="fn">useLocalStorage</span>(key, initial) {
  <span class="kw">const</span> [value, setValue] = <span class="fn">useState</span>(() => {
    <span class="kw">try</span> {
      <span class="kw">const</span> stored = localStorage.<span class="fn">getItem</span>(key);
      <span class="kw">return</span> stored ? <span class="fn">JSON.parse</span>(stored) : initial;
    } <span class="kw">catch</span> { <span class="kw">return</span> initial; }
  });
  <span class="kw">const</span> set = <span class="fn">useCallback</span>((v) => {
    localStorage.<span class="fn">setItem</span>(key, <span class="fn">JSON.stringify</span>(v));
    <span class="fn">setValue</span>(v);
  }, [key]);
  <span class="kw">return</span> [value, set];
}</pre>

<h3>useFetch</h3>
<pre><span class="kw">function</span> <span class="fn">useFetch</span>(url) {
  <span class="kw">const</span> [data, setData] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="kw">const</span> [loading, setLoading] = <span class="fn">useState</span>(<span class="kw">true</span>);
  <span class="kw">const</span> [error, setError] = <span class="fn">useState</span>(<span class="kw">null</span>);
  <span class="fn">useEffect</span>(() => {
    <span class="fn">fetch</span>(url).<span class="fn">then</span>(r => r.<span class="fn">json</span>()).<span class="fn">then</span>(setData)
      .<span class="fn">catch</span>(setError).<span class="fn">finally</span>(() => <span class="fn">setLoading</span>(<span class="kw">false</span>));
  }, [url]);
  <span class="kw">return</span> { data, loading, error };
}</pre>`,
  quiz:[
    {q:"What naming rule must custom hooks follow?",opts:["Start with 'hook'","Start with 'use'","Start with 'my'","End with 'Hook'"],ans:1,exp:"React's linter and rules-of-hooks enforcement rely on the 'use' prefix to identify hooks and enforce their rules."},
    {q:"What is the main benefit of custom hooks?",opts:["Better performance","Reusing stateful logic across multiple components without duplication","Replacing class components","Faster rendering"],ans:1,exp:"Custom hooks let you extract and share stateful logic -- like useFetch, useForm, or useWindowSize -- across many components."},
    {q:"What does createPortal do?",opts:["Creates a new React app","Renders content into a DOM node outside the component's parent","Teleports data between components","Creates a server-side endpoint"],ans:1,exp:"Portals render children into a different DOM node -- useful for modals that need to escape CSS overflow:hidden on parents."}
  ],
  challenge:"Create a useDebounce(value, delay) hook. Use it to debounce a search input so the search fires only 500ms after the user stops typing.",
  projects:[
    {tag:"EASY",title:"Hook Library",desc:"Build 3 reusable hooks",reqs:["useToggle(initial) -- boolean on/off","useCounter(initial, min, max) -- bounded counter","useWindowSize() -- reactive window dimensions","Demo all three hooks in a single showcase page"]},
    {tag:"MEDIUM",title:"Modal System with Portals",desc:"App-wide modal manager",reqs:["useModal() hook returns { open, close, isOpen }","Modal renders via createPortal into document.body","Stack multiple modals (modal on top of modal)","Keyboard: Escape closes the top modal"]}
  ]
},
{
  id:11, part:2,
  title:"Getting Started with Next.js",
  desc:"What is Next.js, installation, Pages vs App Router, project anatomy",
  content:`<h2>What is Next.js?</h2>
<p>Next.js is a full-stack React framework by Vercel that adds server-side rendering, file-based routing, API routes, and built-in optimizations -- zero config.</p>
<ul>
<li><strong>SSR</strong> -- render on each request for fresh data</li>
<li><strong>SSG</strong> -- generate at build time for fast static delivery</li>
<li><strong>ISR</strong> -- revalidate static pages in the background</li>
<li><strong>App Router</strong> -- React Server Components, layouts, streaming</li>
</ul>

<h3>Installation</h3>
<pre><span class="kw">npx</span> create-next-app@latest my-app
<span class="cm"># [?] TypeScript? No   [?] Tailwind? Yes
# [?] App Router? Yes  [?] src/ dir? No</span>
<span class="kw">cd</span> my-app && <span class="kw">npm run</span> dev</pre>

<h3>App Router Structure</h3>
<pre>my-app/
+-- app/
|   +-- layout.jsx     <span class="cm"># root layout (HTML shell)</span>
|   +-- page.jsx       <span class="cm"># / route</span>
|   +-- about/
|       +-- page.jsx   <span class="cm"># /about route</span>
+-- public/
+-- components/
+-- next.config.js</pre>`,
  quiz:[
    {q:"What is a key advantage of Next.js over plain React?",opts:["More hooks","Built-in routing, SSR/SSG, and API routes","Better CSS support","Faster useState"],ans:1,exp:"Next.js wraps React with conventions: file-based routing, multiple rendering strategies, and API endpoints -- all pre-configured."},
    {q:"In the App Router, what file defines a route's page UI?",opts:["index.jsx","route.jsx","page.jsx","layout.jsx"],ans:2,exp:"page.jsx is the convention in App Router -- each folder with a page.jsx becomes a publicly accessible route."},
    {q:"What is ISR (Incremental Static Regeneration)?",opts:["A way to delay hydration","Updating static pages in the background after build","Client-side rendering on scroll","A type of API route"],ans:1,exp:"ISR lets you generate static pages at build time and revalidate them in the background after a set interval."}
  ],
  challenge:"Create a Next.js app with three pages: Home, About, and Blog. Add a shared navigation bar that links between them.",
  projects:[
    {tag:"EASY",title:"Portfolio Homepage",desc:"Static personal site",reqs:["Home page with hero section and intro","About page with skills list","Shared navigation with active link highlighting","Custom 404 not-found page"]},
    {tag:"MEDIUM",title:"Company Landing Page",desc:"Multi-section marketing site",reqs:["4+ sections: Hero, Features, Pricing, CTA","Navigation with smooth scroll to sections","Separate /contact page with a form","Deploy-ready metadata (title, description) per page"]}
  ]
},
{
  id:12, part:2,
  title:"Routing & Navigation",
  desc:"File-based routing, Link, dynamic routes, useRouter, nested layouts",
  content:`<h2>File-Based Routing</h2>
<pre>app/
  page.jsx          <span class="cm">-> /</span>
  blog/
    page.jsx        <span class="cm">-> /blog</span>
    [slug]/
      page.jsx      <span class="cm">-> /blog/:slug</span>
  shop/
    [...path]/
      page.jsx      <span class="cm">-> /shop/a/b/c (catch-all)</span></pre>

<h3>Link Component</h3>
<pre><span class="kw">import</span> Link <span class="kw">from</span> <span class="str">'next/link'</span>;

<span class="jsx">&lt;Link</span> <span class="attr">href</span>=<span class="str">"/about"</span><span class="jsx">&gt;</span>About<span class="jsx">&lt;/Link&gt;</span>
<span class="jsx">&lt;Link</span> <span class="attr">href</span>={<span class="str">\`/blog/\${post.slug}\`</span>}<span class="jsx">&gt;</span>{post.title}<span class="jsx">&lt;/Link&gt;</span></pre>

<h3>Dynamic Params + useRouter</h3>
<pre><span class="cm">// app/blog/[slug]/page.jsx</span>
<span class="kw">export default function</span> <span class="fn">Post</span>({ params }) {
  <span class="kw">return</span> <span class="jsx">&lt;h1&gt;</span>Post: {params.slug}<span class="jsx">&lt;/h1&gt;</span>;
}

<span class="cm">// Client Components -- useRouter from next/navigation</span>
<span class="str">'use client'</span>;
<span class="kw">const</span> router = <span class="fn">useRouter</span>();
router.<span class="fn">push</span>(<span class="str">'/dashboard'</span>);</pre>`,
  quiz:[
    {q:"How do you create the route /products/[id] in App Router?",opts:["products/id/page.jsx","products/[id]/page.jsx","products/{id}/page.jsx","products/@id/page.jsx"],ans:1,exp:"Square bracket folders like [id] create dynamic segments. The segment value is available via the params prop."},
    {q:"Why use <Link> instead of <a> in Next.js?",opts:["<a> tags are broken","Link enables client-side navigation with prefetching","Link adds automatic styling","<a> doesn't support dynamic routes"],ans:1,exp:"Link intercepts navigation to pre-fetch the target page and swap it client-side, making navigation feel instant."},
    {q:"Where does useRouter come from in the App Router?",opts:["react-router-dom","next/router","next/navigation","next/link"],ans:2,exp:"App Router uses 'next/navigation' for navigation hooks. The old 'next/router' is for the Pages Router only."}
  ],
  challenge:"Build a blog list page at /blog showing 5 posts. Each post links to /blog/[slug] which displays the post content using the slug from params.",
  projects:[
    {tag:"EASY",title:"Recipe Site",desc:"Static recipe pages with routing",reqs:["/ lists 6 recipe cards with name","Link each card to /recipes/[slug]","Detail page shows ingredients and steps","Back button navigates to the list"]},
    {tag:"MEDIUM",title:"Docs Site with Nested Routes",desc:"Hierarchical documentation",reqs:["Sections: /docs/intro, /docs/api/[method]","Sidebar nav auto-generated from the route structure","Active route highlighted in sidebar","Breadcrumb component showing current path"]}
  ]
},
{
  id:13, part:2,
  title:"Layouts & Assets",
  desc:"Root layout, nested layouts, next/image, CSS modules, metadata API",
  content:`<h2>Layouts</h2>
<pre><span class="cm">// app/layout.jsx -- Root layout (required)</span>
<span class="kw">export const</span> metadata = { title: <span class="str">'My App'</span> };

<span class="kw">export default function</span> <span class="fn">RootLayout</span>({ children }) {
  <span class="kw">return</span> (
    <span class="jsx">&lt;html&gt;&lt;body&gt;</span>
      <span class="jsx">&lt;Navbar /&gt;</span>
      {children}
      <span class="jsx">&lt;Footer /&gt;</span>
    <span class="jsx">&lt;/body&gt;&lt;/html&gt;</span>
  );
}</pre>

<h3>next/image -- Auto Optimization</h3>
<pre><span class="kw">import</span> Image <span class="kw">from</span> <span class="str">'next/image'</span>;

<span class="jsx">&lt;Image</span>
  <span class="attr">src</span>=<span class="str">"/hero.jpg"</span>
  <span class="attr">alt</span>=<span class="str">"Hero"</span>
  <span class="attr">width</span>={<span class="num">1200</span>}
  <span class="attr">height</span>={<span class="num">600</span>}
  <span class="attr">priority</span>
<span class="jsx">/&gt;</span></pre>

<h3>Metadata API</h3>
<pre><span class="kw">export const</span> metadata = {
  title: <span class="str">'Blog | My Site'</span>,
  description: <span class="str">'Latest articles'</span>,
  openGraph: { images: [<span class="str">'/og.png'</span>] }
};</pre>`,
  quiz:[
    {q:"What is the advantage of layouts persisting between navigations?",opts:["They load faster","State and scroll position are preserved -- no remount","They use less memory","They cache API calls"],ans:1,exp:"Layouts don't unmount on navigation -- so a search input in the nav or a sidebar's open state persists as the user moves between pages."},
    {q:"Why use next/image instead of <img>?",opts:["<img> doesn't work","next/image auto-resizes, compresses, serves WebP, and lazy loads","next/image adds click handlers","next/image works with SSR only"],ans:1,exp:"next/image applies a full optimization pipeline: format conversion, responsive sizing, lazy loading, and blur placeholders."},
    {q:"How do you set per-page metadata in App Router?",opts:["<Head> component","meta tags in page.jsx","Export a metadata object or generateMetadata function","next.config.js"],ans:2,exp:"Export 'metadata' (static) or 'generateMetadata' (async/dynamic) from any page or layout."}
  ],
  challenge:"Create a nested layout for a /dashboard section. The dashboard layout should include a persistent sidebar. Pages inside /dashboard inherit the sidebar automatically.",
  projects:[
    {tag:"EASY",title:"Blog with SEO",desc:"Next.js blog with proper metadata",reqs:["Root layout with Navbar and Footer","Each blog post has unique title and description metadata","next/image for post thumbnails","Open Graph meta tags for social sharing"]},
    {tag:"MEDIUM",title:"App Shell with Dashboard Layout",desc:"Multi-level layouts",reqs:["Root layout: global nav + footer","/dashboard layout: collapsible sidebar","/dashboard/[section] pages use the dashboard layout","Mobile-responsive: sidebar collapses to hamburger menu"]}
  ]
},
{
  id:14, part:2,
  title:"Static Generation (SSG)",
  desc:"generateStaticParams, static data fetching, ISR with revalidate",
  content:`<h2>Static Site Generation</h2>
<p>Pages are built at <code>npm run build</code> time and served as static HTML -- ultra-fast, CDN-cacheable.</p>

<h3>Static Data Fetch</h3>
<pre><span class="cm">// Server Component -- async by default</span>
<span class="kw">export default async function</span> <span class="fn">ProductsPage</span>() {
  <span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(<span class="str">'https://api.example.com/products'</span>, {
    next: { revalidate: <span class="num">3600</span> } <span class="cm">// ISR: rebuild hourly</span>
  });
  <span class="kw">const</span> products = <span class="kw">await</span> res.<span class="fn">json</span>();
  <span class="kw">return</span> <span class="jsx">&lt;ProductList</span> <span class="attr">items</span>={products} <span class="jsx">/&gt;</span>;
}</pre>

<h3>generateStaticParams</h3>
<pre><span class="cm">// app/blog/[slug]/page.jsx</span>
<span class="kw">export async function</span> <span class="fn">generateStaticParams</span>() {
  <span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn">getPosts</span>();
  <span class="kw">return</span> posts.<span class="fn">map</span>(p => ({ slug: p.slug }));
}</pre>`,
  quiz:[
    {q:"When does static generation happen?",opts:["On every user request","When the user visits for the first time","At build time (npm run build)","When the server reboots"],ans:2,exp:"SSG generates HTML during the build. The same file is served to every user -- no per-request computation."},
    {q:"What does generateStaticParams do?",opts:["Creates static images","Returns param values to pre-render as static pages at build","Generates TypeScript types","Validates URL params"],ans:1,exp:"It tells Next.js which dynamic route values (like blog slugs) to pre-render as static pages at build time."},
    {q:"What does { next: { revalidate: 60 } } in fetch() do?",opts:["Retries 60 times","Caches for 60ms","Rebuilds static page in background every 60s (ISR)","Sets a 60s timeout"],ans:2,exp:"ISR -- Incremental Static Regeneration. The page stays static but is silently rebuilt after 60 seconds when the next user visits."}
  ],
  challenge:"Build a statically generated page that pre-renders 5 blog posts at build time using generateStaticParams. Load content from a local JSON file.",
  projects:[
    {tag:"EASY",title:"Static Blog with ISR",desc:"Pre-rendered posts with auto-refresh",reqs:["Posts fetched from JSONPlaceholder at build time","generateStaticParams for /blog/[id] routes","ISR with 60-second revalidation","Show last-updated timestamp on each post"]},
    {tag:"MEDIUM",title:"E-Commerce Catalog",desc:"Product pages with SSG",reqs:["Category pages /shop/[category] pre-rendered","Product detail pages /shop/[category]/[id]","generateStaticParams for both levels","Show fallback: blocking behavior for new products"]}
  ]
},
{
  id:15, part:2,
  title:"Server-Side Rendering (SSR)",
  desc:"Dynamic rendering, cookies, headers, authenticated pages, SSR vs SSG",
  content:`<h2>Server-Side Rendering</h2>
<p>When you opt out of caching, Next.js renders the page fresh on every request -- perfect for personalized or real-time data.</p>

<h3>Dynamic Rendering</h3>
<pre><span class="cm">// Force dynamic on every request</span>
<span class="kw">const</span> res = <span class="kw">await</span> <span class="fn">fetch</span>(url, { cache: <span class="str">'no-store'</span> });

<span class="cm">// Or page-level opt-out</span>
<span class="kw">export const</span> dynamic = <span class="str">'force-dynamic'</span>;</pre>

<h3>Reading Cookies Server-Side</h3>
<pre><span class="kw">import</span> { cookies, headers } <span class="kw">from</span> <span class="str">'next/headers'</span>;

<span class="kw">export default async function</span> <span class="fn">Dashboard</span>() {
  <span class="kw">const</span> token = <span class="fn">cookies</span>().<span class="fn">get</span>(<span class="str">'auth-token'</span>);
  <span class="kw">if</span> (!token) <span class="fn">redirect</span>(<span class="str">'/login'</span>);
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn">getUserFromToken</span>(token.value);
  <span class="kw">return</span> <span class="jsx">&lt;div&gt;</span>Welcome, {user.name}<span class="jsx">&lt;/div&gt;</span>;
}</pre>

<h3>Decision Matrix</h3>
<pre>[SSG] Blog posts, docs, marketing pages
[SSG] Data changes infrequently (use ISR)
[SSR] Dashboards, account pages
[SSR] Real-time prices, personalized data
[SSR] Content depends on cookies/headers</pre>`,
  quiz:[
    {q:"How do you make a Server Component render dynamically on every request?",opts:["Add 'use client'","Use fetch with { cache: 'no-store' } or dynamic='force-dynamic'","Wrap in useEffect","Use useState"],ans:1,exp:"no-store tells Next.js to skip caching, making it re-fetch on every request."},
    {q:"Which Next.js function reads request cookies in a Server Component?",opts:["req.cookies","useCookies()","cookies() from 'next/headers'","document.cookie"],ans:2,exp:"next/headers provides cookies() and headers() functions for accessing request data inside Server Components."},
    {q:"Which page type benefits most from SSR?",opts:["A marketing landing page","A blog post that rarely changes","A user dashboard showing personalized account data","A static documentation page"],ans:2,exp:"Dashboards are user-specific and require fresh data -- SSR fetches per-user data on each request."}
  ],
  challenge:"Create a /dashboard page that reads an auth cookie server-side. If no cookie, redirect to /login. If present, show a personalized greeting using a mock user lookup.",
  projects:[
    {tag:"EASY",title:"Live Data Feed",desc:"SSR real-time data page",reqs:["Fetch current data from a public API on every request","cache: no-store to bypass Next.js cache","Show last-fetched timestamp","Loading skeleton while navigating"]},
    {tag:"MEDIUM",title:"Authenticated Profile Page",desc:"Cookie-based SSR auth",reqs:["Simulate auth: login form sets a cookie","/profile reads the cookie server-side","Redirect to /login if no cookie found","Profile shows user-specific data -- logout clears cookie"]}
  ]
},
{
  id:16, part:2,
  title:"API Routes (Route Handlers)",
  desc:"Route Handlers, REST patterns, dynamic routes, request/response",
  content:`<h2>Route Handlers</h2>
<pre><span class="cm">// app/api/users/route.js</span>
<span class="kw">import</span> { NextResponse } <span class="kw">from</span> <span class="str">'next/server'</span>;

<span class="kw">export async function</span> <span class="fn">GET</span>() {
  <span class="kw">return</span> NextResponse.<span class="fn">json</span>([{ id: <span class="num">1</span>, name: <span class="str">'Alice'</span> }]);
}

<span class="kw">export async function</span> <span class="fn">POST</span>(req) {
  <span class="kw">const</span> body = <span class="kw">await</span> req.<span class="fn">json</span>();
  <span class="kw">return</span> NextResponse.<span class="fn">json</span>(body, { status: <span class="num">201</span> });
}</pre>

<h3>Dynamic Route Handler</h3>
<pre><span class="cm">// app/api/users/[id]/route.js</span>
<span class="kw">export async function</span> <span class="fn">DELETE</span>(req, { params }) {
  <span class="kw">await</span> <span class="fn">db.users.delete</span>(params.id);
  <span class="kw">return</span> <span class="kw">new</span> <span class="fn">Response</span>(<span class="kw">null</span>, { status: <span class="num">204</span> });
}</pre>

<h3>Query Params</h3>
<pre><span class="cm">// GET /api/search?q=react</span>
<span class="kw">export async function</span> <span class="fn">GET</span>(req) {
  <span class="kw">const</span> { searchParams } = <span class="kw">new</span> <span class="fn">URL</span>(req.url);
  <span class="kw">const</span> q = searchParams.<span class="fn">get</span>(<span class="str">'q'</span>);
}</pre>`,
  quiz:[
    {q:"What file name creates a Route Handler in App Router?",opts:["handler.js","api.js","route.js","endpoint.js"],ans:2,exp:"route.js (or .ts) is the special filename for Route Handlers in the App Router. Each HTTP method is a named export."},
    {q:"How do you return a JSON response from a Route Handler?",opts:["return res.json(data)","return JSON.stringify(data)","return NextResponse.json(data)","return new Response(data)"],ans:2,exp:"NextResponse.json() sets Content-Type to application/json and serializes the data for you."},
    {q:"Where do you read URL search params inside a Route Handler?",opts:["params.searchParams","request.query","new URL(request.url).searchParams","useSearchParams()"],ans:2,exp:"Route Handlers use the standard Web Request API. Parse the URL manually to access query parameters."}
  ],
  challenge:"Build a /api/todos REST API with GET all, POST create, PUT update by id, and DELETE by id. Store data in a module-level array (in-memory).",
  projects:[
    {tag:"EASY",title:"Notes API",desc:"Full CRUD REST API",reqs:["GET /api/notes -- list all","POST /api/notes -- create (validate title required)","PUT /api/notes/[id] -- update","DELETE /api/notes/[id] -- remove","Return proper HTTP status codes"]},
    {tag:"MEDIUM",title:"Full-Stack Todo App",desc:"Next.js front + API back",reqs:["Route Handlers provide the REST API","React frontend calls the API with fetch","Optimistic UI updates on add/delete","Error boundaries catch API failures -- retry button"]}
  ]
},
{
  id:17, part:2,
  title:"Server & Client Components",
  desc:"React Server Components model, 'use client', when to use each",
  content:`<h2>Two Worlds</h2>
<p>App Router has two component types. <strong>Server Components</strong> (default) run on the server. <strong>Client Components</strong> run in the browser with interactivity.</p>

<h3>Server Components (default)</h3>
<pre><span class="cm">// No directive needed</span>
<span class="kw">export default async function</span> <span class="fn">BlogPage</span>() {
  <span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn">db.posts.findAll</span>(); <span class="cm">// [+] direct DB</span>
  <span class="kw">return</span> <span class="jsx">&lt;PostList</span> <span class="attr">posts</span>={posts} <span class="jsx">/&gt;</span>;
}
<span class="cm">// [+] fetch data, DB access, use secrets
// [X] useState, useEffect, onClick, browser APIs</span></pre>

<h3>Client Components</h3>
<pre><span class="str">'use client'</span>; <span class="cm">// [!] required directive</span>

<span class="kw">export default function</span> <span class="fn">LikeButton</span>({ postId }) {
  <span class="kw">const</span> [liked, setLiked] = <span class="fn">useState</span>(<span class="kw">false</span>);
  <span class="kw">return</span> <span class="jsx">&lt;button</span> <span class="attr">onClick</span>={() => <span class="fn">setLiked</span>(!liked)}<span class="jsx">&gt;</span>
    {liked ? <span class="str">'[v]'</span> : <span class="str">'[ ]'</span>} Like
  <span class="jsx">&lt;/button&gt;</span>;
}
<span class="cm">// [+] useState, useEffect, event handlers, browser APIs
// [X] direct DB access, server-only secrets</span></pre>`,
  quiz:[
    {q:"What directive marks a Client Component?",opts:["'use server'","'use client'","'client: true'","import {client} from 'react'"],ans:1,exp:"'use client' at the top of a file opts all exports in that file into the client bundle."},
    {q:"Which capability belongs ONLY to Server Components?",opts:["useState","onClick handlers","Direct database access without an API","useEffect"],ans:2,exp:"Server Components run on the server -- they can query databases, read files, and use secrets that never touch the browser."},
    {q:"Can a Server Component import a Client Component?",opts:["No, never","Yes -- standard pattern for islands of interactivity","Only if same file","Only with special config"],ans:1,exp:"Server Components can render Client Components as children. The client JS is only downloaded for the interactive islands."}
  ],
  challenge:"Build a ProductPage Server Component that fetches product data directly. Add a Client Component 'AddToCartButton' with quantity state inside the Server Component page.",
  projects:[
    {tag:"EASY",title:"RSC Island Pattern",desc:"Server + Client composition",reqs:["Server Component fetches and displays a list of articles","Each article has a Client Component SaveButton with local state","Show total saved count from a Client Component counter","Zero useState in the parent Server Component"]},
    {tag:"MEDIUM",title:"Comment System",desc:"Mixed server/client comments",reqs:["Server Component loads existing comments","Client Component form for adding new comments (optimistic UI)","Server Action to submit the comment","Re-validate the comment list after submission"]}
  ]
},
{
  id:18, part:2,
  title:"Data Fetching & Streaming",
  desc:"Async Server Components, parallel fetching, Suspense, loading UI",
  content:`<h2>Async Server Components</h2>
<pre><span class="cm">// Await data directly in JSX -- no useEffect needed</span>
<span class="kw">export default async function</span> <span class="fn">Profile</span>({ params }) {
  <span class="kw">const</span> user = <span class="kw">await</span> <span class="fn">getUser</span>(params.id);
  <span class="kw">return</span> <span class="jsx">&lt;h1&gt;</span>{user.name}<span class="jsx">&lt;/h1&gt;</span>;
}</pre>

<h3>Parallel Fetching</h3>
<pre><span class="cm">// [X] Sequential -- 2s + 2s = 4s total</span>
<span class="kw">const</span> user  = <span class="kw">await</span> <span class="fn">getUser</span>(id);
<span class="kw">const</span> posts = <span class="kw">await</span> <span class="fn">getPosts</span>(id);

<span class="cm">// [+] Parallel -- max(2s, 2s) = 2s total</span>
<span class="kw">const</span> [user, posts] = <span class="kw">await</span> Promise.<span class="fn">all</span>([
  <span class="fn">getUser</span>(id),
  <span class="fn">getPosts</span>(id)
]);</pre>

<h3>Suspense Streaming</h3>
<pre><span class="kw">import</span> { Suspense } <span class="kw">from</span> <span class="str">'react'</span>;

<span class="kw">export default function</span> <span class="fn">Page</span>() {
  <span class="kw">return</span> (
    <span class="jsx">&lt;div&gt;</span>
      <span class="jsx">&lt;Suspense</span> <span class="attr">fallback</span>={<span class="jsx">&lt;Skeleton /&gt;</span>}<span class="jsx">&gt;</span>
        <span class="jsx">&lt;SlowWidget /&gt;</span> <span class="cm">// streams in when ready</span>
      <span class="jsx">&lt;/Suspense&gt;</span>
    <span class="jsx">&lt;/div&gt;</span>
  );
}</pre>`,
  quiz:[
    {q:"How do you fetch data in parallel in a Server Component?",opts:["Multiple useEffect calls","Sequential awaits","Promise.all() with multiple fetch calls","fetch() runs parallel automatically"],ans:2,exp:"Promise.all starts all fetches simultaneously. Without it, each await blocks the next, making requests sequential."},
    {q:"What does the loading.jsx file do in App Router?",opts:["Shows an error page","Provides a Suspense fallback for the entire route segment","Adds a CSS loading animation","Delays navigation"],ans:1,exp:"loading.jsx wraps the page in a Suspense boundary automatically, showing its content while async page data loads."},
    {q:"What is the main benefit of streaming with Suspense?",opts:["Smaller bundle size","Page shell renders immediately while slow components stream in independently","It replaces SSR","It batches all fetches"],ans:1,exp:"Streaming sends the HTML shell to the browser first, then flushes each Suspense boundary as its data resolves."}
  ],
  challenge:"Build a dashboard with 3 independent data sections (users, revenue, activity). Wrap each in Suspense with a skeleton fallback. Fetch all data in parallel.",
  projects:[
    {tag:"EASY",title:"Streaming Dashboard",desc:"Progressive loading UI",reqs:["3 sections with independent data fetches","Each wrapped in Suspense with a skeleton placeholder","loading.jsx for route-level loading","Sections stream in as data resolves"]},
    {tag:"MEDIUM",title:"Parallel Data Explorer",desc:"Complex async data page",reqs:["Home fetches trending posts + popular users + categories in parallel","Each section has its own Suspense + error boundary","Show Refresh button using router.refresh()","Measure and display actual load times per section"]}
  ]
},
{
  id:19, part:2,
  title:"TypeScript + Next.js",
  desc:"TypeScript setup, typing pages, Route Handlers, path aliases",
  content:`<h2>TypeScript in Next.js</h2>
<p>Rename files to <code>.tsx</code> and TypeScript errors appear in the terminal and browser overlay. Zero config needed.</p>

<h3>Typing Page Props</h3>
<pre><span class="cm">// app/blog/[slug]/page.tsx</span>
<span class="kw">type</span> Props = {
  params: { slug: <span class="kw">string</span> };
  searchParams: { [key: <span class="kw">string</span>]: <span class="kw">string</span> | <span class="kw">undefined</span> };
};

<span class="kw">export default async function</span> <span class="fn">Post</span>({ params }: Props) {
  <span class="kw">const</span> post = <span class="kw">await</span> <span class="fn">getPost</span>(params.slug);
  <span class="kw">return</span> <span class="jsx">&lt;article&gt;</span>{post.title}<span class="jsx">&lt;/article&gt;</span>;
}</pre>

<h3>Typed Route Handler</h3>
<pre><span class="kw">import</span> { NextRequest, NextResponse } <span class="kw">from</span> <span class="str">'next/server'</span>;

<span class="kw">interface</span> User {
  id: <span class="kw">number</span>; name: <span class="kw">string</span>; role: <span class="str">'admin'</span> | <span class="str">'user'</span>;
}

<span class="kw">export function</span> <span class="fn">GET</span>(req: NextRequest): NextResponse&lt;User[]&gt; {
  <span class="kw">return</span> NextResponse.<span class="fn">json</span>(users);
}</pre>

<h3>Path Aliases</h3>
<pre><span class="cm">// tsconfig.json</span>
{ <span class="str">"paths"</span>: { <span class="str">"@/*"</span>: [<span class="str">"./*"</span>] } }

<span class="cm">// Clean imports</span>
<span class="kw">import</span> Button <span class="kw">from</span> <span class="str">'@/components/Button'</span>;</pre>`,
  quiz:[
    {q:"How do you type dynamic route params in App Router TypeScript?",opts:["useParams<{slug: string}>()","props: {params: {slug: string}}","RouteParams<{slug: string}>","next/params type"],ans:1,exp:"Page components receive params as a prop. Type it as { params: { slug: string } } matching your dynamic segment name."},
    {q:"What type do Route Handlers use for the request object?",opts:["Request","NodeRequest","NextRequest (from next/server)","ExpressRequest"],ans:2,exp:"Import NextRequest from 'next/server' -- it extends the Web Request API with Next.js-specific properties."},
    {q:"What does the '@/*' path alias in tsconfig do?",opts:["Creates an API endpoint","Marks files as async","Maps @/... imports to the project root","Enables strict mode"],ans:2,exp:"Path aliases replace ../../../components/Button with @/components/Button -- cleaner in deeply nested files."}
  ],
  challenge:"Convert a JavaScript Next.js page and its API route to TypeScript. Define interfaces for all data shapes. Type all function parameters and return values.",
  projects:[
    {tag:"EASY",title:"Typed Blog",desc:"Full TypeScript Next.js blog",reqs:["Post and Author interfaces in types/index.ts","page.tsx files with typed params","Typed fetch functions with generic return types","Zero TypeScript errors -- strict mode on"]},
    {tag:"MEDIUM",title:"Type-Safe API + Frontend",desc:"End-to-end TypeScript",reqs:["Shared types file used by Route Handlers and client components","Route Handler response types match frontend fetch expectations","Zod validation on POST request bodies","Form with typed state and typed submit handler"]}
  ]
},
{
  id:20, part:2,
  title:"Deployment & Production",
  desc:"Vercel deployment, env variables, performance optimization, CI/CD",
  content:`<h2>Deploying to Vercel</h2>
<p>Vercel is built by the Next.js team -- zero-config deployment with automatic CI/CD on every push.</p>

<h3>Deploy Steps</h3>
<pre><span class="cm"># [1] Push to GitHub</span>
<span class="kw">git</span> init && git add . && git commit -m <span class="str">"init"</span>
<span class="kw">git remote</span> add origin https://github.com/you/app
<span class="kw">git push</span> -u origin main

<span class="cm"># [2] Import at vercel.com/new
# [3] Add environment variables in dashboard
# [4] Deploy [OK]</span></pre>

<h3>Environment Variables</h3>
<pre><span class="cm"># .env.local (never commit)</span>
DATABASE_URL=postgresql://...
API_SECRET=sk-...

<span class="cm"># Public (sent to browser)</span>
NEXT_PUBLIC_SITE_URL=https://myapp.com

<span class="cm">// Access in code</span>
process.env.DATABASE_URL          <span class="cm">// server only</span>
process.env.NEXT_PUBLIC_SITE_URL  <span class="cm">// anywhere</span></pre>

<h3>Production Checklist</h3>
<pre>[+] Use next/image for all images
[+] Prefer Server Components (reduce client JS)
[+] Add generateStaticParams for dynamic routes
[+] Use ISR instead of SSR where possible
[+] Split large Client Components with dynamic import
[+] Add loading.jsx to every data-heavy route</pre>`,
  quiz:[
    {q:"What prefix makes an environment variable accessible in the browser?",opts:["PUBLIC_","CLIENT_","NEXT_PUBLIC_","BROWSER_"],ans:2,exp:"Variables prefixed with NEXT_PUBLIC_ are inlined into the client bundle. All others are server-only."},
    {q:"What happens on Vercel when you push to your main branch?",opts:["Nothing","A new production deployment is triggered automatically","Only preview deployments are created","The build fails by default"],ans:1,exp:"Vercel watches your repository. Push to main -> production deploy. Push to a branch -> preview deployment."},
    {q:"Which optimization has the highest impact for a content site?",opts:["Adding TypeScript","Switching from SSR to SSG/ISR for non-user-specific content","Using more useState","Adding more API routes"],ans:1,exp:"Static pages are pre-rendered and served from a global CDN -- orders of magnitude faster than per-request SSR for content that doesn't change per user."}
  ],
  challenge:"Take your Next.js app and prepare it for production: add env variables, configure next.config.js with image domains, run next build and fix all warnings.",
  projects:[
    {tag:"EASY",title:"Production Blog Deploy",desc:"End-to-end deployment",reqs:["Deploy to Vercel from GitHub","Set NEXT_PUBLIC_SITE_URL env variable","Add custom domain or use Vercel subdomain","Verify Core Web Vitals in Vercel Analytics"]},
    {tag:"MEDIUM",title:"Full-Stack App Launch",desc:"Production-ready Next.js",reqs:["Database (PlanetScale / Neon / Supabase free tier)","Environment variables on Vercel","Preview deployments for PRs","Error monitoring with Sentry -- performance budget enforced"]}
  ]
}
];

// ─── STATE ────────────────────────────────────────────────────
let prog = {};
let pts = 0;
let streak = 0;
let curLesson = null;
let curPhase = 'learn';
let qIdx = 0;

function loadState(){
  try {
    prog = JSON.parse(localStorage.getItem('rnj_prog')||'{}');
    pts = parseInt(localStorage.getItem('rnj_pts')||'0');
    streak = parseInt(localStorage.getItem('rnj_streak')||'0');
  } catch(e){}
}
function saveState(){
  localStorage.setItem('rnj_prog', JSON.stringify(prog));
  localStorage.setItem('rnj_pts', pts);
  localStorage.setItem('rnj_streak', streak);
}

// ─── BOOT ─────────────────────────────────────────────────────
loadState();
const savedTheme = localStorage.getItem('rnj_theme2');
if(savedTheme){ document.documentElement.setAttribute('data-theme',savedTheme); }
updateThemeBtn();

function startCourse(){
  document.getElementById('hero').classList.add('hidden');
  document.getElementById('hdr').classList.remove('hidden');
  document.getElementById('gridWrap').classList.remove('hidden');
  renderGrid(); updateHdr();
}

function renderGrid(){
  ['grid1','grid2'].forEach(gid => document.getElementById(gid).innerHTML='');
  lessons.forEach((l,i)=>{
    const unlocked = i===0 || prog[lessons[i-1].id]?.done;
    const done = !!prog[l.id]?.done;
    const lp = prog[l.id]||{};
    const badge = done?'done':unlocked?'open':'lock';
    const badgeLbl = done?'[+]DONE':unlocked?'[~]OPEN':'[X]LOCK';
    const el = document.createElement('div');
    el.className = 'lcard' + (!unlocked?' locked':'');
    el.innerHTML = `
      <div class="lcard-top">
        <div class="lnum">${String(l.id).padStart(2,'0')}</div>
        <div class="lbadge badge-${badge}">${badgeLbl}</div>
      </div>
      <div class="ltitle">${l.title}</div>
      <div class="ldesc">${l.desc}</div>
      <div class="ldots">
        ${['learn','quiz','challenge','project'].map(p=>`<div class="ldot${lp[p]?' on':''}"></div>`).join('')}
      </div>`;
    if(unlocked) el.onclick=()=>openLesson(l.id);
    document.getElementById(l.part===1?'grid1':'grid2').appendChild(el);
  });
}

function updateHdr(){
  const done = Object.values(prog).filter(p=>p.done).length;
  document.getElementById('progFill').style.width = (done/lessons.length*100)+'%';
  document.getElementById('hpts').textContent = pts;
  document.getElementById('hstreak').textContent = streak;
  document.getElementById('hdone').textContent = done;
}

// ─── LESSON OPEN ──────────────────────────────────────────────
function openLesson(id){
  curLesson = lessons.find(l=>l.id===id);
  curPhase = 'learn'; qIdx = 0;
  document.getElementById('gridWrap').classList.add('hidden');
  document.getElementById('lessonView').classList.remove('hidden');
  const box = document.getElementById('phaseBox');
  box.setAttribute('data-coords', `MOD:${String(id).padStart(2,'0')} // SEC:${curLesson.part}`);
  renderTabs(); showPhase('learn');
}

function backToGrid(){
  document.getElementById('lessonView').classList.add('hidden');
  document.getElementById('gridWrap').classList.remove('hidden');
  renderGrid(); updateHdr();
}

function renderTabs(){
  const lp = prog[curLesson.id]||{};
  const phases = [
    {id:'learn',    label:'[01] LEARN'},
    {id:'quiz',     label:'[02] QUERY'},
    {id:'challenge',label:'[03] CHALLENGE'},
    {id:'project',  label:'[04] BUILD'}
  ];
  document.getElementById('phaseTabs').innerHTML = phases.map((p,i)=>{
    const locked = i>0 && !lp[phases[i-1].id];
    return `<div class="ptab${p.id===curPhase?' active':''}${locked?' locked':''}" onclick="${!locked?`showPhase('${p.id}')`:''}"> ${p.label}</div>`;
  }).join('');
}

function showPhase(phase){
  curPhase = phase;
  renderTabs();
  const box = document.getElementById('phaseBox');

  if(phase==='learn'){
    box.innerHTML = `${curLesson.content}
      <div style="border-top:1px solid var(--seam);margin-top:24px;padding-top:20px">
        <button class="cont-btn" onclick="completePhase('learn')">PROCEED TO QUERY</button>
      </div>`;

  } else if(phase==='quiz'){
    qIdx = 0; renderQuiz();

  } else if(phase==='challenge'){
    box.innerHTML = `
      <div class="chall-header">
        <div style="font-family:'Orbitron',monospace;font-size:0.85rem;font-weight:700;color:var(--bright);letter-spacing:0.1em">CHALLENGE :: MOD-${String(curLesson.id).padStart(2,'0')}</div>
        <div class="tag">[!] CODING TASK</div>
      </div>
      <div class="chall-desc">${curLesson.challenge}</div>
      <div class="editor-label">
        <span class="el-dot">[~]</span> CODE EDITOR
        <span style="margin-left:auto;color:var(--muted)">JSX/JS</span>
      </div>
      <textarea class="editor" placeholder="// ENTER SOLUTION CODE HERE...
// Transmit when complete."></textarea>
      <div>
        <button class="cont-btn" onclick="completePhase('challenge')">TRANSMIT SOLUTION</button>
      </div>`;

  } else if(phase==='project'){
    renderProjects();
  }
}

// ─── QUIZ ─────────────────────────────────────────────────────
function renderQuiz(){
  const q = curLesson.quiz[qIdx];
  document.getElementById('phaseBox').innerHTML = `
    <div class="q-num">${qIdx+1}_OF_${curLesson.quiz.length}</div>
    <div class="q-text">${q.q}</div>
    <div class="opts" id="opts">
      ${q.opts.map((o,i)=>`<div class="opt" onclick="checkAns(${i})">${o}</div>`).join('')}
    </div>
    <div class="q-fb" id="qfb"></div>`;
}

function checkAns(sel){
  const q = curLesson.quiz[qIdx];
  document.querySelectorAll('.opt').forEach((el,i)=>{
    el.style.pointerEvents = 'none';
    if(i===q.ans) el.classList.add('correct');
    else if(i===sel) el.classList.add('wrong');
  });
  const ok = sel===q.ans;
  const fb = document.getElementById('qfb');
  fb.className = `q-fb show ${ok?'ok':'no'}`;
  fb.innerHTML = `<p>${q.exp}</p>
    <button class="cont-btn" onclick="nextQ()" style="margin-top:10px">
      ${qIdx<curLesson.quiz.length-1?'NEXT QUERY':'COMPLETE QUERIES'}
    </button>`;
  if(ok){ pts+=10; streak++; } else { streak=0; }
  saveState(); updateHdr();
}

function nextQ(){
  qIdx++;
  if(qIdx < curLesson.quiz.length){ renderQuiz(); }
  else { completePhase('quiz'); }
}

// ─── PROJECTS ─────────────────────────────────────────────────
let selProj = null;
function renderProjects(){
  const box = document.getElementById('phaseBox');
  box.innerHTML = `
    <div style="font-family:'Orbitron',monospace;font-size:0.85rem;font-weight:700;color:var(--bright);letter-spacing:0.1em;margin-bottom:4px">BUILD SELECTION :: MOD-${String(curLesson.id).padStart(2,'0')}</div>
    <div style="color:var(--muted);font-size:0.72rem;letter-spacing:0.08em;margin-bottom:18px;border-bottom:1px solid var(--seam);padding-bottom:14px">SELECT ONE BUILD TARGET. COMPLETE TO ADVANCE MODULE.</div>
    <div class="proj-grid">
      ${curLesson.projects.map((p,i)=>`
        <div class="proj-card" id="proj${i}" onclick="selectProj(${i})">
          <div class="proj-tag proj-tag-${p.tag.toLowerCase()}">[${p.tag}]</div>
          <div class="proj-title">${p.title}</div>
          <div class="proj-desc">${p.desc}</div>
          <ul class="proj-req">${p.reqs.map(r=>`<li>${r}</li>`).join('')}</ul>
        </div>`).join('')}
    </div>
    <button class="cont-btn" id="projBtn" onclick="completePhase('project')" style="opacity:0.3;pointer-events:none">MARK BUILD COMPLETE</button>`;
  selProj = null;
}

function selectProj(i){
  selProj = i;
  document.querySelectorAll('.proj-card').forEach((el,idx)=>{
    el.classList.toggle('selected', idx===i);
  });
  const btn = document.getElementById('projBtn');
  btn.style.opacity = '1';
  btn.style.pointerEvents = 'auto';
}

// ─── COMPLETE ─────────────────────────────────────────────────
function completePhase(phase){
  if(!prog[curLesson.id]) prog[curLesson.id] = {};
  prog[curLesson.id][phase] = true;
  if(phase==='project'){
    prog[curLesson.id].done = true;
    pts += 50; streak++;
    saveState(); updateHdr();
    showDone(); return;
  }
  saveState(); updateHdr();
  const next = {learn:'quiz',quiz:'challenge',challenge:'project'};
  showPhase(next[phase]);
}

function showDone(){
  const done = Object.values(prog).filter(p=>p.done).length;
  document.getElementById('phaseBox').innerHTML = `
    <div class="done-screen">
      <div class="done-ascii">
+====================================+
|   M O D U L E   C L E A R E D    |
|   XENORANK UPDATED                 |
+====================================+</div>
      <h2 class="glitch">MODULE CLEARED</h2>
      <div class="done-sub">MOD-${String(curLesson.id).padStart(2,'0')} :: ${curLesson.title.toUpperCase()}</div>
      <hr class="done-divider">
      <div class="done-grid">
        <div><div class="dstat-val">${pts}</div><div class="dstat-lbl">TOTAL PTS</div></div>
        <div><div class="dstat-val">${streak}</div><div class="dstat-lbl">STREAK</div></div>
        <div><div class="dstat-val">${done}/20</div><div class="dstat-lbl">CLEARED</div></div>
      </div>
      <button class="cont-btn" onclick="backToGrid()">RETURN TO MODULE LIST</button>
    </div>`;
  renderTabs();
}

// ─── THEME ────────────────────────────────────────────────────
function toggleTheme(){
  const cur = document.documentElement.getAttribute('data-theme')||'dark';
  const next = cur==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('rnj_theme2', next);
  updateThemeBtn();
}
function updateThemeBtn(){
  const cur = document.documentElement.getAttribute('data-theme')||'dark';
  document.getElementById('themeBtn').textContent = cur==='light'?'[*]':'[~~]';
}
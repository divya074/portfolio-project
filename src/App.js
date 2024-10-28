import './App.css'

function App() {
  return (
    <div className="App">
      <div class="grid gap-2">
        <div class="h-10">
          <div class="grid grid-cols-7 gap-7 justify-center divide-x-0 h-full m-10">
            <button class='hover:scale-125 transition-all duration-500 h-10'>
              <img src= {window.location.origin +'/logo.png'} alt='logo' class='h-full'/>
            </button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Education</button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Technologies</button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Work Experience</button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Projects</button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Hobbies</button>
            <button class="border bg-slate-700  text-white font-bold rounded hover:scale-125 transition-all duration-500">Contact</button>
          </div>
        </div>
        <div class="h-90">
          <div class="text-center py-4">02</div>
        </div>
      </div>
    </div>
  );
}

export default App;

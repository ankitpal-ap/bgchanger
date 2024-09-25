import { useState } from "react"


function App() {
  const[color, setColor] = useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200" 
     style={{backgroundColor: color}}
     >
      <div className="flex flex-wrap justify-center top-12 inset-x-2 px-5 py-4">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3 py-2">
          <button 
          onClick={() => setColor("red")}
          className="outline-none py-2 px-3 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button 
          onClick={() => setColor("green")}
          className="outline-none py-2 px-3 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Green"}}
          >Green</button>
          <button 
          onClick={() => setColor("blue")}
          className="outline-none py-2 px-3 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Blue"}}
          >Blue</button>
          <button 
          onClick={() => setColor("gray")}
          className="outline-none py-2 px-3 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Gray"}}
          >Gray</button>
          <button 
          onClick={() => setColor("pink")}
          className="outline-none py-2 px-3 rounded-full text-white shadow-lg"
          style={{backgroundColor: "Pink"}}
          >Pink</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App

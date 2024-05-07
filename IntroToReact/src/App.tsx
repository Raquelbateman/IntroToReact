import Message from "./Message";

Message

function App()
{
  const name = "Alicia";
// return <div><Message/></div>
if(name)
  {
return <div>Hello{name}</div>
  }

return <div><h1>Hello World</h1></div>
}

export default App;
import CeramicClient from "@ceramicnetwork/http-client"

// const API_URL = "http://localhost:7007"
const API_URL = "https://gateway-clay.ceramic.network"
const ceramic = new CeramicClient(API_URL)

function App() {
  return (
    <div>
      <h1>Hello Ceramic</h1>
      <div></div>
    </div>
  )
}

export default App

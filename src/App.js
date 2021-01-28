import React from "react"
import { Editor } from "./editor"
import { createClient } from "./client"

function App() {
  const [client, setClient] = React.useState(null)

  React.useEffect(() => {
    async function init() {
      const client = await createClient()
      setClient(client)
    }
    init()
  }, [])
  return (
    <div className="mx-auto max-w-3xl my-20 bg-gray-100 border rounded-sm grid grid-cols-1">
      <div className="py-8">
        <h1 className="text-3xl font-bold text-center">
          Hello Ceramic + SlateJS editor
        </h1>
      </div>

      {/* <div className="bg-gray-200 p-4">list here</div> */}
      {client && <Editor client={client} className="col-span-3 p-4 bg-white" />}
    </div>
  )
}

export default App

import React from "react"
// Import the Slate editor factory.
import { createEditor } from "slate"

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react"

/**
 *
 * @param {*} param0
 */
export function Editor({ className, client }) {
  const editor = React.useMemo(() => withReact(createEditor()), [])
  const doc = React.useRef(null)
  const [value, setValue] = React.useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ])

  React.useEffect(() => {
    async function init() {
      const article = await client.createDocument("tile", {
        content: {
          blocks: [],
        },
        metadata: {
          family: "article",
          controllers: [],
        },
      })
      doc.current = article
    }
    init()
  }, [client])

  async function handleSave() {
    // doc.change
  }

  return (
    <div className={className}>
      <div className="border-0 border-gray-200 border-b-2 flex items-center justify-end py-2 mb-2">
        <button
          className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 text-white px-4 py-1 rounded"
          onClick={handleSave}
        >
          save
        </button>
      </div>
      <div>
        <Slate
          editor={editor}
          value={value}
          onChange={(newValue) => setValue(newValue)}
        >
          <Editable />
        </Slate>
      </div>
    </div>
  )
}

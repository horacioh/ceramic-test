import CeramicClient from "@ceramicnetwork/http-client"
import { IDX } from "@ceramicstudio/idx"

const API_URL = "http://localhost:7007"
// const API_URL = "https://gateway-clay.ceramic.network"
const aliases = {
  documents: "doc",
  user: "user",
}

export async function createClient() {
  const ceramic = new CeramicClient(API_URL)
  const idx = new IDX({ ceramic, aliases })
  console.log("🚀 ~ file: client.js ~ line 14 ~ createClient ~ idx", idx)

  // await ceramic.setDIDProvider(idx)

  return ceramic
}

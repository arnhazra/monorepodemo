import { config } from "dotenv"
config({ path: "../../.env" })

export const envConfig = {
  apiPort: process.env.API_PORT
}
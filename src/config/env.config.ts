import { config } from "dotenv"
config()

export const envConfig = {
  apiPort: process.env.API_PORT
}
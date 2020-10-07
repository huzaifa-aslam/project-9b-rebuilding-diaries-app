import { createServer } from "miragejs"
import {getData} from './function'

export const server= createServer({
    routes() {
      this.namespace = "api"

      this.get("/movies",getData)
    },
  })
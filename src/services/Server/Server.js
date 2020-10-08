import { createServer } from "miragejs"
import {getData} from './../mirage/routes/user'

// export function getData(schma,req){
//         console.log("req",req.requestBody)
// }

export function makeServer() {
  let server = createServer({
 

    routes() {
      this.namespace = "api"

      this.post("/signup",getData)
      // this.post("/signup", (schema,req) => {
      //  console.log('req',req)
      // })

    },
  })

  return server
}

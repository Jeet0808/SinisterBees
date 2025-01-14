import {Router} from "express"
import v1 from "./v1"
const ApiRouter = Router();

ApiRouter.use("/v1",v1)

export default ApiRouter
import {Request, Response, Router} from "express"

const v1 = Router();

v1.get("/test",(req:Request,res:Response)=>{
    res.send("working")
})

export default v1
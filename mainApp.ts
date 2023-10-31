import { Application , Request, Response} from "express";
import { statusCode } from "./utils/statusCode";
import book from './router/bookRouter'

export const mainApp = (app:Application) =>{
    app.use('/api/v1', book)
    app.get('/', (req:Request, res:Response)=>{
     
      try{
        return res.status(statusCode.OK).json({
            message:"welcome to our book Api"
        })
      } catch(error) {
        return res.status(statusCode.BAD_REQUEST).json({
            message:'Error'
        })
      }
    })
}
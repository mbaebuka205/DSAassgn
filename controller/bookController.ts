import {Request, Response} from 'express'
import {statusCode} from '../utils/statusCode'
import { client, db} from "../utils/dbConfig"
import { bookModel } from '../model/bookModel'
import { ObjectId } from 'mongodb'



export const createBook = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        const {title, author, description, category, numbOfPages, interesting} = req.body;

        console.log(req.body)
        const book = new bookModel(
            title, 
            author,
            description,
            category,
            numbOfPages,
            interesting
        );

        await db.insertOne(book);

        return res.status(statusCode.CREATED).json({
            message:"book created",
            data:book,
        })
    } catch(error) {
        return res.status(statusCode.BAD_REQUEST ).json({
            message:'Error '
        })
    }
}

export const readBook = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        
        const book = await db.find().toArray();

        res.status(statusCode.OK).json({
            message:"book found",
            data:book
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST ).json({
            message:'Error'
        })
    }
}

export const readBookByID = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        const {bookID} = req.params
        
        const book = await db.findOne({_id:new ObjectId(bookID)});
        
        res.status(statusCode.OK).json({
            message:"book found by ID",
            data:book
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST ).json({
            message:'Error'
        })
    }
}

export const readBookByCategory = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        const {category} = req.body
        
        const book = await db.find({ category });
        
        res.status(statusCode.OK).json({
            message:"book found by category",
            data:book
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST ).json({
            message:'Error'
        })
    }
}

export const upDateBook = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        const {title} = req.body
        const {bookID} = req.params
        
        const book = await db.updateOne(
            { _id: new ObjectId(bookID) },
            { $set: {title} },
            );
        
        res.status(statusCode.OK).json({
            message:"book updated",
            data:book
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST ).json({
            message:'Error'
        })
    }
}

export const deleteBook = async (req:Request, res:Response) =>{
    try {
        await client.connect();
        const {bookID} = req.params
        
        const book = await db.deleteOne(
            { _id: new ObjectId(bookID) },
            );
        
        res.status(statusCode.OK).json({
            message:"book deleted",
            data:book
        })
    } catch(error) {
        res.status(statusCode.BAD_REQUEST ).json({
            message:'Error'
        })
    }
}
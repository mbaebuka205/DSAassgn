import { Router } from "express";
import { createBook, deleteBook, readBook, readBookByCategory, readBookByID, upDateBook } from "../controller/bookController";

const router:Router = Router();

router.route("/create-books").post(createBook)
router.route("/read-books").get(readBook)
router.route("/read-book-id/:bookID").get(readBookByID)
router.route("/read-book-category").get(readBookByCategory)
router.route("/update-book/:bookID").patch(upDateBook)
router.route("/delete-book/:bookID").delete(deleteBook)

export default router
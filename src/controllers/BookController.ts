import { Request, Response } from 'express';
import mongoose from "mongoose";
import bookModel from "../models/Book";

const Book = mongoose.model('Book');

export default class BookController {

    public async index(request: Request, response: Response): Promise<Response> {
        await Book.find({}, 'title publisher website authors')
            .then(data => {
                response.status(200).send(data);
            }).catch(e => {
                response.status(400).send(e)
            })

        return response.json(Book);
    }

    public async selectByTitle(request: Request, response: Response): Promise<Response> {
        await Book.findOne({
            title: request.params.title
        })
            .then(data => {
                response.status(200).send(data);
            }).catch(e => {
                response.status(400).send(e)
            })

        return response.json(Book);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const books = new bookModel(request.body);

        books.save();

        return response.json({ message: "success" });
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const book = await Book.findByIdAndRemove(id)
            .then(data => {
                response.status(200).send({
                    message: 'Livro removido com sucesso!'
                });
            }).catch(e => {
                response.status(400).send({
                    message: 'Falha ao remover o livro.',
                    data: e
                })
            })

        return response.json(book);
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const data = request.body;

        const book = await Book.findByIdAndUpdate(id, { ...data })
            .then(data => {
                response.status(200).send({
                    message: 'Livro atualizado com sucesso!'
                });
            }).catch(e => {
                response.status(400).send({
                    message: 'Falha ao atualizar o livro.',
                    data: e
                })
            })

        return response.json(book);
    }

}

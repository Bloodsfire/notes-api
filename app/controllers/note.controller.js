import errorHandler from "../utils/errorHandler.js";
import { models } from '../models/index.js';
const { Note } = models;


export {
    create,
    findOne,
    findAll,
    update,
    remove
}


async function create (req, res) {
    try {
        const result = await Note.create(req.body);
        res.send(result);
    }
    catch (e) {
        errorHandler(res, 500, e.message || "Some error occurred while creating the Note.")
    }
}

async function findOne (req, res) {
    const { id } = req.params;

    try {
        const result = await Note.findByPk(id);
        res.send(result);
    }
    catch (e) {
        errorHandler(res, 500, `Error retrieving Note with id=${id}`)
    }
}

async function findAll (req, res) {
    try {
        const result = await Note.findAll({where: req.query});
        res.send(result);
    }
    catch (e) {
        errorHandler(res, 500,  e.message || "Some error occurred while retrieving tutorials.")
    }
}

async function update (req, res) {
    const id = req.params.id;

    try {
        let result = await Note.update(req.body, {where: {id}, returning: true, plain: true});
        let [ count, user ] = result;
        user = user?.dataValues || null;
        res.send(user)
    }
    catch (e) {
        errorHandler(res, 500, `Error updating Note with id=${id}`)
    }
}

async function remove (req, res) {
    const id = req.params.id;

    try {
        let result = await Note.destroy({where: {id}});
        let message = result === 1 ?
            "Note was deleted successfully!"
            :
            `Cannot delete Note with id=${id}. Maybe Note was not found!`;

        res.send({message})
    }
    catch (e) {
        errorHandler(res, 500, `Error updating Note with id=${id}`)
    }
}
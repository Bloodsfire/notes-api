import { models } from "../models/index.js";
const { User, Note } = models;

import users from './data/users.js';
import notes from './data/notes.js';

async function createUsers(users) {
    for await (let user of users) {
        User.create(user);
    }
}

async function createNotes(notes) {
    for await (let note of notes) {
        Note.create(note, {
            include: [models.User],
        },);
    }
}

export default async function () {
    await createUsers(users);
    await createNotes(notes);
};
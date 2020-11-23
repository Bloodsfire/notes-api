import user from './user.js';
import note from './note.js'

export default function (app) {
    app.use('/users', user);
    app.use('/notes', note);
}

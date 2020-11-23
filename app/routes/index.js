import user from './user.js';

export default function (app) {
    app.use('/users', user)
}

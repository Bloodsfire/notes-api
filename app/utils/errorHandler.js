export default function (res, code, message) {
    res.status(code).send({message});
}
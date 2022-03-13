export default (_, res) => {
    res.status(200).end(JSON.stringify({ name: 'John Doe' }))
}
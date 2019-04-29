import express from 'express'

const router = express.Router()

router.get('/', (_, res) => res.send(`Hello there !!!`))
router.get('/:id', (req, res) => res.send(`Hello ${req.params.id} !!!`))

export default router
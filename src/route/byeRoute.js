import express from 'express'

const router = express.Router()

router.get('/', (_, res) => res.send("Bye there !!!"))
router.get('/:id', (req, res) => res.send(`Bye ${req.params.id} !!!`))

export default router
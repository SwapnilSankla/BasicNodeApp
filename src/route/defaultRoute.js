import express from 'express'

const router = express.Router()

router.get('/', (_, res) => res.send('sample App !!!'))
router.get('/', (_, res) => res.redirect('/catalog'))

export default router
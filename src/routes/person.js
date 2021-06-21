const { Router } = require('express');
const { personGet, personPost, personPut, personDelete } = require('../controllers/person')

const router = Router();

router.get('/', personGet);

router.post('/', personPost);

router.put('/', personPut);

router.delete('/', personDelete);

module.exports = router;
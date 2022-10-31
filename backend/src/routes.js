import { Router } from 'express';
import {
  createTable,
  insertToken,
  updateToken,
  deleteToken,
} from './controler.js';

const router = Router();

createTable();

router.get('/', (req, res) => {
  // res.json({
  //     "statusCode":200,
  //     "msg":"Api Rodando 2"
  // });
  return res.redirect('index.html')
});

router.post('/token', (req, res) => {
  let token = req.body

  let responsePromose = insertToken(token)

  responsePromose.then((value) => {
    if (value == 'success') {
      res.json({
        statusCode: 200,
      })

      return
    }

    res.json({
      statusCode: 404,
    })
  })
});

// router.post('/token', insertToken);
router.put('/token', updateToken);
router.delete('/token', deleteToken);

export default router;

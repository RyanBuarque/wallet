import { openDb } from './configDB.js'

export async function createTable() {
  openDb().then((db) => {
    db.exec(
      'CREATE TABLE IF NOT EXISTS Token (id INTEGER PRIMARY KEY, nome TEXT, balance INTEGER)'
    )
  })
}

export async function insertToken(token) {
  let resCode = 200
  let opDb
  await openDb()
    .then((db) => {
      opDb = db
    })
    .catch((e) => {
      console.log('deu ruim', e)
      resCode = 404
    })

  if (resCode == 404) {
    return resCode
  }

  return opDb
    .run('INSERT INTO token (nome, balance) VALUES (?,?)', [
      token.nome,
      token.balance,
    ])
    .then(() => {
      return 'success'
    })
    .catch((e) => {
      console.log('deu ruim', e)
      return 'error'
    })
}

export async function updateToken(req, res) {
  let token = req.body
  openDb().then((db) => {
    db.run('UPDATE token SET nome=?, balance=? WHERE id=?', [
      token.nome,
      token.balance,
      token.id,
    ])
  })
  res.json({
    statusCode: 200,
  })
}


export async function deleteToken(req, res) {
  let id = req.body.id
  openDb().then((db) => {
    db.get('DELETE FROM token WHERE id=?', [id]).then((res) => res)
  })
  res.json({
    statusCode: 200,
  })
}

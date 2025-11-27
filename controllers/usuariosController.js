const pool= require('../config/db');

async function login(req, res) {
   const { rm, senha } = req.body;
   try {
      const [rows] = await pool.query('SELECT * FROM usuarios WHERE rm=? AND senha=?', [rm, senha]);
      if (rows.length > 0) {
         res.json({ success: true, usuario: rows[0] });
      } else {
         res.status(401).json({ success: false, message: 'Credenciais inválidas' });
      }
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

async function listarTodos(req, res) {
   try {
      const [rows] = await pool.query('SELECT id_usuarios, nome, rm, nivel_usuario, turma, email FROM usuarios');
      res.json({ success: true, usuarios: rows });
   } catch (err) {
      res.status(500).json({ error: err.message });
   }
}

module.exports = { login, listarTodos };
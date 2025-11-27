const express = require("express");
const cors = require("cors");
const path = require("path");


const usuarioRoutes = require("./routes/usuarioRoutes.js");
const swaggerDocs = require('./swagger');

const app = express();
app.use(cors()); 
app.use(express.json());
//rotas

app.use("/usuarios", usuarioRoutes);

app.use(express.static(path.join(__dirname, 'public')));

const PORT =3005;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

swaggerDocs(app);
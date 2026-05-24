import express from 'express';
import mysql from 'mysql2/promise';

const app = express();
const port = process.env.BACKEND_PORT || 5000;

app.use(express.json());

// Ruta de prueba
app.get('/api/health', async (req, res) => {
  try {
    // Intentar conexión rápida a la base de datos mapeada en Docker
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'database',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    
    await connection.ping();
    await connection.end();
    
    res.json({ status: 'OK', database: 'Conectada con éxito' });
  } catch (error: any) {
    res.status(500).json({ status: 'Error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend corriendo en el puerto ${port}`);
});
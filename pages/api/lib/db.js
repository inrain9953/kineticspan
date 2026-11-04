import mongoose from 'mongoose';

const connection = {}; // Cache the connection

export async function connectToDatabase() {
  if (connection.isConnected) {
    // Use the cached connection if available
    return connection;
  }

  const db = await mongoose.connect(process.env.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  connection.isConnected = db.connections[0].readyState;
}

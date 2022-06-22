import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
  isConnected: 0
}

export const connect = async () => {
  
  try {   

      if (mongoConnection.isConnected === 1) return;
      if( mongoose.connections.length > 0 ) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;
        if (mongoConnection.isConnected === 1) return;
        await mongoose.disconnect();
      }
      await mongoose.connect( process.env.MONGO_URL!)
      mongoConnection.isConnected = 1;

  } catch (error) {
    console.log({
      error,
      function: 'connect'
    })
  }


}

export const disconnect = async () => {

  try {
    
    if( process.env.NODE_ENV === 'development') return;
  
    if (mongoConnection.isConnected == 0) return;
    await mongoose.disconnect();
    mongoConnection.isConnected = 0;
    console.log('disconnected');
  } catch (error) {
    console.log({
      error,
      function: 'disconnect'
    })
  }
}
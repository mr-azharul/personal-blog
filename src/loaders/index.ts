import expressLoader from './express';
import mongooseLoader from './mongoose';

export default async ({ expressApp }) => {
    const mongoConnection = await mongooseLoader();
    console.log('MongoDB Initialized');
    await expressLoader({ app: expressApp });
    console.log('Express Initialized');
}
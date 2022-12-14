import * as mongoose from 'mongoose';

export default async (): Promise<any> => {
    const connection = await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
    return connection.connection.db;
}
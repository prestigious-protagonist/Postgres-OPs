import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://neondb_owner:eo0x8izTqjYm@ep-steep-waterfall-a5n1iuzn.us-east-2.aws.neon.tech/neondb?sslmode=require");
    await client.connect();
    return client;
}
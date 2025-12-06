import dotenv from "dotenv";
dotenv.config();
export const jwtConfig={
    secret: process.env.JWT_SECRET || 'miclave123',
    expiresIn: '2h'
};
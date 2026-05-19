import mongoose from "mongoose";
import dns from "dns";

const mongo_url = process.env.MONGO_URL;

export const conn = async () => {
    try {
        // If system resolver uses localhost, fall back to Google DNS to resolve Atlas SRV records
        if (dns.getServers().includes("127.0.0.1")) {
            dns.setServers(["8.8.8.8", "8.8.4.4"]);
        }
        await mongoose.connect(mongo_url);
        console.log("Mongodb connected successfully");

    } catch (error) {
        console.log("Database connection error:", error);
    }
};
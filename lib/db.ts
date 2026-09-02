const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error(
        "please define the MONGODB_URI enviroment variable inside .env"
    );
}
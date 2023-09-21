import app from "./src/app";
import "dotenv-safe/config"

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});
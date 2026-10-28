import app from "./app.js";

const PORT = 3000;
app.listen(PORT, () => {
    console.log();
    console.log("Server está ativo na porta ", PORT);
    console.log(`CTRL + clique http://localhost:${PORT}`);
});
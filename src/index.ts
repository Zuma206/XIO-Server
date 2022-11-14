import express from "express";

import users from "./routes/users";
import channels from "./routes/channels";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/users", users);
app.use("/api/channels", channels);

app.get("*", async (req, res) => {
    res.send("XIO API");
});

if (!process.env.DETA_RUNTIME) {
    app.listen(PORT, () => console.log(`Started on http://localhost:${PORT}`));
}

export default app;

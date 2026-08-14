const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const PAYLOAD = String.raw`
print("67")
`;

app.get("/", (req, res) => {
    res.type("text").send("LEXINX V50");
});

app.get("/api/827e82jx828282js", (req, res) => {
    res.type("text/plain");
    res.send(PAYLOAD);
});

app.use((req, res) => {
    res.status(404).send("Blocked by LEXINX v50 protection");
});

app.listen(PORT, () => {
    console.log(`LEXINX API running on port ${PORT}`);
});

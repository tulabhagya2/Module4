const express = require("express");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const DB_PATH = path.join(__dirname, "db.json");

// READ DB
const readDB = () => {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
};

// WRITE DB
const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), "utf-8");
};

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    const db = readDB();

    const existingUser = db.users.find(u => u.email === email);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.users.push({ email, password: hashedPassword });
    writeDB(db);

    console.log("userdb now", db.users);
    res.json({ message: "Signup successful" });
});
app.post("/login",async(req,res)=>{
    const { email,password }=req.body;
    const db=readDB();
    const user=db.users.find(u=>u.email===email);
    if(!user) return res.status(401).json({message:"INvalid credentials"})

        //comparison algorithm
        const isMatch=await bcrypt.compare(password)

})
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

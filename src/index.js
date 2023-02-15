require("dotenv").config();
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const Exam = require("./models/exam");
const app = express();
// const swal = require('sweetalert');

app.use(express.urlencoded({
    extended: true
}));
const view_path = path.join(__dirname, "views");
const css_path = path.join(__dirname, "public");


app.set("views", view_path);
app.use(express.static(css_path));

app.set("view engine", "ejs");
require("./db/conn");


app.get("/", async (req,res) => {
    res.render("create");
})


app.post("/create", async (req, res) => {
    try {
        const Data = new Exam(req.body);
        await Data.save();
        res.redirect("/show");  
    } catch (err) {
        res.send(err);
    }
})


app.get("/show", async (req, res) => {
    try {
    const all_data = await Exam.find();
    res.render("show",{all_data});
    } catch (err) {
        res.send(err);
    }
})


app.get("/edit_curd/:id", async (req, res) => {
    try {
        const Edit_Curd = await Exam.findById(req.params.id);
        res.render("edit", { Edit_Curd }); 
    } catch (err) {
        res.send(err);
    }
})

// For Update Employee

app.post("/update_curd/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateCurd = await Exam.findByIdAndUpdate(_id, req.body);
        res.redirect("/show");
    
    } catch (err) {
        res.send(err);
   }
})


app.get("/delete_curd/:id", async (req, res) => {
    try {
        const DeleteCurd = await Exam.findByIdAndDelete(req.params.id)
        res.redirect("/show");
    } catch (err) {
        res.send(err);
    }
})


app.listen(process.env.PORT ,() => {
    console.log(`Server run on Port no ${process.env.PORT}`)
})

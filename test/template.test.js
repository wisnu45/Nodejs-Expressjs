import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get('/', (req, res) => {
    res.render("index", {
        title: "Hello World",
        say: "This is a test"
    });
});

test("Test Response", async() => {
    const response = await request(app).get("/");
    console.info(response.text);
    expect(response.text).toContain("Hello World");
    expect(response.text).toContain("This is a test");
});

dan kamu aku kita bisa merasakan hal yang sama

hingga kita menerima hal yang sama, dengan demikian

kita semoga bermanfaat dalam menjalankan
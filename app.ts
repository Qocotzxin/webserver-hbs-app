import express from "express";
import hbs from "hbs";

const app = express();
const port = process.env.PORT || 3000;

// Sets main dir for express
app.use(express.static(`${__dirname}/public`));

// Sets Handlebars as engine and partials dir
hbs.registerPartials(`${__dirname}/views/partials`);
app.set("view engine", "hbs");

//Sets Handlebars helpers
hbs.registerHelper("getYear", () => {
  return new Date().getFullYear();
});
// Route registration for express
app.get("/", (req: express.Request, res: express.Response) => {
  res.render("home", {
    name: "Cristian"
  });
});

app.get("/about", (req: express.Request, res: express.Response) => {
  res.render("about", {
    src: "assets/background.jpg"
  });
});

// Sets port for express
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});

import express from "express";
import * as homeController from "./home";
import bodyParser from "body-parser";
const app = express();

/**
 * Primary app routes.
 */
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
app.use(express.json());
app.post("/api/v1/parse", homeController.indexV1);
app.post("/api/v2/parse", homeController.indexV2);

const server = app.listen(app.get("port"), () => {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        app.get("port"),
        app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});
export default server;
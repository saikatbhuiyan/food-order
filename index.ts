import express from "express";

import { AdminRoute, VendorRoute } from "./routes";

const app = express();

app.use("/vendor", VendorRoute);
app.use("/admin", AdminRoute);

app.listen(8080, () => {
  console.log("App listening on port 8080");
});

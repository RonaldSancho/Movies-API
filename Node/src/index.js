import app from "./app.js"

app.listen(app.get('port'));
console.log("Server port", app.get('port'))
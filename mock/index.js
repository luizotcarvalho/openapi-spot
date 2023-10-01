const http = require('http')
const express = require('express')
const cors = require('cors')
const oasTools = require('@oas-tools/core')

const PORT = 3000;
const app = express();

app.use(cors())
app.use(express.json());

oasTools.initialize(app, {
    oasFile: '../api.yaml',
    useAnnotations: true,
    middleware: {
        validator: {
            strict: true
        }
    }
}).then(() => {
    http.createServer(app).listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
})

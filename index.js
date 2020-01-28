"use strict";

// our dependencies
const express = require("express");
const app = express();

// from top level path e.g. localhost:3000, this response will be sent
app.get("/", restApiHandler);

// set the server to listen on port 3000
const port = 3000;
app.listen(port, () => `Listening on port ${port}`);

function restApiHandler(request, response) {
    // let sum = 0;
    // for (let value = 1; value <= 100; value++) {
    //     sum += value;
    // }

    return response.send(
        `
        <!DOCTYPE html>
        <html lang="en">
            <canvas id="canvas" width="800" height="800"></canvas>
            <body>
                <script>
                    let sum = 0;
                    for (let value = 1; value <= 100; value++) {
                        sum += value;
                    }

                    let pencil = document.getElementById("canvas").getContext('2d');
                    pencil.fillText(\`Sanjay! Get response: The sum of 1 to 100 is \${sum}.\`, 0, 20);
                </script>
            </body>
        </html>
        `
        );
}

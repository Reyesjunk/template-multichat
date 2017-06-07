const path = require('path');
const express = require('express');
const app = express();
let server = require('http').Server(app);
const io = require('socket.io')(server);

// API endpoints
io.on('connection', function(socket) {
    console.log('a user connected');
    // socket.emit()
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
    const index = path.resolve(__dirname, '../client/build', 'index.html');
    res.sendFile(index);
});

function runServer(port=3001) {
    return new Promise((resolve, reject) => {
        server.listen(port, () => {
            resolve();
        }).on('error', reject);
    });
}

function closeServer() {
    return new Promise((resolve, reject) => {
        server.close(err => {
            if (err) {
                return reject(err);
            }
            resolve();
        });
    });
}

if (require.main === module) {
    runServer();
}

module.exports = {
    app, runServer, closeServer
};

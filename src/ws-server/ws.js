var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({ port: 40511 })





wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    console.log('received: %s', message)
  })

  let idx = 0;

  let tracks = [
    { "4ab": { "a": 0, "s": 2, "b": 33.7, "t": "H", "v": 1.19, "y": 0.14, "x": -0.492, "r": 5, "d": 5.71 } },
    { "4ab": { "a": 0, "s": 2, "b": 34.18, "t": "H", "v": 1.19, "y": 0.139, "x": -0.395, "r": 5, "d": 5.75 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.0, "t": "H", "v": 1.19, "y": 0.138, "x": -0.250, "r": 5, "d": 5.79 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.59, "t": "H", "v": 1.19, "y": 0.136, "x": -0.104, "r": 5, "d": 5.83 } },
    { "4ab": { "a": 0, "s": 2, "b": 36.07, "t": "H", "v": 1.19, "y": 0.135, "x": 0.006, "r": 5, "d": 5.86 } },
    { "4ab": { "a": 0, "s": 2, "b": 36.32, "t": "H", "v": 1.19, "y": 0.133, "x": 0.108, "r": 5, "d": 5.9 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.53, "t": "H", "v": 1.17, "y": 0.132, "x": 0.154, "r": 5, "d": 6.0 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.58, "t": "H", "v": 1.17, "y": 0.131, "x": 0.204, "r": 5, "d": 6.03 } },
    { "4ab": { "a": 0, "s": 2, "b": 36.03, "t": "H", "v": 1.17, "y": 0.131, "x": 0.256, "r": 5, "d": 6.06 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.53, "t": "H", "v": 1.17, "y": 0.132, "x": 0.344, "r": 5, "d": 6.0 } },
    { "4ab": { "a": 0, "s": 2, "b": 35.58, "t": "H", "v": 1.17, "y": 0.131, "x": 0.404, "r": 5, "d": 6.03 } },
    { "4ab": { "a": 0, "s": 2, "b": 36.03, "t": "H", "v": 1.17, "y": 0.131, "x": 0.486, "r": 5, "d": 6.06 } }
  ];

  setInterval(() => {
    console.log("a", JSON.stringify(tracks[idx]))

    if (ws.readyState) {
      ws.send(JSON.stringify(tracks[idx]))
      idx++;
      if (idx === tracks.length) {
        idx = 0;
      }
    }


  }, 100);


  // setInterval(
  //   () => {

  //       tracks.

  //       ws.send(`${new Date()}`)
  //   },
  //   1000
  // )
})

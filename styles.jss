body, html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #282c34;
    color: #61dafb;
}

.container {
    text-align: center;
    background: #20232a;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

#display {
    font-size: 3em;
    margin: 20px 0;
}

.buttons button {
    margin: 10px;
    padding: 10px 20px;
    font-size: 1.2em;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

#startStopBtn {
    background-color: #4caf50;
    color: white;
}

#startStopBtn:hover {
    background-color: #45a049;
}

#lapBtn {
    background-color: #2196f3;
    color: white;
}

#lapBtn:hover {
    background-color: #1976d2;
}

#resetBtn {
    background-color: #f44336;
    color: white;
}

#resetBtn:hover {
    background-color: #d32f2f;
}

#laps {
    list-style: none;
    padding: 0;
    margin-top: 20px;
    max-height: 200px;
    overflow-y: auto;
}

#laps li {
    background: #61dafb;
    color: #20232a;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
}

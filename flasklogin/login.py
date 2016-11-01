from flask import Flask, session
import os

app = Flask(__name__)

@app.route('/')
def index():
    return 'Index'


if __name__ == '__main__':
    app.run(debug=True)
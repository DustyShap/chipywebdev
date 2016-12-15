from flask import Flask, render_template
import meetup.api

client = meetup.api.Client('7925a2e02e4b643023696e1a371a')

app = Flask(__name__)

rsvps = client.GetRsvps

@app.route("/")
def hello():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)
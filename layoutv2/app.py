from flask import Flask, render_template, request, jsonify
import json
from models import *


app = Flask(__name__)
initialize_db()


@app.route('/')
def home():
    return render_template("index.html")



@app.route('/process', methods=['POST'])
def process():
    search_term = request.form['tags'].lower().strip()
    drops = Drops.select().where(Drops.tags.contains(search_term))
    drops_as_dict = []

    if drops:

        for drop in drops:
            drop_as_dict = {
                'filename': drop.filename,
                'speaker': drop.speaker,
                'transcription': drop.transcription,
                'search_term': search_term
            }
            drops_as_dict.append(drop_as_dict)

        return jsonify({'filename':drops_as_dict})

    return jsonify({'filename': drops_as_dict})



if __name__ == "__main__":
    app.run(debug=True)

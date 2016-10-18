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

    if drops:

        drops_as_dict = []

        for drop in drops:
            drop_as_dict = {
                'filename': drop.filename
            }
            drops_as_dict.append(drop_as_dict)

        #print(json.dumps(drops_as_dict[0]['filename']))
        return jsonify({'filename':drops_as_dict[0]['filename']})


    return jsonify({'filename':'No results!'})
        #return jsonify({'filename': drops[0].filename })




"""
@app.route('/results', methods=['POST'])
def results():

    search_term = request.form['tags'].lower().strip()
    drops = Drops.select().where(Drops.tags.contains(search_term))

    if not drops:
        return render_template('/results.html', no_drops = True,
                           search_term=search_term)

    return render_template('/results.html', drops = drops,
                           search_term=search_term)

"""

if __name__ == "__main__":
    app.run(debug=True)

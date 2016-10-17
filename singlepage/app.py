from flask import Flask, render_template, request, jsonify
from playhouse.shortcuts import model_to_dict
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
        #return jsonify({'filename': drops[0].filename })
        return jsonify({'filename':drops})

    return jsonify({'filename': 'None found!'})





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

from flask import Flask, render_template, request, jsonify
from models import *


app = Flask(__name__)
initialize_db()


@app.route('/')
def home():
    return render_template("index.html")





@app.route('/process', methods=['POST'])
def process():
    input = request.form['tags']
    newInput = input[::-1]

    return jsonify({
            'tags': newInput
    })


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

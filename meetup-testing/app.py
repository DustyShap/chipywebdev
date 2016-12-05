from flask import Flask, render_template, request, jsonify, url_for
import meetup.api

app = Flask(__name__)

client = meetup.api.Client()
client.api_key = ''


@app.route("/")
def hello():
    return render_template('index.html')


@app.route('/process', methods=['POST', 'GET'])
def process():
    term = request.form['url_name']
    try:
        group_info = client.GetGroup({'urlname':term})
        group_dict = {
            'url':group_info.urlname,
            'description':group_info.description,
            'photo':group_info.group_photo['thumb_link']

        }
    except :
        return jsonify({'test':'Group Not Found!'})

    return jsonify({'test': group_dict})



if __name__ == "__main__":
    app.run(debug=True)
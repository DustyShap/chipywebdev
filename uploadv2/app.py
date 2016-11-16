from flask import Flask, render_template, request, jsonify
from flask.ext.uploads import UploadSet, configure_uploads, IMAGES, AUDIO

from models import *

app = Flask(__name__)
initialize_db()



audio = UploadSet('audio', AUDIO)

app.config['UPLOADED_AUDIO_DEST'] = 'static/audio'
configure_uploads(app, audio)


@app.route('/upload', methods=['GET','POST'])
def upload():

    if request.method == 'POST' and 'audio' in request.files:
        filename = audio.save(request.files['audio'])
        return jsonify({'filename':filename})
    return render_template('upload.html')




if __name__ == "__main__":
    app.run(debug=True)

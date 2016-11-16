from flask import Flask, render_template, request
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
        speaker = request.form['speaker'].lower().strip()
        tags = request.form['tags'].lower()
        transcription = request.form['transcription'].lower().replace("'","")
        q = Drops.insert(filename=filename, speaker=speaker, tags=tags, transcription=transcription)
        q.execute()
        return filename

    return render_template('upload.html')




if __name__ == "__main__":
    app.run(debug=True)

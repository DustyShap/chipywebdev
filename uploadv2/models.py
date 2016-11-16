from peewee import *

db = SqliteDatabase('drops.db')

class Drops(Model):

	id = PrimaryKeyField()
	filename = TextField()
	speaker = TextField()
	tags = TextField()
	transcription = TextField()

	class Meta:
		database = db


def initialize_db():
	db.connect()
	db.create_tables([Drops], safe=True)

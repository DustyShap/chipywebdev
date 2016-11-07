from peewee import *

db = SqliteDatabase('staticmeta/drops.db')

class Drops(Model):

	id = PrimaryKeyField(unique=True)
	filename = TextField()
	speaker = TextField()
	tags = TextField()
	transcription = TextField()

	class Meta:
		database = db


def initialize_db():
	db.connect()
	db.create_tables([Drops], safe=True)




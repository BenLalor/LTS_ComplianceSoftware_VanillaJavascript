from . import db
from flask_login import UserMixin


class LTS(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lightName = db.Column(db.String(150), nullable=False)
    lightDescription = db.Column(db.String(150), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

## TODO & FIXME: Is the database using the models.py file or is it using the db model in the lts.py file? Remove the one it is not using!
class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    lts = db.relationship("LTS")
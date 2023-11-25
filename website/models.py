from . import db

from flask_login import UserMixin

class LTS(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(150), nullable=False)
    project_address = db.Column(db.String(150), nullable=False)
    date = db.Column(db.Date , nullable=True)
    project_location = db.Column(db.String(150), nullable=False)
    climate_zone = db.Column(db.Integer, nullable=False)
    healthcare = db.Column(db.Boolean, nullable=False)
    multifamily_GTE4stories = db.Column(db.Boolean, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    lts = db.relationship("LTS")

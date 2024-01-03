from . import db
from flask_login import UserMixin

# Define the LTS model
class LTS(db.Model):
    # Define the columns for the LTS table
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(150), nullable=False)
    project_address = db.Column(db.String(150), nullable=False)
    date = db.Column(db.Date , nullable=True)
    
    # Define additional columns for the LTS table
    # Each column is defined with its type and constraints
    # For example, db.String(150) means a string of up to 150 characters
    # nullable=False means this column cannot be empty
    # default=None means this column defaults to None if no value is provided

    # ... (rest of the columns) ...

    # Define a foreign key to relate each LTS to a User
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

# Define the User model
class User(db.Model, UserMixin):
    # Define the columns for the User table
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)

    # Define a relationship to relate each User to multiple LTSs
    # This doesn't correspond to a specific column in the User table
    # Instead, it enables us to access a user's LTSs with user.lts
    lts = db.relationship("LTS")
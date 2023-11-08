from flask import Flask, render_template, Blueprint, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import UserMixin
import models  # THIS COULD BE WRONG BECAUSE I AM NOT USING THE WEBSSITE PACKAGE. See 1:30 in the video
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "myKey123"
db = SQLAlchemy(app)
DB_NAME = "database.db"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///{DB_NAME}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)


# Represents the database table for user login information
class users(db.Model, UserMixin):
    _id = db.Column("id", db.Integer, primary_key=True)
    email = db.Column(db.String(100))
    password = db.Column(db.String(100))

    # constructor for a new user
    def __init__(self, email, password):
        self.email = email
        self.password = password


# Path to home page
@app.route("/")
def home():
    return render_template("home.html")


# Path to LTS page
@app.route("/lts")
def lts():
    return render_template("lts.html")


# Path to coming soon page
@app.route("/comingSoon")
def comingSoon():
    return render_template("comingSoon.html")


# Path to login page
@app.route("/login", methods=["POST", "GET"])
def login():
    return render_template("login.html")


# Path to logout page
@app.route("/logout")
def logout():
    return "<p1> Logout </p1>"


# Path to signup page
@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        email = request.form.get("email")
        password1 = request.form.get("password1")
        password1 = generate_password_hash(password1, method="sha256")
        # FIX ME - Check to see if password 1 and password 2 are the same. If not, flash a warning an don't save to database
        if users.query.filter_by(email=email).first() is not None:
            flash("Account already exists with that email", category="error")
            # FIX ME - Call the function rather than directly rendering the template
            # return render_template("userAlreadyExists.html")
        else:
            flash("Account created!", category="success")
            usr = users(email, password1)
            db.session.add(usr)
            db.session.commit()
            return redirect(url_for("home"))
    return render_template("signup.html")


# Path to view database data
@app.route("/viewUsers")
def viewUsers():
    return render_template("viewUsers.html", values=users.query.all())


# Path to show that the user already exists
@app.route("/userAlreadyExists")
def userAlreadyExists():
    return render_template("userAlreadyExists.html")


# Run the application
if __name__ == "__main__":
    # create the database if it doesn't already exist
    db.create_all()
    # run the application
    app.run(debug=True)

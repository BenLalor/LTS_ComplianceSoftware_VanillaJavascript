from flask import Flask, render_template, Blueprint, request, flash, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import UserMixin, login_user, login_required, logout_user, current_user, LoginManager 
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
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        user = users.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!',category="success")
                #login_user(user, remember = True)
                return redirect(url_for("home"))
            else: 
                flash('Incorrect password, try again',category="error")
        else:
            flash("Email does not exist, try again", category="error") 


        ## TODO - Figure out what the form is packing and sending in the post request and then grab it. 
    return render_template("login.html")


# Path to logout page
@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("login"))


# Path to signup page
@app.route("/signup", methods=["POST", "GET"])
def signup():
    if request.method == "POST":
        email = request.form.get("email")
        password1 = request.form.get("password1")
        password1 = generate_password_hash(password1, method="sha256")
        user = users.query.filter_by(email=email).first()
        # FIX ME - Check to see if password 1 and password 2 are the same. If not, flash a warning an don't save to database
        if users.query.filter_by(email=email).first() is not None:
            flash("Account already exists with that email", category="error")
            # FIX ME - Call the function rather than directly rendering the template
            # return render_template("userAlreadyExists.html")
        else:
            # login_user(user, remember=True)
            flash("Account created!", category="success")
            usr = users(email, password1)
            db.session.add(usr)
            db.session.commit()
            # login_user(user, remember = True)
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

    #login_manager = LoginManager()
    #login_manager.login_view='auth.login'
    #login_manager.init_app(app)

    #@login_manager.user_loader
    #def load_user(id):
    #    return users.query.get(int(id))

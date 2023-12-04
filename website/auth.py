from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User
from werkzeug.security import generate_password_hash, check_password_hash
from . import db   ##means from __init__.py import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint("auth", __name__)

@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):
                flash('Logged in successfully!',category="success")
                login_user(user, remember=True)
                return redirect(url_for('views.home'))
            else: 
                flash('Incorrect password, try again',category="error")
        else:
            flash("Email does not exist, try again", category="error") 


        ## TODO - Figure out what the form is packing and sending in the post request and then grab it. 
    return render_template("login.html", user=current_user)


# Path to logout page
@auth.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("auth.login"))


# Path to signup page
@auth.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password1")
        
        user = User.query.filter_by(email=email).first()
        if user:
            flash("Account already exists with that email", category="error")
            # FIX ME - Call the function rather than directly rendering the template
            # return render_template("userAlreadyExists.html")
        else:
            new_user = User(email=email, password = generate_password_hash(password))
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember = True)
            flash("Account created!", category="success")
            return redirect(url_for("views.home"))
    return render_template("signup.html", user=current_user)

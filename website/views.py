from flask import Blueprint, render_template, request
from flask_login import login_required, current_user
from .models import LTS 
from .import db

views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")  

@views.route("/lts", methods=["GET", "POST"])
def lts():
    if request.method == "POST":
        light_name = request.form.get("light_name")
        new_lts = LTS(data = light_name, user_id = current_user.id)
        db.session.add(new_lts)
        db.session.commit()

    
    return render_template("lts.html")


# Path to coming soon page
@views.route("/comingSoon")
def comingSoon():
    return render_template("comingSoon.html")

# Path to view database data
@views.route("/viewUsers")
def viewUsers():
    return render_template("viewUsers.html", values=users.query.all())
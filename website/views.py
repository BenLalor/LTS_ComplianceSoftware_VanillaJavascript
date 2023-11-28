from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import login_required, current_user
from .models import LTS 
from .import db
from datetime import datetime
views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html")  


@views.route("/lts", methods=["GET", "POST"])
def lts():
    # save lts data to database
    if request.method == "POST":
        project_name = request.form.get("projectName")
        project_address = request.form.get("projectAddress")
        date_str = request.form.get("datePrepared")
        date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
        project_location = request.form.get("project_location")
        climate_zone = request.form.get("climateZone")
        healthcareValue = request.form.get("healthcare")
        healthcare = healthcareValue == "1"
        multifamily_GTE4storiesValue = request.form.get("multifamily_GTE4stories")
        multifamily_GTE4stories = multifamily_GTE4storiesValue == "1"
        
        new_lts = LTS(project_name = project_name, project_address = project_address, date=date_obj,project_location = project_location, climate_zone = climate_zone, healthcare = healthcare, multifamily_GTE4stories = multifamily_GTE4stories, user_id = current_user.id)
        db.session.add(new_lts)
        db.session.commit()
        # FIX ME - Ideally this would return them to the project they just submitted, or some sort of summary page, and send the data to the report generator
        return render_template("lts.html")
    # New LTS Form
    else:
        return render_template("lts.html")

@views.route("/lts/<int:projectID>", methods=["GET", "POST"])
def ltsProject(projectID):
    return render_template("lts.html", projectID=projectID)

# Path to coming soon page
@views.route("/comingSoon")
def comingSoon():
    return render_template("comingSoon.html")


# Path to existing LTS Form
@views.route("/LTSProjects")
def existingLTS():
    # Check if user is logged in
    if not current_user.is_authenticated:
        return render_template("login.html")
    # Grab all of the LTS projects for the current user
    else:
        ltsProjects = LTS.query.filter_by(user_id=current_user.id).all()
        return render_template("viewProjects.html", user=current_user, ltsProjects=ltsProjects)

    

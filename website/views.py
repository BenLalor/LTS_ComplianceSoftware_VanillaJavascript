from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import login_required, current_user
# Import LTS model and database instance from the current package
from .models import LTS 
from .import db
from datetime import datetime

# Create a Blueprint for the views
views = Blueprint("views", "__name__")

# Define the route for the home page
@views.route("/")
def home():
    # Render the home page and pass the current user to the template
    return render_template("home.html", user=current_user)  

# Define the route for the LTS page, which supports both GET and POST requests
@views.route("/lts", methods=["GET", "POST"])
def lts():
    # If the request method is POST, we need to save the LTS data to the database
    if request.method == "POST":
        # Extract all the form data
        # ...

        # Create a new LTS instance with the form data
        new_lts = LTS( ... )
        # Add the new LTS instance to the database session
        db.session.add(new_lts)
        # Commit the database session to save the changes
        db.session.commit()
        # Render the LTS page
        return render_template("lts.html")
    # If the request method is GET, we just need to display the LTS form
    else:
        return render_template("lts.html")

# Define the route for a specific LTS project, which supports both GET and POST requests
@views.route("/lts/<int:projectID>", methods=["GET", "POST"])
def ltsProject(projectID):
    # Query the database for the LTS instance with the given project ID
    ltsInstance = LTS.query.filter_by(id=projectID).first()
    # Convert the LTS instance to a dictionary so it can be passed to the template
    lts_dict = { ... }
    # Render the LTS page and pass the project ID and LTS instance to the template
    return render_template("lts.html", projectID=projectID, ltsInstance=lts_dict)

# Define the route for the coming soon page
@views.route("/comingSoon")
def comingSoon():
    return render_template("comingSoon.html")

# Define the route for the existing LTS projects page
@views.route("/LTSProjects")
def existingLTS():
    # If the user is not authenticated, redirect them to the login page
    if not current_user.is_authenticated:
        return render_template("login.html")
    # If the user is authenticated, query the database for all their LTS projects
    else:
        ltsProjects = LTS.query.filter_by(user_id=current_user.id).all()
        # Render the view projects page and pass the current user and their LTS projects to the template
        return render_template("viewProjects.html", user=current_user, ltsProjects=ltsProjects)
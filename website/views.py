from flask import Blueprint, jsonify, render_template, request, redirect, url_for
from flask_login import login_required, current_user
from .models import LTS 
from .import db
from datetime import datetime
views = Blueprint("views", __name__)

@views.route("/")
def home():
    return render_template("home.html", user=current_user)  


@views.route("/lts", methods=["GET", "POST"])
def lts():
    # save lts data to database
    if request.method == "POST":
        project_name = request.form.get("projectName")
        project_address = request.form.get("projectAddress")
        date_str = request.form.get("datePrepared")
        date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
        a01_project_location = request.form.get("a01_project_location")
        a02_climate_zone = request.form.get("climateZone")
        a03a_healthcare = request.form.get("healthcare")
        a03a_healthcare = a03a_healthcare == "1"
        a03b_multifamily_GTE4stories = request.form.get("multifamily_GTE4stories")
        a03b_multifamily_GTE4stories = a03b_multifamily_GTE4stories == "1"
        b01_name = request.form.get("nameOrItem_sign")
        b02_description = request.form.get("descriptionSign")
        b03_status = request.form.get("status_Sign")
        b04_type = request.form.get("type_Sign")
        b05_method = request.form.get("compliance_Method")
        c01_name = request.form.get("c01_Name")
        c02_description = request.form.get("c02_Description")
        c03_allowed = request.form.get("c03_Value")
        c04_designed = request.form.get("c04_Value")
        c05_compliant_light_sources= request.form.get("c05_Value")
        c06_EVL = request.form.get("c06_Value")
        c07_compliance_results = request.form.get("c07_Value")
        c07_controls_compliance = request.form.get("c07_ControlsValue")
        f01_name = request.form.get("f01_name")
        f02_description = request.form.get("f02_Description")
        f03_method = request.form.get("f03_Method")
        f04_area = request.form.get("f04_Value")
        f05_allowed_density = request.form.get("f05_Value")
        f06_allowance = request.form.get("f06_Value")
        f07_designed = request.form.get("f07_Value")
        f08a_shut_off = request.form.get("F08a")
        f08b_dimming = request.form.get("F08b")
        f08c_demand_response = request.form.get("F08c")
        f10_name = request.form.get("f10_Value")
        f11_description = request.form.get("f11_Value")
        f12_watts_per_luminaire = request.form.get("f12_Value")
        f13_determined = request.form.get("f13_Value")
        f14_number_of_luminaires = request.form.get("f14_Value")
        g01_name = request.form.get("g01_Name")
        g02_description = request.form.get("g02_Description")
        g03_compliant_light_sources = request.form.get("g03_Method")
        g04a_shut_off = request.form.get("g04a")
        g04b_dimming = request.form.get("g04b")
        g04c_demand_response = request.form.get("g04c")
        h01_name = request.form.get("h01_Name")
        h02_description = request.form.get("h02_Description")
        h03a_shut_off = request.form.get("h03a")
        h03b_dimming = request.form.get("h03b")
        h03c_demand_response = request.form.get("h03c")

        new_lts = LTS(project_name = project_name, project_address = project_address, date=date_obj, a01_project_location = a01_project_location, a02_climate_zone = a02_climate_zone, a03a_healthcare = a03a_healthcare, a03b_multifamily_GTE4stories = a03b_multifamily_GTE4stories, b01_name = b01_name, b02_description = b02_description, b03_status = b03_status, b04_type = b04_type, b05_method = b05_method, c01_name = c01_name, c02_description = c02_description, c03_allowed = c03_allowed, c04_designed = c04_designed, c05_compliant_light_sources = c05_compliant_light_sources, c06_EVL = c06_EVL, c07_compliance_results = c07_compliance_results, c07_controls_compliance = c07_controls_compliance, f01_name = f01_name, f02_description = f02_description, f03_method = f03_method, f04_area = f04_area, f05_allowed_density = f05_allowed_density, f06_allowance = f06_allowance, f07_designed = f07_designed, f08a_shut_off = f08a_shut_off, f08b_dimming = f08b_dimming, f08c_demand_response = f08c_demand_response, f10_name = f10_name, f11_description = f11_description, f12_watts_per_luminaire = f12_watts_per_luminaire, f13_determined = f13_determined, f14_number_of_luminaires = f14_number_of_luminaires, g01_name = g01_name, g02_description = g02_description, g03_compliant_light_sources = g03_compliant_light_sources, g04a_shut_off = g04a_shut_off, g04b_dimming = g04b_dimming, g04c_demand_response = g04c_demand_response, h01_name = h01_name, h02_description = h02_description, h03a_shut_off = h03a_shut_off, h03b_dimming = h03b_dimming, h03c_demand_response = h03c_demand_response, user_id = current_user.id)
        db.session.add(new_lts)
        db.session.commit()
        # FIX ME - Ideally this would return them to the project they just submitted, or some sort of summary page, and send the data to the report generator
        return render_template("lts.html")
    # New LTS Form
    else:
        return render_template("lts.html")

@views.route("/lts/<int:projectID>", methods=["GET", "POST"])
def ltsProject(projectID):
    ltsInstance = LTS.query.filter_by(id=projectID).first()
    lts_dict = {
        'id': ltsInstance.id,
        'project_name': ltsInstance.project_name,
        'project_address': ltsInstance.project_address,
        'date': ltsInstance.date.isoformat() if ltsInstance.date else None,  # convert date to string
        'a01_project_location': ltsInstance.a01_project_location,
        'a02_climate_zone': ltsInstance.a02_climate_zone,
        'a03a_healthcare': ltsInstance.a03a_healthcare,
        'a03b_multifamily_GTE4stories': ltsInstance.a03b_multifamily_GTE4stories,
        'b01_name': ltsInstance.b01_name,
        'b02_description': ltsInstance.b02_description,
        'b03_status': ltsInstance.b03_status,
        'b04_type': ltsInstance.b04_type,
        'b05_method': ltsInstance.b05_method,
        'c01_name': ltsInstance.c01_name,
        'c02_description': ltsInstance.c02_description,
        'c03_allowed': ltsInstance.c03_allowed,
        'c04_designed': ltsInstance.c04_designed,
        'c05_compliant_light_sources': ltsInstance.c05_compliant_light_sources,
        'c06_EVL': ltsInstance.c06_EVL,
        'c07_compliance_results': ltsInstance.c07_compliance_results,
        'c07_controls_compliance': ltsInstance.c07_controls_compliance,
        'f01_name': ltsInstance.f01_name,
        'f02_description': ltsInstance.f02_description,
        'f03_method': ltsInstance.f03_method,
        'f04_area': ltsInstance.f04_area,
        'f05_allowed_density': ltsInstance.f05_allowed_density,
        'f06_allowance': ltsInstance.f06_allowance,
        'f07_designed': ltsInstance.f07_designed,
        'f08a_shut_off': ltsInstance.f08a_shut_off,
        'f08b_dimming': ltsInstance.f08b_dimming,
        'f08c_demand_response': ltsInstance.f08c_demand_response,
        'f10_name': ltsInstance.f10_name,
        'f11_description': ltsInstance.f11_description,
        'f12_watts_per_luminaire': ltsInstance.f12_watts_per_luminaire,
        'f13_determined': ltsInstance.f13_determined,
        'f14_number_of_luminaires': ltsInstance.f14_number_of_luminaires,
        'g01_name': ltsInstance.g01_name,
        'g02_description': ltsInstance.g02_description,
        'g03_compliant_light_sources': ltsInstance.g03_compliant_light_sources,
        'g04a_shut_off': ltsInstance.g04a_shut_off,
        'g04b_dimming': ltsInstance.g04b_dimming,
        'g04c_demand_response': ltsInstance.g04c_demand_response,
        'h01_name': ltsInstance.h01_name,
        'h02_description': ltsInstance.h02_description,
        'h03a_shut_off': ltsInstance.h03a_shut_off,
        'h03b_dimming': ltsInstance.h03b_dimming,
        'h03c_demand_response': ltsInstance.h03c_demand_response
    }
    return render_template("lts.html", projectID=projectID, ltsInstance=lts_dict)

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

    

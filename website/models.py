from . import db

from flask_login import UserMixin

class LTS(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    project_name = db.Column(db.String(150))
    project_address = db.Column(db.String(150))
    date = db.Column(db.Date )
    
    a01_project_location = db.Column(db.String(150))
    a02_climate_zone = db.Column(db.Integer)
    a03a_healthcare = db.Column(db.Boolean)
    a03b_multifamily_GTE4stories = db.Column(db.Boolean)
    
    b01_name = db.Column(db.String(150), default=None)
    b02_description = db.Column(db.String(150), default=None)
    b03_status = db.Column(db.String(150), default=None)
    b04_type = db.Column(db.String(150), default=None)
    b05_method = db.Column(db.String(150), default=None)

    c01_name = db.Column(db.String(150), default=None)
    c02_description = db.Column(db.String(150), default=None)
    c03_allowed = db.Column(db.String, default=None)
    c04_designed = db.Column(db.String, default=None)
    # FIX ME - Ideally c05 and c06 would be saved as boolean, not string
    c05_compliant_light_sources = db.Column(db.String(150), default=None)
    c06_EVL = db.Column(db.String(150), default=None)
    c07_compliance_results = db.Column(db.String(150), default=None)
    c07_controls_compliance = db.Column(db.String(150), default=None)

    f01_name = db.Column(db.String(150), default=None)
    f02_description = db.Column(db.String(150), default=None)
    f03_method = db.Column(db.String(150), default=None)
    f04_area = db.Column(db.Integer, default=None)
    f05_allowed_density = db.Column(db.Integer, default=None)
    f06_allowance = db.Column(db.Integer, default=None)
    f07_designed = db.Column(db.Integer, default=None)
    f08a_shut_off = db.Column(db.String(150), default=None)
    f08b_dimming = db.Column(db.String(150), default=None)
    f08c_demand_response = db.Column(db.String(150), default=None)
    f10_name = db.Column(db.String(150), default=None)
    f11_description = db.Column(db.String(150), default=None)
    f12_watts_per_luminaire = db.Column(db.Integer, default=None)
    f13_determined = db.Column(db.String(150), default=None)
    f14_number_of_luminaires = db.Column(db.Integer, default=None)

    g01_name = db.Column(db.String(150), default=None)
    g02_description = db.Column(db.String(150), default=None)
    g03_compliant_light_sources = db.Column(db.String(150), default=None)
    g04a_shut_off = db.Column(db.String(150), default=None)
    g04b_dimming = db.Column(db.String(150), default=None)
    g04c_demand_response = db.Column(db.String(150), default=None)

    h01_name = db.Column(db.String(150), default=None)
    h02_description = db.Column(db.String(150), default=None)
    h03a_shut_off = db.Column(db.String(150), default=None)
    h03b_dimming = db.Column(db.String(150), default=None)
    h03c_demand_response = db.Column(db.String(150), default=None)

    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))

class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(255), nullable=False)
    lts = db.relationship("LTS")

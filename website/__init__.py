from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager, current_user 
from flask_migrate import Migrate
import os
from dotenv import load_dotenv
import base64

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)

    @app.context_processor
    def inject_user():
            return dict(user=current_user)
    
    app.config['SECRET_KEY'] = 'sdifdsnmyrqfdtla'
    load_dotenv()
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URI")

    # Get the base64 string from the environment variable
    cert_base64 = os.getenv('CERT_BASE64')

    # Decode the base64 string back into the certificate
    cert_decoded = base64.b64decode(cert_base64)

    # Write the decoded certificate to a file
    with open('certificate.pem', 'wb') as f:
        f.write(cert_decoded)

    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'connect_args': {'ssl': {'ca': 'certificate.pem'}}
    }

    db.init_app(app)

    from .views import views
    from .auth import auth

    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    from .models import User, LTS

    with app.app_context():
        db.create_all()

    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))
    
    migrate = Migrate(app, db)

    return app
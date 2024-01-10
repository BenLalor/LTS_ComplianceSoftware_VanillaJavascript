from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager, current_user 
from flask_migrate import Migrate
import os
from dotenv import load_dotenv

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)

    @app.context_processor
    def inject_user():
            return dict(user=current_user)
    
    app.config['SECRET_KEY'] = 'sdifdsnmyrqfdtla'
    #app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    #app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://root:ABC123@localhost/mydatabase"
    load_dotenv()
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URI")
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'connect_args': {'ssl': {'ca': 'DigiCertGlobalRootG2.crt.pem'}}
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

    
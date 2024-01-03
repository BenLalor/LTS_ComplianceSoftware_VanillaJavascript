from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager, current_user 
from flask_migrate import Migrate

# Initialize SQLAlchemy
db = SQLAlchemy()
DB_NAME = "database.db"

# Function to create a Flask application
def create_app():
    # Create an instance of Flask
    app = Flask(__name__)

    # Context processor to inject the current user into templates
    @app.context_processor
    def inject_user():
        return dict(user=current_user)
    
    # Configure the Flask application
    app.config['SECRET_KEY'] = 'sdifdsnmyrqfdtla'
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    # Initialize SQLAlchemy with this Flask app
    db.init_app(app)

    # Import the blueprints
    from .views import views
    from .auth import auth

    # Register the blueprints
    app.register_blueprint(views, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')

    # Import the models
    from .models import User, LTS

    # Create all database tables
    with app.app_context():
        db.create_all()

    # Initialize the LoginManager
    login_manager = LoginManager()
    login_manager.login_view = 'auth.login'
    login_manager.init_app(app)

    # User loader for LoginManager
    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))
    
    # Initialize Flask-Migrate
    migrate = Migrate(app, db)

    # Return the configured Flask app
    return app

    
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os
import secrets
from os import path
from flask_login import LoginManager, current_user 
from flask_migrate import Migrate

db = SQLAlchemy()
DB_NAME = "database.db"

def create_app():
    app = Flask(__name__)

    @app.context_processor
    def inject_user():
            return dict(user=current_user)
    
    app.config['SECRET_KEY'] = _load_secret_key()
    # Flask-SQLAlchemy 3 resolves relative SQLite paths against instance/;
    # keep the database where 2.x put it (website/database.db).
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{path.join(app.root_path, DB_NAME)}"
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
        return db.session.get(User, int(id))
    
    migrate = Migrate(app, db)

    
    
    return app

    


def _load_secret_key():
    """Use SECRET_KEY from the environment; otherwise keep a random key in a git-ignored file."""
    key = os.environ.get("SECRET_KEY")
    if key:
        return key
    key_file = path.join(path.dirname(path.abspath(__file__)), ".secret_key")
    if path.exists(key_file):
        with open(key_file) as f:
            key = f.read().strip()
        if key:
            return key
    key = secrets.token_hex(32)
    with open(key_file, "w") as f:
        f.write(key)
    return key

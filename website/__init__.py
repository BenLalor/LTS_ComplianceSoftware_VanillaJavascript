from flask import Flask
from flask_sqlalchemy import SQLAlchemy
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
    
    app.config['SECRET_KEY'] = 'sdifdsnmyrqfdtla'
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

    
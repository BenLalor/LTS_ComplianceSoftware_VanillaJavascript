from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key="myKey123"
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.sqlite3'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)

class users(db.Model):
    _id = db.Column("id", db.Integer, primary_key=True)
    name = db.Column(db.String(100))

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/lts")
def lts():
    return render_template("lts.html")

@app.route("/comingSoon")
def comingSoon():
    return render_template("comingSoon.html")

if __name__ == "__main__":
    db.create_all()
    app.run(debug=True)
    
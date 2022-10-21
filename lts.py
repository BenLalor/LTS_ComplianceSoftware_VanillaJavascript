from flask import Flask, render_template

app = Flask(__name__)
app.secret_key="myKey123"

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/lts")
def lts():
    return render_template("lts.html")

if __name__ == "__main__":
    app.run(debug=True)
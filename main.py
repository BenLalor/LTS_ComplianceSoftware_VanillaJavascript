from website import create_app

app = create_app()

if __name__ == "__main__":
    # run the application
    app.run(debug=True)

# Trigger redeploy again and again and again!
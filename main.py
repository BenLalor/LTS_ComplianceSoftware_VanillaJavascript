# Import the create_app function from the website module
from website import create_app

# Create an instance of the Flask application
app = create_app()

# This block is only executed when this script is run directly, not when it's imported as a module
if __name__ == "__main__":
    # Run the Flask development server
    # debug=True enables debug mode, providing detailed error messages and enabling certain features
    # like hot reloading when the code changes
    app.run(debug=True)
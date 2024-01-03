# 2022 LTS Web Form

## Description

This repository stores Ben Lalor's 2022 NRCC-LTS Flask web application. The web application is run with python3 using Flask's micro web framework. The web application asks the user for project information related to the electrical systems, stores the data in a database and then writes it to an XML file upon completion.

## Setting up and Running the Application

### Prerequisites:

- python 3.12.2
  - https://www.python.org/downloads/
- git
  - (https://git-scm.com/downloads)

### Steps:

1. Clone the repository:

- git clone https://github.com/BenLalor/LTS.git

2. Create a virtual environment

- macOS/Linux:
  - python3 -m venv venv
  - source venv/bin/activate
- Windows:
  - python -m venv venv
  - venv\Scripts\activate

3. Install Dependencies

- pip install -r requirements.txt

4. Run the application

- python3 main.py

5. Access the application:

- Open your web browser and visit http://127.0.0.1:5000/ (or the port specified in your app configuration).

### Additional Notes:

Virtual environments: Using a virtual environment isolates project-specific dependencies and avoids conflicts with other Python projects on your system.
Dependencies: The requirements.txt file lists all required Python libraries for the application.
Main file: The main.py file is the entry point of the Flask application.
Port: The default port for Flask applications is 5000, but it can be configured in your app settings.
Windows users: Ensure you use python instead of python3 in the command line if you only have Python 3 installed.
Troubleshooting: If you encounter any issues, check the console output for error messages or refer to the Flask documentation for guidance.

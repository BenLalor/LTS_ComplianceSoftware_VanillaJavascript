# 2022 LTS Web Form
Check out my web app hosted on Azure here: https://lts-vanillajs.azurewebsites.net/
## Description

This repository stores Ben Lalor's 2022 NRCC-LTS Flask web application. The web application is run with python3 using Flask's micro web framework. The web application asks the user for project information related to the electrical systems, stores the data in a database and then writes it to an XML file upon completion.

## How to Install and Run the Project

You will need the following to run this application:

- python 3.10 or newer (3.9 is end-of-life and can't install the patched urllib3/requests)
  - https://www.python.org/downloads/
- sqlAlchemy
  - https://pypi.org/project/SQLAlchemy/
- Flask
  - https://pypi.org/project/Flask/

## Secret key

The app signs login cookies with `SECRET_KEY`. Set it as an environment variable in any deployment. If it isn't set, the app creates a random key in `website/.secret_key` on first run (git-ignored) and reuses it, so local logins survive restarts.

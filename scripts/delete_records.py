from ..website.models import LTS, User
from website import db

def delete_all_records():
    # Delete all records from the table
    db.session.query(LTS).delete()
    db.session.query(User).delete()

    # Commit the changes
    db.session.commit()

if __name__ == "__main__":
    # Run the script when executed directly
    delete_all_records()

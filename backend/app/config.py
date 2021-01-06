import os

class Config:
    SECRET_KEY=os.environ.get('SECRET_KEY')
    SQL_DATABASE_URI=os.environ.get('DATABASE_URL')
    SQLALCHEMY_TRACK_MODIFICATIONS=False
    SQLALCHEMY_ECHO=True
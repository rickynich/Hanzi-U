from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(db.Model, UserMixin):
  __tablename__= 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(40), nullable= False, unique= True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  password = db.Column(db.String(255), nullable = False)
  exp = db.Column(db.Integer, nullable = True)

  # decks = db.relationship("Deck", back_populates="user")


@property
def password(self):
  return self.password


@password.setter
def password(self, password):
  self.password = generate_password_hash(password)


def check_password(self, password):
  return check_password_hash(self.password, password)

def to_dict(self):
  return {
    "id": self.id,
    "username": self.username,
    "email": self.email,
    "exp": self.exp
  }

# def __repr__(self):
#   return '<User>{}'.format(self.id)
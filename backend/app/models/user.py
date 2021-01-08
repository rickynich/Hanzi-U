from .db import db
from .deck import Deck
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


deck_completions = db.Table(
    "completions",  # tablename
    db.Model.metadata,  # inheritance
    db.Column('user_id', db.Integer, db.ForeignKey(
        "users.id"), primary_key=True),  # leader
    db.Column('deck_id', db.Integer, db.ForeignKey(
        "decks.id"), primary_key=True),  # follower
)


class User(db.Model, UserMixin):
  __tablename__= 'users'

  id = db.Column(db.Integer, primary_key=True)
  username = db.Column(db.String(40), nullable= False, unique= True)
  email = db.Column(db.String(255), nullable = False, unique = True)
  hashed_password = db.Column(db.String(255), nullable = False) 
  exp = db.Column(db.Integer, nullable = True, default=0)

  decks = db.relationship("Deck", back_populates="user")

  # deck_tracking = db.relationship(
  #   'User', secondary="deck_completions",
  #   primaryjoin=id == deck_completions.c.deck_id, # replace with deck  
  #   secondaryjoin=id == deck_completions.c.user_id, # replace with user
  #   backref="deck_completions"
  # )

  @property
  def password(self):
    return self.hashed_password


  @password.setter
  def password(self, password):
    print("In password setter***********", password)
    self.hashed_password = generate_password_hash(password)
    print("***********In password setter", self.hashed_password)


  def check_password(self, password):
    return check_password_hash(self.password, password)


  def to_dict(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "exp": self.exp
    }

  def to_dict_full(self):
    return {
      "id": self.id,
      "username": self.username,
      "email": self.email,
      "exp": self.exp,
      "deck_completions": [deck.to_dict() for deck in self.deck_completions]
    }

# def __repr__(self):
#   return '<User>{}'.format(self.id)
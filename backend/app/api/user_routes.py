from flask import Blueprint, request
from flask_login import login_required
from app.models import User, db

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict_full() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route("/<int:id>", methods=["PUT"])
def addExp(id):
    user = User.query.get(id)
    print("User in exp", user)
    user.exp = request.json['exp'] # or user.exp
    db.session.commit()
    print("User in exp", user)
    return user.to_dict()


# @user_routes.route('/exp', methods=['POST'])
# @login_required
# def exp_gain(id):
#     """
#     Gives a user exp
#     """
#     user = User.query.filter(User.email == form.data['email']).first()

#     user_id = request.get_json().get('id')
#     expGain = request.get_json().get('exp')

#     experience = User(exp+expGain)

#     db.session.add(experience)
#     db.session.commit()
#     print("User in exp", user)
#     return user.to_dict()


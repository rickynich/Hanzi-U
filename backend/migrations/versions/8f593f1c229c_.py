"""join table
Revision ID: 8f593f1c229c
Revises: 9809fac1dea1
Create Date: 2021-01-08 19:18:45.118490
"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8f593f1c229c'
down_revision = '9809fac1dea1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('deck_completions_deck_id_fkey', 'deck_completions', type_='foreignkey')
    op.create_foreign_key(None, 'deck_completions', 'decks', ['deck_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    pass
    # op.drop_constraint(None, 'deck_completions', type_='foreignkey')
    # op.create_foreign_key('deck_completions_deck_id_fkey', 'deck_completions', 'users', ['deck_id'], ['id'])
    # ### end Alembic commands ###
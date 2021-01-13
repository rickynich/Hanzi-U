"""join table

Revision ID: 9809fac1dea1
Revises: 5bf2d9da8485
Create Date: 2021-01-08 16:28:32.467376

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9809fac1dea1'
down_revision = '5bf2d9da8485'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('deck_completions',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('deck_id', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['deck_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'deck_id')
    )
    op.drop_table('completions')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('completions',
    sa.Column('user_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.Column('deck_id', sa.INTEGER(), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['deck_id'], ['decks.id'], name='completions_deck_id_fkey'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], name='completions_user_id_fkey'),
    sa.PrimaryKeyConstraint('user_id', 'deck_id', name='completions_pkey')
    )
    # op.drop_table('deck_completions')
    # ### end Alembic commands ###

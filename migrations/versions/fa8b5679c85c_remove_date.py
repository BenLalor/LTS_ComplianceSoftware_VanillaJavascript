"""remove date

Revision ID: fa8b5679c85c
Revises: 234a959ba933
Create Date: 2023-11-13 17:44:24.031052

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa8b5679c85c'
down_revision = '234a959ba933'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lts', schema=None) as batch_op:
        batch_op.drop_column('date')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('date', sa.DATE(), nullable=False))

    # ### end Alembic commands ###

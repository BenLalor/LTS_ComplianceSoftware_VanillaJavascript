"""Add Table A fields

Revision ID: 17e27f7d4714
Revises: 6aca68373e0a
Create Date: 2023-11-14 17:33:29.918231

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '17e27f7d4714'
down_revision = '6aca68373e0a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lts', schema=None) as batch_op:
        batch_op.add_column(sa.Column('project_location', sa.String(length=150), nullable=False))
        batch_op.add_column(sa.Column('climate_zone', sa.Integer(), nullable=False))
        batch_op.add_column(sa.Column('healthcare', sa.Boolean(), nullable=False))
        batch_op.add_column(sa.Column('multifamily_GTE4stories', sa.Boolean(), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('lts', schema=None) as batch_op:
        batch_op.drop_column('multifamily_GTE4stories')
        batch_op.drop_column('healthcare')
        batch_op.drop_column('climate_zone')
        batch_op.drop_column('project_location')

    # ### end Alembic commands ###
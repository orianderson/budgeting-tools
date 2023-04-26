import pandas as pd
import os

from app.client.prisma_client import db


class Supplies:
    def __init__(self):
        dirname = os.path.dirname(__file__)
        self.filename = os.path.join(dirname, '../../insumos.xls')

    def get_insumos(self):
        return pd.read_excel(self.filename)

    async def save_in_database(self):
        client = await db()
        df = self.get_insumos()

        for i in range(df.shape[0]):
            supply = {
                'code': str(df.loc[i][0]),
                'description': df.loc[i][1].rstrip(),
                'unit': df.loc[i][2].rstrip(),
                'price': float(df.loc[i][3])
            }

            await client.supplies.create(
                data=supply
            )

        await client.disconnect()

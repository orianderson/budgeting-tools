import pandas as pd
import math
import os

from app.client.prisma_client import db


class Compositions:
    def __init__(self):
        dirname = os.path.dirname(__file__)
        self.filename = os.path.join(dirname, '../../compo-sinapi.xls')

    def get_compositions(self):
        return pd.read_excel(self.filename)

    async def save_compositions(self):
        client = await db()

        df = self.get_compositions()

        codes = []
        for i in range(df.shape[0]):
            ref = df.loc[i]
            code = ref[1]
            if code in codes:
                pass
            else:
                compo = {
                    'id': str(ref[1]),
                    'group': ref[0],
                    'description': ref[2],
                    'unit': ref[3],
                    'price': float(ref[4].replace('.', '').replace(',', '.'))
                }
                codes.append(code)
                await client.compositions.create(
                    data=compo
                )
        await client.disconnect()

    async def save_inputs(self):
        client = await db()

        df = self.get_compositions()

        for i in range(df.shape[0]):
            ref = df.loc[i]
            code = ref[1]
            if math.isnan(ref[6]):
                pass
            else:
                supply = {
                    'input': str(int(ref[6])),
                    'composition': str(code),
                    'type': ref[5],
                    'description': ref[7],
                    'unit': ref[8],
                    'coefficient': float(ref[9].replace('.', '').replace(',', '.')),
                    'total': float(ref[10].replace('.', '').replace(',', '.'))
                }

                await client.inputs.create(
                    data=supply
                )

        await client.disconnect()

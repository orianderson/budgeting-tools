import asyncio
# from app.supplies.supplies import Supplies
from app.compositions.compositions import Compositions

# supplies = Supplies()
compositions = Compositions()

if __name__ == '__main__':
    # asyncio.run(supplies.save_in_database())
    asyncio.run(compositions.save_inputs())

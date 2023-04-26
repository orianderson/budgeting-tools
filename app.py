import asyncio
from app.supplies.supplies import Supplies

supplies = Supplies()

if __name__ == '__main__':
    asyncio.run(supplies.save_in_database())

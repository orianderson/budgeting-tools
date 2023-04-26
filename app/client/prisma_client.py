from prisma import Prisma


async def db() -> Prisma:
    prisma = Prisma()

    await prisma.connect()

    return prisma

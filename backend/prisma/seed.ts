import { PrismaClient, UserRole } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password', 10);

  await prisma.user.createMany({
    data: [
      {
        email: 'user@example.com',
        password: hashedPassword,
        name: 'Test User',
        role: UserRole.USER,
      },
      {
        email: 'vendor@example.com',
        password: hashedPassword,
        name: 'Test Vendor',
        role: UserRole.VENDOR,
      },
      {
        email: 'admin@example.com',
        password: hashedPassword,
        name: 'Test Admin',
        role: UserRole.ADMIN,
      },
    ],
    skipDuplicates: true,
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
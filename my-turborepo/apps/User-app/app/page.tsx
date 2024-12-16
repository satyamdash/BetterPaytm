import {PrismaClient} from @repo/db/client;
const prisma = new PrismaClient();
export default function Page() {
  return (
    <div className="text-2xl">
      Hi there
    </div>
  );
}

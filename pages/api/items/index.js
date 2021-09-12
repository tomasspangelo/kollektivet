import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const session = await getSession({ req });
  const result = await prisma.item.findMany({
    where: {
      kollektivId: session?.user?.kollektivId,
    },
    include: {
      createdBy: true,
    },
  });
  res.json(result);
}

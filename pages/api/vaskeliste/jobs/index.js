import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const session = await getSession({ req });
  const result = await prisma.job.findMany({
    where: {
      kollektivId: session?.user?.kollektivId,
    },
    include: {
      createdBy: true,
      finishedBy: true,
    },
    orderBy: [
      {
        bought: "asc",
      },
      {
        updatedAt: "desc",
      },
    ],
  });
  res.json(result);
}

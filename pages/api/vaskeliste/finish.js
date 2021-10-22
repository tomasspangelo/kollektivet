import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const { id } = req.body;
  const result = await prisma.userJob.update({
    where: {
      id: id,
    },
    data: {
      finished: true,
      finishedAt: new Date(Date.now()),
    },
  });
  res.json(result);
}

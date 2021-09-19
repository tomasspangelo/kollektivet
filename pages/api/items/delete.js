import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({
    req,
  });
  const { id } = req.body;
  const result = await prisma.item.delete({
    where: {
      id: id,
    },
  });
  res.json(result);
}

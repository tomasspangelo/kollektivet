import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({
    req,
  });
  const { item } = req.body;
  const result = await prisma.item.update({
    where: {
      id: item.id,
    },
    data: {
      pricePayed: item.pricePayed,
    },
  });
  res.json(result);
}

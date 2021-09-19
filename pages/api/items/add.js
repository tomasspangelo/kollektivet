import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({
    req,
  });
  const { title, content } = req.body;
  const result = await prisma.item.create({
    data: {
      title: title,
      content: content,
      bought: false,
      createdBy: {
        connect: {
          id: session?.user?.id,
        },
      },
      kollektiv: {
        connect: {
          id: session?.user?.kollektivId,
        },
      },
    },
  });
  res.json(result);
}

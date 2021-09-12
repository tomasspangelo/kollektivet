import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const session = await getSession({ req });
  const result = await prisma.kollektiv.findFirst({
    where: {
      medlemmer: {
        some: {
          id: session?.user?.id,
        },
      },
    },
    include: {
      medlemmer: true,
    },
  });
  res.json(result);
}

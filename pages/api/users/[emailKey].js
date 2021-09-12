import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { emailKey } = req.query;

  const result = await prisma.user.findMany({
    where: {
      email: {
        contains: emailKey,
      },
      kollektivId: {
        equals: null,
      },
    },
  });
  res.json(result);
}

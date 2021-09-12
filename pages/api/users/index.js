import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { email } = req.body;

  const result = await prisma.user.findMany({
    where: {
      email: {
        contains: email,
      },
      kollektivId: {
        equals: null,
      },
    },
  });
  res.json(result);
}

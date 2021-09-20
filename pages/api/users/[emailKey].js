import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { emailKey } = req.query;
  console.log(emailKey);

  const result = await prisma.user.findMany({
    where: {
      OR: [
        {
          email: {
            contains: emailKey,
          },
        },
        {
          name: {
            contains: emailKey,
          },
        },
      ],
      kollektivId: {
        equals: null,
      },
    },
  });
  res.json(result);
}

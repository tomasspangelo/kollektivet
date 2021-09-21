import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { member } = req.body;
  const result = await prisma.user.update({
    where: {
      id: member.id,
    },
    data: {
      kollektivet: {
        disconnect: true,
      },
    },
  });
  res.json(result);
}

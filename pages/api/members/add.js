import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { id, kollektivId } = req.body;
  const result = await prisma.kollektiv.update({
    where: {
      id: kollektivId,
    },
    data: {
      medlemmer: {
        connect: {
          id: id,
        },
      },
    },
  });
  res.json(result);
}

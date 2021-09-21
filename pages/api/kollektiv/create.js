import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({
    req,
  });
  const { navn, adresse, postnummer, poststed } = req.body;
  const result = await prisma.kollektiv.create({
    data: {
      navn: navn,
      adresse: adresse,
      postnummer: postnummer,
      poststed: poststed,
      medlemmer: {
        connect: {
          id: session?.user?.id,
        },
      },
    },
  });
  res.json(result);
}

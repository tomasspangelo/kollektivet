import { getSession } from "next-auth/client";
import prisma from "../../../lib/prisma";
import moment from "moment";

export default async function handle(req, res) {
  const weekNow = moment(new Date(Date.now())).isoWeek();
  const yearNow = moment(new Date(Date.now())).year();
  const session = await getSession({ req });
  const result = await prisma.vaskeliste.findMany({
    where: {
      kollektivId: session?.user?.kollektivId,
    },
    include: {
      rader: {
        where: {
          week: {
            gt: weekNow - 1,
          },
          year: {
            gt: yearNow - 1,
          },
        },
        include: {
          userJobs: {
            orderBy: {
              jobId: "asc",
            },
            include: {
              job: true,
              user: true,
            },
          },
        },
      },
    },
  });
  res.json(result);
}

import prisma from "../../../lib/prisma";
import { getSession } from "next-auth/client";

export default async function handle(req, res) {
  const session = await getSession({
    req,
  });
  const { selected, jobs, firstWeek, numWeeks, kollektivId, year } = req.body;
  const vaskeliste = await prisma.vaskeliste.create({
    data: {
      kollektiv: {
        connect: {
          id: kollektivId,
        },
      },
    },
  });
  let jobs_db = [];
  for (let j in jobs) {
    const job = await prisma.job.create({
      data: {
        name: jobs[j].name,
        description: jobs[j].description,
        index: parseInt(j),
        vaskeliste: {
          connect: {
            id: vaskeliste.id,
          },
        },
      },
    });
    jobs_db[j] = job;
  }
  let newYear = year;
  let offset = 0;
  for (let i in [...Array(numWeeks).keys()]) {
    let week = firstWeek + parseInt(i);
    console.log(week);
    if (week > 52) {
      week = week % 52;
      newYear++;
    }
    const row = await prisma.rad.create({
      data: {
        week: week,
        year: newYear,
        vaskeliste: {
          connect: {
            id: vaskeliste.id,
          },
        },
      },
    });
    for (let j in jobs_db) {
      const data = {
        finished: false,
        rad: {
          connect: {
            id: row.id,
          },
        },
        job: {
          connect: {
            id: jobs_db[(j + offset) % jobs_db.length].id,
          },
        },
      };
      if (selected[j] !== -1) data["user"] = { connect: { id: selected[j] } };
      const userJob = await prisma.userJob.create({ data: data });
    }
    offset++;
  }
  res.json(vaskeliste);
}

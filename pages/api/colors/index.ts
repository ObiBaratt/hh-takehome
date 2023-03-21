import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/src/prisma/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    let { page = 1, limit = 12, id = null, total = false } = req.query;

    if (total) {
        const results = await prisma.color.count();
        return res.status(200).json(results);
    }

    if (id) {
        const results = await prisma.color.findUnique({
            where: {
                id: Number(id)
            }
        });
        return res.status(200).json(results);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const results = await prisma.color.findMany({
        skip,
        take: Number(limit),
    })

    const totalAvailable = await prisma.color.count();
    const totalPages = Math.ceil(totalAvailable / Number(limit));

    res.setHeader('Total-Available', totalAvailable);
    res.setHeader('Total-Pages', totalPages);
    res.setHeader('Current-Page', page);

    return res.status(200).json(results);
}

export default handler;

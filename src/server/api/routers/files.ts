import { z } from "zod";
import generateTree from "~/lib/files";
import {
    createTRPCRouter,
    publicProcedure,
} from "~/server/api/trpc";

export const filesRouter = createTRPCRouter({
    getAll: publicProcedure
        .input(z.any())
        .query(({ ctx, input }) => {
            const targetDir = "public/assets/builder";
            const tree = generateTree(targetDir);
            return {
                input,
                meta: {
                    date: new Date(),
                },
                data: tree,
            };
        }),
});

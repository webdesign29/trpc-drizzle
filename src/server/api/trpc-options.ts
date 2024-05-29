import superjson from "superjson";
import { ZodError } from "zod";

const trpcOptions = {
    transformer: superjson,
    errorFormatter({ shape, error }): any {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError:
                    error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
}

export default trpcOptions;

import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "Username must be atleast 10 characters" })
    .max(300, { message: "Username must be no more than 300 characters" }),
});

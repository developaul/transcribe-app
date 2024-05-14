"use client"

import { z } from "zod"

export const projectSchema = z.object({
  name: z.string().min(2).max(30),
})

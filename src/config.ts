import { z } from "zod";

export const DEFAULT_MODEL = "gemini-nano-banana-2.1";

export const ConfigSchema = z.object({
  geminiApiKey: z.string().min(1, "Gemini API key is required"),
  modelName: z.string().min(1, "Model name is required").default(DEFAULT_MODEL),
});

export type Config = z.infer<typeof ConfigSchema>;

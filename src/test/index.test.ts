import { ConfigSchema, DEFAULT_MODEL } from "../config";

describe("ConfigSchema", () => {
  test("defaults the model name when not provided", () => {
    const config = ConfigSchema.parse({ geminiApiKey: "test-api-key" });

    expect(config.geminiApiKey).toBe("test-api-key");
    expect(config.modelName).toBe(DEFAULT_MODEL);
    expect(DEFAULT_MODEL).toBe("gemini-nano-banana-2.1");
  });

  test("accepts a custom model name", () => {
    const config = ConfigSchema.parse({
      geminiApiKey: "test-api-key",
      modelName: "gemini-3-pro-image",
    });

    expect(config.modelName).toBe("gemini-3-pro-image");
  });

  test("rejects an empty API key", () => {
    expect(() => ConfigSchema.parse({ geminiApiKey: "" })).toThrow();
  });

  test("rejects an empty model name", () => {
    expect(() =>
      ConfigSchema.parse({ geminiApiKey: "test-api-key", modelName: "" })
    ).toThrow();
  });
});

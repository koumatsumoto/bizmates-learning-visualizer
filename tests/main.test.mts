import { describe, it, expect } from "vitest";
import { visualizeLearningData } from "../src/main.mts";

describe("visualizeLearningData", () => {
  it("should return student history base info", async () => {
    const token = "test-token";
    const programId = 1;
    const rankId = 1;
    
    const result = await visualizeLearningData(token, programId, rankId);
    expect(result).toBeDefined();
    expect(typeof result).toBe("object");
  });
});

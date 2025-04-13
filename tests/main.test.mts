import { describe, it, expect } from "vitest";
import { visualizeLearningData } from "../src/main.mts";

describe("visualizeLearningData", () => {
  it("should return the input data", () => {
    const testData = { test: "data" };
    const result = visualizeLearningData(testData);
    expect(result).toEqual(testData);
  });
}); 
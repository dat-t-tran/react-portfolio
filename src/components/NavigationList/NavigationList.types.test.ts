import { describe, it, expect } from "vitest";
import { navigation } from "./NavigationList.types";

describe("NavigationList.types", () => {
  it("should have the correct number of navigation items", () => {
    expect(navigation.length).toBe(4);
  });

  it("should have the correct properties for each navigation item", () => {
    navigation.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("name");
      expect(item).toHaveProperty("href");
    });
  });

  it("should have unique ids for each navigation item", () => {
    const ids = navigation.map((item) => item.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("should have valid href values for each navigation item", () => {
    navigation.forEach((item) => {
      expect(item.href).toMatch(/^\/[a-zA-Z0-9-]*$/);
    });
  });

  it("should have correct names for each navigation item", () => {
    const expectedNames = ["Home", "Services", "Find a Doctor", "About Us"];
    const actualNames = navigation.map((item) => item.name);
    expect(actualNames).toEqual(expectedNames);
  });
});

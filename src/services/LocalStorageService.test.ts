import LocalStorageService from "./LocalStorageService";
import { Post } from "../interfaces/post.interface";

describe("LocalStorageService", () => {
  const post1: Post = {
    id: "1",
    number: 1,
    category: "testing",
    createAt: "2023-09-03",
    title: "Test Post 1",
    description: "Lorem ipsum dolor sit amet",
  };
  const post2: Post = {
    id: "2",
    number: 1,
    category: "testing",
    createAt: "2023-09-03",
    title: "Test Post 2",
    description: "Consectetur adipiscing elit",
  };
  const post3: Post = {
    id: "3",
    number: 1,
    category: "testing",
    createAt: "2023-09-03",
    title: "Test Post 3",
    description: "Sed do eiusmod tempor incididunt",
  };

  const testKey = "test-key";

  beforeEach(() => {
    localStorage.clear();
  });

  describe("setItem", () => {
    test("should save an array of posts to localStorage", async () => {
      await LocalStorageService.setItem(testKey, [post1, post2]);
      const value = JSON.parse(localStorage.getItem(testKey)!);
      expect(value).toEqual([post1, post2]);
    });
  });

  describe("getItem", () => {
    test("should retrieve an array of posts from localStorage", async () => {
      localStorage.setItem(testKey, JSON.stringify([post1, post2, post3]));
      const value = await LocalStorageService.getItem(testKey);
      expect(value).toEqual([post1, post2, post3]);
    });

    test("should return null if key is not found in localStorage", async () => {
      const value = await LocalStorageService.getItem(testKey);
      expect(value).toBeNull();
    });
  });

  describe("removeItem", () => {
    test("should remove an item from localStorage", async () => {
      localStorage.setItem(testKey, JSON.stringify([post1, post2]));
      await LocalStorageService.removeItem(testKey);
      const value = localStorage.getItem(testKey);
      expect(value).toBeNull();
    });
  });
});

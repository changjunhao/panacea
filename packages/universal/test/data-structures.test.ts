import { LinkedList } from "../src";

describe("Data Structures:", () => {
  describe("LinkedList:", () =>
    test("should create a linked list", () => {
      const list = new LinkedList<number>();
      list.insertFirst(1);
      list.insertFirst(2);
      list.insertFirst(3);
      list.insertLast(4);
      list.insertAt(3, 5);
      expect(list.toString()).toBe("3,2,1,5,4");
      expect(list.size).toBe(5);
      expect(list.head.value).toBe(3);
      expect(list.head.next.value).toBe(2);
      expect(list.tail.value).toBe(4);
      expect([...list.map((e) => e)]).toStrictEqual([3, 2, 1, 5, 4]);

      list.removeAt(1);
      expect(list.getAt(1).value).toBe(1);
      expect(list.head.next.value).toBe(1);
      expect([...list.map((e) => e)]).toStrictEqual([3, 1, 5, 4]);

      list.reverse();
      expect([...list.map((e) => e)]).toStrictEqual([4, 5, 1, 3]);

      expect(list.removeAt(3).value).toBe(3);

      list.clear();
      expect(list.size).toBe(0);
      expect(list.isEmpty).toBe(true);

      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();

      // @ts-ignore
      for (const listElement of list) {
        expect([...list.map((e) => e)].includes(listElement.value)).toBe(true);
      }
    }));
});

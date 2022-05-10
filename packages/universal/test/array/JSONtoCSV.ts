import { JSONtoCSV } from "../../src";

export default () => {
  it("should convert JSON to CSV", () => {
    const json = [
      {
        name: "John",
        age: 30,
      },
      {
        name: "Mary",
        age: 25,
      },
    ];
    const csv = JSONtoCSV(json, ["name", "age"]);
    expect(csv).toBe(`name,age\n"John","30"\n"Mary","25"`);
  });
  it("should convert JSON to CSV with custom separator", () => {
    const json = [
      {
        name: "John",
        age: 30,
      },
      {
        name: "Mary",
        age: 25,
      },
    ];
    const csv = JSONtoCSV(json, ["name", "sex"], ";");
    expect(csv).toBe(`name;sex\n"John";""\n"Mary";""`);
  });
};

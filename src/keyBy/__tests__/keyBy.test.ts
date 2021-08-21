import keyBy from "../keyBy";

describe("keyBy", () => {
  test("sunny scenario", () => {
    const data = [
      { id: 1, name: "Bob" },
      { id: 2, name: "James" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];

    const results = keyBy(data, "id");

    expect(results).toMatchInlineSnapshot(`
      Object {
        "1": Object {
          "id": 1,
          "name": "Bob",
        },
        "2": Object {
          "id": 2,
          "name": "James",
        },
        "3": Object {
          "id": 3,
          "name": "Emily",
        },
        "4": Object {
          "id": 4,
          "name": "Jane",
        },
      }
    `);
  });
});

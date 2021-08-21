import keyByAsMap from "../keyByAsMap";

describe("keyByAsMap", () => {
  test("sunny scenario", () => {
    const data = [
      { id: 1, name: "Bob" },
      { id: 2, name: "James" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];

    const results = keyByAsMap(data, "id");

    expect(results).toMatchInlineSnapshot(`
      Map {
        1 => Object {
          "id": 1,
          "name": "Bob",
        },
        2 => Object {
          "id": 2,
          "name": "James",
        },
        3 => Object {
          "id": 3,
          "name": "Emily",
        },
        4 => Object {
          "id": 4,
          "name": "Jane",
        },
      }
    `);
  });
});

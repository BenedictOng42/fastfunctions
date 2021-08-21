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

  test("returns empty for non-existent field", () => {
    const data = [
      { id: 1, name: "Bob" },
      { id: 2, name: "James" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];
    const results = keyByAsMap(data, "nothing" as any);
    expect(results).toMatchInlineSnapshot(`Map {}`);
  });

  test("skips empty keys", () => {
    const data = [
      { id: 1, name: "Bob", email: "bob@gmail.com" },
      { id: 2, name: "James", email: "james@gmail.com" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];
    const results = keyByAsMap(data, "email");
    expect(results).toMatchInlineSnapshot(`
      Map {
        "bob@gmail.com" => Object {
          "email": "bob@gmail.com",
          "id": 1,
          "name": "Bob",
        },
        "james@gmail.com" => Object {
          "email": "james@gmail.com",
          "id": 2,
          "name": "James",
        },
      }
    `);
  });

  test("overwrites duplicate keys", () => {
    const data = [
      { id: 1, name: "Bob", email: "bob@gmail.com" },
      { id: 1, name: "James", email: "james@gmail.com" },
      { id: 3, name: "Emily" },
      { id: 3, name: "Jane" },
    ];
    const results = keyByAsMap(data, "id");
    expect(results).toMatchInlineSnapshot(`
      Map {
        1 => Object {
          "email": "james@gmail.com",
          "id": 1,
          "name": "James",
        },
        3 => Object {
          "id": 3,
          "name": "Jane",
        },
      }
    `);
  });
});

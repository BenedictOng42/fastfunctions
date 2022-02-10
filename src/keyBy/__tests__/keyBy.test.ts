import { keyBy, keyByPath } from "../keyBy";

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

  test("returns empty for non-existent field", () => {
    const data = [
      { id: 1, name: "Bob" },
      { id: 2, name: "James" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];
    const results = keyBy(data, "nothing" as any);
    expect(results).toMatchInlineSnapshot(`Object {}`);
  });

  test("skips empty keys", () => {
    const data = [
      { id: 1, name: "Bob", email: "bob@gmail.com" },
      { id: 2, name: "James", email: "james@gmail.com" },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];
    const results = keyBy(data, "email");
    expect(results).toMatchInlineSnapshot(`
      Object {
        "bob@gmail.com": Object {
          "email": "bob@gmail.com",
          "id": 1,
          "name": "Bob",
        },
        "james@gmail.com": Object {
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
    const results = keyBy(data, "id");
    expect(results).toMatchInlineSnapshot(`
      Object {
        "1": Object {
          "email": "james@gmail.com",
          "id": 1,
          "name": "James",
        },
        "3": Object {
          "id": 3,
          "name": "Jane",
        },
      }
    `);
  });
});

describe("keyByPath", () => {
  test("keys by path correctly", () => {
    const data = [
      { id: 1, name: "Bob", meta: { id: 111 } },
      { id: 2, name: "James", meta: { id: 222 } },
      { id: 3, name: "Emily", meta: { id: 333 } },
      { id: 4, name: "Jane", meta: { id: 444 } },
    ];
    const results = keyByPath(data, (x) => x.meta.id);
    expect(results).toMatchInlineSnapshot(`
      Object {
        "111": Object {
          "id": 1,
          "meta": Object {
            "id": 111,
          },
          "name": "Bob",
        },
        "222": Object {
          "id": 2,
          "meta": Object {
            "id": 222,
          },
          "name": "James",
        },
        "333": Object {
          "id": 3,
          "meta": Object {
            "id": 333,
          },
          "name": "Emily",
        },
        "444": Object {
          "id": 4,
          "meta": Object {
            "id": 444,
          },
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
    const results = keyByPath(data, (x) => (x as any)?.meta?.id);
    expect(results).toMatchInlineSnapshot(`Object {}`);
  });

  test("skips empty keys", () => {
    const data = [
      { id: 1, name: "Bob", meta: { id: 111 } },
      { id: 2, name: "James", meta: { id: 222 } },
      { id: 3, name: "Emily" },
      { id: 4, name: "Jane" },
    ];
    const results = keyByPath(data, (x) => x.meta?.id);
    expect(results).toMatchInlineSnapshot(`
      Object {
        "111": Object {
          "id": 1,
          "meta": Object {
            "id": 111,
          },
          "name": "Bob",
        },
        "222": Object {
          "id": 2,
          "meta": Object {
            "id": 222,
          },
          "name": "James",
        },
      }
    `);
  });

  test("overwrites duplicate keys", () => {
    const data = [
      { id: 1, name: "Bob", meta: { id: 111 } },
      { id: 2, name: "James", meta: { id: 111 } },
      { id: 3, name: "Emily" },
      { id: 3, name: "Jane" },
    ];
    const results = keyByPath(data, (x) => x.meta?.id);
    expect(results).toMatchInlineSnapshot(`
      Object {
        "111": Object {
          "id": 2,
          "meta": Object {
            "id": 111,
          },
          "name": "James",
        },
      }
    `);
  });
});

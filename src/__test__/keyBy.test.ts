import { keyBy } from "../keyBy";

describe("keyBy", () => {
  test("sunny scenario", () => {
    const dummies = [{ interestingKey: 1, uselessKey1: 2, uselessKey2: 3 }];

    const results = keyBy(dummies, "uselessKey1");

    expect(results).toMatchInlineSnapshot();
  });
});

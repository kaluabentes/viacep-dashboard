import { expect, it } from "vitest";
import formatZipCode from "../formatZipCode";

it("should format correctly zipcode", () => {
  const match = "69058-195";
  const input = formatZipCode("69058195");

  expect(input).toBe(match);
});

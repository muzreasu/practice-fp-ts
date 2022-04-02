import got from "got";
import { reformatUUIDWithErrorHandling } from "./practice_2";

jest.mock("got", () => ({ get: jest.fn() }));

describe("reformatUUIDWithErrorHandling", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return error message given error is a string", async () => {
    (got.get as jest.Mock).mockRejectedValue("API error");

    expect(await reformatUUIDWithErrorHandling()).toEqual("API error");
  });

  it("should return error message given error is an object", async () => {
    (got.get as jest.Mock).mockRejectedValue({ body: "API error" });

    expect(await reformatUUIDWithErrorHandling()).toEqual("API error");
  });
});
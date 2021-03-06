import got from "got";
import { reformatUUIDUsingTE } from "./practice_1";

jest.mock("got", () => ({ get: jest.fn() }));

describe("reformatUUIDUsingTE", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return formatted UUID given get UUID succeed", async () => {
    (got.get as jest.Mock).mockResolvedValue({ body: "d484cea2-5fde-40e4-8169-3101c99bd292" });

    expect(await reformatUUIDUsingTE()).toEqual("d484cea2,5fde,40e4,8169,3101c99bd292");
  });

  it("should return error given get UUID failed", async () => {
    (got.get as jest.Mock).mockRejectedValue("API error");

    expect(await reformatUUIDUsingTE()).toEqual("API error");
  });
});
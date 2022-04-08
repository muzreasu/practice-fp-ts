import got from "got";
import { validateRequest } from "./practice_3";

jest.mock("got", () => ({ get: jest.fn() }));

describe("validateRequest", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return request with UUID given a valid request", async () => {
    (got.get as jest.Mock).mockResolvedValue({ body: "d484cea2-5fde-40e4-8169-3101c99bd292" });

    expect(await validateRequest({ id: "132", name: "Apple" })).toEqual({
      id: "132",
      name: "Apple",
      uuid: "d484cea2,5fde,40e4,8169,3101c99bd292"
    });
  });

  it("should return error message given error is an object", async () => {
    (got.get as jest.Mock).mockRejectedValue({ body: "API error" });

    expect(await validateRequest({ id: "132", name: "Apple" })).toEqual("API error");
  });
});
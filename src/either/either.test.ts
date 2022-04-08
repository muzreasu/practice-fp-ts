import { validateUUID } from "./either";

describe("either", () => {
  it("should return uuid given uuid is valid", () => {
    expect(validateUUID("69f07739,a96e4508,b5c7,7009baa4e9c5")).toEqual({ "_tag": "Right", "right": "" });
  });

  it("should return invalid uuid error given uuid is less than 36 characters", () => {
    expect(validateUUID("69f07739-a96e-4508-b5c7")).toEqual({ "_tag": "Left", "left": "Invalid UUID" });
  });

  it("should return invalid uuid error given , is less than 4", () => {
    expect(validateUUID("69f07739a96e4508,b5c7,7009baa4e9c5")).toEqual({ "_tag": "Left", "left": "Invalid UUID" });
  });

  it("should return invalid uuid error given letters is less than 4", () => {
    expect(validateUUID("6960773929674508,b557,700945544955")).toEqual({ "_tag": "Left", "left": "Invalid UUID" });
  });
});
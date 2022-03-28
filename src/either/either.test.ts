import { validateUUID } from "./either";

describe('either', () => {
  it('should return uuid given uuid is valid', () => {
    expect(validateUUID('69f07739-a96e-4508-b5c7-7009baa4e9c5')).toEqual({"_tag": "Right", "right": ""})
  })
  it('should return invalid uuid error given uuid is invalid', () => {
    expect(validateUUID('69f07739-a96e-4508-b5c7')).toEqual({"_tag": "Left", "left": "Invalid UUID"})
  })
})
describe('pipe', () => {
  it('should return 72 given number is 2', () => {
    expect(addAndMultiplePipe(2)).toEqual(72)
  })
})

describe('flow', () => {
  it('should return 72 given number is 2', () => {
    expect(addAndMultipleFlow(2)).toEqual(72)
  })
})
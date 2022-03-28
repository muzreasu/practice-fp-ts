type Request = {
  readonly id: string,
  readonly uuid?: string,
  readonly name: string
}

// eslint-disable-next-line functional/no-return-void
export const validateRequest = (request: Request) => {
  // 在TE practice_2的基础上,实现：
  // 给定用户传进来的request只有id和name,需要我们将自己生成的UUID赋值给request,然后我们需要校验重新赋值的request里id,name都是string,且UUID是一个合法的UUID（使用either中的validateUUId方法）
}
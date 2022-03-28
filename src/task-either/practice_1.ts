import got from 'got'

// eslint-disable-next-line functional/no-return-void
export const reformatUUID = () => {
  // eslint-disable-next-line functional/no-expression-statement
  got.get('https://www.uuidgenerator.net/version4/bulk.json?amount=1')
    .then((res) => res.body.replace('-', ','))
    .catch((err) => err)
}

// eslint-disable-next-line functional/no-return-void
export const reformatUUIDUsingTE = () => {
  //用TE实现和上一个方法一样的功能,并且不能存在eslint warning
}
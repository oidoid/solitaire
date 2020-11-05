import {ObjectUtil} from './ObjectUtil'

test.each([
  ['empty', {}, {}],
  ['nonempty', {a: 1, b: 2, c: 3}, {1: 'a', 2: 'b', 3: 'c'}]
])('reverseRecord %s', (_, record, expected) =>
  expect(ObjectUtil.reverseRecord<void>(record)).toStrictEqual(expected)
)

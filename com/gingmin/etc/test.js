// describe("pow", function () {
//   //   it("2를 세 번 곱하면 8입니다.", function () {
//   //     assert.equal(pow(2, 3), 8);
//   //   });

//   //   it("3을 네 번 곱하면 81입니다.", function () {
//   //     assert.equal(pow(3, 4), 81);
//   //   });
//   function makeTest(x) {
//     let expected = x * x * x;
//     it(`${x}을/를 세 번 곱하면 ${expected}입니다.`, function () {
//       assert.equal(pow(x, 3), expected);
//     });
//   }

//   for (let x = 1; x <= 5; x++) {
//     makeTest(x);
//   }
// });

describe("test", function () {
  before(() => alert("테스트를 시작합니다 - 테스트가 시작되기 전"));
  after(() => alert("테스트를 종료합니다 - 테스트가 종료된 후"));

  beforeEach(() => alert("단일 테스트를 시작합니다 - 각 테스트 시작 전"));
  afterEach(() => alert("단일 테스트를 종료합니다 - 각 테스트 종료 후"));

  it("test 1", () => alert(1));
  it("test 2", () => alert(2));
});

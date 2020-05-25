import minWindow1 from './solution1';

describe(`Minimum Window Substring`, () => {
  const testCases: TestCase[] = [
    {
      text: 'a',
      characters: 'aa',
      expected: '',
    },
    {
      text: 'BDCDGEFJCSDVDM',
      characters: 'ABC',
      expected: '',
    },
    {
      text: 'ADOBECODEBANC',
      characters: 'ABC',
      expected: 'BANC',
    },
    {
      text: 'DDGCBDBBEEBFDDABEADCBDCADE',
      characters: 'ABC',
      expected: 'ADCB',
    },
  ];

  test.each<TestCase>(testCases)(
    `Solution 1`,
    ({ text, characters, expected }) =>
      expect(minWindow1(text, characters)).toBe(expected),
  );
});

interface TestCase {
  text: string;
  characters: string;
  expected: string;
}

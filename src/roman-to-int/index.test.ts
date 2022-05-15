import romanToInt from './index'

test('9 => is not a valid roman numeral', () => {
  try {
    romanToInt("9");
  } catch (error) {
    expect(error.message).toBe("Error: 9 is not a valid roman numeral.");
  }
});

test('"" => is not a valid roman numeral', () => {
  try {
    romanToInt("");
  } catch (error) {
    expect(error.message).toBe("Error: is not a valid roman numeral.");
  }
});

test('I => 1', () => {
  expect(romanToInt("I")).toBe(1);
});

test('II => 2', () => {
  expect(romanToInt("II")).toBe(2);
});

test('III => 3', () => {
  expect(romanToInt("III")).toBe(3);
});

test('IIII => is not a valid roman numeral', () => {
  try {
    romanToInt("IIII");
  } catch (error) {
    expect(error.message).toBe("Error: IIII is not a valid roman numeral.");
  }
});

test('IV => 4', () => {
  expect(romanToInt("IV")).toBe(4);
});

test('V => 5', () => {
  expect(romanToInt("V")).toBe(5);
});

test('VI => 6', () => {
  expect(romanToInt("VI")).toBe(6);
});

test('VII => 7', () => {
  expect(romanToInt("VII")).toBe(7);
});

test('VIII => 8', () => {
  expect(romanToInt("VIII")).toBe(8);
});

test('IX => 9', () => {
  expect(romanToInt("IX")).toBe(9);
});

test('X => 10', () => {
  expect(romanToInt("X")).toBe(10);
});

test('LVIII => 58', () => {
  expect(romanToInt("LVIII")).toBe(58);
});

test('MCMXCIV => 1994', () => {
  expect(romanToInt("MCMXCIV")).toBe(1994);
});

test('MMMCCCXC => 3390', () => {
  expect(romanToInt("MMMCCCXC")).toBe(3390);
});

test('MMMCMXCI => 3991', () => {
  expect(romanToInt("MMMCMXCI")).toBe(3991);
});

test('MMMCMXCIX => 3999', () => {
  expect(romanToInt("MMMCMXCIX")).toBe(3999);
});

test('MMMMD => is not a valid roman numeral', () => {
  try {
    romanToInt("MMMMD");
  } catch (error) {
    expect(error.message).toBe("Error: MMMMD is not a valid roman numeral.");
  }
});

test('MDOL => is not a valid roman numeral', () => {
  try {
    romanToInt("MDOL");
  } catch (error) {
    expect(error.message).toBe("Error: MDOL is not a valid roman numeral.");
  }
});
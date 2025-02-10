// math.test.js
import { test, expect } from 'vitest';

// Fonction simple à tester
const add = (a, b) => a + b;

// Test de la fonction add
test('add(2, 3) doit retourner 5', () => {
  expect(add(2, 3)).toBe(5);
});
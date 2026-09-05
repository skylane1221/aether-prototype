import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('px-4 py-2', 'bg-blue-500', 'text-white');
    expect(result).toBe('px-4 py-2 bg-blue-500 text-white');
  });

  it('handles conditional classes properly', () => {
    const isVisible = true;
    const isHidden = false;
    const result = cn('base-class', isVisible && 'block', isHidden && 'hidden');
    expect(result).toBe('base-class block');
  });

  it('resolves conflicting tailwind classes with tailwind-merge', () => {
    const result = cn('px-2 px-4', 'bg-red-500 bg-blue-500');
    expect(result).toBe('px-4 bg-blue-500');
  });
});

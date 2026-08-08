import { describe, expect, it } from 'vitest';
import nextConfig from './next.config';

describe('next config', () => {
  it('allows the local development origin', () => {
    expect(nextConfig.allowedDevOrigins).toContain('192.168.1.72');
  });
});

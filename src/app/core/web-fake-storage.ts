export class WebFakeStorage {
  async set(opts: { key: string; value: string }): Promise<void> {
    console.log('set called with ', opts);
  }

  async get(opts: { key: string }): Promise<{ value: string }> {
    return { value: 'monkey' };
  }
}

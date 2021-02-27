import '@capacitor/core';
import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { FakeStorage } from './fake-storage';
import { Storage } from '@capacitor/storage';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fake storage', () => {
    it('can be spied upon', async () => {
      spyOn(FakeStorage, 'get').and.returnValue(Promise.resolve({ value: 'abides' }));
      expect(await FakeStorage.get({ key: 'dude' })).toEqual({ value: 'abides' });
      expect(FakeStorage.get).toHaveBeenCalledTimes(1);
      expect(FakeStorage.get).toHaveBeenCalledWith({ key: 'dude' });
    });

    it('works when called in service under test', async () => {
      spyOn(FakeStorage, 'get').and.returnValue(Promise.resolve({ value: 'hats' }));
      expect(await service.callFakeStorage()).toEqual({ value: 'hats' });
      expect(FakeStorage.get).toHaveBeenCalledTimes(1);
      expect(FakeStorage.get).toHaveBeenCalledWith({ key: 'plastic' });
    });
  });

  describe('capacitor storage', () => {
    it('can be spied upon', async () => {
      spyOn(Storage, 'get').and.returnValue(Promise.resolve({ value: 'abides' }));
      expect(await Storage.get({ key: 'dude' })).toEqual({ value: 'abides' });
      expect(Storage.get).toHaveBeenCalledTimes(1);
      expect(Storage.get).toHaveBeenCalledWith({ key: 'dude' });
    });

    it('works when called in service under test', async () => {
      spyOn(Storage, 'get').and.returnValue(Promise.resolve({ value: 'dumpster' }));
      expect(await service.callCapStorage()).toEqual({ value: 'dumpster' });
      expect(Storage.get).toHaveBeenCalledTimes(1);
      expect(Storage.get).toHaveBeenCalledWith({ key: 'flaming' });
    });
  });
});

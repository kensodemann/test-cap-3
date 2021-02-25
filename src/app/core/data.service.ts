import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { FakeStorage } from './fake-storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}

  callFakeStorage(): Promise<{ value: string }> {
    return FakeStorage.get({ key: 'plastic' });
  }

  callCapStorage(): Promise<{ value: string }> {
    return Storage.get({ key: 'flaming' });
  }
}

import type { Change, ObservablePersistLocal, PersistMetadata } from '@legendapp/state';
import { setAtPath } from '@legendapp/state';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MetadataSuffix = '__m';

type ObservableAsyncStorage = Omit<ObservablePersistLocal, 'getTable' | 'getMetadata'> & {
  getTable(table: string): Promise<string>;
  getMetadata(table: string): Promise<PersistMetadata>;
};

export class ObservablePersistAsyncStorage implements ObservableAsyncStorage {
  private data: Record<string, any> = {};

  public async getTable(table: string) {
    if (this.data[table] === undefined) {
      try {
        const value = await AsyncStorage.getItem(table);
        this.data[table] = value ? JSON.parse(String(value)) : undefined;
      } catch {
        console.error('[legend-state] ObservablePersistAsyncStorage failed to parse', table);
      }
    }
    return this.data[table];
  }

  public async getMetadata(table: string): Promise<PersistMetadata> {
    return await this.getTable(table + MetadataSuffix);
  }

  public async get(table: string, id: string) {
    const tableData = await this.getTable(table);
    return tableData?.[id];
  }

  public set(table: string, changes: Change[]): void {
    if (!this.data[table]) {
      this.data[table] = {};
    }
    for (let i = 0; i < changes.length; i++) {
      const { path, valueAtPath, pathTypes } = changes[i];
      this.data[table] = setAtPath(this.data[table], path as string[], pathTypes, valueAtPath);
    }
    this.save(table);
  }

  public updateMetadata(table: string, metadata: PersistMetadata) {
    return this.setValue(table + MetadataSuffix, metadata);
  }

  public deleteTable(table: string) {
    delete this.data[table];
    AsyncStorage.removeItem(table);
  }

  public deleteMetadata(table: string) {
    this.deleteTable(table + MetadataSuffix);
  }

  // Private
  private setValue(table: string, value: any) {
    this.data[table] = value;
    this.save(table);
  }

  private save(table: string) {
    const v = this.data[table];

    if (v !== undefined && v !== null) {
      AsyncStorage.setItem(table, JSON.stringify(v));
    } else {
      AsyncStorage.removeItem(table);
    }
  }
}

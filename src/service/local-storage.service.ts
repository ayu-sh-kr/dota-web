

export class LocalStorageService {

  static get(key: string): string | null {
    return localStorage.getItem(key);
  }

  static add(key: string, value: string): void {
    localStorage.setItem(key, value);
  }


  /**
   * Stores a list at the specified key
   */
  static addList<T>(key: string, list: T[]): void {
    localStorage.setItem(key, JSON.stringify(list));
  }

  /**
   * Retrieves a list from the specified key
   */
  static getList<T>(key: string): T[] {
    const storedValue = localStorage.getItem(key);
    if (!storedValue) return [];
    try {
      return JSON.parse(storedValue) as T[];
    } catch (e) {
      console.error(`Failed to parse list from localStorage key: ${key}`);
      return [];
    }
  }

  /**
   * Adds an item to the end of a list at the specified key
   */
  static pushToList<T>(key: string, item: T): T[] {
    const list = this.getList<T>(key);
    list.push(item);
    this.addList(key, list);
    return list;
  }

  /**
   * Removes and returns the last item from a list at the specified key
   */
  static popFromList<T>(key: string): T | undefined {
    const list = this.getList<T>(key);
    if (list.length === 0) return undefined;

    const item = list.pop();
    this.addList(key, list);
    return item;
  }

  static replaceList<T>(key: string, values: T[]) {
    localStorage.setItem(key, JSON.stringify(values));
  }

}
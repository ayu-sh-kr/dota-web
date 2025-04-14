
export class RouteUtils {

  static getPreviousPath() {
    const entries = window.navigation.entries();

    const currentIndex = entries.findIndex(
      entry => entry.id === window.navigation.currentEntry?.id
    );

    if (currentIndex > 0) {
      const previousEntry = entries[currentIndex - 1];
      return new URL(previousEntry.url || '').pathname
    }

    return '';

  }

  static getCurrentEntry() {
    return new URL(window.navigation.currentEntry?.url || '').pathname;
  }

}
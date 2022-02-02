export default class List {
  static withOxfordComma(list) {
    return new Intl.ListFormat('en', {
      style: 'long',
      type: 'conjunction',
    }).format(list);
  }

  static commaSeparated(list) {
    return new Intl.ListFormat('en', {
      style: 'short',
      type: 'unit',
    }).format(list);
  }

  static or(list) {
    return new Intl.ListFormat('en', {
      style: 'short',
      type: 'unit',
    }).format(list);
  }
}

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => Math.max(a, b), 0);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(this.items);
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

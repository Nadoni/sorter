class Sorter {
  constructor() {
    this.array = [];
    this.comparator = (a,b) => a-b;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
      let selectedArr = indices.sort().map(index => this.array[index]);
      selectedArr.sort(this.comparator);

      for (let i = 0; i < indices.length; i++) {
          this.array[indices[i]] = selectedArr[i];

      }

      return this.array;
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
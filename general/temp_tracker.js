class TempTracker {
  constructor() {
    this.temps = Array(111).fill(0);
    this.max = -Infinity;
    this.min = Infinity;
    this.sum = 0;
    this.tempsCount = 0;
    this.maxInstances = 0;
    this.mode = null;
  }

  insert(temperature) {
    this.temps[temperature] += 1;
    this.max = Math.max(this.max, temperature);
    this.min = Math.min(this.min, temperature);
    this.sum += temperature;
    this.tempsCount += 1;
    if (this.temps[temperature] > this.maxInstances) {
      this.mode = temperature;
      this.maxInstances = this.temps[temperature];
    }
  }

  getMax() {
    return this.max;
  }

  getMin() {
    return this.min;
  }

  getMean() {
    return this.sum / this.tempsCount;
  }

  getMode() {
    return this.mode;
  }
}

// Optimize for time, space
// Focus on optimizing all other methods over insert

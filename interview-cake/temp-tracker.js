class TempTracker {
  constructor() {
    this.total = 0
    this.count = 0
    this.max = null
    this.min = null
    this.mean = null
  }
  
  insert(item) {
    if (this.min === null && this.max === null) {
      this.min = item
      this.max = item
    }
    
    if (this.max === null || item > this.max) {
      this.max = item
    }
    
    if (this.min === null || item < this.min) {
      this.min = item
    }
    
    this.count += 1
    if (this.mean === null) {
      this.mean = item
      this.total = item
    } else {
      this.total += item
      this.mean = this.total / this.count
    }
  }
  
  get_max() {
    return this.max
  }
  
  get_min() {
    return this.min
  }
  
  get_mean() {
    return this.mean
  }
}

let records = new TempTracker()

records.insert(60)
records.insert(70)
records.insert(80)
records.insert(90)
records.get_max()
records.get_min()
records.get_mean()

const findMaxBagValue = (tuples, weightCapacity) => {
  // Initialize total weight being carried
  let total = 0
  // Map value to weight ratios to an array
  let arrayOfValToWeigh = tuples.map(tuple => tuple.value / tuple.weight)
  // Insert 'value to weight ratio' property, valToWeight, in each item in tuples array
  tuples.forEach((item,index) => item.valToWeight = arrayOfValToWeigh[index])
  // Sort tuples array according to value to weight ratio
  tuples.sort((a,b) => b.valToWeight - a.valToWeight)
  
  for (let i = 0; i < tuples.length; i++) {
    while (weightCapacity > 0) {
      if (tuples[i].weight <= weightCapacity) {
        total += tuples[i].value
        weightCapacity -= tuples[i].weight
      } else {
        break
      }
    }
  }
  
  return total
}

let cakeTuples = [
  {weight: 7, value: 160},
  {weight: 3, value: 90},
  {weight: 2, value: 15}
]

findMaxBagValue(cakeTuples, 20) // 555

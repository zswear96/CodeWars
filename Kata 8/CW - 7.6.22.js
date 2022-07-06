





function countPositivesSumNegatives(input) {
    if(input == null){
      return []
    }
    else if(input.length < 1 ){
      return []
    }
    let result = []
    result[1] = input.filter(x => x < 0).reduce((acc,c)=> acc + c , 0 )
    result[0] = input.filter(x => x > 0).length
    
    
      return result
  }
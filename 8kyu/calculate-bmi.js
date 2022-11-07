// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi1(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  if (bmi <= 18.5) {
    return 'Underweight';
  }else if (bmi <= 25) {
    return 'Normal';
  }else if (bmi <= 30) {
    return 'Overweight';
  }else if (bmi > 30){
    return 'Obese';
  }else {
    return 'Normal'
  }
}

const bmi2 = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" : bmi <= 25 ? "Normal" : bmi <= 30 ? "Overweight" : "Obese";

console.log(bmi2(4,2))
                                    
                                    
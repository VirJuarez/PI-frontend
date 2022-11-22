
export function diets(d) {
    if (typeof d === "string"){
        return d
    }else{
        return d.name
    }
  }

export function disht(d) {
    if (typeof d === "string"){
        return true
    }else{
        return false
    }
  }

export function diets_detail(d) {
    if (d.name){
        return d.name
    }else{
        return d
    }
  }






// export function validation(input){
//     let errors = {}
//     if(!input.name){errors.name = "Name is required"}
//     else if (parseInt(input.healthscore)<0 || parseInt(input.healthscore)>100){errors.healthscore = "Between 0 and 100"}
//     else if(!input.summary){errors.summary = "Summary is required"}
//     else if(!input.diets){errors.diets = "Select at least one diet"}
//     console.log(errors)
    



//     return errors
// }
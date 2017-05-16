//------------------------
export function isValid(refs){
  let valid = true;
  for(let key in refs){
    let input = refs[key];

    if(input.required && !input.value){
      input.classList.add('error-input');
      if(valid) valid = false;
    }
  }

  return valid;
}


//------------------------
export function localeDetect(){
  let userLang = navigator.language || navigator.userLanguage;
  if(userLang !== "ru") userLang = "en";

  return userLang;
}

export function dateToday(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10){
    dd='0'+dd
  }
  if(mm<10){
    mm='0'+mm
  }

  return today = yyyy+'-'+mm+'-'+dd;
}

export function validateDate(str){ //2017-05-16
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth();
  var yyyy = today.getFullYear();
  today.setHours(0,0,0,0);
  var now = today.getTime();

  //date from form
  let arrDate = str.split("-");

  var  mydate = new Date(arrDate[0],arrDate[1] - 1,arrDate[2]);
  console.log(now, mydate.getTime());
  if( mydate <  now)
  {
    mm += 1;
    if(dd<10){
      dd='0'+dd
    }
    if(mm<10){
      mm='0'+mm
    }

    return today = yyyy+'-'+mm+'-'+dd;
  }
  else
  {
    return str;
  }

}



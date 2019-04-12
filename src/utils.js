export function makeId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
export function isItemInObj(obj,item) {
    for(var i in obj) {
        if (obj[i] === item)
        return true;
    }
    return false;
}

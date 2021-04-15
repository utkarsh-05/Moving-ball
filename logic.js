var topp = 40;
var leftt = 45;
var id = document.getElementById('main');
// console.log(topp);
document.onkeydown = function(event){
    var code = event.code;
    //  console.log(code);
    //  console.log(top);
     if(code=="ArrowUp")
     {
         if(topp>=5)
         {
             topp -= 5;
             id.style.marginTop = topp + "vh";
             console.log('top 6 if block');
         }
     }
     else  if(code=="ArrowDown")
     {
         if(topp<=94)
         {
             topp += 5;
             id.style.marginTop = topp + "vh";
         }
     }
     else  if(code=="ArrowRight")
     {
         if(leftt<=94)
         {
             leftt += 5;
             id.style.marginLeft = leftt + "vw";
         }
     }
     else  if(code=="ArrowLeft")
     {
         if(leftt>=4)
         {
             leftt -= 5;
             id.style.marginLeft = leftt + "vw";
         }
     }
}
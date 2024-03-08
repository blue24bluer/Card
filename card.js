var fileData=[1,2,3,4];
    var isUsingFile=false;
    var dataUsed=new Array();
    var ref;
    var counter=0;
function getRandom(){
               pwdLen=(loginUsernameLength.value)-loginUsernameFixed.value.length;
               chars=loginChars.value.toString();
               result=loginUsernameFixed.value.toString();
               for(x=0;x<pwdLen;x++){
                   result +=""+chars.charAt(Math.floor(Math.random()*chars.length));
               }
               lastPwd=result;
               return result;

           }
function usingFile(){
filename=prompt("input file path","");
isUsingFile=true;
sc=document.createElement("script");
sc.src=filename;
body.appendChild(sc);

}
function saveFile(){
    filename=prompt("input file name to save","");
    myjson=JSON.stringify(dataUsed);
    text=encodeURIComponent("fileData="+myjson+";");
    dlink.href="data:text/plain;charset=utf-8,"+text;
    dlink.download=filename;
    dlink.style.visibility="visible";
}
function stopProgram(){
clearInterval(ref);
}




function runProgram(){
    counter=0;
if(isUsingFile){

    ref=setInterval(loginFromFile,parseInt(loginTimeOut.value));
}
else{
    ref=setInterval(loginFromScript,parseInt(loginTimeOut.value));
}

}
function loginFromFile(){
if (counter<fileData.length){
    cpwd=fileData[counter++];
    loginPageViewer.src=loginURL.value+"?username="+cpwd;
    currentUsername.value=cpwd;
}else{
    stopProgram();
}
}

function loginFromScript(){
    if (counter<parseInt(loginCount.value)){
    cpwd=getRandom();
    loginPageViewer.src=loginURL.value+"?username="+cpwd;
   // alert(loginPageViewer.src);
    currentUsername.value=cpwd;
    dataUsed[dataUsed.length++]=cpwd;
    prog.value=Math.floor((counter/loginCount.value)*100);
    counter++;

}else{
    stopProgram();
}


}

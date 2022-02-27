function isAnagram(str1,str2){
    var len_str1=str1.length;
    var len_str2=str2.length;
    if(len_str1!== len_str2){
        return"Invalid input";
    }
    var string1=str1.split("").sort().join("")
    var string2=str1.split("").sort().join("")
    if(string1===string2){
        return"It is Anagram";
    }else{
        return"It is not Anagram";
    }
}
var name1=prompt("please enter first string")
var name2=prompt("please enter second string")
 var result=isAnagram(name1,name2)
document.write(result)
// var a=isAnagram("indian","ndiani");
// document.write(a);
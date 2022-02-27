function check_palindrome(str){
    var len=string.length;
    for( var i=0; i < len/2; i++){
        if(string[i]!== string[len-1-i]){
            return 'it is not palindrome';
        }
        
    }
    return'it is palindrome';
}
var string=prompt("Please enter a string ...... or number.....")
var result=check_palindrome(string)
document.write(result);

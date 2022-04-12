function OnButtonClick(){
    let temp = document.getElementById("temperature");
    let comment = document.getElementById("comment");
    let temp_flo = 36 + Math.floor(Math.random() * 10) / 10;
    if(Math.floor(Math.random() * 10) >= 8){
        temp_flo++;
    }
    if(temp_flo > 37){
        comment.innerHTML = "ということにします。</br>" + 
                            "<p class='has-text-danger'>今日は休みましょう。</p>";
    }else{
        comment.innerHTML = "ということにします。";
    }
    temp.innerHTML = temp_flo + "℃";
}
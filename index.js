function check(e){
    e.preventDefault()
    for (let index = 1; index < word.length; index++) {
        let id = word[index]
        var inp_value = document.getElementById(id)
        if (inp_value.value==id){
            console.log("true")
            inp_value.value = id
    }else{
        document.getElementById(id).value =""
    }
}
}

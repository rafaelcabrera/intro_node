function asincrona (callback){
    setTimeout(function(){
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    },1000);
}

asincrona((err,dato)=>{
    if(err) {
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }
    console.log("Todo ha ido bien, mi data es",dato);
})
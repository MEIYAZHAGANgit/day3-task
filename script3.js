const myReq = new XMLHttpRequest();
myReq.open("GET",URL);
myReq.send()
myReq.addEventListener("load",function(){
    const obj=Json.parse(this.response)
    for(let val of obj){
        console.log("Country:"+val.name+,"Region:"+val.region+,"Subregion:"+val.subregion,"Population:"+val.population)
  
} 
});

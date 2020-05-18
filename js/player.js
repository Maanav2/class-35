class Player{
    constructor(){

    }
    getCount(){
        database.ref('playerCount').on("value",function(data){
            playerCount=data.val();
        })
    }

    update(count){
        database.ref('/').update({
            playerCount:count
        })
    }

    updateName(name){
        var index="player"+playerCount;
        database.ref(index).set({
        name:name
        })
    }
}
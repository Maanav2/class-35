class Form{
    constructor(){

    }

    display(){
        var title=createElement('h2');
        title.position(200,50);
        title.html("Car Racing Game");

        var input=createInput('name');
        input.position(100,200);

        var button=createButton('play');
        button.position(100,250);

        var greeting=createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();


            var name=input.value();
            playerCount=playerCount+1;
            player.updateName(name);

            

            player.update(playerCount);

            greeting.html("HELLO"+name);
            greeting.position(200,200);
        })
    }
}
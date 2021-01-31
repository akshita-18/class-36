class Form {
    constructor() {

    }
    display(){
       var title = createElement('h2')
       title.html('car racing game')
       title.position(130,0)
       var input = createInput('entre your name')
       input.position(130,160)
       var greetings = createElement('h3')
       var button = createButton('play')
       button.position(250,200)
       button.mousePressed(function(){
       input.hide();
       button.hide();
       var name = input.value();
       playercount = playercount+1;
       player.update(name)
       player.updatecount(playercount)
       greetings.html('hello '+name)
       greetings.position(130,160)
       })
    }
}
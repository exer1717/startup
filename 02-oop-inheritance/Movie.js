class Movie extends EventEmitter
{

	constructor(title, year, duration) {
        super();
        this.title = title;
        this.year = year;
        this.duartion = duration;
        this.actor = [];
        this.cast = [];
    }
    

	play() {
       super.emit("play");
    }

    pause() {
        super.emit("pause");
    }

    resume() {
        super.emit("resume");
    }

    
     addCast(cast){
    let self = this
    if(Array.isArray(cast)){
      cast.forEach(function(actor){
        self.cast.push(actor)
      })
    }else{
      this.cast.push(cast)
    }
  }

     share(friendName){
        let first = {Share: this.title};
        let last = {with: friendName};
        console.log(first.Share);
        console.log(last.with);
        let social = Object.assign(first,last);
        console.log(social);
    }
}












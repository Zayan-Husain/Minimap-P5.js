class game_world extends world {
  constructor(name2, wh2) {
    super(name2);
    this.gwidth = 3000;
    this.gheight = 2000;
  }

  init() {
    var t = this;
    t.resetw(); //reset world
    //remove all p5 sprites
    allSprites.clear();
    
    var p = new player(150,150)
    t.add(p);

    for (let i = 0; i < 3; i++) {
      var e = new enemy(p.rand(t.gwidth) + 1, p.rand(t.gheight))
      t.add(e)
    }
    var mmap = new minimap(75, 75)
    mmap.ox = 75
    mmap.oy = 75 // original x and y
    mmap.arr = [['player', 0, 0, 255], ['enemy', 255, 0, 0]]
    t.add(mmap)
  }


}

///////////////minimap///////////////////
class minimap extends yentity
{
  constructor(x2,y2,g) 
  {
	  super(x2,y2,g);
	  this.speed = 4;
    this.type = "minimap";
    this.max_width = 100;
    this.max_height = 100;
    this.grafic_type = "none"
    this.w = 100
    this.h = 100
    this.arr = []
  }//end constructor
  
  init() {
    super.init()
    var t = this;
    t.sprite.draw = function() {
      fill(color(0, 0, 0))
      stroke(255, 255, 255)
      rect(0, 0, t.w+20, t.h+20)
    }
  }
  update()
  {
	var t = this;
  super.update();
  this.generate_minimap();
  }//end update

  generate_minimap() {
    var t = this;
    // var pl = t.get_by_type("player")[0];
    // var es = t.get_by_type("enemy");
    // rect(t.do_op(pl.x + t.x, yscreen.w, t.max_width), t.do_op(pl.y + t.y, yscreen.h, t.max_height), 5, 5);
    for(var i of t.arr) {
      if (!Array.isArray(i)) continue
      var tp = t.get_by_type(i[0])
      for(var j of tp) {
        fill(color(i[1], i[2], i[3]))
        rect(t.do_op(j.x + t.x, yscreen.w, t.max_width), t.do_op(j.y + t.y, yscreen.h, t.max_height), 5, 5);
      }
    }
  }
  do_op(val, max_val, map_max) {
    return (val / max_val) * map_max
  }
  
  
}//end class
///////////////end minimap///////////////////
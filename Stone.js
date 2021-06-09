class Stone{
	constructor(x,y,width,height)
	{
	
     var options ={
		restitution:0.8,
		friction:0.9,
		 density:12
	 }
        this.width=width
        this.height=height
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(this.x, this.y,50,50,options)
		World.add(world, this.body);
        this.width=80;
        this.height=50
	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x,pos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(3);
			stroke("black");
			fill("black");
			
			rect(0,0,this.width,this.height);

			pop()
	}

}
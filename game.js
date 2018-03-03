function Game() {
	this.saveCheck();
	
	allBadguys: [
		new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
		new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
		new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
		new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
		new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
	    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
		new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
		new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
		new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
		new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
		new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
		new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
	    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)              
	],	
	
	this.badGuys = [
	    [[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10)],[new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10)],[new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10)],[new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10), new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10)],[new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10), new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10)],[new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10)]],
	    [[new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10)],[		new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)              
],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
	new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
	new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
	new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
	new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
		new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
		new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
		new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
		new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
		new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
	    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
		new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
		new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
		new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
		new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
	    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
		new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
		new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
		new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
		new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
		new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
		new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
		new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
		new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
		new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
	    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)]],
	    [[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[		new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)              
],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
	new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
	new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
	new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
	new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
	new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
	new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
	new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[		new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)              
],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
	new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
	new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
	new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
	new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
	new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
	new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
	new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
	new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
	new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
	new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
	new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
	new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
	new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
	new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
		new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
		new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
		new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
		new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
		new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
	    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)]],
	    [[new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
				new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
				new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
			    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
				new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
					new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
					new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
				    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
					new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
					new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
					new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
					new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
					new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10)],[],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
				new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
			    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[]],
	    [[new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
				new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
				new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
			    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
				new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
					new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
					new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
				    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
					new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
					new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
					new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
					new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
					new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
				new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
				new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
			    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
				new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[		new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)              
],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
	new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
	new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
	new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
	new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
	new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
	new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
	new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
	new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
	new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)]],
	    [[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
			new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
		    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
			new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
			new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
			new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
			new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
			new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
				new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
			    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
			new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
			new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
			new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
			new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
		    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10)],[new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10),
				new Sprite(Constants.spritesheet[Constants.badguyPawn], 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 655, 100, 1, 10),
			    new Sprite(Constants.spritesheet[Constants.badguyBoss], 32, 32, 0, 128, 4, 0, BadguyType.Boss, 800, 330, 1, 20)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
				new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
				new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
				new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
				new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
			    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10),
				new Sprite('img/dwarf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 160, 220, 1, 10),
				new Sprite('img/catfolk.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 475, 100, 1, 10),
				new Sprite('img/dhampir.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 180, 200, 1, 10),
				new Sprite('img/drow.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 595, 300, 1, 10),
				new Sprite('img/fetchling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 200, 200, 1, 10)],[new Sprite('img/goblin.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 705, 120, 1, 10),
				new Sprite('img/orc.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 620, 80, 1, 10),
				new Sprite('img/dragon.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 435, 120, 1, 10),
				new Sprite('img/halfling.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 340, 140, 1, 10),
				new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 135, 180, 1, 10),
			    new Sprite('img/elf.png', 32, 32, 0, 128, 4, 0, BadguyType.Pawn, 125, 180, 1, 10)]],
	];
	
	this.createCanvas();
	this.createHeatMap();
//	this.setupNewGame(false);	
	this.setupNewGame(true);
}

Game.prototype.saveCheck = function() {
	this.ableToSave = false;
	if (typeof(Storage) !== "undefined") {
	    // Code for localStorage/sessionStorage.
		this.ableToSave = true;
	} else {
	    // Sorry! No Web Storage support..
	}	
}

Game.prototype.createCanvas = function() {
	// create handle to canvas
	this.canvas = document.getElementById('myCanvas');
	// create handle to (2d) context
	this.convasContext = this.canvas.getContext('2d');	
}

Game.prototype.createHeatMap = function() {
	// create heatmap	
	this.heatMapCanvas = document.createElement("canvas");
	this.heatMapCanvas.height = Constants.canvasHeight;
	this.heatMapCanvas.width = Constants.canvasWidth;
	// get heat map canvas context
	this.heatMapCanvasContext = this.heatMapCanvas.getContext("2d");
}

Game.prototype.showBackground = function() {
	//get background image from world map based on current row column of the user
	this.setBackground(Constants.map[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
}

Game.prototype.setBackground = function(imageScr) {
	//create/set background image
	this.background = new Image();
	this.background.src = imageScr;
}

Game.prototype.showHeatMap = function() {
	//show heat map image
	this.background.src = this.heatMapImage.src;
}

Game.prototype.setHeatMap = function(imageScr) {
	//create/set heat map
	this.heatMapImage = new Image();
	this.heatMapImage.src = imageScr;
}

Game.prototype.draw = function(timeStamp) {
	//if game has started
	if (this.timer != undefined && !this.isGameOver()) {
		//increase run time
		Constants.runTime = Constants.runTime + 1;
		this.timer.update();
		//draw background
		this.drawBackground();
		//draw heat map
		this.drawHeatMap();
		//draw badguys
		this.drawBadguys();
		//draw hero
		if (!this.isGameOver()) {	
			this.updateHero();
			this.drawHero();
		}
	}
}

Game.prototype.drawBackground = function() {
	//draw background
	this.convasContext.drawImage(this.background, 0, 0, Constants.canvasWidth, Constants.canvasHeight);	
}

Game.prototype.drawHeatMap = function() {
	//draw heat map
	this.heatMapCanvasContext.drawImage(this.heatMapImage, 0, 0, Constants.canvasWidth, Constants.canvasHeight);
}

Game.prototype.updateHero = function() {
	//update hero and fireball, punch and kick position 
	this.calculateSpriteOffset(this.hero, this.hero.Speed.x, this.hero.Speed.y);
	this.calculateSpriteDirection(this.hero);
	this.caculateSpritePosition(this.hero);	
	this.caculateSpriteFireball(this.hero);
	this.caculateSpritePunch(this.hero);
	this.caculateSpriteKick(this.hero);
}

Game.prototype.drawHero = function() {
	//draw fireballs and hero
    this.drawSpriteFireBalls(this.hero);
	this.hero.animate(this.convasContext, this.timer);
	this.hero.draw(this.convasContext);
}

Game.prototype.drawBadguys = function() {
	//draw all the badguys
	for (var b=0; b < this.badguys.length; b++) {
		var badguy = this.badguys[b];
		// if badguy is not dead
		if (!badguy.dead) {
			// collision detection and hit 
			if (this.hero.health > 0) {
				if (badguy.collisionDection(this.hero.Position.x, this.hero.Position.y)) {
					this.hero.hit(badguy.damage);
					if (this.hero.health <= 0) {
						this.gameOver();
					}
				}
				// hero attacks bad guy ( via fireball)
				var hitCount = this.hero.attack(badguy.Position.x, badguy.Position.y)
				if (hitCount > 0) {
					// hero hit the bad guy
					badguy.hit(hitCount * this.hero.damage);
					// if bad guy is now dead
					if (badguy.health <= 0) {
						this.setHeroExperience(badguy.experience);
						badguy.dead = true;
						badguy.shown = false;
						constantUtils.removeFromArray(badguy, this.badguys); 
						// no badguys left
                        //if (this.badguys.length == 0) {
                        	//   this.setupNewLevel(Constants.boardLevel + 1);
						//}
					}
				}
			}
			
			if (badguy.health > 0) {
				// calculate new position and draw
				badguy = this.caculateBadGuyPosition(badguy);			
				badguy.animate(this.convasContext, this.timer);
				badguy.draw(this.convasContext);	
			}
		}
	}
}

Game.prototype.setHeroExperience = function(experience) {
	this.hero.experience = this.hero.experience + experience;
	if (this.hero.experience > 100) {
		this.hero.level = this.hero.level + 1;
		this.hero.totalExperience = this.hero.totalExperience + this.hero.experience;
		this.hero.experience = 0;
	}	
}

Game.prototype.isValidPath = function(sprite, xOffset, yOffset) {
	var validFound     = false;
	// calculate the future postion of the sprite
	var futurePositionX = sprite.Position.x+xOffset;
	var futurePositionY = sprite.Position.y+yOffset;
	// get the future position point color
	//this is a costly call
	var pointColor = constantUtils.getColorAtPoint(this.heatMapCanvasContext, futurePositionX + Constants.spritePositionX, futurePositionY + Constants.spritePositionY);			

	//if color is yellow - scene change moving down (row + 1)
	if (pointColor[0] == 254 && pointColor[1] == 240 && pointColor[2] == 53 && Constants.mapCurrentRow+1 < Constants.map.length) {
		// valid location to move to
		this.setupNewLevel(Constants.boardLevel + 1, Constants.mapCurrentRow+1, Constants.mapCurrentColumn);		
	}	
	//if color is green - scene change moving right (column + 1)
	else if (pointColor[0] == 16 && pointColor[1] == 127 && pointColor[2] == 67 && Constants.mapCurrentColumn+1 < Constants.map[Constants.mapCurrentRow].length) {
		// valid location to move to
		this.setupNewLevel(Constants.boardLevel + 1, Constants.mapCurrentRow, Constants.mapCurrentColumn+1);		
	}	
	//if color is purple - scene change moving up (row - 1)
	else if (pointColor[0] == 127 && pointColor[1] == 37 && pointColor[2] == 251 && Constants.mapCurrentRow >= 0) {
		// valid location to move to
		this.setupNewLevel(Constants.boardLevel + 1, Constants.mapCurrentRow-1, Constants.mapCurrentColumn);		
	}	
	//if color is black - scene change moving left (column -1 
//	else if (pointColor[0] == 0 && pointColor[1] == 0 && pointColor[2] == 0 && Constants.mapCurrentColumn >= 0) {
		// valid location to move to
//		this.setupNewLevel(Constants.boardLevel + 1, Constants.mapCurrentRow, Constants.mapCurrentColumn-1);		
//	}	
	//if color is red - can not move
	else if (pointColor[0] == 252 && pointColor[1] == 13 && pointColor[2] == 27) {
		validFound = false;
	}
	//if color is blue - can move
	else if (pointColor[0] == 11 && pointColor[1] == 36 && pointColor[2] == 251) {
		// valid location to move to
		validFound = true;
	}
    	return validFound;
}

Game.prototype.calculateSpriteOffset = function(sprite, x, y) {
	if (x === 0 && y === 0) { // standing still
		sprite.setOffset(0, 128);
		sprite.setFrames(1);
		sprite.setDuration(0);
	} 
	else if (x > 0 && y === 0) { // East
		if (sprite.offsetY !== 192) {
			sprite.setOffset(0, 192);
			sprite.setFrames(6);
			sprite.setDuration(500);
		}
	} 
	else if (x < 0 && y === 0) { // West
		if (sprite.offsetY !== 224) {
			sprite.setOffset(0, 224);
			sprite.setFrames(6);
			sprite.setDuration(500);
		}
	} 
	else if (x === 0 && y > 0) { // South
		if (sprite.offsetY !== 128 || sprite.frames !== 4) {
			sprite.setOffset(0, 128);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	} 
	else if (x === 0 && y < 0) { // North
		if (sprite.offsetY !== 160) {
			sprite.setOffset(0, 160);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	} 
	else if (x > 0 && y < 0) { // North East
		if (sprite.offsetY !== 0) {
			sprite.setOffset(0, 0);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	} 
	else if (x > 0 && y > 0) { // South East
		if (sprite.offsetY !== 32) {
			sprite.setOffset(0, 32);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	} 
	else if (x < 0 && y < 0) { // North West
		if (sprite.offsetY !== 64) {
			sprite.setOffset(0, 64);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	} 
	else if (x < 0 && y > 0) { // South West
		if (sprite.offsetY !== 96) {
			sprite.setOffset(0, 96);
			sprite.setFrames(4);
			sprite.setDuration(500);
		}
	}
}

Game.prototype.calculateSpriteDirection = function(sprite) {
	// Calculate X speed
	if (constantUtils.inArray(Keys.RIGHT, Keys.getDown) || constantUtils.inArray(Keys.D, Keys.getDown)) {
		sprite.Speed.x += (sprite.Speed.x <= sprite.Speed.MAX) ? sprite.Speed.INCREASE : 0;
		sprite.direction = Direction.RIGHT;
	} 
	else if (constantUtils.inArray(Keys.LEFT, Keys.getDown) || constantUtils.inArray(Keys.A, Keys.getDown)) {
		sprite.Speed.x -= (sprite.Speed.x >= (sprite.Speed.MAX * -1)) ? sprite.Speed.INCREASE : 0;
		sprite.direction = Direction.LEFT;
	} 
	else if (sprite.Speed.x > 0) { // No right / left keys are being pressed
		sprite.Speed.x += sprite.Speed.FRICTION * -1;
		sprite.Speed.x = (sprite.Speed.x < 0) ? 0 : sprite.Speed.x;
	}
	else if (sprite.Speed.x < 0) {
		sprite.Speed.x += sprite.Speed.FRICTION;
		sprite.Speed.x = (sprite.Speed.x > 0) ? 0 : sprite.Speed.x;
	}

	// Calculate Y speed
	if (constantUtils.inArray(Keys.DOWN, Keys.getDown) || constantUtils.inArray(Keys.S, Keys.getDown)) {
		sprite.Speed.y += (sprite.Speed.y <= sprite.Speed.MAX) ? sprite.Speed.INCREASE : 0;
		sprite.direction = Direction.DOWN;
	} 
	else if (constantUtils.inArray(Keys.UP, Keys.getDown) || constantUtils.inArray(Keys.W, Keys.getDown)) {
		sprite.Speed.y -= (sprite.Speed.y >= (sprite.Speed.MAX * -1)) ? sprite.Speed.INCREASE : 0;
		sprite.direction = Direction.UP;
	} 
	else if (sprite.Speed.y > 0) { // No up / down keys are being pressed
		sprite.Speed.y += sprite.Speed.FRICTION * -1;
		sprite.Speed.y = (sprite.Speed.y < 0) ? 0 : sprite.Speed.y;
	} 
	else if (sprite.Speed.y < 0) {
		sprite.Speed.y += sprite.Speed.FRICTION;
		sprite.Speed.y = (sprite.Speed.y > 0) ? 0 : sprite.Speed.y;
	}
}

Game.prototype.caculateSpritePosition = function(sprite) {
	if (this.isValidPath(sprite, sprite.Speed.x, sprite.Speed.y)) {
		sprite.Position.x += sprite.Speed.x;
		sprite.Position.y += sprite.Speed.y;		
	}
	this.hero.setPosition(this.hero.Position.x, this.hero.Position.y);
}

Game.prototype.caculateSpriteFireball = function(sprite) {
	if (constantUtils.inArray(Keys.SHIFT, Keys.getDown) || constantUtils.inArray(Keys.SPACE, Keys.getDown)) {
		sprite.shootFireball( new Sprite('img/fireball.png', 36, 36, 0, 0, 5, 0), sprite.Position.x, sprite.Position.y, sprite.direction);
	}
}

Game.prototype.drawSpriteFireBalls = function(sprite) {
	if (sprite.fireballCount > 0) {
		for (var f = 0; f < sprite.fireballs.length; f++) {
			var fb = sprite.fireballs[f];
			if (fb) {
				if (constantUtils.pointDistance(fb.Position.x, fb.Position.y, fb.startPosition.x, fb.startPosition.y) < 100) {
					fb.Position.x = (fb.direction == Direction.LEFT) ? fb.Position.x - 1: fb.Position.x + 1;
					fb.setPosition(fb.Position.x, fb.Position.y);
					fb.animate(this.convasContext, this.timer);
					fb.draw(this.convasContext);
				}
				else {
					constantUtils.removeFromArray(fb, sprite.fireballs);
					sprite.fireballCount = sprite.fireballCount - 1;
					sprite.magic = sprite.magic + 10;
				}
			}
		}
	}
}

Game.prototype.caculateSpriteKick = function(sprite) {
	if (sprite.action == Action.KICK && sprite.actionCount == 0) {
		sprite.action = Action.STANDING;
	}
	else if (constantUtils.inArray(Keys.K, Keys.getDown)) {
		if (sprite.direction == Direction.RIGHT) {
			sprite.setOffset(0, 256);
		}
		else if (sprite.direction == Direction.LEFT) {
			sprite.setOffset(0, 288);
		}
		sprite.setFrames(4);
		sprite.setDuration(500);
		sprite.action = Action.KICK;
		sprite.actionCount = 4; // number of Frames  (timeout for the action)
	}
	else if (sprite.action == Action.KICK) {
		sprite.actionCount = sprite.actionCount - 1; 
	}	
}

Game.prototype.caculateSpritePunch = function(sprite) {
	if (sprite.action == Action.PUNCH && sprite.actionCount == 0) {
		sprite.action = Action.STANDING;
	}
	else if (constantUtils.inArray(Keys.P, Keys.getDown)) {
		if (sprite.direction == Direction.RIGHT) {
			sprite.setOffset(0, 320);
		}
		else if (sprite.direction == Direction.LEFT) {
			sprite.setOffset(0, 352);
		}
		sprite.setFrames(4);
		sprite.setDuration(500);
		sprite.action = Action.PUNCH;
		sprite.actionCount = 4; // number of Frames  (timeout for the action)
	}
	else if (sprite.action == Action.PUNCH) {
		sprite.actionCount = sprite.actionCount - 1; 
	}	
}

Game.prototype.caculateBadGuyPosition = function(badguy) {
    // line of sight? or maybe distance
	//var distance = this.pointDistance(badguy.Position.x, badguy.Position.y, this.hero.Position.x, this.hero.Position.y);
    //if (distance <= 50) {
	var bX = badguy.Position.x;
	var bY = badguy.Position.y;
	var hX = this.hero.Position.x;
	var hY = this.hero.Position.y;
	var futurePositionBX = bX;
	var futurePositionBY = bY;
	
	var changeFound = false;
	if (hX > bX && hY > bY) {
		if (this.isValidPath(badguy, 1, 1)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}
		else if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, -1)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX < bX && hY < bY) {
		if (this.isValidPath(badguy, -1, -1)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}
		else if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX == bX && hY > bY) {
		if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX == bX && hY < bY) {	
		if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
	}	
	if (!changeFound && hX > bX && hY < bY) {
	    if (this.isValidPath(badguy, 1, -1)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, +1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX < bX && hY > bY) {
		if (this.isValidPath(badguy, -1, +1)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX > bX && hY == bY) {
		if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
	}
	if (!changeFound && hX < bX && hY == bY) {
		if (this.isValidPath(badguy, -1, 0)) {
			futurePositionBX = bX-1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 1, 0)) {
			futurePositionBX = bX+1;
			futurePositionBY = bY;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, 1)) {
			futurePositionBX = bX;
			futurePositionBY = bY+1;
    			changeFound = true;			
		}	
		else if (this.isValidPath(badguy, 0, -1)) {
			futurePositionBX = bX;
			futurePositionBY = bY-1;
    			changeFound = true;			
		}	
	}
	
	this.setBadguyPosition(badguy, futurePositionBX, futurePositionBY);
	return badguy;
}

Game.prototype.setBadguyPosition = function(badguy, x,y) {
	badguy.Position.x = x;
    badguy.Position.y = y;
	badguy.setPosition(x, y);		
}

Game.prototype.isGameOver = function() {
	return this.hero.dead;
}

Game.prototype.gameOver = function() {
	this.hero.dead = true;
	this.hero.shown = false;

	//invert background image color
	var imgData=this.convasContext.getImageData(0,0,Constants.canvasWidth,Constants.canvasHeight);
	// invert colors
	for (var i=0;i<imgData.data.length;i+=4)
	  {
	  imgData.data[i]=255-imgData.data[i];
	  imgData.data[i+1]=255-imgData.data[i+1];
	  imgData.data[i+2]=255-imgData.data[i+2];
	  imgData.data[i+3]=255;
	  }
	this.convasContext.putImageData(imgData,0,0);
	
	alert("Game Over");	
}

Game.prototype.saveGame = function() {
	//save the hero and bad guy states to be able to load a game
	if (this.ableToSave) {
		alert("Game Saved.");
		// Store
		// seems like you are not able to save objects
		//var savedGame = { hero: this.hero, badguys: this.badguys, lastRunTime: Constants.lastRunTime, lastSecond: Constants.lastSecond, runTime: Constants.runTime, boardLevel: Constants.boardLevel};
		//localStorage.setItem("saveGame", savedGame);
		localStorage.setItem("heroHealth", this.hero.health);
		localStorage.setItem("heroExperience", this.hero.experience);
		localStorage.setItem("heroLevel", this.hero.level);
		localStorage.setItem("gameLastRunTime", Constants.lastRunTime);
		localStorage.setItem("gameLastSecond", Constants.lastSecond);
		localStorage.setItem("gameRunTime", Constants.runTime);
		localStorage.setItem("gameBoardLevel", Constants.boardLevel);
		localStorage.setItem("gameBoardRow", Constants.mapCurrentRow);
		localStorage.setItem("gameBoardColumn", Constants.mapCurrentColumn);
	}
	else {
		alert("Your browser does not support location storage. Update your browser.")
	}
}

Game.prototype.loadGame = function() {
	this.hero.health = localStorage.getItem("heroHealth") + 0;		
	this.hero.experience = localStorage.getItem("heroExperience") + 0;		
	this.hero.level = localStorage.getItem("heroLevel") + 0;		

	//this.setupNewGame();
	//Constants.lastRunTime = localStorage.getItem("gameLastRunTime") + 0;		
	//Constants.lastSecond = localStorage.getItem("gameLastSecond") + 0;		
	//Constants.runTime = localStorage.getItem("gameRunTime") + 0;		
	Constants.boardLevel = localStorage.getItem("gameBoardLevel") + 0;		
	Constants.mapCurrentRow = localStorage.getItem("gameBoardRow") + 0;		
	Constants.mapCurrentColumn = localStorage.getItem("gameBoardColumn");		
	this.setupNewLevel(Constants.boardLevel);
}

Game.prototype.setBadguys = function(badguys) {
	this.badguys = badguys;	
}

Game.prototype.setupNewGame = function(alertMessage) {
	Constants.boardLevel = 1;
	Constants.runTime = 1;
	
	Constants.mapCurrentRow = 0;
	Constants.mapCurrentColumn = 0;
	
	this.setBackground(Constants.map[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
	this.setHeatMap(Constants.mapHeatMap[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
	
	// create the hero
	this.hero = new Sprite(Constants.spritesheet[Constants.currentHero], 32, 32, 0, 128, 4, 0, 0, 400, 400);

	// create the bad guys
	this.setBadguys(this.badGuys[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
	
	// setup game timer
	this.timer = new Timer();

	if (alertMessage) {
		alert("You awake in a strange place and find yourself to have magical powers use the SPACE BAR to shoot fireballs, use the ARROW keys to move around.  WAIT!! You hear something off into the distance.  Kill it.");
	}
	else {
	}
}

Game.prototype.setupNewLevel = function(boardLevel, mapCurrentRow, mapCurrentColumn) {
	for (var f = 0; f < this.hero.fireballs.length; f++) {
		var fb = this.hero.fireballs[f];
		constantUtils.removeFromArray(fb, this.hero.fireballs);
	}

	for (var f = 0; f < Keys.getDown.length; f++) {
		var kd = Keys.getDown[f];
		constantUtils.removeFromArray(kd, Keys.getDown)
	}
	
	//image src,            w,  h, oX, oY,  f, d, badGuyType, startPositionX, startPositionY, health, experience,level) {			  
	this.hero = new Sprite(Constants.spritesheet[Constants.currentHero], 32, 32, 0, 128, 4, 0, 0, 400, 400,this.hero.health,this.hero.experience,this.hero.level);
		
	//Constants.boardLevel = boardLevel;
	Constants.mapCurrentRow = mapCurrentRow;
	Constants.mapCurrentColumn = mapCurrentColumn;

	this.setBackground(Constants.map[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
	this.setHeatMap(Constants.mapHeatMap[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
	this.setBadguys(this.badGuys[Constants.mapCurrentRow][Constants.mapCurrentColumn]);
}
class npc
{
    
   

    constructor(x,y,width,height,TBuild,player)
    {
        this.building = createSprite(x,y,width,height);
        this.TBuild = TBuild;
        this.player = player;
        npc1IMG = loadImage("NPC/NPC1.PNG");
        npc2IMG = loadImage("NPC/NPC2.PNG");
        npc3IMG = loadImage("NPC/NPC3.PNG");
        npc4IMG = loadImage("NPC/NPC4.PNG");
    }
  
    

    display()
    {
        this.player.collide(this.building);

       

         if(frameCount%100 ===0){
           var randomMove = Math.round(random(1,5));
         }

         this.building.collide(this.TBuild);
         switch(randomMove)
         {
         case 1:
           this.building.velocity.x = 1;
           this.building.velocity.y = 0;
           this.building.addImage(npc2IMG);
          this.building.scale = 0.3;
         break;
       
         case 2: 
         this.building.velocity.x = -1;
         this.building.velocity.y = 0;
         this.building.addImage(npc4IMG);
         this.building.scale = 0.3;
         break;
       
         case 3:
            this.building.velocity.y = 1;
            this.building.velocity.x = 0;
            this.building.addImage(npc3IMG);
            this.building.scale = 0.3;
           break;
       
           case 4:
            this.building.velocity.y = -1
            this.building.velocity.x = 0;
            this.building.addImage(npc1IMG);
            this.building.scale = 0.3;
           break;
         }
    } 

   

   

}





  
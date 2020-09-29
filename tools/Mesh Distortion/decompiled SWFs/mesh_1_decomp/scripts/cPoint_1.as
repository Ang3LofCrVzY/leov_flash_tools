package _40meshdistortare_fla
{
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public dynamic class cPoint_1 extends MovieClip
   {
       
      
      public function cPoint_1()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function everyFrame(param1:Event) : void
      {
         if(MovieClip(this.parent).debug)
         {
            this.visible = true;
         }
         else
         {
            this.visible = false;
         }
      }
      
      function frame1() : *
      {
         this.vx = 0;
         this.vy = 0;
         this.addEventListener(Event.ENTER_FRAME,this.everyFrame);
      }
   }
}

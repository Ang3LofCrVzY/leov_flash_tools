package _41meshdistortarecubic_fla
{
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public dynamic class cpoint_2 extends MovieClip
   {
       
      
      public function cpoint_2()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function mouseDownHandler(param1:MouseEvent) : void
      {
         this.addEventListener(MouseEvent.MOUSE_UP,this.mouseUpHandler);
         this.startDrag();
      }
      
      public function mouseUpHandler(param1:MouseEvent) : void
      {
         this.removeEventListener(MouseEvent.MOUSE_UP,this.mouseUpHandler);
         this.stopDrag();
      }
      
      function frame1() : *
      {
         this.addEventListener(MouseEvent.MOUSE_DOWN,this.mouseDownHandler);
      }
   }
}

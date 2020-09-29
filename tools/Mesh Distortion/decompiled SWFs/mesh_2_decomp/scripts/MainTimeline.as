package _41meshdistortarecubic_fla
{
   import flash.display.BitmapData;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.ui.Keyboard;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var poop:MovieClip;
      
      public var c1:MovieClip;
      
      public var c2:MovieClip;
      
      public var c10:MovieClip;
      
      public var c3:MovieClip;
      
      public var c11:MovieClip;
      
      public var c4:MovieClip;
      
      public var c12:MovieClip;
      
      public var c5:MovieClip;
      
      public var c13:MovieClip;
      
      public var c6:MovieClip;
      
      public var c14:MovieClip;
      
      public var c7:MovieClip;
      
      public var c15:MovieClip;
      
      public var c8:MovieClip;
      
      public var c16:MovieClip;
      
      public var c9:MovieClip;
      
      public var cPoints;
      
      public var meshVerts:Vector.<Number>;
      
      public var meshIndices:Vector.<int>;
      
      public var meshUvs:Vector.<Number>;
      
      public var tex:BitmapData;
      
      public var debug:Boolean;
      
      public var r:Number;
      
      public var a:Number;
      
      public var m:Number;
      
      public function MainTimeline()
      {
         super();
         addFrameScript(0,this.frame1);
      }
      
      public function evalBezierCurve(param1:*, param2:*, param3:* = null) : *
      {
         if(param3 == null)
         {
            param3 = {};
         }
         param3.x = Math.pow(1 - param2,3) * param1[0].x + Math.pow(1 - param2,2) * 3 * param2 * param1[1].x + (1 - param2) * 3 * param2 * param2 * param1[2].x + param2 * param2 * param2 * param1[3].x;
         param3.y = Math.pow(1 - param2,3) * param1[0].y + Math.pow(1 - param2,2) * 3 * param2 * param1[1].y + (1 - param2) * 3 * param2 * param2 * param1[2].y + param2 * param2 * param2 * param1[3].y;
         return param3;
      }
      
      public function evalBezierPatch(param1:*, param2:*, param3:*) : *
      {
         var _loc6_:* = undefined;
         var _loc4_:* = [];
         var _loc5_:* = 0;
         while(_loc5_ < 4)
         {
            _loc6_ = [];
            _loc6_[0] = param1[_loc5_ * 4];
            _loc6_[1] = param1[_loc5_ * 4 + 1];
            _loc6_[2] = param1[_loc5_ * 4 + 2];
            _loc6_[3] = param1[_loc5_ * 4 + 3];
            _loc4_[_loc5_] = this.evalBezierCurve(_loc6_,param2);
            _loc5_++;
         }
         return this.evalBezierCurve(_loc4_,param3);
      }
      
      public function createMesh(param1:*, param2:*, param3:*) : *
      {
         var _loc13_:* = undefined;
         var _loc14_:Number = NaN;
         var _loc15_:Number = NaN;
         var _loc4_:Number = param2 + 1;
         var _loc5_:Number = _loc4_ * _loc4_;
         var _loc6_:Number = 1 / param2;
         var _loc7_:int = 0;
         var _loc8_:int = 0;
         var _loc9_:Number = param2 * _loc6_;
         var _loc10_:Number = 0;
         var _loc11_:Number = 0;
         _loc7_ = 0;
         this.meshVerts = new Vector.<Number>();
         this.meshIndices = new Vector.<int>();
         this.meshUvs = new Vector.<Number>();
         var _loc12_:int = 0;
         while(_loc12_ < _loc5_)
         {
            _loc13_ = this.evalBezierPatch(param1,_loc10_,_loc11_);
            _loc14_ = _loc12_ % _loc4_ * _loc6_;
            _loc15_ = int(_loc12_ / _loc4_) * _loc6_;
            this.meshVerts[_loc16_] = _loc14_ + _loc13_.x;
            this.meshVerts[_loc17_] = _loc15_ + _loc13_.y;
            this.meshUvs[_loc18_] = _loc14_ + param3;
            this.meshUvs[_loc19_] = _loc15_;
            _loc10_ = _loc10_ + 1 / param2;
            if(_loc10_ > 1)
            {
               _loc10_ = 0;
               _loc11_ = _loc11_ + 1 / param2;
            }
            if(_loc12_ % _loc4_ != param2)
            {
               this.meshIndices.push(_loc12_,_loc12_ + _loc4_,_loc12_ + _loc4_ + 1,_loc12_ + _loc4_ + 1,_loc12_ + 1,_loc12_);
            }
            _loc12_++;
         }
      }
      
      public function keyHandler(param1:KeyboardEvent) : void
      {
         if(param1.keyCode == Keyboard.D)
         {
            this.debug = !this.debug;
         }
      }
      
      public function everyFrame(param1:Event) : void
      {
         this.c2.y = this.c2.oy + Math.sin(this.a * this.m) * this.r;
         this.c3.y = this.c3.oy + Math.cos(this.a * this.m) * this.r;
         this.c6.y = this.c6.oy + Math.sin(this.a * this.m) * this.r;
         this.c7.y = this.c7.oy + Math.cos(this.a * this.m) * this.r;
         this.c10.y = this.c10.oy + Math.sin(this.a * this.m) * this.r;
         this.c11.y = this.c11.oy + Math.cos(this.a * this.m) * this.r;
         this.c14.y = this.c14.oy + Math.sin(this.a * this.m) * this.r;
         this.c15.y = this.c15.oy + Math.cos(this.a * this.m) * this.r;
         this.createMesh(this.cPoints,8,this.a);
         graphics.clear();
         if(this.debug)
         {
            graphics.lineStyle(1,16777215,0.5);
         }
         graphics.beginBitmapFill(this.tex,null,true,true);
         graphics.drawTriangles(this.meshVerts,this.meshIndices,this.meshUvs);
         this.a = this.a - 0.01;
      }
      
      function frame1() : *
      {
         this.cPoints = [];
         this.cPoints[0] = this.c1;
         this.cPoints[1] = this.c2;
         this.cPoints[2] = this.c3;
         this.cPoints[3] = this.c4;
         this.cPoints[4] = this.c5;
         this.cPoints[5] = this.c6;
         this.cPoints[6] = this.c7;
         this.cPoints[7] = this.c8;
         this.cPoints[8] = this.c9;
         this.cPoints[9] = this.c10;
         this.cPoints[10] = this.c11;
         this.cPoints[11] = this.c12;
         this.cPoints[12] = this.c13;
         this.cPoints[13] = this.c14;
         this.cPoints[14] = this.c15;
         this.cPoints[15] = this.c16;
         this.tex = new BitmapData(this.poop.width,this.poop.height,true,0);
         this.tex.draw(this.poop);
         stage.addEventListener(Event.ENTER_FRAME,this.everyFrame);
         stage.addEventListener(KeyboardEvent.KEY_UP,this.keyHandler);
         this.c2.oy = this.c2.y;
         this.c3.oy = this.c3.y;
         this.c6.oy = this.c6.y;
         this.c7.oy = this.c7.y;
         this.c10.oy = this.c10.y;
         this.c11.oy = this.c11.y;
         this.c14.oy = this.c14.y;
         this.c15.oy = this.c15.y;
         this.debug = false;
         this.r = 30;
         this.a = 0;
         this.m = 15;
      }
   }
}

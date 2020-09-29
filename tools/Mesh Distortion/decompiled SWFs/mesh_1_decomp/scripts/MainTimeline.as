package _40meshdistortare_fla
{
   import flash.display.BitmapData;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.KeyboardEvent;
   import flash.ui.Keyboard;
   import flash.utils.getTimer;
   
   public dynamic class MainTimeline extends MovieClip
   {
       
      
      public var poop:MovieClip;
      
      public var a1:MovieClip;
      
      public var a2:MovieClip;
      
      public var a3:MovieClip;
      
      public var c1:MovieClip;
      
      public var c2:MovieClip;
      
      public var a4:MovieClip;
      
      public var a5:MovieClip;
      
      public var c3:MovieClip;
      
      public var c4:MovieClip;
      
      public var cPoints;
      
      public var meshVerts:Vector.<Number>;
      
      public var meshIndices:Vector.<int>;
      
      public var meshUvs:Vector.<Number>;
      
      public var tex:BitmapData;
      
      public var slen:Number;
      
      public var ang:Number;
      
      public var fric:Number;
      
      public var fric2:Number;
      
      public var grav:Number;
      
      public var k:Number;
      
      public var k2:Number;
      
      public var debug:Boolean;
      
      public var moving:Boolean;
      
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
         param3.x = Math.pow(1 - param2,2) * param1[0].x + (1 - param2) * 2 * param2 * param1[1].x + param2 * param2 * param1[2].x;
         param3.y = Math.pow(1 - param2,2) * param1[0].y + (1 - param2) * 2 * param2 * param1[1].y + param2 * param2 * param1[2].y;
         return param3;
      }
      
      public function evalBezierPatch(param1:*, param2:*, param3:*) : *
      {
         var _loc6_:* = undefined;
         var _loc4_:* = [];
         var _loc5_:* = 0;
         while(_loc5_ < 3)
         {
            _loc6_ = [];
            _loc6_[0] = param1[_loc5_ * 3];
            _loc6_[1] = param1[_loc5_ * 3 + 1];
            _loc6_[2] = param1[_loc5_ * 3 + 2];
            _loc4_[_loc5_] = this.evalBezierCurve(_loc6_,param2);
            _loc5_++;
         }
         return this.evalBezierCurve(_loc4_,param3);
      }
      
      public function createMesh(param1:*, param2:*) : *
      {
         var _loc12_:* = undefined;
         var _loc13_:Number = NaN;
         var _loc14_:Number = NaN;
         var _loc3_:Number = param2 + 1;
         var _loc4_:Number = _loc3_ * _loc3_;
         var _loc5_:Number = 1 / param2;
         var _loc6_:int = 0;
         var _loc7_:int = 0;
         var _loc8_:Number = param2 * _loc5_;
         var _loc9_:Number = 0;
         var _loc10_:Number = 0;
         _loc6_ = 0;
         this.meshVerts = new Vector.<Number>();
         this.meshIndices = new Vector.<int>();
         this.meshUvs = new Vector.<Number>();
         var _loc11_:int = 0;
         while(_loc11_ < _loc4_)
         {
            _loc12_ = this.evalBezierPatch(param1,_loc9_,_loc10_);
            _loc13_ = _loc11_ % _loc3_ * _loc5_;
            _loc14_ = int(_loc11_ / _loc3_) * _loc5_;
            this.meshVerts[_loc15_] = _loc13_ + _loc12_.x;
            this.meshVerts[_loc16_] = _loc14_ + _loc12_.y;
            this.meshUvs[_loc17_] = _loc13_;
            this.meshUvs[_loc18_] = _loc14_;
            _loc9_ = _loc9_ + 1 / param2;
            if(_loc9_ > 1)
            {
               _loc9_ = 0;
               _loc10_ = _loc10_ + 1 / param2;
            }
            if(_loc11_ % _loc3_ != param2)
            {
               this.meshIndices.push(_loc11_,_loc11_ + _loc3_,_loc11_ + _loc3_ + 1,_loc11_ + _loc3_ + 1,_loc11_ + 1,_loc11_);
            }
            _loc11_++;
         }
      }
      
      public function keyHandler(param1:KeyboardEvent) : void
      {
         if(param1.type == KeyboardEvent.KEY_UP)
         {
            if(param1.keyCode == Keyboard.NUMBER_1)
            {
               this.debug = !this.debug;
            }
            if(param1.keyCode == Keyboard.NUMBER_2)
            {
               this.moving = !this.moving;
            }
         }
      }
      
      public function everyFrame(param1:Event) : void
      {
         if(this.moving)
         {
            this.ang = this.ang + Math.sin(getTimer() / 500) * 10;
         }
         this.c3.x = Math.cos(-this.ang * Math.PI / 180) * 20 + stage.stageWidth / 2;
         this.c3.y = Math.sin(-this.ang * Math.PI / 180) * 20 + stage.stageHeight / 2;
         this.a4.x = this.c3.x - Math.cos(-this.ang * Math.PI / 180) * this.slen;
         this.a4.y = this.c3.y - Math.sin(-this.ang * Math.PI / 180) * this.slen;
         this.a3.x = this.c3.x + Math.cos(-this.ang * Math.PI / 180) * this.slen;
         this.a3.y = this.c3.y + Math.sin(-this.ang * Math.PI / 180) * this.slen;
         this.springTo(this.c4,this.a4,this.k,this.slen * 2,this.fric,this.grav,this.ang);
         this.springTo(this.a5,this.c3,this.k,this.slen * 2,this.fric,this.grav,this.ang);
         this.springTo(this.c2,this.a3,this.k,this.slen * 2,this.fric,this.grav,this.ang);
         this.springTo(this.a1,this.c4,this.k2,this.slen * 2,this.fric2,this.grav,this.ang);
         this.springTo(this.c1,this.a5,this.k2,this.slen * 2,this.fric2,this.grav,this.ang);
         this.springTo(this.a2,this.c2,this.k2,this.slen * 2,this.fric2,this.grav,this.ang);
         this.createMesh(this.cPoints,6);
         graphics.clear();
         if(this.debug)
         {
            graphics.lineStyle(1,16711680,0.5);
         }
         graphics.beginBitmapFill(this.tex,null,false,true);
         graphics.drawTriangles(this.meshVerts,this.meshIndices,this.meshUvs);
      }
      
      public function springTo(param1:MovieClip, param2:MovieClip, param3:* = 0.2, param4:* = 50, param5:* = 0.9, param6:* = 0, param7:* = 0) : void
      {
         var _loc8_:Number = param2.x - param1.x;
         var _loc9_:Number = param2.y - param1.y;
         param7 = param7 - 90;
         param7 = param7 * (Math.PI / 180 * -1);
         var _loc10_:Number = param2.x - Math.cos(param7) * param4;
         var _loc11_:Number = param2.y - Math.sin(param7) * param4;
         param1.vx = param1.vx + (_loc10_ - param1.x) * param3;
         param1.vy = param1.vy + (_loc11_ - param1.y) * param3;
         param1.vy = param1.vy - param6;
         param1.vx = param1.vx * param5;
         param1.vy = param1.vy * param5;
         param1.x = param1.x + param1.vx;
         param1.y = param1.y + param1.vy;
      }
      
      function frame1() : *
      {
         this.cPoints = [];
         this.cPoints[0] = this.a1;
         this.cPoints[1] = this.c1;
         this.cPoints[2] = this.a2;
         this.cPoints[3] = this.c4;
         this.cPoints[4] = this.a5;
         this.cPoints[5] = this.c2;
         this.cPoints[6] = this.a4;
         this.cPoints[7] = this.c3;
         this.cPoints[8] = this.a3;
         this.tex = new BitmapData(this.poop.width + 1,this.poop.height + 1,true,0);
         this.tex.draw(this.poop);
         stage.addEventListener(Event.ENTER_FRAME,this.everyFrame);
         stage.addEventListener(KeyboardEvent.KEY_UP,this.keyHandler);
         this.slen = 30;
         this.ang = 0;
         this.fric = 0.9;
         this.fric2 = 0.7;
         this.grav = 0;
         this.k = 0.1;
         this.k2 = 0.1;
         this.debug = false;
         this.moving = false;
      }
   }
}

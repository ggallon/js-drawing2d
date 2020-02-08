////////////////////////////////////////////////////////////////////////////////
// js-drawing2d
// Javascript canvas 2D drawing library. Supports both immediate-mode rendering
// and 2D scene rendering.
//
// MIT License (C) 2015-2020 Jingwood, unvell.com, all rights reserved.
////////////////////////////////////////////////////////////////////////////////

import { Vec2 } from "@jingwood/graphics-math";

export class Size {
  constructor() {
    this.set(...arguments);
  }

  set() {
    switch (arguments.length) {
      default:
      case 0:
        this.width = 0;
        this.height = 0;
        break;

      case 1:
        if (typeof arguments[0] === "object") {
          const { width, height } = arguments[0];
          this.width = width;
          this.height = height;
        }
        break;
		
      case 2:
        {
          const [width, height] = arguments;
          this.width = width;
          this.height = height;
        }
        break;
    }
  }
	
  clone() {
    return new Size(this.width, this.height);
  }

  mul(s) {
    return new Size(this.width * s, this.height * s);
  }

  mul(scalar) {
    return Size.mul(this, scalar);
  }

  static mul(size, scalar) {
    if (typeof scalar === "object") {
      return new Size(size.width * scalar.width, size.height * scalar.height);
    } else if (!isNaN(scalar)) {
      return new Size(size.width * scalar, size.height * scalar);
    }
  }

  get v() {
    return toVector(this);
  }

  static toVector(size) {
    return new Vec2(size.width, size.height);
  }

  toArray() {
    return [this.width, this.height];
  }
}
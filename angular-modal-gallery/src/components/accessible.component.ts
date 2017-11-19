/*
 The MIT License (MIT)

 Copyright (c) 2017 Stefano Cappa (Ks89)

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.
 */

import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  ENTER_KEY, SPACE_KEY,
  MOUSE_MAIN_BUTTON_CLICK,
  PREV, NEXT, NOTHING,
  DIRECTION_RIGHT
} from '../utils/user-input.util';

@Component({
  selector: 'ks-accessible',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccessibleComponent {

  handleNavigationEvent(direction: string, event: KeyboardEvent | MouseEvent): number {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleKeyboardNavigationEvent(direction, event);
    } else if (event instanceof MouseEvent) {
      return this.handleMouseNavigationEvent(direction, event);
    }
    return NOTHING;
  }

  handleImageEvent(event: KeyboardEvent | MouseEvent): number {
    if (!event) {
      return NOTHING;
    }
    if (event instanceof KeyboardEvent) {
      return this.handleImageKeyboardEvent(event);
    } else if (event instanceof MouseEvent) {
      return this.handleImageMouseEvent(event);
    }
    return NOTHING;
  }

  private handleImageKeyboardEvent(event: KeyboardEvent): number {
    const key: number = event.keyCode;
    if (key === SPACE_KEY || key === ENTER_KEY) {
      return NEXT;
    }
    return NOTHING;
  }

  private handleImageMouseEvent(event: MouseEvent): number {
    const mouseBtn: number = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return NEXT;
    }
    return NOTHING;
  }

  private handleKeyboardNavigationEvent(direction: string, event: KeyboardEvent): number {
    const key: number = event.keyCode;
    if (key === SPACE_KEY || key === ENTER_KEY) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }

  private handleMouseNavigationEvent(direction: string, event: MouseEvent): number {
    const mouseBtn: number = event.button;
    if (mouseBtn === MOUSE_MAIN_BUTTON_CLICK) {
      return direction === DIRECTION_RIGHT ? NEXT : PREV;
    }
    return NOTHING;
  }
}

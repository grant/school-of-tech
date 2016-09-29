import Iso from 'iso.js';
import {
  COLOR_ROOM_0,
  COLOR_ROOM_1,
  COLOR_ROOM_2,
  COLOR_ROOM_3,
  COLOR_GRASS,
  COLOR_GRASS_LIGHTER
} from './Constants';

const Color = Iso.Color;

/**
 * Logic around floor tiles
 */

const ID_TO_COLOR = {
  0: new Color(COLOR_ROOM_0),
  1: new Color(COLOR_ROOM_1),
  2: new Color(COLOR_ROOM_2),
  3: new Color(COLOR_ROOM_3),
  4: new Color(COLOR_GRASS),
  5: new Color(COLOR_GRASS_LIGHTER),
};

export class Tile {
  static idToColor(id:Number):Iso.Color {
    return ID_TO_COLOR[id];
  }
}

export const SIZE = 1;
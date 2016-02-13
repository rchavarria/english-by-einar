import { Image } from './image';
import { Audio } from './audio';

/**
 * Concept model
 *
 * Holds all data related to English concepts
 */
export class Concept {
  title: String = 'Dog';
  description: String = 'Wouf! Wouf!';
  image: Image = new Image();
  audio: Audio = new Audio();
}


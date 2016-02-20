import { Concept } from '../model/concept';
import { Image } from '../model/image';
import { Audio } from '../model/audio';

export class ConceptBuilder {
  image: Image;
  audio: Audio;
  title: String;
  description: String;

  build() {
    return new Concept(this.title, this.description, this.image, this.audio);
  }

  withTitle(newTitle) {
    this.title = newTitle;
    return this;
  }

  withDescription(newDescription) {
    this.description = newDescription;
    return this;
  }

  withImage(url) {
    this.image = new Image(url);
    return this;
  }

  withAudio(url) {
    const prefix = '/android_asset/www/';
    this.audio = new Audio(prefix + url);
    return this;
  }

}


type Words = {
  [key: string]: string;
}; // 제한된 양, 조건의 key, property를 사용할 때

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) this.words[word.term] = word.def;
  }
  def(term: string) {
    return this.words[term];
  }
}
class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "korean food");
const dict = new Dict();

dict.add(kimchi);

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.set("token", "hihi");

const booleanStorage = new LocalStorage<boolean>();
booleanStorage.set("isToken", true);

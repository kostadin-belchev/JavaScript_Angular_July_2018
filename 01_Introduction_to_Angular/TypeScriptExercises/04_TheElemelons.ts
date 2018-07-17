abstract class Melon {
  element : string

  constructor(public weight : number, public melonSort : string) {
    if (new.target === Melon) {
      throw new TypeError("Abstract class cannot be instantiated directly!");
    }
    this.element = this.constructor.name.substring(0, this.constructor.name.length - 5)

  }
}

class Watermelon extends Melon {
  elementIndex : number

  constructor(weight : number, melonSort : string) {
    super(weight, melonSort)
    this.elementIndex = weight * melonSort.length
  }

  getElemelonElementIndex() : number {
    return this.elementIndex
  }

  toString() : string {
    return `Element: ${this.element}\n
    Sort: ${this.melonSort}\n
    Element Index: ${this.getElemelonElementIndex()}`
  }
}

class Firemelon extends Melon {
  elementIndex : number

  constructor(weight : number, melonSort : string) {
    super(weight, melonSort)
    this.elementIndex = weight * melonSort.length
  }

  getElemelonElementIndex() : number {
    return this.elementIndex
  }

  toString() : string {
    return `Element: ${this.element}\n
    Sort: ${this.melonSort}\n
    Element Index: ${this.getElemelonElementIndex()}`
  }
}

class Earthmelon extends Melon {
  elementIndex : number

  constructor(weight : number, melonSort : string) {
    super(weight, melonSort)
    this.elementIndex = weight * melonSort.length
  }

  getElemelonElementIndex() : number {
    return this.elementIndex
  }

  toString() : string {
    return `Element: ${this.element}\n
    Sort: ${this.melonSort}\n
    Element Index: ${this.getElemelonElementIndex()}`
  }
}

class Airmelon extends Melon {
  elementIndex : number

  constructor(weight : number, melonSort : string) {
    super(weight, melonSort)
    this.elementIndex = weight * melonSort.length
  }

  getElemelonElementIndex() : number {
    return this.elementIndex
  }

  toString() : string {
    return `Element: ${this.element}\n
    Sort: ${this.melonSort}\n
    Element Index: ${this.getElemelonElementIndex()}`
  }
}

class Melolemonmelon extends Airmelon {
  elements : Array<string>
  elementLemon : string

  constructor(weight : number, melonSort : string) {
    super(weight, melonSort)
    this.elements = ['Water', 'Fire', 'Earth', 'Air']
    this.elementLemon = this.elements[0]
  }

  morph() : void {
    let currElement = this.elements.shift()
    this.elementLemon = this.elements[0]
    this.elements.push(currElement)
  }

  toString() : string {
    return `Element: ${this.elementLemon}\n
    Sort: ${this.melonSort}\n
    Element Index: ${this.getElemelonElementIndex()}`
  }
}

// let test : Melon = new Melon(100, "Test");
//Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
// console.log(watermelon.toString());
// Element: Water
// Sort: Kingsize
// Element Index: 100
let lemonMelon : Melolemonmelon = new Melolemonmelon(10, 'some sort')
console.log(lemonMelon.toString())
lemonMelon.morph()
lemonMelon.morph()
lemonMelon.morph()

console.log(lemonMelon.toString())

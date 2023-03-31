class Logo {
    constructor(url) {
      this.top = 0
      this.left = 0
      this.width = 200
      this.imgUrl = url
      this.html = null
    }
  
    init() {
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + дергаем render
  
      // + странице должен залится фон черным
      const img = document.createElement('img')
      img.src = this.imgUrl
      this.html = img
      document.body.style.backgroundColor = '#000000'
      this.render()
    }
    
    render(top = 0, left = 0, width) {
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
      document.body.append(this.html)
      this.html.style.position = 'fixed'

      this.top = 0 + top
      this.left = 0 + left
    //   this.width = 500

      this.html.style.top = this.top
      this.html.style.left = this.left
      this.html.style.width = this.width + 'px'
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
      // this.render()
      
      this.top += -20
      this.render(this.top, this.left)
      this.html.style.top = this.top + 'px'
    }
    moveDown() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render

      this.top += 20
      this.render(this.top, this.left)
      this.html.style.top = this.top + 'px'
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render

      this.left -= 20
      this.render(this.top, this.left)
      this.html.style.left = this.left + 'px'
    }
    moveRight() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
      this.left -= 20
      this.render(this.top, this.left)
      this.html.style.left = this.left + 'px'
    }
}
  
//   const imgUrl = 'https://bit.ly/2tcDito'
const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png'
let mfLogotip = new Logo(imgUrl)
console.log(mfLogotip)

// запускаем наше микро-приложение
mfLogotip.init()

// mfLogotip.moveUp()
// mfLogotip.moveRight()
// mfLogotip.moveRight()
// mfLogotip.moveRight()
// mfLogotip.moveRight()
mfLogotip.moveDown()
mfLogotip.moveDown()
mfLogotip.moveDown()
// mfLogotip.moveDown()
// console.log(mfLogotip.left)

  // something else, чтобы всё работало

class Circle extends Logo
{
    constructor(size, color, top, left, width)
    {
        super(top, left, width)
        this.size = size
        this.color = color
        this.border = 50 + 'px'
        this.html = null
        this.width = size.width
    }

    render()
    {
        const circle = document.createElement('div')
        let [width, height] = this.size
        this.html = circle
        this.html.style.width = width + 'px'
        this.html.style.height = height + 'px'
        this.html.style.backgroundColor = this.color
        this.html.style.borderRadius = this.border
        document.body.append(this.html)
        super.render(this.top, this.left)
    }
}

const circle = new Circle([50, 50], 'yellow')
circle.render()
console.log(circle)
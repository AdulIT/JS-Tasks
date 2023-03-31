class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
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
    
    render(top = 0, left = 0) {
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
      document.body.append(this.html)
      this.html.style.position = 'fixed'

      this.top = 0 + top
      this.left = 0 + left
      this.width = 500 + 'px'

      this.html.style.top = this.top
      this.html.style.left = this.left
      this.html.style.width = this.width
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
  
//   const imgUrl = 'https://bit.ly/2tcDito';
  const imgUrl = 'https://images.unsplash.com/photo-1680208281019-8642d20405f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80';
  let mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();
  
  mfLogotip.moveUp();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало
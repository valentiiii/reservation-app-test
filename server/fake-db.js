const Product = require('./model/product')

class FakeDb {

    constructor(){
        this.products = [
        {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens',
            heading1: 'テスト1',
            heading2: 'テスト2',
            heading3: 'テスト3',
            headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　',
            headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
          },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'テスト1',
            heading2: 'テスト2',
            heading3: 'テスト3',
            headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　',
            headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
           },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone Standard',
            price: 299,
            description: '', 
            heading1: 'テスト1',
            heading2: 'テスト2',
            heading3: 'テスト3',
            headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　',
            headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
            },
          {
            coverImage: './assets/img/phone-cover.jpg',
            name: 'Phone special',
            price: 999,
            description: '',
            heading1: 'テスト1',
            heading2: 'テスト2',
            heading3: 'テスト3',
            headingtext1: 'サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキストサンプルテキスト　サンプルテキスト　サンプルテキスト',
            headingtext2: 'テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　テキスト文書　',
            headingtext3: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.'
          }
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = FakeDb
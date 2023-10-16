import { defineStore } from 'pinia'

export const useProductStore = defineStore({
  id : 'productList',
  state: () => ({
    productsList : [
      { id : 1,
        Name : 'เป็ดปักกิ่ง(ตัว)',
        Des : 'เสิร์ฟในรูปแผ่นหนังบางกรอบ ที่มาพร้อมแผ่นแป้งบางสำหรับห่อ ตามด้วยซอสหวานและเครื่องเคียง', 
        Price : '฿599.00',
        PriceCal : 599.00, 
        img : "../Img/pedpaking1.png",
        quatity : 0 },
      { id : 2,
        Name : 'กระเพาะปลาน้ำแดง',
        Des : 'กระเพาะปลาอย่างดี ผสมเนื้อไก่ฉีก เห็ดหอม และน้ำซุปที่เป็นสูตรเฉพาะ ที่มีสมุนไพรจีน สรรพคุณบำรุงร่างกายและมีคุณค่าทาง โภชนาการ', 
        Price : '฿220.00',
        PriceCal : 220.00, 
        img : '../Img/stomachfish2.png',
        quatity : 0 },
      { id : 3,
        Name : 'หมูตุ๋นตงพอ',
        Des : 'สูตรดั้งเดิมหมูสามชั้นตุ๋นด้วยเหล้าจีนของเมืองหางโจว นุ่มจนละลายในปาก', 
        Price : '฿150.00',
        PriceCal : 150.00, 
        img : '../Img/porktun3.png',
        quatity : 0 },
      { id : 4,
        Name : 'แมงกะพรุนน้ำมันงา',
        Des : 'เมนูออเดิร์ฟ ทานสำหรับเรียกน้ำย่อยก่อนทานมื้อหนัก', 
        Price : '฿120.00', 
        PriceCal : 120.00,
        img : '../Img/jellyfish4.png',
        quatity : 0 },
      { id : 5,
        Name : 'ไก่ผัดพริกเสฉวน',
        Des : 'ไก่รสสัมผัสกรอบนอกนุ่มใน มีรสชาติเผ็ดเค็มจากพริกและได้กลิ่นหอมจากขิง', 
        Price : '฿120.00',
        PriceCal : 120.00, 
        img : '../Img/chickenpad5.png',
        quatity : 0 },
      { id : 6,
        Name : 'เต้าหู้เหม็นทอด',
        Des : 'สูตรพิเศษของทางร้าน เหม็นไม่เหมือนใคร', 
        Price : '฿90.00', 
        PriceCal : 90.00,
        img : '../Img/tofu6.png',
        quatity : 0 },
        { id : 7,
          Name : 'ซาลาเปา (เข่งละ 3 ก้อน)',
          Des : 'แป้งสูตรลับทางร้าน กลิ่นนุ่มและหอมเป็นพิเศษ ', 
          Price : '฿70.00',
          PriceCal : 70.00, 
          img : '../Img/sarapao7.png',
          quatity : 0 },
      { id : 8,
        Name : 'ขนมจีบ (เข่งละ 4 ก้อน)',
        Des : 'สูตรลับประจำตระกูล ทำด้วยวัตถุดิบลับพิเศษ', 
        Price : '฿70.00', 
        PriceCal : 70.00,
        img : '../Img/kanomjeep8.png',
        quatity : 0 },
      { id : 9,
        Name : 'บ๊ะจ่าง',
        Des : 'ทำด้วยข้าวเหนียวนำมาผัดน้ำมัน มีไส้หมูเค็มหรือหมูพะโล้ กุนเชียง ไข่เค็มเฉพาะไข่แดง กุ้งแห้ง เห็ดหอม', 
        Price : '฿80.00', 
        PriceCal : 80.00, 
        img : '../Img/bajang9.png',
        quatity : 0 },
      { id : 10,
        Name : 'เปาะเปี๊ยะทอด',
        Des : 'สูตรพิเศษ ทานกับน้ำจิ้มบ๊วยในเมนูเปาะเปี๊ยะทอด', 
        Price : '฿80.00',
        PriceCal : 80.00, 
        img : '../Img/porpia10.png',
        quatity : 0 },
        ],
        CartList : [],
        OrderList : [],
        totalOverallPrice: 0
  }),
  getters: {
    totalOverallPrice() {
      return this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },

  },
  actions: {
    incrementQuantity(product) {
      product.quatity++;
    },
    decrementQuantity(product) {
      if (product.quatity > 0) {
        product.quatity--;
      }
    },
    addToCart(productData) {
      const existingProduct = this.CartList.find((product) => product.id === productData.id);
      productData.quatity++;
      if (existingProduct) {
        if (productData.quatity > 0) {
          existingProduct.quatity += productData.quatity;
          existingProduct.totalProductPrice = existingProduct.quatity * existingProduct.PriceCal;
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว`);

        }
      } else {
        if (productData.quatity > 0) {
          const newProduct = { ...productData };
          newProduct.totalProductPrice = newProduct.quatity * newProduct.PriceCal;
          this.CartList.push(newProduct);
          alert(`เพิ่ม ${productData.Name} เข้าตะกร้าแล้ว`);

        }
      }

      const productIndex = this.productsList.findIndex((product) => product.id === productData.id);
      if (productIndex !== -1) {
        this.productsList[productIndex].quatity = 0;
      }
  
      
      this.updateTotalOverallPrice();
      
    },

    updateTotalOverallPrice() {
      this.totalOverallPrice = this.CartList.reduce((total, product) => total + product.totalProductPrice, 0);
    },
    removeFromCart(productId) {
      const productIndex = this.CartList.findIndex((product) => product.id === productId);
      if (productIndex !== -1) {
        this.CartList.splice(productIndex, 1); 
        this.updateTotalOverallPrice();
      }
    },
    addOrder(orderData) {
      this.OrderList.push(orderData);
      this.CartList = [];
      this.totalOverallPrice = 0;
    },
  },  
      
})


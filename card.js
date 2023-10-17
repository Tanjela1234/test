function after(ret){
    var price = ret.data.payableFee.currency.currencyCode + " " + Number(ret.data.payableFee.number.number).toString();

return {
  "payload": [
    {
      "type": "text",
      "content": "<h1 style='color:blue;'>A Blue Heading</h1>"
    },
    {
      "type": "image",
      "url": "https://static-01.daraz.pk/p/df3a7f64f895d8f63e6107f744292b42.jpg",
      "link": "",
      "title": "hello123"
    },
    {
      "type": "video",
      "url": "//alimebot-sg-alime-base.oss-ap-southeast-1.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1683874645137-lights_go.mp4",
      "title": "hello123",
      "cover": "https://gw.alicdn.com/tps/TB1SKhQOXXXXXX4apXXXXXXXXXX-720-405.jpg",
      "desc": "hello123",
      "duration": 20.1221
    },
    {
      "type": "video",
      "url": "//alimebot-sg-alime-base.oss-ap-southeast-1.aliyuncs.com/avatar/alime-base.oss-cn-beijing-internal.aliyuncs.com1683874645137-lights_go.mp4",
      "title": "hello123",
      "cover": "https://gw.alicdn.com/tps/TB1SKhQOXXXXXX4apXXXXXXXXXX-720-405.jpg",
      "desc": "hello123",
      "duration": 20.1221
    },
    {
      "type": "text",
      "content": "<b><i>This is a test card.</i></b>"
    },
    {
      "type": "text",
      "content": "hello123"
    },
    {
      "type": "order",
      "title": "Order Card",
      "bodyRichText": "Yes you can  request a refund for <b>Xiaomi Mi Wifi Range Extender Pro - 300 Mbps Wireless Router 2.4 GHz -  Model DVB4235GL - Global Version - Black</b> by <b>30 July, 2021.</b><br> <br>Please note that you can not request for refund after this time.",
        "image": ret.data.product.itemPicUrl,
  "itemPicUrl": ret.data.product.itemPicUrl,
  "itemName": ret.data.product.itemTitle,
  "itemPrice": price,
  "tradeOrderId": ret.data.tradeOrderId,
  "itemStatusName": ret.data.ascStatus,
    
    },
    {
      "type": "action",
      "payload": [
        {
          "type": "link",
          "link": "https://www.taobao.com",
          "text": "hello123",
          "primary": false
        },
        {
          "type": "message",
          "text": "hello123",
          "message": "hello123",
          "primary": true
        }
      ]
    }
  ]
}
}
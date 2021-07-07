// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      topUrl: 'https://p.pstatp.com/origin/137ab0001f0249415d52e',
      top:'58%',
      videoUrl:'',
      detailUrl:'https://p.pstatp.com/origin/fe71000318f5f1066cf8'
      // https://fnck-20200914-1303154931.cos.ap-guangzhou.myqcloud.com/%E8%A7%86%E9%A2%91/%E4%BA%94%E6%B4%B2%E8%A1%8CZ1%E5%A4%96%E8%A7%82.mp4?q-sign-algorithm=sha1&q-ak=AKIDHL7fPrFwXrtdX9SYLq75j5BxTeFbR3KK&q-sign-time=1601450307;33137450307&q-key-time=1601450307;33137450307&q-header-list=&q-url-param-list=&q-signature=f5e0d8f97b129e81efe2415952a35b206fa9ec2d
    },
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    let top = ['item.top'];
    console.log(top)
    if(windowHeight>800){
      this.setData({
        ['item.top']: '48%'
      })
    }else{
      this.setData({
        ['item.top']: '58%'
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showShareMenu({

      withShareTicket:true,
      
      menus:['shareAppMessage','shareTimeline']
      
      })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
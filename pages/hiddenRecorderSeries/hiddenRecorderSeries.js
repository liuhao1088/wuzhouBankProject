// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    top:"4%",
  },
  fanhuidj:function(){
    wx.reLaunch({
       url: "../index/index"
     })
 },

 zhuyefanhuidj:function(){
  wx.reLaunch({
     url: "../index/index"
   })
},

detailsawOnedj:function(){
  wx.redirectTo({
    url: "../detailsawOne/detailsawOne"
  })
},

detailsawTwodj:function(){
  wx.redirectTo({
    url: "../detailsawTwo/detailsawTwo"
  })
},
detailsawThreedj:function(){
  wx.redirectTo({
    url: "../detailsawThree/detailsawThree"
  })
},
detailsawFivesdj:function(){
  wx.redirectTo({
    url: "../detailsawFives/detailsawFives"
  })
},
detailsawSixdj:function(){
  wx.redirectTo({
    url: "../detailsawSix/detailsawSix"
  })
},
detailsawSevendj:function(){
  wx.redirectTo({
    url: "../detailsawSeven/detailsawSeven"
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    console.log(windowHeight);
    if(windowHeight>800){
      this.setData({
        top: "6%"
      })
    }else{
      this.setData({
        top: "4%"
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
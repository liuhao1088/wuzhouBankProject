// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsaList: [
      'https://img11.360buyimg.com/ddimg/jfs/t1/149345/32/10341/51066/5f815704E00b5b6b3/df3820a2523bac80.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/142855/21/10334/46742/5f815d43E71959b3a/c36d9f9f60a45ae8.png'
    ]
  },
  toDetails(event) {
    let id = event.currentTarget.id;
    console.log(id);
    if (id === '0') {
      wx.navigateTo({
        url: "/pages/detailsazOne/detailsazOne"
      })
    } else {
      wx.navigateTo({
        url: "/pages/detailsazTwo/detailsazTwo"
      })

    }
  },
  // detailsazTwodj:function(){
  //   wx.navigateTo({
  //     url: "../detailsazTwo/detailsazTwo"
  //   })
  // },
  // detailsazOnedj:function(){
  //   wx.navigateTo({
  //     url: "../detailsazOne/detailsazOne"
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

      withShareTicket: true,

      menus: ['shareAppMessage', 'shareTimeline']

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
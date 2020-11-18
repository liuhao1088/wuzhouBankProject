// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsaList: [
      'https://img13.360buyimg.com/ddimg/jfs/t1/133020/22/11814/78704/5f815d0eE1010b399/a1ab7a5c2e67e260.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/132046/37/11879/78219/5f815d22E67b6ac25/744043d33a56fce2.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/128804/27/14510/82667/5f8156f0E4c2fd9da/aeb8e22bed016787.png'
    ]
  },
  toDetailsa(event) {
    let id = event.currentTarget.id;
    if (id === '0') {
      wx.navigateTo({
        url: "/pages/detailsaxOne/detailsaxOne"
      })
    } else if (id === '1') {
      wx.navigateTo({
        url: "/pages/detailsaxTwo/detailsaxTwo"
      })
    } else {
      wx.navigateTo({
        url: "/pages/detailsaxThree/detailsaxThree"
      })
    }
  },

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
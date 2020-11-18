// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsaList: [
      'https://img12.360buyimg.com/ddimg/jfs/t1/120239/32/14684/60423/5f81658dEee6e759e/7ca83d09d4a4a3ab.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/124662/36/14565/80724/5f816ae8E8f228a75/e7afd5afaf99cefd.png'
    ]
  },

  toDetailsa(event) {
    let id = event.currentTarget.id;
    if (id === '0') {
      wx.navigateTo({
        url: "/pages/detailsaaTen/detailsaaTen"
      })
    } else {
      wx.navigateTo({
        url: "/pages/detailsaEleven/detailsaEleven"
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
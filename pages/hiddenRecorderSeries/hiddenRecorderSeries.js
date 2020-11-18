// pages/hdRecorderSeries/hdRecorderSeries.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsaList: [
      'https://img14.360buyimg.com/ddimg/jfs/t1/140467/29/10488/64565/5f815fb0Ec0ca3787/a8d0d5828afe14a9.png',
      'https://img10.360buyimg.com/ddimg/jfs/t1/126821/6/14588/55121/5f815fc3Eaa17bfd8/ed210455d2fee0d5.png',
      'https://img12.360buyimg.com/ddimg/jfs/t1/146895/22/14883/74642/5fb4f1a8E41638b2b/e501f2ddbe0ddf1e.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/133101/37/16278/64942/5fb4f1baEb5c730de/3bd34840f4ed4e1f.png',
      'https://img14.360buyimg.com/ddimg/jfs/t1/134790/7/11923/66382/5f815ffdE28a13f59/8e4e43efefd61404.png',
      'https://img13.360buyimg.com/ddimg/jfs/t1/153389/26/1859/53458/5f816014E5d64e30e/bd7631b09a5a512d.png'
    ]
  },
  toDetailsa(event){
    let id = event.currentTarget.id;
    if(id === '0'){
      wx.navigateTo({
        url: "/pages/detailsawOne/detailsawOne"
      })
    }else if(id === '1'){
      wx.navigateTo({
        url: "/pages/detailsawTwo/detailsawTwo"
      })
    }else if(id === '2'){
      wx.navigateTo({
        url: "/pages/detailsawThree/detailsawThree"
      })
    }else if(id === '3'){
      wx.navigateTo({
        url: "/pages/detailsawFives/detailsawFives"
      })
    }else if(id === '4'){
      wx.navigateTo({
        url: "/pages/detailsawSix/detailsawSix"
      })
    }else{
      wx.navigateTo({
        url: "/pages/detailsawSeven/detailsawSeven"
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
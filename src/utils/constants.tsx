// 进件状态
export const applicationStatus = {
  0: '待进件',
  1: '已进件',
  2: '支付启用',
  3: '支付停用',
}
// 系统配置左侧导航菜单
export const sellerPageMenuArray = [
  {
    key: 'role-manage',
    name: '角色管理',
    menuType: 'menuItem',
    permissionName: 'MallRoleManageListView',
  },
  {
    key: 'user-manage',
    name: '用户管理',
    menuType: 'menuItem',
    permissionName: 'MallUserManageListView',
  },
  {
    key: 'business-manage',
    name: '业态管理',
    menuType: 'menuItem',
    permissionName: 'MallIndustryManage',
  },
  {
    key: 'seller-manage',
    name: '商户管理',
    menuType: 'menuItem',
    permissionName: 'ShopManageListView',
  },
  {
    key: 'ticket-code-manage',
    name: '小票码管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'ticket-code-strategy',
        name: '小票码策略',
        menuType: 'menuItem',
        permissionName: 'TicketCodeListView',
      },
    ]
  },
  {
    key: 'device',
    name: '设备管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'device-list',
        name: '设备列表',
        menuType: 'menuItem',
        permissionName: 'DevicesManageList',
      },
      {
        key: 'monitor-rule',
        name: '监控规则',
        menuType: 'menuItem',
        permissionName: 'DevicesManageMonitorRule',
      },
      {
        key: 'monitor-setting',
        name: '监控通知',
        menuType: 'menuItem',
        permissionName: 'DevicesManageMonitor',
      },
      {
        key: 'monitor-log',
        name: '监控日志',
        menuType: 'menuItem',
        permissionName: 'DevicesManageMonitorLog',
      },
    ]
  },
  {
    key: 'message',
    name: '消息中心',
    menuType: 'subMenu',
    child: [
      {
        key: 'platform-bulletin',
        name: '平台公告',
        menuType: 'menuItem',
        permissionName: 'MallNoticePublishRecordsManage',
      },
      {
        key: 'release-bulletin',
        name: '发布公告',
        menuType: 'menuItem',
        permissionName: 'MallNoticeManage',
      },
      {
        key: 'message-list',
        name: '消息列表',
        menuType: 'menuItem',
        permissionName: 'AnnouncementMessageListView',
      },
      {
        key: 'newFeedback',
        name: '意见反馈',
        menuType: 'menuItem',
        permissionName: 'MallFeedbackManage',
      },
    ]
  },
  // {
  //   key: 'subbranch-notice-manage',
  //   name: '公告管理',
  //   menuType: 'menuItem',
  //   permissionName: 'MallNoticeListView',
  // },
  {
    key: 'wx-accredit',
    name: '微信授权',
    menuType: 'menuItem',
    permissionName: 'MallWxAuth',
  },
  {
    key: 'operation-log',
    name: '操作日志',
    menuType: 'menuItem',
    permissionName: 'OperationLogManage',
  },
];
// 易客SCRM左侧导航菜单
export const memberPageMenuArray = [
  {
    key: 'member-statistics',
    name: '会员统计',
    menuType: 'menuItem',
    permissionName: 'MemberStatisViewManage',
  },
  {
    key: 'member-manage',
    name: '会员管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'member-list',
        name: '会员列表',
        menuType: 'menuItem',
        permissionName: 'MemberListView',
      },
      {
        key: 'member-record-list',
        name: '升降级记录',
        menuType: 'menuItem',
        permissionName: 'MemberLevelChangRecordManage',
      },
      {
        key: 'freezing-record',
        name: '冻结记录',
        menuType: 'menuItem',
        permissionName: 'MemberFreezeLogManage',
      },
    ]
  },
  {
    key: 'member-card-manage',
    name: '配置管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'member-card-list',
        name: '会员卡列表',
        menuType: 'menuItem',
        permissionName: 'MemberCardListViewManage',
      },
      {
        key: 'member-equity-list',
        name: '权益管理',
        menuType: 'menuItem',
        permissionName: 'MemberRightsListView',
      },
      {
        key: 'member-card-config-detail',
        name: '开卡配置',
        menuType: 'menuItem',
        permissionName: 'MemberCardSetViewManage',
      },
      // {
      //   key: 'wechart-member-card',
      //   name: '微信会员卡',
      //   menuType: 'menuItem',
      //   permissionName: 'WxMemberCardManage',
      // },
      {
        key: 'new_wechart-member-card',
        name: '微信会员卡',
        menuType: 'menuItem',
        permissionName: 'WxMemberCardManage',
      },
      {
        key: 'pay-is-member',
        name: '支付即会员',
        menuType: 'menuItem',
        permissionName: 'MemberPayeeManage',
      },
      {
        key: 'entity-card',
        name: '实体会员卡',
        menuType: 'menuItem',
        permissionName: 'MemberBindManage',
      },
      {
        key: 'member-day-config',
        name: '会员日配置',
        menuType: 'menuItem',
        permissionName: 'MemberDayManage',
      },
      {
        key: 'business-time-config',
        name: '营业时间配置',
        menuType: 'menuItem',
        permissionName: 'MallBusinessTimeSettingManage',
      },
    ]
  },
  {
    key: 'point-manage',
    name: '积分管理',
    menuType: 'subMenu',
    child: [
      // {
      //   key: 'point-statistics',
      //   name: '积分统计',
      //   menuType: 'menuItem',
      //   permissionName: 'CorpPointsStatisViewManage',
      // },
      {
        key: 'point-strategy',
        name: '积分策略',
        menuType: 'menuItem',
        permissionName: 'CouponPointsTactisManage',
      },
      {
        key: 'point-config-detail',
        name: '积分配置',
        menuType: 'menuItem',
        permissionName: 'CorpPointsConfigView',
      },
      {
        key: 'photopragh-point',
        name: '会员积分',
        menuType: 'menuItem',
        permissionName: 'CorpPointsMemberManage',
      },
      {
        key: 'refund-point-list',
        name: '退还积分',
        menuType: 'menuItem',
        permissionName: 'IntegralRefundListManage',
      },
      {
        key: 'integral-flow',
        name: '积分流水',
        menuType: 'menuItem',
        permissionName: 'PointsFlowManage',
      },
      {
        key: 'point-log',
        name: '积分日志',
        menuType: 'menuItem',
        permissionName: 'CorpPointsOperateLogManage',
      }
    ]
  },
  {
    key: 'point-store',
    name: '积分换礼',
    menuType: 'subMenu',
    child: [
      {
        key: 'point-present-list',
        name: '积分礼品',
        menuType: 'menuItem',
        permissionName: 'IntegralGiftList',
      },
    ]
  },
  {
    key: 'member-vip',
    name: '会员专享',
    menuType: 'subMenu',
    child: [
      {
        key: 'member-market',
        name: '事件营销',
        menuType: 'menuItem',
        permissionName: 'MemberCouponActivityManage',
      },
      {
        key: 'member-marketing',
        name: '精准营销',
        menuType: 'menuItem',
        permissionName: 'MemberActivityManage',
      },
      {
        key: 'member-care',
        name: '会员关怀',
        menuType: 'menuItem',
        permissionName: 'MemberCareManage',
      },
      
    ]
  },
  // {
  //   key: 'member-market',
  //   name: '会员营销',
  //   menuType: 'menuItem',
  //   permissionName: 'ChannelMembersManage',
  // },
  // {
  //   key: 'member-market',
  //   name: '会员营销',
  //   menuType: 'subMenu',
  //   child: [
  //     {
  //       key: 'market-activity',
  //       name: '营销活动',
  //       menuType: 'menuItem',
  //       permissionName: 'MemberCouponActivityStatisDataManage',
  //     },
  //     {
  //       key: 'activity-list',
  //       name: '活动列表',
  //       menuType: 'menuItem',
  //       permissionName: 'MemberCouponActivityListView',
  //     },
  //   ]
  // },
  // {
  //   key: 'member-care',
  //   name: '会员关怀',
  //   menuType: 'subMenu',
  //   child: [
  //     {
  //       key: 'sms-mgr',
  //       name: '短信管理',
  //       menuType: 'menuItem',
  //       permissionName: 'MemberShortMessageManageList',
  //     },
  //     {
  //       key: 'sms-template',
  //       name: '短信模版',
  //       menuType: 'menuItem',
  //       permissionName: 'ShortMessageTplManageList',
  //     },
  //     {
  //       key: 'sms-sending-record',
  //       name: '短信发送记录',
  //       menuType: 'menuItem',
  //       permissionName: 'ShortMessageSendManageList',
  //     },
  //   ]
  // },
  {
    key: 'pull-new',
    name: '拉新统计',
    menuType: 'menuItem',
    permissionName: 'ChannelMembersManage',
  },
  // {
  //   key: 'pay-is-member',
  //   name: '支付即会员',
  //   menuType: 'menuItem',
  //   permissionName: 'MemberPayeeManage',
  // },
  {
    key: 'member-label',
    name: '会员标签',
    menuType: 'subMenu',
    child: [
      // {
      //   key: 'label-configure',
      //   name: '标签配置',
      //   menuType: 'menuItem',
      //   permissionName: 'MemberShortMessageManageList',
      // },
      {
        key: 'label-allocation',
        name: '标签组管理',
        menuType: 'menuItem',
        permissionName: 'MemberTagManage',
      }
    ]
  },
];
// 移动支付左侧导航菜单
export const payPageMenuArray = [
  {
    key: 'application-manage',
    name: '进件管理',
    menuType: 'menuItem',
    permissionName: 'ShopApplicationManage',
  },
  {
    key: 'shop-summary',
    name: '商户汇总',
    menuType: 'menuItem',
    permissionName: 'ShopPayment',
  },
  {
    key: 'pay-account',
    name: '支付结算',
    menuType: 'menuItem',
    permissionName: 'ShopPaySettlement',
  },
  {
    key: 'payment-of-water',
    name: '支付流水',
    menuType: 'menuItem',
    permissionName: 'PaymentLogListView',
  },
  {
    key: 'refunds-flow',
    name: '退款流水',
    menuType: 'menuItem',
    permissionName: 'PaymentRefundLogListView',
  }
];
// 商户经营数据左侧导航菜单
export const dataPageMenuArray = [
  {
    key: 'business-area-outline',
    name: '经营概况',
    menuType: 'menuItem',
    permissionName: 'DataMallSummaryManage',
  },
  {
    key: 'business-state-statistics',
    name: '业态统计',
    menuType: 'menuItem',
    permissionName: 'DataIndustryStatisticsView',
  },
  {
    key: 'floor-outline',
    name: '楼层统计',
    menuType: 'menuItem',
    permissionName: 'DataFloorSummaryStatisManage',
  },
  {
    key: 'business-shop-outline',
    name: '商户统计',
    menuType: 'menuItem',
    permissionName: 'DataShopSummaryView',
  },
  {
    key: 'cash-flow',
    name: '收银流水',
    menuType: 'menuItem',
    permissionName: 'DataOrderListView',
  },
  {
    key: 'data-recount',
    name: '数据重算',
    menuType: 'menuItem',
    permissionName: 'DataDataRecManage',
  },
  {
    key: 'goods-top',
    name: '商品排行',
    menuType: 'menuItem',
    permissionName: 'DataGoodsManage',
  }, 
  {
    key: 'daily-bussiness-list-summary',
    name: '日营业单汇总',
    menuType: 'menuItem',
    permissionName: 'ReconciliationBusinessManage',
  },
  {
    key: 'daily-bussiness-list-compare',
    name: '日营业单对比',
    menuType: 'menuItem',
    permissionName: 'ReconciliationComparisonManage',
  },
  // {
  //   key: 'report-collection',
  //   name: '上报采集对比',
  //   menuType: 'menuItem',
  //   permissionName: 'ReconciliationComparisonManage',
  // },
  {
    key: 'report-running-water-count',
    name: '上报流水统计',
    menuType: 'menuItem',
    permissionName: 'DataSellingWaterDealData',
  },
  {
    key: 'abnormal-early-warning',
    name: '异常预警',
    menuType: 'menuItem',
    permissionName: 'AbnormalAlarmManage',
  },
];
// 运营配置管理左侧导航菜单
export const operateConfigPageMenuArray = [
  {
    key: 'operate-config-role-manage',
    name: '机构角色管理',
    menuType: 'menuItem',
    permissionName: 'CorpRoleManage',
  },
  {
    key: 'corp-user-manage',
    name: '机构用户管理',
    menuType: 'menuItem',
    permissionName: 'CorpUserManage',
  },
  {
    key: 'branch-shop-manage',
    name: '门店管理',
    menuType: 'menuItem',
    permissionName: 'CorpMallManage',
    // rootChild: 'index',
  },
  {
    key: 'branch-shop-administrator',
    name: '门店管理员',
    menuType: 'menuItem',
    permissionName: 'CorpManageUser',
  },
  {
    key: 'notice-manage',
    name: '公告管理',
    menuType: 'menuItem',
    permissionName: 'CorpNoticeManage',
  },
  {
    key: 'branch-wx-accredit',
    name: '微信授权',
    menuType: 'menuItem',
    permissionName: 'CorpWxAuth',
  },
];
// 微信公众号管理左侧导航菜单
export const officialAccountsPageMenuArray = [
  {
    key: 'material',
    name: '素材管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'wx-material',
        name: '图文素材',
        menuType: 'menuItem',
        permissionName: 'NewsMaterialManage'
      },
      {
        key: 'text-material',
        name: '文本素材',
        menuType: 'menuItem',
        permissionName: 'TextMaterialManage'
      },
      {
        key: 'voice-material',
        name: '语音素材',
        menuType: 'menuItem',
        permissionName: 'VoiceMaterialManage'
      },
      {
        key: 'pic-material',
        name: '图片素材',
        menuType: 'menuItem',
        permissionName: 'PicMaterialManage'
      },
    ]
  },
  {
    key: 'reply',
    name: '微信回复',
    menuType: 'subMenu',
    child: [
      {
        key: 'default-reply',
        name: '默认回复',
        menuType: 'menuItem',
        permissionName: 'DefaultReplyManage'
      },
      {
        key: 'keywords-reply-manage',
        name: '关键词回复',
        menuType: 'menuItem',
        permissionName: 'KeywordsReplyManage'
      },
      {
        key: 'attention-reply',
        name: '关注后回复',
        menuType: 'menuItem',
        permissionName: 'AttentionReplyManage'
      },
    ]
  },
  {
    key: 'wx-menus',
    name: '微信菜单',
    menuType: 'menuItem',
    permissionName: 'WxMenuManage',
  },
  {
    key: 'groupSending',
    name: '微信消息',
    menuType: 'subMenu',
    child: [
      {
        key: 'group-sending-manage',
        name: '群发消息',
        menuType: 'menuItem',
        permissionName: 'GroupNewsManage'
      },
      {
        key: 'templet-manage',
        name: '模板消息',
        menuType: 'menuItem',
        permissionName: 'TemplateMessageManage'
      },
    ]
  },
]
// 卡券中心左侧导航菜单
export const couponCenterPageMenuArray = [
  {
    key: 'merchant',
    name: '商户卡券',
    menuType: 'subMenu',
    child: [
      {
        key: 'examine',
        name: '卡券审核',
        menuType: 'menuItem',
        permissionName: 'ShopCouponCheckManage'
      },
      // {
      //   key: 'shop-coupon',
      //   name: '活动审核',
      //   menuType: 'menuItem',
      //   permissionName: 'AppletShopCouponList',
      // },
      {
        key: 'voucher',
        name: '卡劵管理',
        menuType: 'menuItem',
        permissionName: 'ShopCouponManage'
      },
      {
        key: 'write-off',
        name: '核销管理',
        menuType: 'menuItem',
        permissionName: 'ShopCheckManage'
      }
    ]
  },
   {
    key: 'coupon',
    name: '商场卡券',
    menuType: 'subMenu',
    child: [
      {
        key: 'coupon-manage',
        name: '卡券管理',
        menuType: 'menuItem',
        permissionName: 'MarketCouponManage'
      },
      {
        key: 'cancel-after-verification-manage',
        name: '卡券核销',
        menuType: 'menuItem',
        permissionName: 'MarketCheckManage'
      },
      {
        key: 'cancel-user',
        name: '卡券用户',
        menuType: 'menuItem',
        permissionName: 'CouponUserManage'
      }
    ]
  }
]
// 小程序中心左侧导航菜单
export const appletCenterPageMenuArray = [
  {
    key: 'applet',
    name: '小程序管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'activity',
        name: '活动主页',
        menuType: 'menuItem',
        permissionName: 'AppletCouponActivity',
      },
      {
        key: 'couponActivity',
        name: '领券活动',
        menuType: 'menuItem',
        permissionName: 'AppletCouponActivityManage',
      },
      {
        key: 'selected-voucher',
        name: '精选购券',
        menuType: 'menuItem',
        permissionName: 'MallBuyCouponManage',
      },
      {
        key: 'material-list',
        name: '宣传素材',
        menuType: 'menuItem',
        permissionName: 'AppletMaterialListView',
      },
      // {
      //   key: 'material-list',
      //   name: '领券配置',
      //   menuType: 'menuItem',
      //   permissionName: 'AppletMaterialListView',
      // },
      {
        key: 'coupon-history-list',
        name: '领券列表',
        menuType: 'menuItem',
        permissionName: 'AppletGetCouponManage',
      },
      {
        key: 'shop-coupon',
        name: '商户卡券',
        menuType: 'menuItem',
        permissionName: 'AppletShopCouponList',
      },
      {
        key: 'allocation-manage',
        name: '配置管理',
        menuType: 'menuItem',
        permissionName: 'AppletIndustryRecoView',
      }
    ]
  },
  {
    key: 'user',
    name: '用户管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'user-list',
        name: '用户列表',
        menuType: 'menuItem',
        permissionName: 'AppletUserListManage',
      },
      {
        key: 'collectors',
        name: '收藏商户',
        menuType: 'menuItem',
        permissionName: 'AppletCollectShopManage',
      },
    ]
  },
  {
    key: 'order-manage',
    name: '订单管理',
    menuType: 'menuItem',
    permissionName: 'MallCouponOrderManage',
  },
  // {
  //   key: 'refund-order',
  //   name: '退款订单',
  //   menuType: 'menuItem',
  //   permissionName: 'AppletUserListManage',
  // },
]
//智慧停车左侧导航菜单
export const intelligentParkingPageMenuArray = [
  {
    key: 'parking',
    name: '车辆管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'entry-exit',
        name: '车辆出入管理',
        menuType: 'menuItem',
        permissionName: 'VehicleManagementList',
      },
      {
        key: 'charge-record',
        name: '停车收费记录',
        menuType: 'menuItem',
        permissionName: 'ParkRecordList',
      },
    ]
  },
  {
    key: 'monthCard',
    name: '月卡管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'month-card',
        name: '月卡续费管理',
        menuType: 'menuItem',
        permissionName: 'ParkCardListManage',
      },
      {
        key: 'month-card-pay',
        name: '月卡续费记录',
        menuType: 'menuItem',
        permissionName: 'ParkCardPayManage',
      },
    ]
  },
  {
    key: 'car-no-manage',
    name: '车牌绑定记录',
    menuType: 'menuItem',
    permissionName: 'ParkPlateManage'
  },
  {
    key: 'qrcode',
    name: '二维码',
    menuType: 'menuItem',
    permissionName: 'ParkQrcodeManage'
  },
  
  // {
  //   key: 'parking-reservation',
  //   name: '车位预约',
  //   menuType: 'menuItem',
  //   permissionName: 'ParkQrcodeManage'
  // },
  // {
  //   key: 'point-deduction',
  //   name: '积分抵扣配置',
  //   menuType: 'menuItem',
  //   permissionName: 'ParkRecordManage'
  // }
]

//数据中心左侧导航菜单
export const dataCenterPageMenuArray = [
  {
    key: 'data-survey',
    name: '数据概况',
    menuType: 'menuItem',
    permissionName: 'DataProfileManage',
  },
  {
    key: 'member-data',
    name: '会员数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'member-count',
        name: '会员统计',
        menuType: 'menuItem',
        permissionName: 'MemberDataListManage',
      },
      {
        key: 'member-active-count',
        name: '会员活跃统计',
        menuType: 'menuItem',
        permissionName: 'MemberActiveDataListManage',
      },
      {
        key: 'member-contribution-count',
        name: '会员贡献值统计',
        menuType: 'menuItem',
        permissionName: 'MemberContributionDataListManage',
      },
      {
        key: 'member-relegation-count',
        name: '会员升降级统计',
        menuType: 'menuItem',
        permissionName: 'MemberLevelDataListManage',
      },
      {
        key: 'member-distribution-count',
        name: '会员分布统计',
        menuType: 'menuItem',
        permissionName: 'MemberDistributionDataListManage',
      },
      {
        key: 'person',
        name: '用户画像',
        menuType: 'menuItem',
        permissionName: 'MemberPortraitManage',
      },
      {
        key: 'member-perference-analyse',
        name: '会员偏好分析',
        menuType: 'menuItem',
        permissionName: 'ShopCouponShopDataListManage',
      },
    ]
  },
  {
    key: 'coupon-data',
    name: '卡券数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'coupon-count',
        name: '卡券统计',
        menuType: 'menuItem',
        permissionName: 'CouponDataListManage',
      },
      {
        key: 'coupon-putIn-count',
        name: '卡券投放统计',
        menuType: 'menuItem',
        permissionName: 'CouponActiveDataManage',
      },
      {
        key: 'coupon-type-count',
        name: '卡券类型统计',
        menuType: 'menuItem',
        permissionName: 'CouponTypeDataListManage',
      },
      {
        key: 'couponFormat-top-count',
        name: '业态统计',
        menuType: 'menuItem',
        permissionName: 'CouponTradeDataListManage',
      },
      {
        key: 'couponShop-top-count',
        name: '商户统计',
        menuType: 'menuItem',
        permissionName: 'CouponShopDataListManage',
      },
      {
        key: 'order-count',
        name: '订单统计',
        menuType: 'menuItem',
        permissionName: 'IdcCouponOrderStatisManage',
      },
    ]
  },
  {
    key: 'points-data',
    name: '积分数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'integral-Statistics',
        name: '积分统计',
        menuType: 'menuItem',
        permissionName: 'PointDataListManage',
      },
      // {
      //   key: 'points-count',
      //   name: '积分统计',
      //   menuType: 'menuItem',
      //   permissionName: 'PointDataListManage',
      // },
      {
        key: 'member-rank-count',
        name: '会员等级积分统计',
        menuType: 'menuItem',
        permissionName: 'PointMemberLevelDataListManage',
      },
      {
        key: 'pointsFormat-top-count',
        name: '业态统计',
        menuType: 'menuItem',
        permissionName: 'PointTradeDataListManage',
      },
      {
        key: 'pointsShop-top-count',
        name: '商户统计',
        menuType: 'menuItem',
        permissionName: 'PointShopDataListManage',
      },
    ]
  },
  {
    key: 'pay-data',
    name: '支付数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'pay-count',
        name: '支付数据统计',
        menuType: 'menuItem',
        permissionName: 'PayDataListManage',
      },
    ]
  },
  {
    key: 'active-data',
    name: '活动数据',
    menuType: 'subMenu',
    child: [
      // {
      //   key: 'active-count',
      //   name: '活动统计',
      //   menuType: 'menuItem',
      //   permissionName: 'ActivityDataListManage',
      // },
      {
        key: 'lottery-active',
        name: '抽奖活动',
        menuType: 'menuItem',
        permissionName: 'ActivityLotteryData',
      },
    ]
  },
  {
    key: 'merchant-data',
    name: '商户-卡券数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'merchant-statistics',
        name: '卡券统计',
        menuType: 'menuItem',
        permissionName: 'ShopCouponDataListManage',
      },
      {
        key: 'merchant-launch',
        name: '卡券投放统计',
        menuType: 'menuItem',
        permissionName: 'ShopCouponActiveDataListManage',
      },
      {
        key: 'merchant-type',
        name: '卡券类型统计',
        menuType: 'menuItem',
        permissionName: 'ShopCouponTypeDataListManage',
      },
      {
        key: 'merchant-format',
        name: '业态统计',
        menuType: 'menuItem',
        permissionName: 'ShopCouponTradeDataListManage',
      },
      {
        key: 'merchant-to',
        name: '商户统计',
        menuType: 'menuItem',
        permissionName: 'ShopCouponShopDataListManage',
      },
    ]
  },
  {
    key: 'merchant-active',
    name: '商户-活动数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'merchant-active-data',
        name: '活动统计',
        menuType: 'menuItem',
        permissionName: 'ShopActivityDataList',
      },
    ]
  },
  {
    key: 'sms-active',
    name: '短信数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'sms-data',
        name: '短信统计',
        menuType: 'menuItem',
        permissionName: 'ShortMessageDataManageStatis',
      },
    ]
  },
  // {
  //   key: 'cost-allocation',
  //   name: '费用分摊数据',
  //   menuType: 'subMenu',
  //   child: [
  //     {
  //       key: 'coupon-cost-allocation',
  //       name: '卡券费用分摊统计',
  //       menuType: 'menuItem',
  //       permissionName: 'CouponDataListManage',
  //     },
  //     // {
  //     //   key: 'point-cost-allocation',
  //     //   name: '积分费用分摊统计',
  //     //   menuType: 'menuItem',
  //     //   permissionName: 'CouponDataListManage',
  //     // },
  //   ]
  // },
  // {
  
  {
    key: 'cost-allocation',
    name: '费用分摊数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'coupon-cost-allocation',
        name: '卡券费用分摊统计',
        menuType: 'menuItem',
        permissionName: 'CouponFeeAllocationStatisticDataManage',
      },
    ]
  },
  {
    key: 'shop-operate-data',
    name: '商户经营数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'shop-rank-data',
        name: '商户排名数据',
        menuType: 'menuItem',
        permissionName: 'BusinessDataRankManage',
      },
      {
        key: 'day-weekend-data',
        name: '工作日周末数据',
        menuType: 'menuItem',
        permissionName: 'BusinessWeekDataManage',
      },
    ]
  },
  {
    key: 'advert-put-data',
    name: '广告投放数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'advert-put-count',
        name: '广告投放统计',
        menuType: 'menuItem',
        permissionName: 'StatisticsAdvertisementData',
      },
      {
        key: 'advert-active-count',
        name: '广告活动统计',
        menuType: 'menuItem',
        permissionName: 'StatisticsAdvertisementCampaignData',
      },
      {
        key: 'advert-screen',
        name: '广告屏统计',
        menuType: 'menuItem',
        permissionName: 'StatisticsAdvertisementScreenData',
      },
      // {
      //   key: 'advert-person-analyse',
      //   name: '广告人群分析',
      //   menuType: 'menuItem',
      //   permissionName: 'ShopCouponTypeDataListManage',
      // },
      // {
      //   key: 'member-coversion-count',
      //   name: '会员转化统计',
      //   menuType: 'menuItem',
      //   permissionName: 'ShopCouponTradeDataListManage',
      // },
    ]
  },
  {
    key: 'parking-data',
    name: '智慧停车数据',
    menuType: 'subMenu',
    child: [
      {
        key: 'general-income',
        name: '停车收费统计',
        menuType: 'menuItem',
        permissionName: 'PointDataListManage',
      },
      {
        key: 'vehicel-flowrate',
        name: '月卡续费统计',
        menuType: 'menuItem',
        permissionName: 'PointMemberLevelDataListManage',
      },
      // {
      //   key: 'parking-duration',
      //   name: '停车时长分析',
      //   menuType: 'menuItem',
      //   permissionName: 'PointTradeDataListManage',
      // },
    ]
  },
]

//广告投放
export const advertisementPageMenuArray = [
  {
    key: 'advertise',
    name: '广告投放管理',
    menuType: 'subMenu',
    child: [
      {
        key: 'advertise-put',
        name: '广告管理',
        menuType: 'menuItem',
        permissionName: 'AdProgram'
      },
      {
        key: 'advertise-material',
        name: '广告素材',
        menuType: 'menuItem',
        permissionName: 'AdMaterial'
      },
      {
        key: 'advertise-screen',
        name: '广告屏',
        menuType: 'menuItem',
        permissionName: 'AdDevice'
      },
    ]
  },
]

// 营销中心左侧导航菜单
export const marketingPageMenuArray = [
  {
    key: 'marketing-activity',
    name: '营销活动',
    menuType: 'menuItem',
    permissionName: 'MarketActivityManage',
  },
  // {
  //   key: 'marketing-activity/release-activity',
  //   name: '营销活动',
  //   menuType: 'subMenu',
  //   child: [
  //     {
  //       key: 'release-activity',
  //       name: '商圈活动发布',
  //       menuType: 'menuItem',
  //       permissionName: 'CouponActivityStatisDataManage'
  //     },
  //     {
  //       key: 'coupon-activity',
  //       name: '商圈活动列表',
  //       menuType: 'menuItem',
  //       permissionName: 'CouponActivityListView'
  //     },
  //     {
  //       key: 'merchant',
  //       name: '商户活动',
  //       menuType: 'menuItem',
  //       permissionName: 'ActivityShopListManage'
  //     }
  //   ]
  // },
    {
      key: 'merchant',
      name: '商户活动',
      menuType: 'menuItem',
      permissionName: 'ActivityShopListManage',
    },
    {
      key: 'lottery-activity',
      name: '抽奖活动',
      menuType: 'menuItem',
      permissionName: 'LotteryManage',
    },
]

export const newNoticePageMenuArray = [
  {
    key: 'notice',
    name: '公告',
    menuType: 'menuItem',
    permissionName: 'AnnouncementNoticeManage',
  },
  {
    key: 'message-list',
    name: '消息列表',
    menuType: 'menuItem',
    permissionName: 'AnnouncementMessageListView',
  },
]
export const feedbackPageMenuArray = [
  {
    key: 'feedback-list',
    name: '反馈意见列表',
    menuType: 'menuItem',
    permissionName: 'FeedbackMessageListView',
  },
]
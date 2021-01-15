$(function() {
    //构造函数
    (function() {
        var that = null;
        var v = 2; //版本号
        //是否 是本地链接
        var isLocation = window.location.host.indexOf('127.0.0.1') > -1;
        //资源基础地址
        var pahtName = '/201221_CNY_text/'; //   /wechatimg/demo/
        var baseUrl = location.protocol + '//' + location.host + pahtName;
        var baseVideoUrl = baseUrl + 'video';
        var baseImgUrl = baseUrl + 'img';

        function App() {
            that = this;
            window.that = that;
            // 获取 屏幕宽高
            this.winW = document.documentElement.clientWidth;
            this.winH = document.documentElement.clientHeight;
            // 全局基础 接口地址
            this.apiUrl = window.apiUrl;
            that.imgLoading = {
                ImagesSrc: [{
                        id: 'index_bg',
                        src: 'img/index_bg.jpg'
                    },
                    {
                        id: 'lucky_bg',
                        src: 'img/lucky_bg.jpg'
                    },
                    {
                        id: 'main_bg',
                        src: 'img/main_bg.jpg'
                    },
                    {
                        id: 'poster_bg',
                        src: 'img/poster_bg.jpg'
                    },
                    {
                        id: 'share_icon',
                        src: 'img/share_icon.jpg'
                    },
                    {
                        id: 'index_ani_1',
                        src: 'img/index_ani/index_ani_1.jpg'
                    },
                    {
                        id: 'index_ani_10',
                        src: 'img/index_ani/index_ani_10.jpg'
                    },
                    {
                        id: 'index_ani_100',
                        src: 'img/index_ani/index_ani_100.jpg'
                    },
                    {
                        id: 'index_ani_101',
                        src: 'img/index_ani/index_ani_101.jpg'
                    },
                    {
                        id: 'index_ani_102',
                        src: 'img/index_ani/index_ani_102.jpg'
                    },
                    {
                        id: 'index_ani_103',
                        src: 'img/index_ani/index_ani_103.jpg'
                    },
                    {
                        id: 'index_ani_104',
                        src: 'img/index_ani/index_ani_104.jpg'
                    },
                    {
                        id: 'index_ani_105',
                        src: 'img/index_ani/index_ani_105.jpg'
                    },
                    {
                        id: 'index_ani_106',
                        src: 'img/index_ani/index_ani_106.jpg'
                    },
                    {
                        id: 'index_ani_107',
                        src: 'img/index_ani/index_ani_107.jpg'
                    },
                    {
                        id: 'index_ani_108',
                        src: 'img/index_ani/index_ani_108.jpg'
                    },
                    {
                        id: 'index_ani_109',
                        src: 'img/index_ani/index_ani_109.jpg'
                    },
                    {
                        id: 'index_ani_11',
                        src: 'img/index_ani/index_ani_11.jpg'
                    },
                    {
                        id: 'index_ani_110',
                        src: 'img/index_ani/index_ani_110.jpg'
                    },
                    {
                        id: 'index_ani_111',
                        src: 'img/index_ani/index_ani_111.jpg'
                    },
                    {
                        id: 'index_ani_112',
                        src: 'img/index_ani/index_ani_112.jpg'
                    },
                    {
                        id: 'index_ani_113',
                        src: 'img/index_ani/index_ani_113.jpg'
                    },
                    {
                        id: 'index_ani_114',
                        src: 'img/index_ani/index_ani_114.jpg'
                    },
                    {
                        id: 'index_ani_115',
                        src: 'img/index_ani/index_ani_115.jpg'
                    },
                    {
                        id: 'index_ani_116',
                        src: 'img/index_ani/index_ani_116.jpg'
                    },
                    {
                        id: 'index_ani_117',
                        src: 'img/index_ani/index_ani_117.jpg'
                    },
                    {
                        id: 'index_ani_118',
                        src: 'img/index_ani/index_ani_118.jpg'
                    },
                    {
                        id: 'index_ani_119',
                        src: 'img/index_ani/index_ani_119.jpg'
                    },
                    {
                        id: 'index_ani_12',
                        src: 'img/index_ani/index_ani_12.jpg'
                    },
                    {
                        id: 'index_ani_120',
                        src: 'img/index_ani/index_ani_120.jpg'
                    },
                    {
                        id: 'index_ani_121',
                        src: 'img/index_ani/index_ani_121.jpg'
                    },
                    {
                        id: 'index_ani_122',
                        src: 'img/index_ani/index_ani_122.jpg'
                    },
                    {
                        id: 'index_ani_123',
                        src: 'img/index_ani/index_ani_123.jpg'
                    },
                    {
                        id: 'index_ani_124',
                        src: 'img/index_ani/index_ani_124.jpg'
                    },
                    {
                        id: 'index_ani_125',
                        src: 'img/index_ani/index_ani_125.jpg'
                    },
                    {
                        id: 'index_ani_126',
                        src: 'img/index_ani/index_ani_126.jpg'
                    },
                    {
                        id: 'index_ani_127',
                        src: 'img/index_ani/index_ani_127.jpg'
                    },
                    {
                        id: 'index_ani_128',
                        src: 'img/index_ani/index_ani_128.jpg'
                    },
                    {
                        id: 'index_ani_129',
                        src: 'img/index_ani/index_ani_129.jpg'
                    },
                    {
                        id: 'index_ani_13',
                        src: 'img/index_ani/index_ani_13.jpg'
                    },
                    {
                        id: 'index_ani_130',
                        src: 'img/index_ani/index_ani_130.jpg'
                    },
                    {
                        id: 'index_ani_131',
                        src: 'img/index_ani/index_ani_131.jpg'
                    },
                    {
                        id: 'index_ani_132',
                        src: 'img/index_ani/index_ani_132.jpg'
                    },
                    {
                        id: 'index_ani_133',
                        src: 'img/index_ani/index_ani_133.jpg'
                    },
                    {
                        id: 'index_ani_134',
                        src: 'img/index_ani/index_ani_134.jpg'
                    },
                    {
                        id: 'index_ani_135',
                        src: 'img/index_ani/index_ani_135.jpg'
                    },
                    {
                        id: 'index_ani_136',
                        src: 'img/index_ani/index_ani_136.jpg'
                    },
                    {
                        id: 'index_ani_137',
                        src: 'img/index_ani/index_ani_137.jpg'
                    },
                    {
                        id: 'index_ani_138',
                        src: 'img/index_ani/index_ani_138.jpg'
                    },
                    {
                        id: 'index_ani_139',
                        src: 'img/index_ani/index_ani_139.jpg'
                    },
                    {
                        id: 'index_ani_14',
                        src: 'img/index_ani/index_ani_14.jpg'
                    },
                    {
                        id: 'index_ani_140',
                        src: 'img/index_ani/index_ani_140.jpg'
                    },
                    {
                        id: 'index_ani_141',
                        src: 'img/index_ani/index_ani_141.jpg'
                    },
                    {
                        id: 'index_ani_142',
                        src: 'img/index_ani/index_ani_142.jpg'
                    },
                    {
                        id: 'index_ani_143',
                        src: 'img/index_ani/index_ani_143.jpg'
                    },
                    {
                        id: 'index_ani_144',
                        src: 'img/index_ani/index_ani_144.jpg'
                    },
                    {
                        id: 'index_ani_145',
                        src: 'img/index_ani/index_ani_145.jpg'
                    },
                    {
                        id: 'index_ani_146',
                        src: 'img/index_ani/index_ani_146.jpg'
                    },
                    {
                        id: 'index_ani_147',
                        src: 'img/index_ani/index_ani_147.jpg'
                    },
                    {
                        id: 'index_ani_148',
                        src: 'img/index_ani/index_ani_148.jpg'
                    },
                    {
                        id: 'index_ani_149',
                        src: 'img/index_ani/index_ani_149.jpg'
                    },
                    {
                        id: 'index_ani_15',
                        src: 'img/index_ani/index_ani_15.jpg'
                    },
                    {
                        id: 'index_ani_150',
                        src: 'img/index_ani/index_ani_150.jpg'
                    },
                    {
                        id: 'index_ani_151',
                        src: 'img/index_ani/index_ani_151.jpg'
                    },
                    {
                        id: 'index_ani_152',
                        src: 'img/index_ani/index_ani_152.jpg'
                    },
                    {
                        id: 'index_ani_153',
                        src: 'img/index_ani/index_ani_153.jpg'
                    },
                    {
                        id: 'index_ani_154',
                        src: 'img/index_ani/index_ani_154.jpg'
                    },
                    {
                        id: 'index_ani_155',
                        src: 'img/index_ani/index_ani_155.jpg'
                    },
                    {
                        id: 'index_ani_156',
                        src: 'img/index_ani/index_ani_156.jpg'
                    },
                    {
                        id: 'index_ani_157',
                        src: 'img/index_ani/index_ani_157.jpg'
                    },
                    {
                        id: 'index_ani_158',
                        src: 'img/index_ani/index_ani_158.jpg'
                    },
                    {
                        id: 'index_ani_159',
                        src: 'img/index_ani/index_ani_159.jpg'
                    },
                    {
                        id: 'index_ani_16',
                        src: 'img/index_ani/index_ani_16.jpg'
                    },
                    {
                        id: 'index_ani_160',
                        src: 'img/index_ani/index_ani_160.jpg'
                    },
                    {
                        id: 'index_ani_161',
                        src: 'img/index_ani/index_ani_161.jpg'
                    },
                    {
                        id: 'index_ani_162',
                        src: 'img/index_ani/index_ani_162.jpg'
                    },
                    {
                        id: 'index_ani_163',
                        src: 'img/index_ani/index_ani_163.jpg'
                    },
                    {
                        id: 'index_ani_164',
                        src: 'img/index_ani/index_ani_164.jpg'
                    },
                    {
                        id: 'index_ani_165',
                        src: 'img/index_ani/index_ani_165.jpg'
                    },
                    {
                        id: 'index_ani_166',
                        src: 'img/index_ani/index_ani_166.jpg'
                    },
                    {
                        id: 'index_ani_167',
                        src: 'img/index_ani/index_ani_167.jpg'
                    },
                    {
                        id: 'index_ani_168',
                        src: 'img/index_ani/index_ani_168.jpg'
                    },
                    {
                        id: 'index_ani_169',
                        src: 'img/index_ani/index_ani_169.jpg'
                    },
                    {
                        id: 'index_ani_17',
                        src: 'img/index_ani/index_ani_17.jpg'
                    },
                    {
                        id: 'index_ani_170',
                        src: 'img/index_ani/index_ani_170.jpg'
                    },
                    {
                        id: 'index_ani_171',
                        src: 'img/index_ani/index_ani_171.jpg'
                    },
                    {
                        id: 'index_ani_172',
                        src: 'img/index_ani/index_ani_172.jpg'
                    },
                    {
                        id: 'index_ani_173',
                        src: 'img/index_ani/index_ani_173.jpg'
                    },
                    {
                        id: 'index_ani_174',
                        src: 'img/index_ani/index_ani_174.jpg'
                    },
                    {
                        id: 'index_ani_175',
                        src: 'img/index_ani/index_ani_175.jpg'
                    },
                    {
                        id: 'index_ani_176',
                        src: 'img/index_ani/index_ani_176.jpg'
                    },
                    {
                        id: 'index_ani_177',
                        src: 'img/index_ani/index_ani_177.jpg'
                    },
                    {
                        id: 'index_ani_178',
                        src: 'img/index_ani/index_ani_178.jpg'
                    },
                    {
                        id: 'index_ani_179',
                        src: 'img/index_ani/index_ani_179.jpg'
                    },
                    {
                        id: 'index_ani_18',
                        src: 'img/index_ani/index_ani_18.jpg'
                    },
                    {
                        id: 'index_ani_180',
                        src: 'img/index_ani/index_ani_180.jpg'
                    },
                    {
                        id: 'index_ani_181',
                        src: 'img/index_ani/index_ani_181.jpg'
                    },
                    {
                        id: 'index_ani_182',
                        src: 'img/index_ani/index_ani_182.jpg'
                    },
                    {
                        id: 'index_ani_183',
                        src: 'img/index_ani/index_ani_183.jpg'
                    },
                    {
                        id: 'index_ani_184',
                        src: 'img/index_ani/index_ani_184.jpg'
                    },
                    {
                        id: 'index_ani_185',
                        src: 'img/index_ani/index_ani_185.jpg'
                    },
                    {
                        id: 'index_ani_186',
                        src: 'img/index_ani/index_ani_186.jpg'
                    },
                    {
                        id: 'index_ani_187',
                        src: 'img/index_ani/index_ani_187.jpg'
                    },
                    {
                        id: 'index_ani_188',
                        src: 'img/index_ani/index_ani_188.jpg'
                    },
                    {
                        id: 'index_ani_189',
                        src: 'img/index_ani/index_ani_189.jpg'
                    },
                    {
                        id: 'index_ani_19',
                        src: 'img/index_ani/index_ani_19.jpg'
                    },
                    {
                        id: 'index_ani_190',
                        src: 'img/index_ani/index_ani_190.jpg'
                    },
                    {
                        id: 'index_ani_191',
                        src: 'img/index_ani/index_ani_191.jpg'
                    },
                    {
                        id: 'index_ani_192',
                        src: 'img/index_ani/index_ani_192.jpg'
                    },
                    {
                        id: 'index_ani_193',
                        src: 'img/index_ani/index_ani_193.jpg'
                    },
                    {
                        id: 'index_ani_194',
                        src: 'img/index_ani/index_ani_194.jpg'
                    },
                    {
                        id: 'index_ani_195',
                        src: 'img/index_ani/index_ani_195.jpg'
                    },
                    {
                        id: 'index_ani_196',
                        src: 'img/index_ani/index_ani_196.jpg'
                    },
                    {
                        id: 'index_ani_197',
                        src: 'img/index_ani/index_ani_197.jpg'
                    },
                    {
                        id: 'index_ani_198',
                        src: 'img/index_ani/index_ani_198.jpg'
                    },
                    {
                        id: 'index_ani_199',
                        src: 'img/index_ani/index_ani_199.jpg'
                    },
                    {
                        id: 'index_ani_2',
                        src: 'img/index_ani/index_ani_2.jpg'
                    },
                    {
                        id: 'index_ani_20',
                        src: 'img/index_ani/index_ani_20.jpg'
                    },
                    {
                        id: 'index_ani_200',
                        src: 'img/index_ani/index_ani_200.jpg'
                    },
                    {
                        id: 'index_ani_201',
                        src: 'img/index_ani/index_ani_201.jpg'
                    },
                    {
                        id: 'index_ani_202',
                        src: 'img/index_ani/index_ani_202.jpg'
                    },
                    {
                        id: 'index_ani_203',
                        src: 'img/index_ani/index_ani_203.jpg'
                    },
                    {
                        id: 'index_ani_204',
                        src: 'img/index_ani/index_ani_204.jpg'
                    },
                    {
                        id: 'index_ani_205',
                        src: 'img/index_ani/index_ani_205.jpg'
                    },
                    {
                        id: 'index_ani_206',
                        src: 'img/index_ani/index_ani_206.jpg'
                    },
                    {
                        id: 'index_ani_207',
                        src: 'img/index_ani/index_ani_207.jpg'
                    },
                    {
                        id: 'index_ani_208',
                        src: 'img/index_ani/index_ani_208.jpg'
                    },
                    {
                        id: 'index_ani_209',
                        src: 'img/index_ani/index_ani_209.jpg'
                    },
                    {
                        id: 'index_ani_21',
                        src: 'img/index_ani/index_ani_21.jpg'
                    },
                    {
                        id: 'index_ani_210',
                        src: 'img/index_ani/index_ani_210.jpg'
                    },
                    {
                        id: 'index_ani_211',
                        src: 'img/index_ani/index_ani_211.jpg'
                    },
                    {
                        id: 'index_ani_212',
                        src: 'img/index_ani/index_ani_212.jpg'
                    },
                    {
                        id: 'index_ani_213',
                        src: 'img/index_ani/index_ani_213.jpg'
                    },
                    {
                        id: 'index_ani_214',
                        src: 'img/index_ani/index_ani_214.jpg'
                    },
                    {
                        id: 'index_ani_215',
                        src: 'img/index_ani/index_ani_215.jpg'
                    },
                    {
                        id: 'index_ani_216',
                        src: 'img/index_ani/index_ani_216.jpg'
                    },
                    {
                        id: 'index_ani_217',
                        src: 'img/index_ani/index_ani_217.jpg'
                    },
                    {
                        id: 'index_ani_218',
                        src: 'img/index_ani/index_ani_218.jpg'
                    },
                    {
                        id: 'index_ani_219',
                        src: 'img/index_ani/index_ani_219.jpg'
                    },
                    {
                        id: 'index_ani_22',
                        src: 'img/index_ani/index_ani_22.jpg'
                    },
                    {
                        id: 'index_ani_220',
                        src: 'img/index_ani/index_ani_220.jpg'
                    },
                    {
                        id: 'index_ani_221',
                        src: 'img/index_ani/index_ani_221.jpg'
                    },
                    {
                        id: 'index_ani_222',
                        src: 'img/index_ani/index_ani_222.jpg'
                    },
                    {
                        id: 'index_ani_223',
                        src: 'img/index_ani/index_ani_223.jpg'
                    },
                    {
                        id: 'index_ani_224',
                        src: 'img/index_ani/index_ani_224.jpg'
                    },
                    {
                        id: 'index_ani_225',
                        src: 'img/index_ani/index_ani_225.jpg'
                    },
                    {
                        id: 'index_ani_23',
                        src: 'img/index_ani/index_ani_23.jpg'
                    },
                    {
                        id: 'index_ani_24',
                        src: 'img/index_ani/index_ani_24.jpg'
                    },
                    {
                        id: 'index_ani_25',
                        src: 'img/index_ani/index_ani_25.jpg'
                    },
                    {
                        id: 'index_ani_26',
                        src: 'img/index_ani/index_ani_26.jpg'
                    },
                    {
                        id: 'index_ani_27',
                        src: 'img/index_ani/index_ani_27.jpg'
                    },
                    {
                        id: 'index_ani_28',
                        src: 'img/index_ani/index_ani_28.jpg'
                    },
                    {
                        id: 'index_ani_29',
                        src: 'img/index_ani/index_ani_29.jpg'
                    },
                    {
                        id: 'index_ani_3',
                        src: 'img/index_ani/index_ani_3.jpg'
                    },
                    {
                        id: 'index_ani_30',
                        src: 'img/index_ani/index_ani_30.jpg'
                    },
                    {
                        id: 'index_ani_31',
                        src: 'img/index_ani/index_ani_31.jpg'
                    },
                    {
                        id: 'index_ani_32',
                        src: 'img/index_ani/index_ani_32.jpg'
                    },
                    {
                        id: 'index_ani_33',
                        src: 'img/index_ani/index_ani_33.jpg'
                    },
                    {
                        id: 'index_ani_34',
                        src: 'img/index_ani/index_ani_34.jpg'
                    },
                    {
                        id: 'index_ani_35',
                        src: 'img/index_ani/index_ani_35.jpg'
                    },
                    {
                        id: 'index_ani_36',
                        src: 'img/index_ani/index_ani_36.jpg'
                    },
                    {
                        id: 'index_ani_37',
                        src: 'img/index_ani/index_ani_37.jpg'
                    },
                    {
                        id: 'index_ani_38',
                        src: 'img/index_ani/index_ani_38.jpg'
                    },
                    {
                        id: 'index_ani_39',
                        src: 'img/index_ani/index_ani_39.jpg'
                    },
                    {
                        id: 'index_ani_4',
                        src: 'img/index_ani/index_ani_4.jpg'
                    },
                    {
                        id: 'index_ani_40',
                        src: 'img/index_ani/index_ani_40.jpg'
                    },
                    {
                        id: 'index_ani_41',
                        src: 'img/index_ani/index_ani_41.jpg'
                    },
                    {
                        id: 'index_ani_42',
                        src: 'img/index_ani/index_ani_42.jpg'
                    },
                    {
                        id: 'index_ani_43',
                        src: 'img/index_ani/index_ani_43.jpg'
                    },
                    {
                        id: 'index_ani_44',
                        src: 'img/index_ani/index_ani_44.jpg'
                    },
                    {
                        id: 'index_ani_45',
                        src: 'img/index_ani/index_ani_45.jpg'
                    },
                    {
                        id: 'index_ani_46',
                        src: 'img/index_ani/index_ani_46.jpg'
                    },
                    {
                        id: 'index_ani_47',
                        src: 'img/index_ani/index_ani_47.jpg'
                    },
                    {
                        id: 'index_ani_48',
                        src: 'img/index_ani/index_ani_48.jpg'
                    },
                    {
                        id: 'index_ani_49',
                        src: 'img/index_ani/index_ani_49.jpg'
                    },
                    {
                        id: 'index_ani_5',
                        src: 'img/index_ani/index_ani_5.jpg'
                    },
                    {
                        id: 'index_ani_50',
                        src: 'img/index_ani/index_ani_50.jpg'
                    },
                    {
                        id: 'index_ani_51',
                        src: 'img/index_ani/index_ani_51.jpg'
                    },
                    {
                        id: 'index_ani_52',
                        src: 'img/index_ani/index_ani_52.jpg'
                    },
                    {
                        id: 'index_ani_53',
                        src: 'img/index_ani/index_ani_53.jpg'
                    },
                    {
                        id: 'index_ani_54',
                        src: 'img/index_ani/index_ani_54.jpg'
                    },
                    {
                        id: 'index_ani_55',
                        src: 'img/index_ani/index_ani_55.jpg'
                    },
                    {
                        id: 'index_ani_56',
                        src: 'img/index_ani/index_ani_56.jpg'
                    },
                    {
                        id: 'index_ani_57',
                        src: 'img/index_ani/index_ani_57.jpg'
                    },
                    {
                        id: 'index_ani_58',
                        src: 'img/index_ani/index_ani_58.jpg'
                    },
                    {
                        id: 'index_ani_59',
                        src: 'img/index_ani/index_ani_59.jpg'
                    },
                    {
                        id: 'index_ani_6',
                        src: 'img/index_ani/index_ani_6.jpg'
                    },
                    {
                        id: 'index_ani_60',
                        src: 'img/index_ani/index_ani_60.jpg'
                    },
                    {
                        id: 'index_ani_61',
                        src: 'img/index_ani/index_ani_61.jpg'
                    },
                    {
                        id: 'index_ani_62',
                        src: 'img/index_ani/index_ani_62.jpg'
                    },
                    {
                        id: 'index_ani_63',
                        src: 'img/index_ani/index_ani_63.jpg'
                    },
                    {
                        id: 'index_ani_64',
                        src: 'img/index_ani/index_ani_64.jpg'
                    },
                    {
                        id: 'index_ani_65',
                        src: 'img/index_ani/index_ani_65.jpg'
                    },
                    {
                        id: 'index_ani_66',
                        src: 'img/index_ani/index_ani_66.jpg'
                    },
                    {
                        id: 'index_ani_67',
                        src: 'img/index_ani/index_ani_67.jpg'
                    },
                    {
                        id: 'index_ani_68',
                        src: 'img/index_ani/index_ani_68.jpg'
                    },
                    {
                        id: 'index_ani_69',
                        src: 'img/index_ani/index_ani_69.jpg'
                    },
                    {
                        id: 'index_ani_7',
                        src: 'img/index_ani/index_ani_7.jpg'
                    },
                    {
                        id: 'index_ani_70',
                        src: 'img/index_ani/index_ani_70.jpg'
                    },
                    {
                        id: 'index_ani_71',
                        src: 'img/index_ani/index_ani_71.jpg'
                    },
                    {
                        id: 'index_ani_72',
                        src: 'img/index_ani/index_ani_72.jpg'
                    },
                    {
                        id: 'index_ani_73',
                        src: 'img/index_ani/index_ani_73.jpg'
                    },
                    {
                        id: 'index_ani_74',
                        src: 'img/index_ani/index_ani_74.jpg'
                    },
                    {
                        id: 'index_ani_75',
                        src: 'img/index_ani/index_ani_75.jpg'
                    },
                    {
                        id: 'index_ani_76',
                        src: 'img/index_ani/index_ani_76.jpg'
                    },
                    {
                        id: 'index_ani_77',
                        src: 'img/index_ani/index_ani_77.jpg'
                    },
                    {
                        id: 'index_ani_78',
                        src: 'img/index_ani/index_ani_78.jpg'
                    },
                    {
                        id: 'index_ani_79',
                        src: 'img/index_ani/index_ani_79.jpg'
                    },
                    {
                        id: 'index_ani_8',
                        src: 'img/index_ani/index_ani_8.jpg'
                    },
                    {
                        id: 'index_ani_80',
                        src: 'img/index_ani/index_ani_80.jpg'
                    },
                    {
                        id: 'index_ani_81',
                        src: 'img/index_ani/index_ani_81.jpg'
                    },
                    {
                        id: 'index_ani_82',
                        src: 'img/index_ani/index_ani_82.jpg'
                    },
                    {
                        id: 'index_ani_83',
                        src: 'img/index_ani/index_ani_83.jpg'
                    },
                    {
                        id: 'index_ani_84',
                        src: 'img/index_ani/index_ani_84.jpg'
                    },
                    {
                        id: 'index_ani_85',
                        src: 'img/index_ani/index_ani_85.jpg'
                    },
                    {
                        id: 'index_ani_86',
                        src: 'img/index_ani/index_ani_86.jpg'
                    },
                    {
                        id: 'index_ani_87',
                        src: 'img/index_ani/index_ani_87.jpg'
                    },
                    {
                        id: 'index_ani_88',
                        src: 'img/index_ani/index_ani_88.jpg'
                    },
                    {
                        id: 'index_ani_89',
                        src: 'img/index_ani/index_ani_89.jpg'
                    },
                    {
                        id: 'index_ani_9',
                        src: 'img/index_ani/index_ani_9.jpg'
                    },
                    {
                        id: 'index_ani_90',
                        src: 'img/index_ani/index_ani_90.jpg'
                    },
                    {
                        id: 'index_ani_91',
                        src: 'img/index_ani/index_ani_91.jpg'
                    },
                    {
                        id: 'index_ani_92',
                        src: 'img/index_ani/index_ani_92.jpg'
                    },
                    {
                        id: 'index_ani_93',
                        src: 'img/index_ani/index_ani_93.jpg'
                    },
                    {
                        id: 'index_ani_94',
                        src: 'img/index_ani/index_ani_94.jpg'
                    },
                    {
                        id: 'index_ani_95',
                        src: 'img/index_ani/index_ani_95.jpg'
                    },
                    {
                        id: 'index_ani_96',
                        src: 'img/index_ani/index_ani_96.jpg'
                    },
                    {
                        id: 'index_ani_97',
                        src: 'img/index_ani/index_ani_97.jpg'
                    },
                    {
                        id: 'index_ani_98',
                        src: 'img/index_ani/index_ani_98.jpg'
                    },
                    {
                        id: 'index_ani_99',
                        src: 'img/index_ani/index_ani_99.jpg'
                    },
                    {
                        id: 'btn_1',
                        src: 'img/btn_1.png'
                    },
                    {
                        id: 'btn_2',
                        src: 'img/btn_2.png'
                    },
                    {
                        id: 'btn_3',
                        src: 'img/btn_3.png'
                    },
                    {
                        id: 'index_btn_1',
                        src: 'img/index_btn_1.png'
                    },
                    {
                        id: 'luck_1',
                        src: 'img/luck_1.png'
                    },
                    {
                        id: 'luck_2',
                        src: 'img/luck_2.png'
                    },
                    {
                        id: 'page_1',
                        src: 'img/page_1.png'
                    },
                    {
                        id: 'page_2',
                        src: 'img/page_2.png'
                    },
                    {
                        id: 'page_3',
                        src: 'img/page_3.png'
                    },
                    {
                        id: 'page_4',
                        src: 'img/page_4.png'
                    },
                    {
                        id: 'page_5',
                        src: 'img/page_5.png'
                    },
                    {
                        id: 'poster_1',
                        src: 'img/poster_1.png'
                    },
                    {
                        id: 'poster_2',
                        src: 'img/poster_2.png'
                    },
                    {
                        id: 'poster_3',
                        src: 'img/poster_3.png'
                    },
                    {
                        id: 'poster_4',
                        src: 'img/poster_4.png'
                    },
                    {
                        id: 'poster_5',
                        src: 'img/poster_5.png'
                    },
                    {
                        id: 'poster_6',
                        src: 'img/poster_6.png'
                    },
                    {
                        id: 'poster_7',
                        src: 'img/poster_7.png'
                    },
                    {
                        id: 'index_fireworks_1',
                        src: 'img/index_fireworks/index_fireworks_1.png'
                    },
                    {
                        id: 'index_fireworks_10',
                        src: 'img/index_fireworks/index_fireworks_10.png'
                    },
                    {
                        id: 'index_fireworks_11',
                        src: 'img/index_fireworks/index_fireworks_11.png'
                    },
                    {
                        id: 'index_fireworks_12',
                        src: 'img/index_fireworks/index_fireworks_12.png'
                    },
                    {
                        id: 'index_fireworks_13',
                        src: 'img/index_fireworks/index_fireworks_13.png'
                    },
                    {
                        id: 'index_fireworks_14',
                        src: 'img/index_fireworks/index_fireworks_14.png'
                    },
                    {
                        id: 'index_fireworks_15',
                        src: 'img/index_fireworks/index_fireworks_15.png'
                    },
                    {
                        id: 'index_fireworks_16',
                        src: 'img/index_fireworks/index_fireworks_16.png'
                    },
                    {
                        id: 'index_fireworks_17',
                        src: 'img/index_fireworks/index_fireworks_17.png'
                    },
                    {
                        id: 'index_fireworks_18',
                        src: 'img/index_fireworks/index_fireworks_18.png'
                    },
                    {
                        id: 'index_fireworks_19',
                        src: 'img/index_fireworks/index_fireworks_19.png'
                    },
                    {
                        id: 'index_fireworks_2',
                        src: 'img/index_fireworks/index_fireworks_2.png'
                    },
                    {
                        id: 'index_fireworks_20',
                        src: 'img/index_fireworks/index_fireworks_20.png'
                    },
                    {
                        id: 'index_fireworks_21',
                        src: 'img/index_fireworks/index_fireworks_21.png'
                    },
                    {
                        id: 'index_fireworks_22',
                        src: 'img/index_fireworks/index_fireworks_22.png'
                    },
                    {
                        id: 'index_fireworks_23',
                        src: 'img/index_fireworks/index_fireworks_23.png'
                    },
                    {
                        id: 'index_fireworks_24',
                        src: 'img/index_fireworks/index_fireworks_24.png'
                    },
                    {
                        id: 'index_fireworks_25',
                        src: 'img/index_fireworks/index_fireworks_25.png'
                    },
                    {
                        id: 'index_fireworks_26',
                        src: 'img/index_fireworks/index_fireworks_26.png'
                    },
                    {
                        id: 'index_fireworks_27',
                        src: 'img/index_fireworks/index_fireworks_27.png'
                    },
                    {
                        id: 'index_fireworks_28',
                        src: 'img/index_fireworks/index_fireworks_28.png'
                    },
                    {
                        id: 'index_fireworks_29',
                        src: 'img/index_fireworks/index_fireworks_29.png'
                    },
                    {
                        id: 'index_fireworks_3',
                        src: 'img/index_fireworks/index_fireworks_3.png'
                    },
                    {
                        id: 'index_fireworks_30',
                        src: 'img/index_fireworks/index_fireworks_30.png'
                    },
                    {
                        id: 'index_fireworks_31',
                        src: 'img/index_fireworks/index_fireworks_31.png'
                    },
                    {
                        id: 'index_fireworks_32',
                        src: 'img/index_fireworks/index_fireworks_32.png'
                    },
                    {
                        id: 'index_fireworks_33',
                        src: 'img/index_fireworks/index_fireworks_33.png'
                    },
                    {
                        id: 'index_fireworks_34',
                        src: 'img/index_fireworks/index_fireworks_34.png'
                    },
                    {
                        id: 'index_fireworks_35',
                        src: 'img/index_fireworks/index_fireworks_35.png'
                    },
                    {
                        id: 'index_fireworks_36',
                        src: 'img/index_fireworks/index_fireworks_36.png'
                    },
                    {
                        id: 'index_fireworks_37',
                        src: 'img/index_fireworks/index_fireworks_37.png'
                    },
                    {
                        id: 'index_fireworks_38',
                        src: 'img/index_fireworks/index_fireworks_38.png'
                    },
                    {
                        id: 'index_fireworks_39',
                        src: 'img/index_fireworks/index_fireworks_39.png'
                    },
                    {
                        id: 'index_fireworks_4',
                        src: 'img/index_fireworks/index_fireworks_4.png'
                    },
                    {
                        id: 'index_fireworks_40',
                        src: 'img/index_fireworks/index_fireworks_40.png'
                    },
                    {
                        id: 'index_fireworks_41',
                        src: 'img/index_fireworks/index_fireworks_41.png'
                    },
                    {
                        id: 'index_fireworks_42',
                        src: 'img/index_fireworks/index_fireworks_42.png'
                    },
                    {
                        id: 'index_fireworks_43',
                        src: 'img/index_fireworks/index_fireworks_43.png'
                    },
                    {
                        id: 'index_fireworks_44',
                        src: 'img/index_fireworks/index_fireworks_44.png'
                    },
                    {
                        id: 'index_fireworks_45',
                        src: 'img/index_fireworks/index_fireworks_45.png'
                    },
                    {
                        id: 'index_fireworks_46',
                        src: 'img/index_fireworks/index_fireworks_46.png'
                    },
                    {
                        id: 'index_fireworks_47',
                        src: 'img/index_fireworks/index_fireworks_47.png'
                    },
                    {
                        id: 'index_fireworks_48',
                        src: 'img/index_fireworks/index_fireworks_48.png'
                    },
                    {
                        id: 'index_fireworks_49',
                        src: 'img/index_fireworks/index_fireworks_49.png'
                    },
                    {
                        id: 'index_fireworks_5',
                        src: 'img/index_fireworks/index_fireworks_5.png'
                    },
                    {
                        id: 'index_fireworks_50',
                        src: 'img/index_fireworks/index_fireworks_50.png'
                    },
                    {
                        id: 'index_fireworks_51',
                        src: 'img/index_fireworks/index_fireworks_51.png'
                    },
                    {
                        id: 'index_fireworks_52',
                        src: 'img/index_fireworks/index_fireworks_52.png'
                    },
                    {
                        id: 'index_fireworks_53',
                        src: 'img/index_fireworks/index_fireworks_53.png'
                    },
                    {
                        id: 'index_fireworks_54',
                        src: 'img/index_fireworks/index_fireworks_54.png'
                    },
                    {
                        id: 'index_fireworks_55',
                        src: 'img/index_fireworks/index_fireworks_55.png'
                    },
                    {
                        id: 'index_fireworks_56',
                        src: 'img/index_fireworks/index_fireworks_56.png'
                    },
                    {
                        id: 'index_fireworks_57',
                        src: 'img/index_fireworks/index_fireworks_57.png'
                    },
                    {
                        id: 'index_fireworks_58',
                        src: 'img/index_fireworks/index_fireworks_58.png'
                    },
                    {
                        id: 'index_fireworks_59',
                        src: 'img/index_fireworks/index_fireworks_59.png'
                    },
                    {
                        id: 'index_fireworks_6',
                        src: 'img/index_fireworks/index_fireworks_6.png'
                    },
                    {
                        id: 'index_fireworks_60',
                        src: 'img/index_fireworks/index_fireworks_60.png'
                    },
                    {
                        id: 'index_fireworks_61',
                        src: 'img/index_fireworks/index_fireworks_61.png'
                    },
                    {
                        id: 'index_fireworks_62',
                        src: 'img/index_fireworks/index_fireworks_62.png'
                    },
                    {
                        id: 'index_fireworks_63',
                        src: 'img/index_fireworks/index_fireworks_63.png'
                    },
                    {
                        id: 'index_fireworks_64',
                        src: 'img/index_fireworks/index_fireworks_64.png'
                    },
                    {
                        id: 'index_fireworks_65',
                        src: 'img/index_fireworks/index_fireworks_65.png'
                    },
                    {
                        id: 'index_fireworks_66',
                        src: 'img/index_fireworks/index_fireworks_66.png'
                    },
                    {
                        id: 'index_fireworks_67',
                        src: 'img/index_fireworks/index_fireworks_67.png'
                    },
                    {
                        id: 'index_fireworks_68',
                        src: 'img/index_fireworks/index_fireworks_68.png'
                    },
                    {
                        id: 'index_fireworks_69',
                        src: 'img/index_fireworks/index_fireworks_69.png'
                    },
                    {
                        id: 'index_fireworks_7',
                        src: 'img/index_fireworks/index_fireworks_7.png'
                    },
                    {
                        id: 'index_fireworks_70',
                        src: 'img/index_fireworks/index_fireworks_70.png'
                    },
                    {
                        id: 'index_fireworks_71',
                        src: 'img/index_fireworks/index_fireworks_71.png'
                    },
                    {
                        id: 'index_fireworks_72',
                        src: 'img/index_fireworks/index_fireworks_72.png'
                    },
                    {
                        id: 'index_fireworks_73',
                        src: 'img/index_fireworks/index_fireworks_73.png'
                    },
                    {
                        id: 'index_fireworks_74',
                        src: 'img/index_fireworks/index_fireworks_74.png'
                    },
                    {
                        id: 'index_fireworks_75',
                        src: 'img/index_fireworks/index_fireworks_75.png'
                    },
                    {
                        id: 'index_fireworks_76',
                        src: 'img/index_fireworks/index_fireworks_76.png'
                    },
                    {
                        id: 'index_fireworks_77',
                        src: 'img/index_fireworks/index_fireworks_77.png'
                    },
                    {
                        id: 'index_fireworks_78',
                        src: 'img/index_fireworks/index_fireworks_78.png'
                    },
                    {
                        id: 'index_fireworks_79',
                        src: 'img/index_fireworks/index_fireworks_79.png'
                    },
                    {
                        id: 'index_fireworks_8',
                        src: 'img/index_fireworks/index_fireworks_8.png'
                    },
                    {
                        id: 'index_fireworks_80',
                        src: 'img/index_fireworks/index_fireworks_80.png'
                    },
                    {
                        id: 'index_fireworks_81',
                        src: 'img/index_fireworks/index_fireworks_81.png'
                    },
                    {
                        id: 'index_fireworks_82',
                        src: 'img/index_fireworks/index_fireworks_82.png'
                    },
                    {
                        id: 'index_fireworks_83',
                        src: 'img/index_fireworks/index_fireworks_83.png'
                    },
                    {
                        id: 'index_fireworks_84',
                        src: 'img/index_fireworks/index_fireworks_84.png'
                    },
                    {
                        id: 'index_fireworks_85',
                        src: 'img/index_fireworks/index_fireworks_85.png'
                    },
                    {
                        id: 'index_fireworks_86',
                        src: 'img/index_fireworks/index_fireworks_86.png'
                    },
                    {
                        id: 'index_fireworks_87',
                        src: 'img/index_fireworks/index_fireworks_87.png'
                    },
                    {
                        id: 'index_fireworks_9',
                        src: 'img/index_fireworks/index_fireworks_9.png'
                    },
                    {
                        id: 'lucky_go_1',
                        src: 'img/lucky_go/lucky_go_1.png'
                    },
                    {
                        id: 'lucky_go_10',
                        src: 'img/lucky_go/lucky_go_10.png'
                    },
                    {
                        id: 'lucky_go_11',
                        src: 'img/lucky_go/lucky_go_11.png'
                    },
                    {
                        id: 'lucky_go_12',
                        src: 'img/lucky_go/lucky_go_12.png'
                    },
                    {
                        id: 'lucky_go_13',
                        src: 'img/lucky_go/lucky_go_13.png'
                    },
                    {
                        id: 'lucky_go_14',
                        src: 'img/lucky_go/lucky_go_14.png'
                    },
                    {
                        id: 'lucky_go_15',
                        src: 'img/lucky_go/lucky_go_15.png'
                    },
                    {
                        id: 'lucky_go_16',
                        src: 'img/lucky_go/lucky_go_16.png'
                    },
                    {
                        id: 'lucky_go_17',
                        src: 'img/lucky_go/lucky_go_17.png'
                    },
                    {
                        id: 'lucky_go_18',
                        src: 'img/lucky_go/lucky_go_18.png'
                    },
                    {
                        id: 'lucky_go_19',
                        src: 'img/lucky_go/lucky_go_19.png'
                    },
                    {
                        id: 'lucky_go_2',
                        src: 'img/lucky_go/lucky_go_2.png'
                    },
                    {
                        id: 'lucky_go_20',
                        src: 'img/lucky_go/lucky_go_20.png'
                    },
                    {
                        id: 'lucky_go_21',
                        src: 'img/lucky_go/lucky_go_21.png'
                    },
                    {
                        id: 'lucky_go_22',
                        src: 'img/lucky_go/lucky_go_22.png'
                    },
                    {
                        id: 'lucky_go_23',
                        src: 'img/lucky_go/lucky_go_23.png'
                    },
                    {
                        id: 'lucky_go_24',
                        src: 'img/lucky_go/lucky_go_24.png'
                    },
                    {
                        id: 'lucky_go_25',
                        src: 'img/lucky_go/lucky_go_25.png'
                    },
                    {
                        id: 'lucky_go_26',
                        src: 'img/lucky_go/lucky_go_26.png'
                    },
                    {
                        id: 'lucky_go_27',
                        src: 'img/lucky_go/lucky_go_27.png'
                    },
                    {
                        id: 'lucky_go_28',
                        src: 'img/lucky_go/lucky_go_28.png'
                    },
                    {
                        id: 'lucky_go_29',
                        src: 'img/lucky_go/lucky_go_29.png'
                    },
                    {
                        id: 'lucky_go_3',
                        src: 'img/lucky_go/lucky_go_3.png'
                    },
                    {
                        id: 'lucky_go_30',
                        src: 'img/lucky_go/lucky_go_30.png'
                    },
                    {
                        id: 'lucky_go_31',
                        src: 'img/lucky_go/lucky_go_31.png'
                    },
                    {
                        id: 'lucky_go_32',
                        src: 'img/lucky_go/lucky_go_32.png'
                    },
                    {
                        id: 'lucky_go_33',
                        src: 'img/lucky_go/lucky_go_33.png'
                    },
                    {
                        id: 'lucky_go_34',
                        src: 'img/lucky_go/lucky_go_34.png'
                    },
                    {
                        id: 'lucky_go_35',
                        src: 'img/lucky_go/lucky_go_35.png'
                    },
                    {
                        id: 'lucky_go_36',
                        src: 'img/lucky_go/lucky_go_36.png'
                    },
                    {
                        id: 'lucky_go_37',
                        src: 'img/lucky_go/lucky_go_37.png'
                    },
                    {
                        id: 'lucky_go_38',
                        src: 'img/lucky_go/lucky_go_38.png'
                    },
                    {
                        id: 'lucky_go_39',
                        src: 'img/lucky_go/lucky_go_39.png'
                    },
                    {
                        id: 'lucky_go_4',
                        src: 'img/lucky_go/lucky_go_4.png'
                    },
                    {
                        id: 'lucky_go_40',
                        src: 'img/lucky_go/lucky_go_40.png'
                    },
                    {
                        id: 'lucky_go_41',
                        src: 'img/lucky_go/lucky_go_41.png'
                    },
                    {
                        id: 'lucky_go_42',
                        src: 'img/lucky_go/lucky_go_42.png'
                    },
                    {
                        id: 'lucky_go_43',
                        src: 'img/lucky_go/lucky_go_43.png'
                    },
                    {
                        id: 'lucky_go_44',
                        src: 'img/lucky_go/lucky_go_44.png'
                    },
                    {
                        id: 'lucky_go_45',
                        src: 'img/lucky_go/lucky_go_45.png'
                    },
                    {
                        id: 'lucky_go_46',
                        src: 'img/lucky_go/lucky_go_46.png'
                    },
                    {
                        id: 'lucky_go_47',
                        src: 'img/lucky_go/lucky_go_47.png'
                    },
                    {
                        id: 'lucky_go_48',
                        src: 'img/lucky_go/lucky_go_48.png'
                    },
                    {
                        id: 'lucky_go_49',
                        src: 'img/lucky_go/lucky_go_49.png'
                    },
                    {
                        id: 'lucky_go_5',
                        src: 'img/lucky_go/lucky_go_5.png'
                    },
                    {
                        id: 'lucky_go_50',
                        src: 'img/lucky_go/lucky_go_50.png'
                    },
                    {
                        id: 'lucky_go_51',
                        src: 'img/lucky_go/lucky_go_51.png'
                    },
                    {
                        id: 'lucky_go_52',
                        src: 'img/lucky_go/lucky_go_52.png'
                    },
                    {
                        id: 'lucky_go_53',
                        src: 'img/lucky_go/lucky_go_53.png'
                    },
                    {
                        id: 'lucky_go_54',
                        src: 'img/lucky_go/lucky_go_54.png'
                    },
                    {
                        id: 'lucky_go_55',
                        src: 'img/lucky_go/lucky_go_55.png'
                    },
                    {
                        id: 'lucky_go_56',
                        src: 'img/lucky_go/lucky_go_56.png'
                    },
                    {
                        id: 'lucky_go_57',
                        src: 'img/lucky_go/lucky_go_57.png'
                    },
                    {
                        id: 'lucky_go_58',
                        src: 'img/lucky_go/lucky_go_58.png'
                    },
                    {
                        id: 'lucky_go_59',
                        src: 'img/lucky_go/lucky_go_59.png'
                    },
                    {
                        id: 'lucky_go_6',
                        src: 'img/lucky_go/lucky_go_6.png'
                    },
                    {
                        id: 'lucky_go_60',
                        src: 'img/lucky_go/lucky_go_60.png'
                    },
                    {
                        id: 'lucky_go_61',
                        src: 'img/lucky_go/lucky_go_61.png'
                    },
                    {
                        id: 'lucky_go_62',
                        src: 'img/lucky_go/lucky_go_62.png'
                    },
                    {
                        id: 'lucky_go_7',
                        src: 'img/lucky_go/lucky_go_7.png'
                    },
                    {
                        id: 'lucky_go_8',
                        src: 'img/lucky_go/lucky_go_8.png'
                    },
                    {
                        id: 'lucky_go_9',
                        src: 'img/lucky_go/lucky_go_9.png'
                    },
                    {
                        id: 'lucky_in_1',
                        src: 'img/lucky_in/lucky_in_1.png'
                    },
                    {
                        id: 'lucky_in_10',
                        src: 'img/lucky_in/lucky_in_10.png'
                    },
                    {
                        id: 'lucky_in_11',
                        src: 'img/lucky_in/lucky_in_11.png'
                    },
                    {
                        id: 'lucky_in_12',
                        src: 'img/lucky_in/lucky_in_12.png'
                    },
                    {
                        id: 'lucky_in_13',
                        src: 'img/lucky_in/lucky_in_13.png'
                    },
                    {
                        id: 'lucky_in_14',
                        src: 'img/lucky_in/lucky_in_14.png'
                    },
                    {
                        id: 'lucky_in_15',
                        src: 'img/lucky_in/lucky_in_15.png'
                    },
                    {
                        id: 'lucky_in_16',
                        src: 'img/lucky_in/lucky_in_16.png'
                    },
                    {
                        id: 'lucky_in_17',
                        src: 'img/lucky_in/lucky_in_17.png'
                    },
                    {
                        id: 'lucky_in_18',
                        src: 'img/lucky_in/lucky_in_18.png'
                    },
                    {
                        id: 'lucky_in_19',
                        src: 'img/lucky_in/lucky_in_19.png'
                    },
                    {
                        id: 'lucky_in_2',
                        src: 'img/lucky_in/lucky_in_2.png'
                    },
                    {
                        id: 'lucky_in_20',
                        src: 'img/lucky_in/lucky_in_20.png'
                    },
                    {
                        id: 'lucky_in_21',
                        src: 'img/lucky_in/lucky_in_21.png'
                    },
                    {
                        id: 'lucky_in_22',
                        src: 'img/lucky_in/lucky_in_22.png'
                    },
                    {
                        id: 'lucky_in_23',
                        src: 'img/lucky_in/lucky_in_23.png'
                    },
                    {
                        id: 'lucky_in_24',
                        src: 'img/lucky_in/lucky_in_24.png'
                    },
                    {
                        id: 'lucky_in_25',
                        src: 'img/lucky_in/lucky_in_25.png'
                    },
                    {
                        id: 'lucky_in_26',
                        src: 'img/lucky_in/lucky_in_26.png'
                    },
                    {
                        id: 'lucky_in_27',
                        src: 'img/lucky_in/lucky_in_27.png'
                    },
                    {
                        id: 'lucky_in_28',
                        src: 'img/lucky_in/lucky_in_28.png'
                    },
                    {
                        id: 'lucky_in_29',
                        src: 'img/lucky_in/lucky_in_29.png'
                    },
                    {
                        id: 'lucky_in_3',
                        src: 'img/lucky_in/lucky_in_3.png'
                    },
                    {
                        id: 'lucky_in_30',
                        src: 'img/lucky_in/lucky_in_30.png'
                    },
                    {
                        id: 'lucky_in_31',
                        src: 'img/lucky_in/lucky_in_31.png'
                    },
                    {
                        id: 'lucky_in_32',
                        src: 'img/lucky_in/lucky_in_32.png'
                    },
                    {
                        id: 'lucky_in_33',
                        src: 'img/lucky_in/lucky_in_33.png'
                    },
                    {
                        id: 'lucky_in_34',
                        src: 'img/lucky_in/lucky_in_34.png'
                    },
                    {
                        id: 'lucky_in_35',
                        src: 'img/lucky_in/lucky_in_35.png'
                    },
                    {
                        id: 'lucky_in_36',
                        src: 'img/lucky_in/lucky_in_36.png'
                    },
                    {
                        id: 'lucky_in_37',
                        src: 'img/lucky_in/lucky_in_37.png'
                    },
                    {
                        id: 'lucky_in_38',
                        src: 'img/lucky_in/lucky_in_38.png'
                    },
                    {
                        id: 'lucky_in_39',
                        src: 'img/lucky_in/lucky_in_39.png'
                    },
                    {
                        id: 'lucky_in_4',
                        src: 'img/lucky_in/lucky_in_4.png'
                    },
                    {
                        id: 'lucky_in_40',
                        src: 'img/lucky_in/lucky_in_40.png'
                    },
                    {
                        id: 'lucky_in_41',
                        src: 'img/lucky_in/lucky_in_41.png'
                    },
                    {
                        id: 'lucky_in_42',
                        src: 'img/lucky_in/lucky_in_42.png'
                    },
                    {
                        id: 'lucky_in_43',
                        src: 'img/lucky_in/lucky_in_43.png'
                    },
                    {
                        id: 'lucky_in_44',
                        src: 'img/lucky_in/lucky_in_44.png'
                    },
                    {
                        id: 'lucky_in_45',
                        src: 'img/lucky_in/lucky_in_45.png'
                    },
                    {
                        id: 'lucky_in_46',
                        src: 'img/lucky_in/lucky_in_46.png'
                    },
                    {
                        id: 'lucky_in_47',
                        src: 'img/lucky_in/lucky_in_47.png'
                    },
                    {
                        id: 'lucky_in_48',
                        src: 'img/lucky_in/lucky_in_48.png'
                    },
                    {
                        id: 'lucky_in_49',
                        src: 'img/lucky_in/lucky_in_49.png'
                    },
                    {
                        id: 'lucky_in_5',
                        src: 'img/lucky_in/lucky_in_5.png'
                    },
                    {
                        id: 'lucky_in_50',
                        src: 'img/lucky_in/lucky_in_50.png'
                    },
                    {
                        id: 'lucky_in_51',
                        src: 'img/lucky_in/lucky_in_51.png'
                    },
                    {
                        id: 'lucky_in_6',
                        src: 'img/lucky_in/lucky_in_6.png'
                    },
                    {
                        id: 'lucky_in_7',
                        src: 'img/lucky_in/lucky_in_7.png'
                    },
                    {
                        id: 'lucky_in_8',
                        src: 'img/lucky_in/lucky_in_8.png'
                    },
                    {
                        id: 'lucky_in_9',
                        src: 'img/lucky_in/lucky_in_9.png'
                    },
                    {
                        id: 'luck_ani_1',
                        src: 'img/luck_ani/luck_ani_1.png'
                    },
                    {
                        id: 'luck_ani_10',
                        src: 'img/luck_ani/luck_ani_10.png'
                    },
                    {
                        id: 'luck_ani_11',
                        src: 'img/luck_ani/luck_ani_11.png'
                    },
                    {
                        id: 'luck_ani_12',
                        src: 'img/luck_ani/luck_ani_12.png'
                    },
                    {
                        id: 'luck_ani_13',
                        src: 'img/luck_ani/luck_ani_13.png'
                    },
                    {
                        id: 'luck_ani_14',
                        src: 'img/luck_ani/luck_ani_14.png'
                    },
                    {
                        id: 'luck_ani_15',
                        src: 'img/luck_ani/luck_ani_15.png'
                    },
                    {
                        id: 'luck_ani_16',
                        src: 'img/luck_ani/luck_ani_16.png'
                    },
                    {
                        id: 'luck_ani_17',
                        src: 'img/luck_ani/luck_ani_17.png'
                    },
                    {
                        id: 'luck_ani_18',
                        src: 'img/luck_ani/luck_ani_18.png'
                    },
                    {
                        id: 'luck_ani_19',
                        src: 'img/luck_ani/luck_ani_19.png'
                    },
                    {
                        id: 'luck_ani_2',
                        src: 'img/luck_ani/luck_ani_2.png'
                    },
                    {
                        id: 'luck_ani_20',
                        src: 'img/luck_ani/luck_ani_20.png'
                    },
                    {
                        id: 'luck_ani_21',
                        src: 'img/luck_ani/luck_ani_21.png'
                    },
                    {
                        id: 'luck_ani_22',
                        src: 'img/luck_ani/luck_ani_22.png'
                    },
                    {
                        id: 'luck_ani_23',
                        src: 'img/luck_ani/luck_ani_23.png'
                    },
                    {
                        id: 'luck_ani_24',
                        src: 'img/luck_ani/luck_ani_24.png'
                    },
                    {
                        id: 'luck_ani_3',
                        src: 'img/luck_ani/luck_ani_3.png'
                    },
                    {
                        id: 'luck_ani_4',
                        src: 'img/luck_ani/luck_ani_4.png'
                    },
                    {
                        id: 'luck_ani_5',
                        src: 'img/luck_ani/luck_ani_5.png'
                    },
                    {
                        id: 'luck_ani_6',
                        src: 'img/luck_ani/luck_ani_6.png'
                    },
                    {
                        id: 'luck_ani_7',
                        src: 'img/luck_ani/luck_ani_7.png'
                    },
                    {
                        id: 'luck_ani_8',
                        src: 'img/luck_ani/luck_ani_8.png'
                    },
                    {
                        id: 'luck_ani_9',
                        src: 'img/luck_ani/luck_ani_9.png'
                    },
                    {
                        id: 'load_icon',
                        src: 'img/load_icon.gif'
                    },
                ],
                p: 0, //进度
                Srcs: null,
                imgs: {},
                court: 0
            };
            this.init();
        }
        //原型方法
        App.prototype = {
            init: function() {
                that.LoadingImages();
                that.scrollAuto();
                that.event();
            },
            /*================================================ 项目中所有的事件 =================================================*/
            event: function() {

                // 解决手机 键盘
                $('input').blur(function() {
                    setTimeout(() => {
                        var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0
                        window.scrollTo(0, Math.max(scrollHeight, 0))
                    }, 100)
                });
            },
            /*================================================ 截取网址参数 ====================================================*/
            getQueryString: function(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                var r = window.location.search.substr(1).match(reg);
                if (r != null)
                    return unescape(r[2]);
                return null;
            },
            /*================================================ 加载图片 ========================================================*/
            LoadingImages: function() {
                var Srcs = that.imgLoading.ImagesSrc;
                var len = Srcs.length;
                var id;
                //加载图片方法
                for (var i = 0; i < len; i++) {
                    id = Srcs[i].id ? Srcs[i].id : i;
                    that.imgLoading.imgs[id] = new Image();
                    that.imgLoading.imgs[id].onload = function() {
                        that.imgLoading.p = 100 * ((that.imgLoading.court + 1) / len);
                        that.imgLoading.p = parseInt(that.imgLoading.p);
                        progress(that.imgLoading.p);
                        if (that.imgLoading.court >= len - 1)
                            complete(that.imgs);
                        that.imgLoading.court++;
                    };

                    var cdnUrl = 'https://cduravit.trisanet.com/CNY/';
                    if (Srcs[i].id) {
                        that.imgLoading.imgs[id].src = cdnUrl + Srcs[i].src + '?v=' + v;
                    } else {
                        that.imgLoading.imgs[id].src = cdnUrl + Srcs[i] + 'v=' + v;
                    }
                }
                //加载进度
                function progress(loadNum) {
                    $('.load-nr').css('width', loadNum + '%');
                    $(".load-font").html(`正在加载...  ${loadNum}%`);
                };
                //加载完成
                function complete(images) {
                    $(".loading").fadeOut(300);

                    if (isLocation) {
                        $('.index').fadeIn(300);

                        // $('.lucky').fadeIn(300);
                        // $('.img-lucky').fadeIn(300);
                        // isCanClickLucky = true;
                        // $('.lucky-in').fadeIn(300);
                        // Tool.playImgAnimation($('.lucky-in'), 1, function () {
                        //     $('.lucky-in').fadeOut(0);
                        //     $('.img-lucky').fadeIn(0);
                        //     isCanClickLucky = true;
                        // });
                    } else {
                        $('.index').fadeIn(300);
                    }
                };
                $('.img-load-icon').fadeIn(300);
            },

            /*================================================ 禁止屏幕滚动 ======================================================*/
            scrollAuto: function() {
                document.addEventListener('touchmove', function(e) {
                    e.preventDefault();
                    return false;
                }, {
                    passive: false
                });
            }
        }
        var app = new App();

        /** 自定义工具类 */
        var Tool = window.Tool = {
            /** 初始化序列帧内容 */
            initImgAnimation(img, name, type, num, frame) {
                img.data('w_name', name);
                img.data('w_type', type);
                img.data('w_num', num);
                img.data('w_frame', frame || 15);
                img.data('w_curNum', 1);

                img.append(that.imgLoading.imgs[img.data('w_name') + img.data('w_curNum')]);
            },
            /** 播放序列帧动画 */
            playImgAnimation(img, count, callback, callback2) {
                if (img.data('playing')) {
                    return;
                }

                img.data('playing', true);
                img.data('w_count', 0);
                count || (count = 1);

                function setImgSrc(img) {
                    // img.attr('src', 'img/luck_ani/' + img.data('w_name') + img.data('w_curNum') + '.' + img.data('w_type'));
                    // img.get(0) = that.imgLoading.imgs[img.data('w_name') + img.data('w_curNum') + '.' + img.data('w_type')];
                    // img.attr('src', that.imgLoading.imgs[img.data('w_name') + img.data('w_curNum')].src);
                    // img.get(0).innerHTML = that.imgLoading.imgs[img.data('w_name') + img.data('w_curNum')];
                    img.empty();
                    img.append(that.imgLoading.imgs[img.data('w_name') + img.data('w_curNum')]);
                }
                setImgSrc(img);

                function delayAnimation(img) {
                    img.data('w_id', setTimeout(function() {
                        clearTimeout(img.data('w_id'));
                        var w_curNum = img.data('w_curNum');
                        w_curNum++;
                        img.data('w_curNum', w_curNum);
                        if (img.data('w_curNum') > img.data('w_num')) {
                            var w_count = img.data('w_count');
                            w_count++;
                            img.data('w_count', w_count);
                            img.data('w_curNum', 1);
                            if (count != -1 && img.data('w_count') >= count) {
                                callback && callback.call();
                                img.data('playing', false);
                                return;
                            }
                        }
                        setImgSrc(img);
                        delayAnimation(img);
                        callback2 && callback2.call(null, w_curNum);
                    }, 1000 / img.data('w_frame')))
                }
                delayAnimation(img);
            },
            /** 停止序列帧播放 */
            stopImgAnimation(img) {
                clearTimeout(img.data('w_id'));
            },

            isUseShark: false, //是否 开启重力感应监听
            last_x: 0,
            last_y: 0,
            last_z: 0,
            last_update: 0,
            /** 开启重力感应 */
            startDeviceMotionEvent() {
                if (window.DeviceMotionEvent) {
                    if (!Tool.isUseShark) {
                        Tool.isUseShark = true;
                        console.log('start shark');
                        // window.addEventListener('deviceorientation', this.callbackDeviceMotion, false);
                        window.addEventListener('devicemotion', this.callbackDevicemotion, false);
                    }
                }
            },
            callbackDevicemotion(eventData) {
                //获取加速度信息
                //通过监听上一步获取到的x, y, z 值在一定时间范围内的变化率，进行设备是否有进行晃动的判断。
                //而为了防止正常移动的误判，需要给该变化率设置一个合适的临界值。
                var x, y, z, SHAKE_THRESHOLD = 4000,
                    acceleration = eventData.accelerationIncludingGravity;
                var curTime = new Date().getTime();
                if ((curTime - Tool.last_update) > 10) {
                    var diffTime = curTime - Tool.last_update;
                    Tool.last_update = curTime;
                    x = acceleration.x;
                    y = acceleration.y;
                    z = acceleration.z;
                    var speed = Math.abs(x + y + z - Tool.last_x - Tool.last_y - Tool.last_z) / diffTime * 10000;
                    if (speed > SHAKE_THRESHOLD) {
                        Tool.stopDeviceMotionEvent();
                        playLuckyShark();
                        console.log('shark');
                    }
                    Tool.last_x = x;
                    Tool.last_y = y;
                    Tool.last_z = z;
                }
            },
            /** 停止重力感应 */
            stopDeviceMotionEvent() {
                if (window.DeviceMotionEvent && Tool.isUseShark) {
                    Tool.isUseShark = false;
                    window.removeEventListener('deviceorientation', this.callbackDeviceMotion, false);
                    window.removeEventListener('devicemotion', this.callbackDevicemotion, false);
                }
            }
        }

        /** 音乐控制器 */
        var SoundMananger = window.SoundMananger = {
            /** 音频地址 */
            soundSrc: {
                sound_1: 'music/sound_1.mp3', //拉绳子的时候
                sound_2: 'music/sound_2.mp3', //红包掉下来的纸张声
                sound_3: 'music/sound_3.mp3', //变化线条牛和放烟花的时候需要一个揭露感的氛围
                sound_4: 'music/sound_4.mp3', //点击浴见新年进入以后，红包自动反动的声效
                sound_5: 'music/sound_5.mp3', //摇动手机的声效，同时翻动红包
                sound_6: 'music/sound_6.mp3', //红包从封套出现时候的声音
                fireworks_1: 'music/fireworks_1.mp3',
                fireworks_2: 'music/fireworks_2.mp3',
            },
            sounds: [],
            /** 播放 */
            play(id) {
                if (!SoundMananger.sounds[id]) {
                    SoundMananger.sounds[id] = new Bgm({
                        x: -100,
                        loop: false,
                        autoplay: false,
                        animation: false,
                        src: SoundMananger.soundSrc[id],
                    });
                    SoundMananger.sounds[id].hide();
                }
                if (!SoundMananger.sounds[id].musicAudio.isCanPlay) {
                    SoundMananger.sounds[id].musicAudio.isCanPlay = true;
                    SoundMananger.sounds[id].play();
                    var timerId = setTimeout(function() {
                        clearTimeout(timerId);
                        SoundMananger.sounds[id].musicAudio.isCanPlay = false;
                    }, 2000);
                }
            },
            /** 暂停 */
            stop(id) {
                SoundMananger.sounds[id].pause();
            },
        }

        /** 显示抽奖页面 */
        function showLuckyPage() {
            $('.img-lucky-1').fadeIn(300);
            $('.img-lucky-2').fadeIn(300);

            $('.lucky').fadeIn(300);
            setTimeout(function() {
                $('.lucky-in').fadeIn(300);
                Tool.playImgAnimation($('.lucky-in'), 1, function() {
                    isCanClickLucky = true;

                    $('.lucky-in').fadeOut(0);
                    $('.img-lucky').fadeIn(0);
                    Tool.startDeviceMotionEvent();
                });
            }, 500);
            SoundMananger.play('sound_4');
            // var timerId = setTimeout(function () {
            //     clearTimeout(timerId);
            //     SoundMananger.play('sound_5');
            // }, 400);
        }

        /** 播放红包摇一摇动画 */
        function playLuckyShark() {
            SoundMananger.play('sound_5');
            Tool.playImgAnimation($('.img-lucky'), 1, playLuckyGo);
        }
        /** 播放红包出卡动画 */
        function playLuckyGo() {
            $('.img-lucky-1').fadeOut(300);
            $('.img-lucky-2').fadeOut(300);

            $('.img-lucky').fadeOut(0);
            $('.lucky-go').fadeIn(0);

            Tool.playImgAnimation($('.lucky-go'), 1, gotoPoster);
            var timerId = setTimeout(function() {
                clearTimeout(timerId);
                SoundMananger.play('sound_6');
            }, 400);
        }
        // 进入海报页面
        function gotoPoster() {
            Tool.stopDeviceMotionEvent();

            $('.lucky-go').fadeOut(0);

            $('.lucky').fadeOut(300);
            $('.poster').fadeIn(300);

            var poster = $('.img-poster');
            poster.empty();
            var img = that.imgLoading.imgs['poster_' + Math.floor(Math.random() * (7 - 1) + 2)];
            img.style.pointerEvents = 'auto';
            poster.append(img);
            // poster.attr('src', that.imgLoading.imgs['poster_' + Math.floor(Math.random() * (7 - 1) + 2)].src);
            poster.css('transform', 'translateY(0)');
            poster.on('transitionend', callbakc);

            function callbakc() {
                // $('.poster-btn-style').css('transform', 'scale(1)');
                $('.btn-again').css('transform', 'translateX(0)');
                $('.btn-share').css('transform', 'translateX(0)');
            };
        }

        /** 显示遇见新年按钮 */
        function showIndexBtn() {
            $('.btn-goto-luck').fadeIn(1000, function() {
                $('.btn-goto-luck').addClass('breathe');
            });
        }

        /** 埋点统计调用 */
        function onClickPush(category, action, opt_label, opt_value) {
            _hmt.push(['_trackEvent', category, action, opt_label, opt_value]);
        }

        //初始化红包摇一摇的动画
        Tool.initImgAnimation($('.index-animation'), 'index_ani_', 'jpg', 225, 26);
        Tool.initImgAnimation($('.img-lucky'), 'luck_ani_', 'png', 24, 35); // 切红包动效
        Tool.initImgAnimation($('.firelworks'), 'index_fireworks_', 'png', 87, 20); //首页 烟花动效
        Tool.initImgAnimation($('.lucky-in'), 'lucky_in_', 'png', 51, 30); //红包进场动效
        Tool.initImgAnimation($('.lucky-go'), 'lucky_go_', 'png', 51, 30); //红包出卡动效

        var isCanPlayVideo = false;
        //拉绳滑动回调
        $('.btn-title').on('touchend', (function(e) {
            if (beginY == -1) {
                beginY = 0;
                return;
            }
            onClickPush('shouye', 'xiala');
            SoundMananger.play('sound_1');

            $('.btn-title').hide();

            $('.img-page-2').removeClass('lasheng');
            $('.img-page-2').attr('transform', 'rotateZ(0deg)');

            $('.title-box').fadeOut(100);

            // var video = $('.index-video');
            // video.fadeIn(200);
            // video.get(0).load();
            // video.get(0).play();
            // isCanPlayVideo = true;

            SoundMananger.play('sound_2');

            Tool.playImgAnimation($('.index-animation'), 1, function() {
                showIndexBtn();
                $('.btn-goto-luck').fadeIn(0);

                $('.firelworks').fadeIn(300);
                Tool.playImgAnimation($('.firelworks'), -1, function() {}, function(num) {
                    switch (num) {
                        case 10:
                            SoundMananger.play('fireworks_1');
                            break;
                        case 25:
                            SoundMananger.play('fireworks_2');
                            break;
                    }
                });
            }, function(num) {
                switch (num) {
                    case 150:
                        SoundMananger.play('sound_3');
                        break;
                }
            });

            beginY = 0;
        }));

        var beginY = 0;
        $('.btn-title').get(0).addEventListener('touchmove', function(e) {
            var curY = e.touches[0].clientY;
            if (!beginY) {
                beginY = curY;
            }
            if (curY - beginY > 20) {
                $('.btn-title').get(0).removeEventListener('touchmove', arguments.callee);
                $('.btn-title').trigger('touchend');
                beginY = -1;
            }
        });

        var isCanClickLucky = false;
        //点击抽奖
        $('.lucky').click(function() {
            if (isCanClickLucky) {
                isCanClickLucky = false;
                playLuckyShark();
            }
        });

        //点击进入抽奖页面
        $('.btn-goto-luck').click(function(e) {
            Tool.stopImgAnimation($('.firelworks'));
            SoundMananger.stop('fireworks_1');
            SoundMananger.stop('fireworks_2');

            onClickPush('yujian', 'xinnian');
            // $('.index-video').fadeOut(300);
            $('.index').fadeOut(300);

            showLuckyPage();
        })

        //再来一次 点击回调
        $('.btn-again').click(function(e) {
            onClickPush('jieguo', 'again');
            $('.poster').fadeOut(300);
            $('.img-poster').css('transform', 'translateY(150%)');
            $('.btn-again').css('transform', 'translateX(-200%)');
            $('.btn-share').css('transform', 'translateX(200%)');

            showLuckyPage();
        });

        //分享按钮点击回调
        $('.btn-share').click(function(e) {
            onClickPush('jieguo', 'shaiyishai');
            $('.share').fadeIn(300);
            // alert('显示分享蒙层~');
        });

        $('.share').click(function() {
            $('.share').fadeOut(300);
        })

        //监听保存海报事件
        $('.img-poster').on('touchstart', function() {
            onClickPush('jieguo', 'changan');
        });

        //监听视频播放进度
        // $('.index-video').get(0).addEventListener('timeupdate', function (e) {
        //     var target = e.target;
        //     var time = Math.round(target.currentTime); //播放时间

        //     switch (time) {
        //         case 0:
        //             if (isCanPlayVideo) {
        //                 SoundMananger.play('sound_2');
        //             }
        //             break;
        //         case 6:
        //             SoundMananger.play('sound_3');
        //             break;
        //     }
        // })

        //监听视频播放完成
        // $('.index-video').get(0).addEventListener('ended', function (e) {
        //     showIndexBtn();
        //     $('.btn-goto-luck').fadeIn(0);

        //     $('.firelworks').fadeIn(300);
        //     Tool.playImgAnimation($('.firelworks'), -1);
        // });

        // $('.index-video').get(0).addEventListener('click', function (e) {
        //     if (isCanPlayVideo && $('.index-video').get(0).paused) {
        //         isCanPlayVideo = false;
        //         $('.index-video').get(0).play();
        //     }
        // });

        // 监听红包视频播放结束
        // $('.lucky-video-0').get(0).addEventListener('ended', function (e) {
        //     $('.lucky-video-0').fadeOut(300);
        //     $('.img-lucky').fadeIn(300);
        // });

        //监听红包出卡视频播放结束
        // $('.lucky-video-2').get(0).addEventListener('ended', function (e) {
        //     $('.lucky-video-2').fadeOut(300);
        //     gotoPoster();
        // });

        // function loadVideo() {
        //     console.log('加载视频');
        //     window.removeEventListener('click', loadVideo);
        //     var video = $('.index-video').get(0);
        //     video.load();
        //     video.play();
        //     video.pause();
        // }
        // window.addEventListener('click', loadVideo);

        //旋屏提示
        var screenOrientationTip = new LandscapeTip();
        screenOrientationTip.addEventListenerHandle();
        //旋屏提示

        // window.addEventListener('WeixinJsBridgeReady', function () {
        //     console.log('WeixinJsBridgeReady');
        // }, false);
        //微信jssdk
        // if (typeof WechatJSSDK !== 'undefined') {
        //     var jssdk = new WechatJSSDK({
        //         debug: false,
        //         title: '"浴”见新年',
        //         desc: '2021年我竟然走这运！你也快来抽支新年签吧，牛年特牛！',
        //         link: baseUrl + 'index.html',
        //         imgUrl: baseUrl + 'img/share_icon.jpg',
        //         appid: 'wx11ffbed0ee73d254',
        //         onSDKReady: function (e) {
        //             // alert('wxjssdk ok')
        //             console.log('wxjssdk ok1');
        //             if (bgm.musicAudio.paused) {
        //                 bgm.play();
        //             }
        //             // if ($('.index-video').get(0).paused) {
        //             //     $('.index-video').get(0).load();
        //             //     $('.index-video').get(0).play();
        //             //     $('.index-video').get(0).pause();
        //             // }
        //         },
        //     });
        //     console.log(jssdk);
        // }

        //微信jssdk

        //绿标
        // new VConsole();
        //绿标
    })();
})
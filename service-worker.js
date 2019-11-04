/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "18679a9ad48ab6912b55df869446c165"
  },
  {
    "url": "about/index.html",
    "revision": "98d0ea4ca8105d380a64f5b94c985318"
  },
  {
    "url": "assets/css/0.styles.f3d51b33.css",
    "revision": "c1386fd0099c5dbd01d0afe260900716"
  },
  {
    "url": "assets/img/example.97fb9d74.png",
    "revision": "97fb9d740b5e4b3cde010d0cbdc4bb48"
  },
  {
    "url": "assets/img/hs.fae07b5f.png",
    "revision": "fae07b5f9d916e9cd02343b8024d9dbf"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1dfd5396.js",
    "revision": "852e50cb51a4398fd681df0fe8eaadb3"
  },
  {
    "url": "assets/js/11.4fd1b124.js",
    "revision": "fac6ab8b126637aeb3f611e677d9f6be"
  },
  {
    "url": "assets/js/12.02fe84d5.js",
    "revision": "9436c149036fa3b77196b25142fb5978"
  },
  {
    "url": "assets/js/13.61605dbb.js",
    "revision": "ad2a407ce623cace227a17280dee2208"
  },
  {
    "url": "assets/js/14.1f9cf656.js",
    "revision": "17b06b0e10a173b830cc094ed4723a64"
  },
  {
    "url": "assets/js/15.58ba04da.js",
    "revision": "3520b206a8b33eddfeebce0d8966501c"
  },
  {
    "url": "assets/js/16.74edd1d4.js",
    "revision": "065c2f3601c5def61f19535c241d322d"
  },
  {
    "url": "assets/js/17.bea55e02.js",
    "revision": "3d517430aab767d6e826d19254bf04dd"
  },
  {
    "url": "assets/js/18.c79e2e98.js",
    "revision": "f9837b9a9354e9ce06d817a70b60bed6"
  },
  {
    "url": "assets/js/19.60f33224.js",
    "revision": "5e8a6836661454af97a125264f0cd459"
  },
  {
    "url": "assets/js/2.84c01124.js",
    "revision": "4eb52f2ff953dc2ec519411e60101db1"
  },
  {
    "url": "assets/js/20.ba3631ac.js",
    "revision": "4ee3858410e37acc34b715d92484034a"
  },
  {
    "url": "assets/js/21.0d33e8d3.js",
    "revision": "b6f99116c3d048047229e3e7314ff5cb"
  },
  {
    "url": "assets/js/22.32a868b9.js",
    "revision": "12fe87098d31308aeab985cf9f1f2b21"
  },
  {
    "url": "assets/js/23.48218bf3.js",
    "revision": "0be52f4f2dd354d60ebd4777ae065f68"
  },
  {
    "url": "assets/js/24.77dc6e54.js",
    "revision": "57d0919318179eae1b283900d428c312"
  },
  {
    "url": "assets/js/25.f01fb01c.js",
    "revision": "6754f4b8d1bd601cc24e6cf63fd5cb14"
  },
  {
    "url": "assets/js/26.2c983688.js",
    "revision": "d99aadc482d3a6626bce39285b17561b"
  },
  {
    "url": "assets/js/27.26f7cca7.js",
    "revision": "866fccae927fcde7cc4ec1f55a238e8b"
  },
  {
    "url": "assets/js/28.3527f35e.js",
    "revision": "dc69e8c721050ee9eb3e9228c0880198"
  },
  {
    "url": "assets/js/29.a54b8a29.js",
    "revision": "8ad647bef31c074ee83730ef35a67f60"
  },
  {
    "url": "assets/js/3.cb4b144b.js",
    "revision": "599fdb0f14129fd4ac784d097b866961"
  },
  {
    "url": "assets/js/30.c022dc03.js",
    "revision": "4cb8b2642eb1f8610532f45aabb94399"
  },
  {
    "url": "assets/js/31.7e6a4da3.js",
    "revision": "7b2b4825cdcb6f0a792cba0dbd227a90"
  },
  {
    "url": "assets/js/32.8fbbfa63.js",
    "revision": "a294942e240c113be8754c6030a63a23"
  },
  {
    "url": "assets/js/33.6166c593.js",
    "revision": "c3fc08720bd17b8234852afd2b5045cb"
  },
  {
    "url": "assets/js/34.aba15bfd.js",
    "revision": "20260badac1f8890c6e9cd2d4f7dc144"
  },
  {
    "url": "assets/js/35.8dd3bef9.js",
    "revision": "ead65514fde5304dc7063cc9697ad1a4"
  },
  {
    "url": "assets/js/36.f5ef187b.js",
    "revision": "82c5f9979313ae3aead2f9cab91d84db"
  },
  {
    "url": "assets/js/37.0654c535.js",
    "revision": "b25857627df8e803a9d6dad5adb37954"
  },
  {
    "url": "assets/js/38.58c498a3.js",
    "revision": "2a0a116f405a4bf32b916704c9de1aed"
  },
  {
    "url": "assets/js/39.bfd3b706.js",
    "revision": "369b816552930f6104cb6c2ad010d816"
  },
  {
    "url": "assets/js/4.71f4191e.js",
    "revision": "d6e88ea05db7f9e4f30a527cfe862af2"
  },
  {
    "url": "assets/js/40.5b734cb5.js",
    "revision": "6a6446b6f7834ce931bd6e23638ec932"
  },
  {
    "url": "assets/js/41.4ff94089.js",
    "revision": "ab3cc3bdf4192c2e960f079451223a98"
  },
  {
    "url": "assets/js/42.9118e019.js",
    "revision": "73dcb7d1c1552c99b5d0e1e1ad2ae40e"
  },
  {
    "url": "assets/js/43.0ca8828d.js",
    "revision": "86b19c4873e1ddc99511e3f276303b3c"
  },
  {
    "url": "assets/js/44.ed7aa274.js",
    "revision": "bcfa64caa9b1abd87bef86f6eb846664"
  },
  {
    "url": "assets/js/45.9665f679.js",
    "revision": "40e1854cd979e5194100adbe63350e0d"
  },
  {
    "url": "assets/js/46.aba7200e.js",
    "revision": "ebbc81f4600f88ae3fcf1a002a9df97e"
  },
  {
    "url": "assets/js/47.d9381ac2.js",
    "revision": "bd044f8f670b7474c225ba80eee63c0c"
  },
  {
    "url": "assets/js/48.637a50d8.js",
    "revision": "786a5057ab046c9e1bb52200f557f8ce"
  },
  {
    "url": "assets/js/49.59967139.js",
    "revision": "5016c8ef170897290c2f2bac7f6cce57"
  },
  {
    "url": "assets/js/5.e04e54c3.js",
    "revision": "bef9fce3beb9d77d2bc2b16511a37061"
  },
  {
    "url": "assets/js/50.3eac1f73.js",
    "revision": "551168dd75c25691fb59fc827c198f6b"
  },
  {
    "url": "assets/js/51.8de3ee4e.js",
    "revision": "7ec071f1dfbc3f5cd38842c571b5a269"
  },
  {
    "url": "assets/js/52.83a61124.js",
    "revision": "576c99d8aa80e3f427a0a45c7cb6af92"
  },
  {
    "url": "assets/js/53.7ef7c61a.js",
    "revision": "d031eb1084e87a8754d3882114cd6ced"
  },
  {
    "url": "assets/js/54.22f43710.js",
    "revision": "21ca9ef82459f02a413ac0a50b5e3aa9"
  },
  {
    "url": "assets/js/6.2cc507d3.js",
    "revision": "95685b6e71a072cd4ca167ceebad22c1"
  },
  {
    "url": "assets/js/7.560f68af.js",
    "revision": "50c2722beacebd935d9bfe88fc7e4ada"
  },
  {
    "url": "assets/js/8.0c99a5d7.js",
    "revision": "37d6d59a16fb7187a040ffc079b97308"
  },
  {
    "url": "assets/js/9.9454c135.js",
    "revision": "eb229c8a863c0b08e827e9d4c8ed2b06"
  },
  {
    "url": "assets/js/app.264f2438.js",
    "revision": "ccc1e52ee1a812b5b4d354670982bfad"
  },
  {
    "url": "block.png",
    "revision": "cab67da17e89f7c793c1b581aceaffb0"
  },
  {
    "url": "example.png",
    "revision": "97fb9d740b5e4b3cde010d0cbdc4bb48"
  },
  {
    "url": "favicon.jpg",
    "revision": "57fd82ae16e1e1e6b1dbd0e00b52d1e4"
  },
  {
    "url": "guide/css/1-语法.html",
    "revision": "0fbc03890cef9dbbf4ff35734393ce7d"
  },
  {
    "url": "guide/css/10-注释.html",
    "revision": "6d1a90d1e6a7671ebeffc7f4f3dcfd49"
  },
  {
    "url": "guide/css/11-class 命名.html",
    "revision": "8d07ab3ce4b5f07de388b29556576214"
  },
  {
    "url": "guide/css/12-选择器.html",
    "revision": "1ce481009713af30ffd745b7007f02fe"
  },
  {
    "url": "guide/css/13-代码组织.html",
    "revision": "2fb050434a053bcaf4780d62803a185f"
  },
  {
    "url": "guide/css/14-编辑器配置.html",
    "revision": "94006510c85a8a9381e04e9601df3359"
  },
  {
    "url": "guide/css/2-声明顺序.html",
    "revision": "d2579b812a7d0b7a941c987723aa0acc"
  },
  {
    "url": "guide/css/3-不要使用 @import.html",
    "revision": "d2864b2d28bd3b48dd3765493695085f"
  },
  {
    "url": "guide/css/4-媒体查询（Media query）的位置.html",
    "revision": "71143a4c6f371e84ba3a12140e91a160"
  },
  {
    "url": "guide/css/5-带前缀的属性.html",
    "revision": "d534aba98e75d3ccdaf3faf4ef67771c"
  },
  {
    "url": "guide/css/6-单行规则声明.html",
    "revision": "10719f0e3932129b6b6177fedbf616fe"
  },
  {
    "url": "guide/css/7-简写形式的属性声明.html",
    "revision": "c010d01646ff1daa839919374a496e01"
  },
  {
    "url": "guide/css/8-Less 和 Sass 中的嵌套.html",
    "revision": "8241b11aa58960e0d61c42d7cd1c4d4c"
  },
  {
    "url": "guide/css/9-Less 和 Sass 中的操作符.html",
    "revision": "2e443ffaeb4bcc111bd0ba4b828ada70"
  },
  {
    "url": "guide/html/1-语法.html",
    "revision": "101cc6034b0550482cc1583a7d290785"
  },
  {
    "url": "guide/html/10-减少标签的数量.html",
    "revision": "5a04a20fbe93c5a523745aa26b35220a"
  },
  {
    "url": "guide/html/11-JavaScript生成的标签.html",
    "revision": "624200c4af0852a3b50fbed0c9ee0c30"
  },
  {
    "url": "guide/html/2-HTML5-doctype.html",
    "revision": "66885422a365f1a4484bca0a05ab9375"
  },
  {
    "url": "guide/html/3-语言属性.html",
    "revision": "a6acb4de9593af16f3a0dfaaac4049a1"
  },
  {
    "url": "guide/html/4-IE兼容模式.html",
    "revision": "28695b0d01430f6f8d9dfca761c70deb"
  },
  {
    "url": "guide/html/5-字符编码.html",
    "revision": "7caaa9105c7fdeed5016d90240b0e129"
  },
  {
    "url": "guide/html/6-引入CSS和JavaScript文件.html",
    "revision": "86f28c805288d6f722ffbbc23fd5d35f"
  },
  {
    "url": "guide/html/7-实用为王.html",
    "revision": "2b8435ea8a93ecb988692b30fe2c92c3"
  },
  {
    "url": "guide/html/8-属性顺序.html",
    "revision": "826fc5763663753d80fde847ab8ae1e9"
  },
  {
    "url": "guide/html/9-布尔（boolean）型属性.html",
    "revision": "88e0eec6dc9a34c3c74014271dff2794"
  },
  {
    "url": "guide/index.html",
    "revision": "bf30578e9179019ce9912d59c9873152"
  },
  {
    "url": "guide/javascript/1-编写代码需遵守的几个原则.html",
    "revision": "2bf92a2a9cfe6a9fbfd15717dd7e8ed3"
  },
  {
    "url": "guide/javascript/2-编码规范.html",
    "revision": "d2fb0c89381d7022d1bfc3e77a460f80"
  },
  {
    "url": "guide/javascript/3-命名规范.html",
    "revision": "2ae0e68900e56ab40feeb8e54020a1d1"
  },
  {
    "url": "guide/javascript/4-编程风格.html",
    "revision": "49fe72ea4c6c1fcd4905eddf8fd513f4"
  },
  {
    "url": "guide/javascript/index.html",
    "revision": "67c47a8b0fe83277c867314455626e44"
  },
  {
    "url": "guide/markdown/1-基本用法.html",
    "revision": "7723e2aae2be369ae71de2bb65ab1a95"
  },
  {
    "url": "guide/markdown/index.html",
    "revision": "3259811261c5f52644f23caf84364a03"
  },
  {
    "url": "guide/vuepress/1-快速上手.html",
    "revision": "44b87b3e2e9f3e25db3afccb0187801d"
  },
  {
    "url": "guide/vuepress/2-目录结构.html",
    "revision": "a4f7243eff719650a606ef904e031750"
  },
  {
    "url": "guide/vuepress/3-默认主题.html",
    "revision": "6fd1c1bb20b25901c48941cb980dcabc"
  },
  {
    "url": "guide/vuepress/4-部署.html",
    "revision": "b281b41d41f619d8cfce178a67df7480"
  },
  {
    "url": "guide/vuepress/5-Markdown拓展.html",
    "revision": "2a215d8c49228f78a56ffccff919978e"
  },
  {
    "url": "guide/vuepress/6-在Markdown中使用Vue.html",
    "revision": "0c12519644a9abe08778dc136ddd8ffb"
  },
  {
    "url": "guide/vuepress/index.html",
    "revision": "47f4478d4d251219cada76945ae32979"
  },
  {
    "url": "hs.png",
    "revision": "fae07b5f9d916e9cd02343b8024d9dbf"
  },
  {
    "url": "index.html",
    "revision": "4ee8f9190e71f519ecb12343b062db1c"
  },
  {
    "url": "lang/en-us/index.html",
    "revision": "1ece2abd2dcac2803805c453c648f346"
  },
  {
    "url": "lang/index.html",
    "revision": "31bf2c609759cf0f7355baf27e8af86d"
  },
  {
    "url": "lang/ja/index.html",
    "revision": "a1dc8c182cf4d911bae58d734045bc14"
  },
  {
    "url": "lang/zh-cn/index.html",
    "revision": "5ab54defea519f2cf464939516d72e49"
  },
  {
    "url": "lang/zh-tw/index.html",
    "revision": "cde0f18871a71a49f2761bab8fd7cb67"
  },
  {
    "url": "logo.png",
    "revision": "1894cfc34d544a0ec1c2981cc9930fb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

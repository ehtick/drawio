if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,a,s)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=s(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-99ba3a23"],(function(e){"use strict";self.skipWaiting(),e.precacheAndRoute([{url:"js/app.min.js",revision:"afc0882171b9d18e115a8d7dbc3d8ed7"},{url:"js/extensions.min.js",revision:"1867ebd7093cc2aa2ff18a7939d8ff71"},{url:"js/orgchart.min.js",revision:"619d8c4dab47b81868916df31f55478b"},{url:"js/stencils.min.js",revision:"c4ea4d30481610fb3ebc119cbb4458e2"},{url:"js/shapes-14-6-5.min.js",revision:"1b26ebf0e2a8629737c081b0f5baa16d"},{url:"js/math-print.js",revision:"cf64f6a493a8cb5079f2b70813e478d7"},{url:"index.html",revision:"7c03d89e4ef93f3ad72024066acb7dab"},{url:"open.html",revision:"d71816b3b00e769fc6019fcdd6921662"},{url:"shortcuts.svg",revision:"e7883d8c6cebb174e241fa401324d271"},{url:"styles/fonts/ArchitectsDaughter-Regular.ttf",revision:"31c2153c0530e32553b31a49b3d70736"},{url:"styles/grapheditor.css",revision:"f85fb3cd4d17a2aca57b4301a7712514"},{url:"styles/atlas.css",revision:"0a6cc8a503b96f634e40309aadf6b803"},{url:"styles/dark.css",revision:"99dc5495d36d5ebaddababefde083c8c"},{url:"js/dropbox/Dropbox-sdk.min.js",revision:"4b9842892aa37b156db0a8364b7a83b0"},{url:"js/onedrive/OneDrive.js",revision:"505e8280346666f7ee801bc59521fa67"},{url:"js/viewer-static.min.js",revision:"cf34a7e1d1113bd00f317fc9ff862c6e"},{url:"connect/jira/editor-1-3-3.html",revision:"a583c5c1dac9945f6f4087c880e26854"},{url:"connect/jira/viewerPanel-1-3-12.html",revision:"801fc4ef821f5a3986902998da85b53a"},{url:"connect/jira/fullScreenViewer-1-3-3.html",revision:"b20590b5ba995880eb6778e092a3fd50"},{url:"connect/jira/viewerPanel.js",revision:"3def6121aa291841a38320ebffc51457"},{url:"connect/jira/spinner.gif",revision:"7d857ab9d86123e93d74d48e958fe743"},{url:"connect/jira/editor.js",revision:"b30113797d4498d3fbaad45ecded7a60"},{url:"connect/jira/fullscreen-viewer-init.js",revision:"94804f65483a6e7eb51dee97d0ae9d88"},{url:"connect/jira/fullscreen-viewer.js",revision:"8eceb2fe587296dd11f9c8f6eae34c20"},{url:"plugins/connectJira.js",revision:"4cefa13414e0d406550f3c073923080c"},{url:"plugins/cConf-comments.js",revision:"ee6764429bf47a8545aa1cedacee718e"},{url:"plugins/cConf-1-4-8.js",revision:"c7aa77338fc5eea1ee12bd4384ec4a60"},{url:"connect/confluence/connectUtils-1-4-8.js",revision:"7dc98e9a5aba5bd6ba2af3caea3c411a"},{url:"connect/new_common/cac.js",revision:"cf63bf9103bafb9f34cf3ff624b918e8"},{url:"connect/gdrive_common/gac.js",revision:"78f85e79f15f56b8b8d83c90f4a15679"},{url:"connect/onedrive_common/ac.js",revision:"5fb6ff1a73f54a9086b7a7e1f613b8ed"},{url:"connect/confluence/viewer-init.js",revision:"84b1f6758f3c1a723b019c58af377027"},{url:"connect/confluence/viewer.js",revision:"602f67261a510d30148b46236ec71b5d"},{url:"connect/confluence/viewer-1-4-42.html",revision:"4a9a11f6de154cbd7a2df9e45790daf1"},{url:"connect/confluence/macroEditor-1-4-8.html",revision:"b2908e71f755a069fe6487e1e705736c"},{url:"connect/confluence/includeDiagram-1-4-8.js",revision:"044305f511f450a237ea8bef188efb32"},{url:"connect/confluence/includeDiagram.html",revision:"4df629a5bfba840368ab8185ce27f439"},{url:"connect/confluence/macro-editor.js",revision:"03a8dcfc69612b44b6e75e6926a956fc"},{url:"math/es5/startup.js",revision:"dc7130cdc866593293dbb5dde11ceb40"},{url:"math/es5/core.js",revision:"f71bc0bfb7d2ac8261747f97a5d47dd4"},{url:"math/es5/ui/safe.js",revision:"8c1fcfee7c879588ad409edcdd9cce53"},{url:"math/es5/output/svg.js",revision:"4f55967d16197ebb01b86356d8ab179a"},{url:"math/es5/input/tex.js",revision:"5c4f470da2ccb1acf85041fcecd6fff6"},{url:"math/es5/input/asciimath.js",revision:"c2d4076dd8e26d509bfe3a378e71cfa7"},{url:"math/es5/output/svg/fonts/tex.js",revision:"6eab785a3788ea805bd2b552d1f0aab8"},{url:"resources/dia.txt",revision:"324bf7a062423ab1a272e5ff1a547914"},{url:"resources/dia_am.txt",revision:"e763073305ac26f6f9df7a59f762f07a"},{url:"resources/dia_ar.txt",revision:"9c529e3b64a754b2fb8ae744f7da1d62"},{url:"resources/dia_bg.txt",revision:"713b83d46f7c676315f688a88551e171"},{url:"resources/dia_bn.txt",revision:"31fefe5f76c6e26c8f680658c5888067"},{url:"resources/dia_bs.txt",revision:"f342f18507ac63dadd8f0d822e1349e5"},{url:"resources/dia_ca.txt",revision:"af2ce9c910d4db82207759ce815fd4da"},{url:"resources/dia_cs.txt",revision:"8b6e7c4d23a5e7792585b24689ac2dbb"},{url:"resources/dia_da.txt",revision:"6614e63df5e6b92d2694e8928c16a63e"},{url:"resources/dia_de.txt",revision:"c1b5ece4f2938032eea8af948ebde1a2"},{url:"resources/dia_el.txt",revision:"1d20756d13664ddab899e390202a3988"},{url:"resources/dia_eo.txt",revision:"187259698d0b9784833d2581200d5163"},{url:"resources/dia_es.txt",revision:"58f33362f5f533c898753ea04ff65f69"},{url:"resources/dia_et.txt",revision:"80d6ed272c1899edfd3282a2ba50d47e"},{url:"resources/dia_eu.txt",revision:"edbb547089a1b2c4d7d12de6d7bc6991"},{url:"resources/dia_fa.txt",revision:"4f98997163a15edceba7ec2c166e12f8"},{url:"resources/dia_fi.txt",revision:"cd4313d44b8057a556da73fdb1a040ea"},{url:"resources/dia_fil.txt",revision:"7c2384e6336969f9296308e5202283ce"},{url:"resources/dia_fr.txt",revision:"ef74553ed95974654e54addf92efa670"},{url:"resources/dia_gl.txt",revision:"afb61716b553b27757b5f40d8aeff7a4"},{url:"resources/dia_gu.txt",revision:"d866337f72a07464d7d4a0673bf18e13"},{url:"resources/dia_he.txt",revision:"5fb76cd2166f439eecd7609f6cbc09ec"},{url:"resources/dia_hi.txt",revision:"b6b8a696abb2150f76270f67873b1b5e"},{url:"resources/dia_hr.txt",revision:"b1facb64fba93dbce7e3b6affa09ef6a"},{url:"resources/dia_hu.txt",revision:"26f01a9fc61c271a2f3835032bba6e2d"},{url:"resources/dia_id.txt",revision:"85c05ddbd6c8f4baeb2da9173bd8f6f9"},{url:"resources/dia_it.txt",revision:"b72ff1c6ed0a80ad45df90ce51d601c2"},{url:"resources/dia_ja.txt",revision:"b52f509f442232ce59fc1050574a871c"},{url:"resources/dia_kn.txt",revision:"b8ea266c7ee87a4acb8608b3a211cb77"},{url:"resources/dia_ko.txt",revision:"b60b42c4310596da4fdf85f0b932b3c3"},{url:"resources/dia_lt.txt",revision:"1bc154ce9a842d1afe27d9456e6d0c3f"},{url:"resources/dia_lv.txt",revision:"9f6a4e17483a16236729b9d38d4f83b3"},{url:"resources/dia_ml.txt",revision:"d38b90d1f685e4abb1a1ffd0db3364af"},{url:"resources/dia_mr.txt",revision:"3d671f657115aa000a3a22b38bfc8c2a"},{url:"resources/dia_ms.txt",revision:"f9b1dc2c8689a90c9c18dce31f12fb80"},{url:"resources/dia_my.txt",revision:"324bf7a062423ab1a272e5ff1a547914"},{url:"resources/dia_nl.txt",revision:"e908ae7714cffb49a612e4e019aa5d24"},{url:"resources/dia_no.txt",revision:"d64ecb5a002d3690a02c28afdbd6c819"},{url:"resources/dia_pl.txt",revision:"64732e54f9a9de0b5bb1fa7bc363da03"},{url:"resources/dia_pt-br.txt",revision:"196930b21858ddd97977faa343153832"},{url:"resources/dia_pt.txt",revision:"947b8d95a754d02381707b86f16c6649"},{url:"resources/dia_ro.txt",revision:"0392aef02ce5f9e40afda3f5c59514bd"},{url:"resources/dia_ru.txt",revision:"3c5fb97888209a62faa91b03c25c3ba4"},{url:"resources/dia_si.txt",revision:"324bf7a062423ab1a272e5ff1a547914"},{url:"resources/dia_sk.txt",revision:"c19c4d2d729d91d9c902abc70bce1c9f"},{url:"resources/dia_sl.txt",revision:"288fb2e583025827ee2025756767bc01"},{url:"resources/dia_sr.txt",revision:"cdc9c7c92af7b49af2a87361909af753"},{url:"resources/dia_sv.txt",revision:"5b833f41982e461ce9043303ae318064"},{url:"resources/dia_sw.txt",revision:"8318f77552a55e579d62e9aa186bf221"},{url:"resources/dia_ta.txt",revision:"40011f555ed58eb27dda4e22882a404e"},{url:"resources/dia_te.txt",revision:"5274013045890281b7bf4b30ec391bc0"},{url:"resources/dia_th.txt",revision:"c8a2aed5721cdc008a0d056ae8478388"},{url:"resources/dia_tr.txt",revision:"c3324120aa6f2dbf1a517e6e4914a155"},{url:"resources/dia_uk.txt",revision:"b10360c15841af430096a428d5189d4e"},{url:"resources/dia_vi.txt",revision:"2cbc15b739f543c285fe1d09c8f9f282"},{url:"resources/dia_zh-tw.txt",revision:"139092e5d28710c8324d01a80e84b4b6"},{url:"resources/dia_zh.txt",revision:"6368ce3d2779667c3e0eea33b9ffc0eb"},{url:"favicon.ico",revision:"83014b0f32b6c7b15b66cf3c6d6d7c16"},{url:"images/manifest.json",revision:"38d3a7e4b63e8175f0aab6f03e000f07"},{url:"images/logo.png",revision:"e4e0d092abdb1e668b5ec41a7fe0713c"},{url:"images/drawlogo.svg",revision:"4bf4d14ebcf072d8bd4c5a1c89e88fc6"},{url:"images/drawlogo48.png",revision:"8b13428373aca67b895364d025f42417"},{url:"images/drawlogo-gray.svg",revision:"0aabacbc0873816e1e09e4736ae44c7d"},{url:"images/drawlogo-text-bottom.svg",revision:"f6c438823ab31f290940bd4feb8dd9c2"},{url:"images/default-user.jpg",revision:"2c399696a87c8921f12d2f9e1990cc6e"},{url:"images/logo-flat-small.png",revision:"4b178e59ff499d6dd1894fc498b59877"},{url:"images/apple-touch-icon.png",revision:"732c29e21332a926318a7005d21ec450"},{url:"images/icon-192-maskable.png",revision:"47e006d0ce4a35eb5beaa97f0c2bfed0"},{url:"images/icon-192.png",revision:"d022403d52435d76afec82c4e24a17ef"},{url:"images/icon-512-maskable.png",revision:"cf152feeb01fb21f3148a71a3540266e"},{url:"images/icon-512.png",revision:"a3a0df7e7a385244b74073f81ecc45de"},{url:"images/delete.png",revision:"5f2350f2fd20f1a229637aed32ed8f29"},{url:"images/droptarget.png",revision:"bbf7f563fb6784de1ce96f329519b043"},{url:"images/help.png",revision:"9266c6c3915bd33c243d80037d37bf61"},{url:"images/download.png",revision:"35418dd7bd48d87502c71b578cc6c37f"},{url:"images/logo-flat.png",revision:"038070ab43aee6e54a791211859fc67b"},{url:"images/google-drive-logo.svg",revision:"5d9f2f5bbc7dcc252730a0072bb23059"},{url:"images/onedrive-logo.svg",revision:"3645b344ec0634c1290dd58d7dc87b97"},{url:"images/dropbox-logo.svg",revision:"e6be408c77cf9c82d41ac64fa854280a"},{url:"images/github-logo.svg",revision:"a1a999b69a275eac0cb918360ac05ae1"},{url:"images/gitlab-logo.svg",revision:"0faea8c818899e58533e153c44b10517"},{url:"images/trello-logo.svg",revision:"006fd0d7d70d7e95dc691674cb12e044"},{url:"images/osa_drive-harddisk.png",revision:"b954e1ae772087c5b4c6ae797e1f9649"},{url:"images/osa_database.png",revision:"c350d9d9b95f37b6cfe798b40ede5fb0"},{url:"images/google-drive-logo-white.svg",revision:"f329d8b1be7778515a85b93fc35d9f26"},{url:"images/dropbox-logo-white.svg",revision:"4ea8299ac3bc31a16f199ee3aec223bf"},{url:"images/onedrive-logo-white.svg",revision:"b3602fa0fc947009cff3f33a581cff4d"},{url:"images/github-logo-white.svg",revision:"537b1127b3ca0f95b45782d1304fb77a"},{url:"images/gitlab-logo-white.svg",revision:"5fede9ac2f394c716b8c23e3fddc3910"},{url:"images/trello-logo-white-orange.svg",revision:"e2a0a52ba3766682f138138d10a75eb5"},{url:"images/logo-confluence.png",revision:"ed1e55d44ae5eba8f999aba2c93e8331"},{url:"images/logo-jira.png",revision:"f8d460555a0d1f87cfd901e940666629"},{url:"images/clear.gif",revision:"db13c778e4382e0b55258d0f811d5d70"},{url:"images/spin.gif",revision:"487cbb40b9ced439aa1ad914e816d773"},{url:"images/checkmark.gif",revision:"ba764ce62f2bf952df5bbc2bb4d381c5"},{url:"images/hs.png",revision:"fefa1a03d92ebad25c88dca94a0b63db"},{url:"images/aui-wait.gif",revision:"5a474bcbd8d2f2826f03d10ea44bf60e"},{url:"mxgraph/css/common.css",revision:"7985b4d1692766a7db52cbdd10893ad9"},{url:"mxgraph/images/expanded.gif",revision:"2b67c2c035af1e9a5cc814f0d22074cf"},{url:"mxgraph/images/collapsed.gif",revision:"73cc826da002a3d740ca4ce6ec5c1f4a"},{url:"mxgraph/images/maximize.gif",revision:"5cd13d6925493ab51e876694cc1c2ec2"},{url:"mxgraph/images/minimize.gif",revision:"8957741b9b0f86af9438775f2aadbb54"},{url:"mxgraph/images/close.gif",revision:"8b84669812ac7382984fca35de8da48b"},{url:"mxgraph/images/resize.gif",revision:"a6477612b3567a34033f9cac6184eed3"},{url:"mxgraph/images/separator.gif",revision:"7819742ff106c97da7a801c2372bbbe5"},{url:"mxgraph/images/window.gif",revision:"fd9a21dd4181f98052a202a0a01f18ab"},{url:"mxgraph/images/window-title.gif",revision:"3fb1d6c43246cdf991a11dfe826dfe99"},{url:"mxgraph/images/button.gif",revision:"00759bdc3ad218fa739f584369541809"},{url:"mxgraph/images/point.gif",revision:"83a43717b284902442620f61bc4e9fa6"}],{ignoreURLParametersMatching:[/.*/]})}));
//# sourceMappingURL=service-worker.js.map

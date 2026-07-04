export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  const brandParam = url.searchParams.get('brand');
  if (!brandParam) return notFound();

  try {
    // === Ambil daftar brand dari URL eksternal ===
    const LIST_URL = 'https://paste.hexaspaces.com/raw/vmdc9BXX1ke';
    const listResp = await fetch(LIST_URL);

    if (!listResp.ok) {
      return new Response(`Gagal mengambil list dari URL (status ${listResp.status})`, { status: 500 });
    }

    const text = await listResp.text();
    const lines = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    const found = lines.some(line => line.toLowerCase() === brandParam.toLowerCase());
    if (!found) return notFound();

    const BRAND = brandParam.toUpperCase();
    const fullUrl = url.href;

    // === HTML AMP (sama seperti sebelumnya) ===
    const html = `<!DOCTYPE html>
<html amp lang="id">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1">
    
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-audio" src="https://cdn.ampproject.org/v0/amp-audio-0.1.js"></script>
    <title>${BRAND} Teacher Training Courses Sri Lanka | St. George Institute</title>
    <link itemprop="mainEntityOfPage" rel="canonical" href="#">
    <link rel="alternate" href="#" hreflang="id" />
    <meta name="robots" content="index, follow"/>
    <meta name="keywords" content="${BRAND}, ${BRAND} login, ${BRAND} daftar, ${BRAND} link alternatif, ${BRAND} slot"/>
    <meta name="description" content="${BRAND} Full range of courses, certifications, diplomas and degree programmes and take your first step inlearning and graduating as a qualified professional with the best scope for success, career development and growth."/>
    <link href="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" rel="shortcut icon" type="image/webp">
    
    <meta property="og:description" content="${BRAND} Full range of courses, certifications, diplomas and degree programmes and take your first step inlearning and graduating as a qualified professional with the best scope for success, career development and growth.">
    <meta property="og:locale" content="id_ID">
    <meta property="og:title" content="${BRAND} Teacher Training Courses Sri Lanka | St. George Institute">
    <meta property="og:site_name" content="${BRAND}">
    <meta name="language" content="id-ID">
    <meta name="categories" content="website">
    
    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start {
        from { visibility: hidden } to { visibility: visible }
      }@-moz-keyframes -amp-start {
        from { visibility: hidden } to { visibility: visible }
      }@-ms-keyframes -amp-start {
        from { visibility: hidden } to { visibility: visible }
      }@-o-keyframes -amp-start {
        from { visibility: hidden } to { visibility: visible }
      }@keyframes -amp-start {
        from { visibility: hidden } to { visibility: visible }
      }</style><noscript>
      <style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style>
    </noscript>
    
    <style amp-custom>
      :root{--small-font:12px;--normal-font:14px;--large-font:16px;--x-large-font:18px}
      body{display:flex;flex-direction:column;padding-top:65px;padding-bottom:52px;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;background:linear-gradient(to right,#040b1c,#101b3b);color:#fff}
      a{text-decoration:none;color:#5296d5;font-weight:500}
      summary{outline:none;list-style-type:none}
      summary::-webkit-details-marker{display:none}
      
      /* CSS Container & Audio */
      .container{align-self:center;margin-left:auto;margin-right:auto;width:100%}
      .inside {display: flex; justify-content: center; align-items: center; margin: 20px 0;}
      .music-box {display: block;}
      
      /* --- DESAIN HEADER SLOT777 RESMI --- */
      .logo-container{
        background: linear-gradient(to bottom, #e3f0fe 0%, #688fd6 100%);
        box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        padding: 10px 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 99;
      }
      .logo-container .logo{
        display: block;
        position: relative;
        width: 140px;
        height: 40px;
      }
      .logo-container .logo amp-img{flex-grow:1;width:100%;height:100%}
      .logo-container .logo amp-img img{object-fit:contain; object-position: left;}
      
      .header-buttons {
        display: flex;
        gap: 8px;
      }
      .btn-daftar, .btn-login {
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 800;
        text-transform: uppercase;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        letter-spacing: 0.5px;
      }
      .btn-daftar {
        background-color: #fbd039;
        color: #0b1a30;
      }
      .btn-login {
        background-color: #17285c;
        color: #ffffff;
      }
      /* --- AKHIR DESAIN HEADER --- */

      /* --- TOMBOL DI BAWAH GAMBAR BANNER --- */
      .link-container{display:flex;justify-content:center;font-size:var(--x-large-font);padding:0;width:100%}
      .link-container a{width:50%;text-align:center;padding:15px 20px;text-transform:uppercase}
      .register-button{border:3px solid #0f1c3f;background:#ff8c00;background:linear-gradient(to bottom,#ff8c00,#cc7000);color:#fff;font-weight:bold}
      .register-button:hover{background:#cc7000;background:linear-gradient(to bottom,#cc7000 0,#ff8c00 100%)}
      .login-button{border:3px solid #0f1c3f;background:#1c305e;background:linear-gradient(to bottom,#29468a,#1c305e);color:#fff;font-weight:bold}
      .login-button:hover{background:#1c305e;background:linear-gradient(to bottom,#1c305e 0,#29468a 100%)}
      /* --- AKHIR TOMBOL DI BAWAH BANNER --- */

      .site-menu{width:60%;background-color:#01091a}
      .site-menu amp-img{margin-right:10px}
      .site-menu amp-img.chevron-right{position:absolute;right:0;filter:invert(1);transition:transform .3s;transform-origin:center}
      .site-menu details[open]>summary>section>amp-img.chevron-right{transform:rotate(90deg)}
      .site-menu ul{list-style-type:none;padding:0;margin:0;font-size:var(--large-font)}
      .site-menu li+li,.site-menu summary,.site-menu article>ul{margin-top:2px}
      .site-menu li>a,.site-menu summary{display:flex;align-items:center;padding:10px 15px;background-color:#181834;color:#fff;text-decoration:none;cursor:pointer}
      .site-menu details details summary,.site-menu details li>a{padding-left:45px;background-color:#0a0928;cursor:pointer}
      .site-menu details details li>a{padding-left:75px;background-color:#040d20;cursor:pointer}
      .main-menu-container{list-style-type:none;display:flex;flex-wrap:wrap;margin:0;padding:10px 0}
      .main-menu-container li{flex-basis:calc(25% - 10px);padding:5px}
      .main-menu-container li a{display:flex;padding:5px 0;justify-content:center;align-items:center;flex-direction:column;color:#fff;font-size:var(--normal-font);text-transform:uppercase}
      .main-menu-container li amp-img{margin:8px 0}
      .jackpot-container{display:flex;justify-content:center;position:relative}
      .jackpot-container .jackpot-prize{color:#fff;position:absolute;font-size:20px;bottom:20%}
      .jackpot-container .jackpot-currency{color:#03ffd8}
      .footer-container .bank-list,.footer-container .social-media-list,.footer-container .contact-list,.footer-container .footer-links{display:flex;flex-wrap:wrap;margin:0 auto;padding:10px 0;list-style-type:none}
      .footer-container .contact-list li{flex-basis:50%}
      .footer-container .contact-list li a{margin:5px 10px;display:flex;align-items:center;background-color:#1c305e;border-radius:30px;color:#fff;font-size:var(--normal-font)}
      .footer-container .contact-list>li a i{display:inline-flex;align-items:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;width:36px;height:36px;margin-right:10px;border-radius:50%;background:#5296d5}
      .footer-container .contact-list>li a i amp-img{margin:5px;flex-basis:0;-ms-flex-preferred-size:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}
      .footer-container .social-media-list{justify-content:center}
      .footer-container .social-media-list li{flex-basis:25%}
      .footer-container .bank-list{justify-content:center}
      .footer-container .bank-list li{flex-basis:25%;position:relative;display:flex;justify-content:center;padding-bottom:10px;height:27px}
      .footer-container .bank-list span[data-online="true"],.footer-container .bank-list span[data-online="false"]{width:5px;margin-right:5px;border-radius:2px}
      .footer-container .bank-list span[data-online="true"]{background-color:#0f0}
      .footer-container .bank-list span[data-online="false"]{background-color:#e00}
      .footer-container .footer-links{background-color:#0a1128;flex-wrap:wrap;justify-content:center}
      .footer-container .footer-links li{flex-basis:calc(25% - 3px);margin-bottom:5px;text-align:center}
      .footer-container .footer-links>li:not(:nth-child(5n+5)):not(:first-child) {border-left:1px solid #5296d5}
      .footer-container .footer-links li a{padding:5px;color:#fff;font-size:var(--normal-font)}
      .footer-container h1,.footer-container h2,.footer-container h3,.footer-container h4{display:inline}
      .copyright{padding:25px 0 20px;display:flex;flex-direction:column;justify-content:center;text-align:center}
      .copyright div{padding-bottom:10px}
      .fixed-footer{display:flex;justify-content:space-around;position:fixed;background-color:#0a1128;padding:5px 0;left:0;right:0;bottom:0;z-index:99}
      .fixed-footer a{background-color:inherit;flex-basis:calc((100% - 15px*6)/5);max-width:75px;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;font-size:var(--small-font)}
      .fixed-footer a.active{color:#ff8c00}
      .fixed-footer .center{transform:scale(1);background:center no-repeat;background-size:contain;background-color:inherit;border-radius:50%}
      .fixed-footer amp-img{max-width:40%;margin-bottom:5px}
      .fixed-footer .live-chat-icon{animation:pulse 3s infinite}
      .site-menu-trigger [data-icon="menu"]{background-color:#028cf0}
      .site-description{padding:10px}
      table,td,th{border:2px solid #5296d5}
      td{padding:10px}
      .table-white{overflow:hidden;width:100%;max-width:100%;border-collapse:collapse}
      
      @media (min-width:768px){
        body{padding-top:80px}
        .container{min-width:768px;max-width:970px}
        .site-menu{width:20%}
        .logo-container{padding: 15px 30px;}
        .logo-container .logo{width: 200px; height: 50px;}
        .btn-daftar, .btn-login {padding: 12px 25px; font-size: 16px;}
      }
      @media (min-width:1200px){.container{width:1170px}}
      @media (min-width:992px){.container{width:970px}}
    </style>
  </head>
  
  <body>
    <div class="logo-container">
      <a href="https://www.stgeorgeinstitute.lk/" class="logo">
        <amp-img layout="fill" src="https://cdn.mixlink.top/global/seamless/1735/IDR/logo/838479899.png" alt="${BRAND}"></amp-img>
      </a>
      <div class="header-buttons">
        <a href="https://tinyurl.com/daftarakungaib/" class="btn-daftar">DAFTAR</a>
        <a href="https://tinyurl.com/daftarakungaib/" class="btn-login">LOGIN</a>
      </div>
    </div>

    <a href="https://tinyurl.com/daftarakungaib/" target="_blank" rel="nofollow">
      <amp-img title="Promo SLOT777 1" src="https://files.antinawala900-gasbos.site/KLIKWIN188/photo-klikwin188-29062026.png" alt="SLOT777" width="500" height="450" layout="responsive"></amp-img>
    </a>
    
    <div class="link-container container">
      <a href="https://tinyurl.com/daftarakungaib/" class="login-button">LOGIN</a>
      <a href="https://tinyurl.com/daftarakungaib/" class="register-button">DAFTAR</a>
    </div>
    
    <footer class="footer-container container">
      <div class="site-description">
        <table style="width: 100%; border-collapse: collapse; color: #e1ffff; margin: 18px auto 18px auto;" border="1">
          <tbody>
          <tr bgcolor="#1c305e">
            <td style="padding: 5px;"><strong>Nama Situs</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">${BRAND}</td>
          </tr>
          <tr bgcolor="#0a1128">
            <td style="padding: 5px;"><strong>Min Deposit</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">💰 IDR 10,000</td>
          </tr>
          <tr bgcolor="#1c305e">
            <td style="padding: 5px;"><strong>Pasaran Unggulan</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">⚽ Mix Parlay, Handicap, 1x2, Outright</td>
          </tr>
          <tr bgcolor="#0a1128">
            <td style="padding: 5px;"><strong>Jenis Pembayaran</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">💴 Bank Lokal, 💶 E-Wallet, 💷 Qris</td>
          </tr>
          <tr bgcolor="#1c305e">
            <td style="padding: 5px;"><strong>Odds Terbaik</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">⚡️ Update Real-Time</td>
          </tr>
          <tr bgcolor="#0a1128">
            <td style="padding: 5px;"><strong>Event Spesial</strong></td>
            <td style="padding: 5px; color: #c9c9c9;">🏆 Kualifikasi & Piala Dunia 2026</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="copyright">CARMEN © COPYRIGHT | <a href="https://www.stgeorgeinstitute.lk/">${BRAND}</a></div>
    </footer>
    
    <div class="fixed-footer">
        <a class="active" href="https://tinyurl.com/daftarakungaib/">
            <amp-img layout="intrinsic" height="75" width="75" src="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" alt="Beranda"></amp-img>
            Beranda
        </a>
        <a href="https://tinyurl.com/daftarakungaib/">
            <amp-img layout="intrinsic" height="75" width="75" src="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" alt="Unduh"></amp-img>
            Unduh
        </a>
        <a href="https://tinyurl.com/daftarakungaib/">
            <amp-img class="center" layout="intrinsic" height="75" width="75" src="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" alt="Masuk SLOT777"></amp-img>
            Masuk
        </a>
        <a href="https://tinyurl.com/daftarakungaib/">
            <amp-img layout="intrinsic" height="75" width="75" src="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" alt="Promosi"></amp-img>
            Promosi
        </a>
        <a href="https://direct.lc.chat/14655945/" target="_blank" class="js_live_chat_link live-chat-link">
            <amp-img class="live-chat-icon" layout="intrinsic" height="75" width="75" src="https://www.stgeorgeinstitute.lk/wp-content/uploads/2021/04/cropped-Capture-180x180.png" alt="Live Chat"></amp-img>
            Live Chat
        </a>
    </div>
  </body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (err) {
    return new Response(`Internal Error: ${err.message}`, { status: 500 });
  }
}

function notFound() {
  return new Response('<h1>404 Not Found</h1>', { status: 404 });
}

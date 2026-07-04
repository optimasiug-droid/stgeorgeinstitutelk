export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // 1. Ambil parameter brand
  const brandParam = url.searchParams.get('brand');
  if (!brandParam) {
    return notFound();
  }

  try {
    // 2. Baca file list.txt dari aset statis (public/)
    //    Penting: path harus dimulai dengan '/'
    const assetReq = new Request('/list.txt', {
      method: 'GET',
      headers: { 'Accept': 'text/plain' }
    });
    const listResp = await env.ASSETS.fetch(assetReq);

    if (!listResp.ok) {
      return new Response(`Gagal membaca list.txt (status ${listResp.status})`, { status: 500 });
    }

    const text = await listResp.text();
    const lines = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0);

    // 3. Cari brand (case-insensitive)
    const found = lines.some(line => line.toLowerCase() === brandParam.toLowerCase());
    if (!found) {
      return notFound();
    }

    const BRAND = brandParam.toUpperCase();
    const fullUrl = url.href;

    // 4. Generate HTML (sama seperti sebelumnya, gunakan template literal)
    const html = `<!doctype html>
<html amp lang="id">
<head>
  <meta charset="utf-8">
  <meta name="format-detection" content="telephone=no">
  <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script async src="https://cdn.ampproject.org/v0.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
  <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style>
  <noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
  <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap" rel="stylesheet">
  <link rel="shortcut icon" href="https://i.ibb.co/SVQjDjk/favicon.png" type="image/png">
  <title>${BRAND} : Link Login & Daftar Resmi Terbaru Easy Maxwin Hari Ini</title>
  <meta name="description" itemprop="description" content="${BRAND} adalah situs gaming terbaik dan terpercaya yang easy meraih maxwin dan jackpot berkali - kali. Banyak member yang sudah hadir dalam permainan terbaru ini. Layanan 24/7 Jam." />
  <meta name="keywords" content="${BRAND}, login ${BRAND}, daftar ${BRAND}, link alternatif ${BRAND}" />
  <link rel="canonical" href="#" />
  <meta content="id" name="geo.country" />
  <meta content="Indonesia" name="geo.placename" />
  <meta property="og:locale" content="id" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="${BRAND} : Link Login & Daftar Resmi Terbaru Easy Maxwin Hari Ini" />
  <meta property="og:description" content="${BRAND} adalah situs gaming terbaik dan terpercaya yang easy meraih maxwin dan jackpot berkali - kali. Banyak member yang sudah hadir dalam permainan terbaru ini. Layanan 24/7 Jam." />
  <meta property="og:image" content="https://files.antinawala900-gasbos.site/KLIKWIN188/photo-klikwin188-29062026.png">
  <meta property="og:url" content="${fullUrl}" />
  <meta property="og:site_name" content="${BRAND} : Link Login & Daftar Resmi Terbaru Easy Maxwin Hari Ini" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="${BRAND} adalah situs gaming terbaik dan terpercaya yang easy meraih maxwin dan jackpot berkali - kali. Banyak member yang sudah hadir dalam permainan terbaru ini. Layanan 24/7 Jam." />
  <meta name="twitter:title" content="${BRAND} : Link Login & Daftar Resmi Terbaru Easy Maxwin Hari Ini" />
  <meta property="og:image" content="https://files.antinawala900-gasbos.site/KLIKWIN188/photo-klikwin188-29062026.png" />

  <style amp-custom>
    *{box-sizing:border-box;margin:0;padding:0}:focus{outline:0}::-webkit-scrollbar{display:none}a,a:after,a:hover,a:visited{text-decoration:none;color:#bdc1c6}html{max-width:500px;margin:0 auto;background:#202124}body{color:#bdc1c6;font-family:'Noto Sans',arial,sans-serif}.atas{display:grid;min-height:100vh}.atasbox{margin:auto;text-align:center;}.ataslink{display:inline-grid;margin:.88rem 0;}.ataslink a{padding:.5rem 3.8rem;background:#33333388;margin-bottom:.5rem;border-radius:.38rem;box-shadow:0 -1px #ccb38a88;letter-spacing:1px}.ataslink a.btn1{color:#eee;background-image:linear-gradient(to right,#cb356b,#bd3f32);box-shadow:none;font-weight:bold;}@media (max-width:480px){.atasbox{padding:16px;}}.social-icons{display:flex;justify-content:center;align-items:center;margin-top:1rem;}.social-icons a{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;background:transparent;border-radius:50%;margin:0 10px;font-size:20px;color:#fff;text-decoration:none;}.social-icons a.facebook{background:#1877f2;}.social-icons a.instagram{background:#e4405f;}.social-icons a.whatsapp{background:#128c7e;}.social-icons a.telegram{background:#0088cc;}
  </style>
</head>
<body>
  <main>
    <div class="atas">
      <div class="atasbox">
        <div>
          <amp-img class="imghero" height="210" width="698" alt="${BRAND}" layout="responsive" src="https://files.antinawala900-gasbos.site/KLIKWIN188/photo-klikwin188-29062026.png"></amp-img>
        </div>
        <div class="ataslink">
          <a href="https://ggdewapro.com/" class="btn1">LOGIN ${BRAND}</a>
          <a href="https://ggdewapro.com/" target="_blank" rel="noopener noreferrer nofollow">DAFTAR ${BRAND}</a>
          <a href="https://ggdewapro.com/" target="_blank" rel="noopener noreferrer nofollow">LINK ALTERNATIF ${BRAND}</a>
        </div>

        <div class="social-icons">
          <a href="https://ggdewapro.com/" class="telegram" target="_blank" rel="noopener noreferrer nofollow">
            <i class="fab fa-telegram"></i>
          </a>
          <a href="https://ggdewapro.com/" class="facebook" target="_blank" rel="noopener noreferrer nofollow">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://ggdewapro.com/" class="whatsapp" target="_blank" rel="noopener noreferrer nofollow">
            <i class="fab fa-whatsapp"></i>
          </a>
        </div>

      </div>
    </div>
  </main>
</body>
</html>`;

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' }
    });

  } catch (err) {
    // Tangkap semua error dan tampilkan pesan jelas
    return new Response(`Internal Error: ${err.message}`, { status: 500 });
  }
}

function notFound() {
  return new Response('<h1>404 Not Found</h1>', { status: 404 });
}

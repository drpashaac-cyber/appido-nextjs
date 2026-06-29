import type { Dictionary } from "./types";

const tr: Dictionary = {
  nav: { product: "Ürün", platform: "Platform", pricing: "Fiyatlandırma", customers: "Müşteriler", faq: "SSS", signin: "Giriş", start: "Ücretsiz başla" },
  hero: {
    eyebrow: "Yapay Zeka Gelir İşletim Sistemi",
    title: "Telegram'ını kendi kendine çalışan bir satış makinesine dönüştür",
    sub: "Appido'nun yapay zeka satış temsilcisi her lead'i 7/24 niteler, takip eder ve kapatır — Telegram-yerel CRM, ödeme ve analitik dahil. Satışları DM'lerinde kaybetmeyi bırak.",
    cta1: "Ücretsiz başla — 14 gün",
    cta2: "Demo planla",
    note: "Kredi kartı yok · Dakikalar içinde kurulum · İstediğin zaman iptal",
    metrics: [
      { v: "2.400+", l: "işletme Appido kullanıyor" },
      { v: "$48M+", l: "işlenen satış" },
      { v: "+%42", l: "90 günde ort. artış" },
    ],
  },
  logos: "BDT, MENA ve Avrupa'daki gelir ekiplerine güç veriyor",
  features: {
    eyebrow: "Yetenekler",
    title: "Tek bir iş için kuruldu: daha fazla gelir",
    items: [
      { icon: "Bot", t: "AI Satış Temsilcisi", d: "Niteler, itirazları yanıtlar ve kapatır — 7/24, 50+ dilde.", k: "+%42 dönüşüm" },
      { icon: "Inbox", t: "Akıllı Gelen Kutusu", d: "Tüm sohbetler tek yerde, satın alma niyetine göre önceliklendirilmiş.", k: "0 kayıp potansiyel" },
      { icon: "Crm", t: "Telegram-yerel CRM", d: "Kendini güncelleyen kişiler, anlaşmalar ve geçmiş.", k: "Tek kaynak" },
      { icon: "Flow", t: "Otomasyon kurucu", d: "Takip, yenileme ve katılım için görsel akışlar.", k: "Haftada 10+ saat" },
      { icon: "Coin", t: "Ödeme ve abonelik", d: "Küresel kartlar, yerel yöntemler ve USDT (TRC20/BEP20). Erişim otomatik verilir ve alınır.", k: "Daha az kayıp" },
      { icon: "Chart", t: "Gelir analitiği", d: "Hangi mesaj, segment ve saatin satış getirdiğini tam olarak gör.", k: "Tam görünürlük" },
    ],
  },
  proof: {
    eyebrow: "Kanıt",
    title: "Gelir sızıntısını durduran işletmeciler",
    cases: [
      { q: "Temsilci ben uyanmadan her potansiyeli niteliyor. Ben sadece sıcakları kapatıyorum.", n: "Koçluk işi", r: ["%5 → %18 dönüşüm", "$3,2k → $9,1k / ay"] },
      { q: "Üyeler anında yanıt aldığı için iadeler düştü.", n: "Online kurs", r: ["−%40 iade", "$2,5k → $8k / ay"] },
      { q: "Kayıp bizi bitiriyordu. Otomatik yenileme ve erişim çözdü.", n: "Üyelik topluluğu", r: ["kayıp %50 → %26", "2,1× LTV"] },
    ],
  },
  pricing: {
    eyebrow: "Fiyatlandırma",
    title: "Gelirle ölçeklenen şeffaf planlar",
    sub: "14 gün ücretsiz başla. Kredi kartı gerekmez.",
    bill: { mo: "Aylık", yr: "Yıllık", save: "%17 indirim", billed: "yıllık faturalandırma" },
    popular: "En popüler",
    tiers: [
      { n: "Start", p: "$79", pa: "$66", per: "/ay", d: "Otomatik satış operatörünüz.", f: ["Satış ve üyelik botu", "Otomatik ödeme onayı", "Otomatik ürün teslimi", "Kanal erişim yönetimi", "Gelen kutusu + temel CRM"], cta: "Ücretsiz başla" },
      { n: "Pro", p: "$179", pa: "$149", per: "/ay", d: "Yapay zeka destekli satış.", f: ["7/24 AI satış temsilcisi", "AI müşteri desteği", "AI pazarlamacı", "AI kampanya yöneticisi", "AI CRM"], cta: "Ücretsiz başla", best: true },
      { n: "Ölçek", p: "Özel", pa: "Özel", per: "", d: "Ekipler ve ajanslar için.", f: ["Yoğun AI kullanımı · sınırsız koltuk", "API, webhook ve özel entegrasyonlar", "Özel başarı yöneticisi + SSO", "%99,9 çalışma süresi SLA"], cta: "Satışa danış" },
    ],
    value: {
      eyebrow: "Pro neden kendini amorti eder",
      title: "Pro koca bir satış ekibinin yerini alır",
      items: [["Tam zamanlı satışçı", "$1.500/ay'dan"], ["Destek sorumlusu", "$200/ay'dan"], ["Akıllı CRM", "$400/ay'dan"]],
      sepLabel: "Ayrı ayrı tutsan",
      total: "$2.100+/ay",
      priceLabel: "Pro ile hepsi",
      price: "$179/ay",
      note: "…AI pazarlamacı ve kampanya yöneticisi de dahil.",
    },
    guarantee: "Tüm ücretli planlarda 30 gün para iade garantisi.",
  },
  finalCta: {
    title: "Telegram kitleni gelire çevir",
    sub: "Beş aracı bir araçla değiştiren işletmecilere katıl. Çoğu iki hafta içinde geri ödemeyi görüyor.",
    cta1: "Ücretsiz başla — 14 gün",
    cta2: "Demo planla",
    note: "Kredi kartı yok · GDPR uyumlu · İstediğin zaman iptal",
  },
  faq: {
    eyebrow: "Sık Sorulan Sorular",
    title: "Bilmek istediğin her şey",
    items: [
      { q: "Appido nedir?", a: "Appido, işletmelerin müşterileri otomatik olarak takip etmesine, desteklemesine ve satın almaya yönlendirmesine yardımcı olan Telegram için yapay zeka destekli bir satış otomasyon platformudur." },
      { q: "Appido'yu kullanmak için teknik bilgiye ihtiyacım var mı?", a: "Hayır. Appido işletme sahipleri için tasarlanmıştır. Kurulum sadece birkaç dakika sürer, kodlama veya teknik beceri gerekmez." },
      { q: "Ücretsiz deneme var mı?", a: "Evet. Appido'nun tüm özelliklerini 14 gün boyunca ücretsiz deneyebilirsiniz — kredi kartı ve taahhüt gerekmez." },
      { q: "Appido tüm Telegram botlarıyla çalışır mı?", a: "Evet. Appido, Telegram botları, gruplar ve kanallarla çalışır. Birden fazla kanalı aynı anda tek panelden yönetebilirsiniz." },
      { q: "Hangi ödeme yöntemleri destekleniyor?", a: "Appido küresel kredi kartlarını, yerel ödeme yöntemlerini ve kripto paraları (USDT TRC20 ve BEP20) destekler." },
      { q: "Planımı daha sonra değiştirebilir miyim?", a: "Evet. İstediğin zaman planını yükseltebilir veya değiştirebilirsin. Memnun kalmadın mı? Tüm ücretli planlarda 30 günlük para iade garantisi sunuyoruz." },
    ],
  },
  footer: {
    tagline: "Telegram işletmeleri için Yapay Zeka Gelir İşletim Sistemi.",
    cols: [
      { h: "Ürün", l: ["Özellikler", "Fiyat", "Güvenlik", "SSS"] },
      { h: "Çözümler", l: ["Koçlar", "Kurs üreticileri", "Üyelikler", "Kripto toplulukları", "Ajanslar"] },
      { h: "Şirket", l: ["Hakkında", "Blog", "Kariyer", "Basın", "İletişim"] },
      { h: "Yasal", l: ["Gizlilik", "Şartlar", "Güvenlik", "GDPR", "Durum"] },
    ],
    rights: "Tüm hakları saklıdır.",
  },
};

export default tr;
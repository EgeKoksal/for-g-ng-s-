const ogrenciler = [
{
    ad:"Gökalp",
    soyad: "Ülkü",
    yas:"28",
},
{
    ad:"Levent",
    soyad: "Yilmaz",
    yas:"27",
},
{
    ad:"Alperen",
    soyad:"Amasyali",
    yas:"26",
},
{
    ad:"Berk",
    soyad:"Tanir",
    yas:"27",
},
{
    ad:"Ege",
    soyad:"Köksal",
    yas:"26",
},
{
    ad:"Küllük",
    soyad:"Köksal",
    yas:"3",
},
{
    ad:"Dogukan",
    soyad:"Buhur",
    yas:"25",
},
{
    ad:"Mert",
    soyad:"Gündüz",
    yas:"25",
},
{
    ad:"Faruk",
    soyad:"Köksal",
    yas:"68",
},
{
    ad:"Meral",
    soyad:"Köksal",
    yas:"56",
},

] 
const kutuElementi = document.getElementById("kutu1");

for (let i = 0; i < ogrenciler.length; i++) {
  const ogrenci = ogrenciler[i];
  const siraNo = i + 1;
  const pElementi = document.createElement("p");
  pElementi.textContent = `${siraNo}. ${ogrenci.ad} ${ogrenci.soyad} - ${ogrenci.yas} yaş`;
  kutuElementi.appendChild(pElementi);
};

const button1Elementi = document.getElementById("button1");
const kutu1Elementi = document.getElementById("kutu1");
button1Elementi.addEventListener("click", function() {
    const ad = prompt("Adınız");
    const soyad = prompt("Soyadız");
    const yas = prompt("Yasınız");

    const yeniOgrenci = {
        ad,
        soyad,
        yas,
    };
    ogrenciler.push(yeniOgrenci);

    kutu1Elementi.innerHTML = "";
    for (let i = 0; i < ogrenciler.length; i++) {
        const ogrenci = ogrenciler[i];
        const siraNo = i + 1;
        const pElementi = document.createElement("p");
        pElementi.textContent = `${siraNo}. ${ogrenci.ad} ${ogrenci.soyad} - ${ogrenci.yas} yaş`;
        kutuElementi.appendChild(pElementi);
      };
});

const kutu2Elementi = document.getElementById("kutu1");
const buton2Elementi = document.getElementById("button2");
buton2Elementi.addEventListener("click", function () {
  const silinecekOgrenci = prompt("Silinecek öğrenci sırasını girin (1-?): ");
  const index = silinecekOgrenci - 1;
  // Öğrenciyi diziden silme
  ogrenciler.splice(index, 1);

  kutuElementi.innerHTML = "";
  for (let i = 0; i < ogrenciler.length; i++) {
    const ogrenci = ogrenciler[i];
    const siraNo = i + 1;
    const pElementi = document.createElement("p");
    pElementi.textContent = `${siraNo}. ${ogrenci.ad} ${ogrenci.soyad} - ${ogrenci.yas} yaş`;
    kutuElementi.appendChild(pElementi);
  }
});

const kutu3Elementi = document.getElementById("kutu1");
const buton3Elementi = document.getElementById("button3");
buton3Elementi.addEventListener("click", function () {
    const guncelleme = prompt("Güncellenecek öğrenci sayisi 1-?: ");
    const index = guncelleme - 1;
    const ad = prompt("Adınız");
    const soyad = prompt("Soyadız");

    ogrenciler[index].ad = ad;
    ogrenciler[index].soyad = soyad;


    kutuElementi.innerHTML = "";
  for (let i = 0; i < ogrenciler.length; i++) {
    const ogrenci = ogrenciler[i];
    const siraNo = i + 1;
    const pElementi = document.createElement("p");
    pElementi.textContent = `${siraNo}. ${ogrenci.ad} ${ogrenci.soyad} - ${ogrenci.yas} yaş`;
    kutuElementi.appendChild(pElementi);
  }
});

const kutu4Elementi = document.getElementById("kutu1");
const buton4Elementi = document.getElementById("button4");
buton4Elementi.addEventListener("click", function () {
    ogrenciler.sort((a, b) => a.ad.localeCompare(b.ad));

    kutuElementi.innerHTML = "";
    for (let i = 0; i < ogrenciler.length; i++) {
      const ogrenci = ogrenciler[i];
      const siraNo = i + 1;
      const pElementi = document.createElement("p");
      pElementi.textContent = `${siraNo}. ${ogrenci.ad} ${ogrenci.soyad} - ${ogrenci.yas} yaş`;
      kutuElementi.appendChild(pElementi);
    }
});

const kutu5Elementi = document.getElementById("kutu1");
const buton5Elementi = document.getElementById("button5");
buton5Elementi.addEventListener("click", function () {
    const rastgeleSayı = Math.floor(Math.random() * ogrenciler.length);
    const rastgeleAd = ogrenciler[rastgeleSayı]
    alert(` ${rastgeleAd.ad} ${rastgeleAd.soyad}`);
});

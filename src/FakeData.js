const data = [
  {
    id: 1,
    title: "Anasayfa",
    url: "/",
    order: 1,
    style: "font-weight: bold;",

    color: "#283747",
  },
  {
    id: 2,
    title: "Hizmetlerimiz",
    url: "/hizmetlerimiz",
    order: 2,

    color: "#283747",
    submenu: [
      {
        id: 3,
        title: "Teknik Hizmetlerimiz",
        url: "/teknik-hizmetlerimiz",
        order: 1,
        color: "#283747",
      },
      {
        id: 4,
        title: "Danışmanlık Hizmetlerimiz",
        url: "/danismanlik-hizmetlerimiz",
        order: 2,

        color: "",
        submenu: [
          {
            id: 5,
            title: "Danışmanlık Eğitimleri",
            url: "/danismanlik-egitimleri",
            order: 1,

            color: "#27AE60 ",
          },
          {
            id: 6,
            title: "Eğitim Öğretim Planlama",
            url: "/egitim-ogretim-planlama",
            order: 2,

            color: "#27AE60 ",
          },
        ],
      },
      {
        id: 7,
        title: "Hatalı Altyapı Onarımı",
        url: "/hatali-altyapi-onarimi",
        order: 3,

        color: "#283747",
      },
    ],
  },
  {
    id: 8,
    title: "Hakkımızda",
    url: "/hakkimizda",
    order: 3,
    color: "#283747",
    submenu: [
      {
        id: 9,
        title: "Biz Kimiz?",
        url: "/biz-kimiz",
        order: 1,

        color: "#283747",
      },
      {
        id: 10,
        title: "Kurumsal",
        url: "/kurumsal",
        order: 2,

        color: "#283747",
      },
      {
        id: 11,
        title: "Referanslarımız",
        url: "/referanslarimiz",
        order: 3,

        color: "#283747",
        submenu: [
          {
            id: 12,
            title: "Geçmiş Referanslar",
            url: "/gecmis-referanslar",
            order: 1,
            color: "#27AE60 ",
            submenu: [
              {
                id: 19,
                title: "X Referansı",
                url: "/XReferansı",
                color: "#27AE60 ",
                order: 1,
              },
              {
                id: 20,
                title: "Y Referansı",
                url: "/YReferansı",
                color: "#27AE60 ",
                order: 2,
              },
              {
                id: 21,
                title: "Z Referansı",
                url: "/ZReferansı",
                color: "#27AE60 ",
                order: 3,
              },
            ],
          },
          {
            id: 13,
            title: "Gelecek Referanslar",
            url: "/gelecek-referanslar",
            order: 2,
            color: "#27AE60 ",
            submenu: [
              {
                id: 22,
                title: "A Referansı",
                url: "/AReferansı",
                color: "#27AE60 ",
                order: 1,
              },
              {
                id: 22,
                title: "B Referansı",
                url: "/BReferansı",
                color: "#27AE60",
                order: 2,
              },
              {
                id: 22,
                title: "C Referansı",
                url: "/CReferansı",
                color: "#27AE60",
                order: 3,
              },
            ],
          },
        ],
      },
      {
        id: 14,
        title: "Vizyon",
        url: "/vizyon",
        order: 4,
        color: "#1E8449",
      },
      {
        id: 15,
        title: "Misyon",
        url: "/misyon",
        order: 5,
        color: "#1E8449",
      },
    ],
  },
  {
    id: 16,
    title: "İletişim",
    url: "/iletisim",
    order: 4,

    color: "#283747",
  },
  {
    id: 17,
    title: "Kayıt Ol",
    url: "/kayit-ol",
    order: 5,

    color: "#283747",
  },
  {
    id: 18,
    title: "Giriş Yap",
    url: "/giris-yap",
    order: 6,

    color: "#283747",
  },
];
export default data;

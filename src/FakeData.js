const data = [
  {
    id: 1,
    title: "Anasayfa",
    link: "/",
    order: 1,
    style: "font-weight: bold;",
    function: "mainButton",
    color: "#ffffff",
  },
  {
    id: 2,
    title: "Hizmetlerimiz",
    link: "/hizmetlerimiz",
    order: 2,
    style: "",
    function: "parentButton",
    color: "#ffffff",
    children: [
      {
        id: 3,
        title: "Teknik Hizmetlerimiz",
        link: "/teknik-hizmetlerimiz",
        order: 1,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      {
        id: 4,
        title: "Danışmanlık Hizmetlerimiz",
        link: "/danismanlik-hizmetlerimiz",
        order: 2,
        style: "",
        function: "childButton",
        color: "#ffffff",
        children: [
          {
            id: 5,
            title: "Danışmanlık Eğitimleri",
            link: "/danismanlik-egitimleri",
            order: 1,
            style: "",
            function: "childButton",
            color: "#ffffff",
          },
          {
            id: 6,
            title: "Eğitim Öğretim Planlama",
            link: "/egitim-ogretim-planlama",
            order: 2,
            style: "",
            function: "childButton",
            color: "#ffffff",
          },
          // Diğer child buttonlar...
        ],
      },
      {
        id: 7,
        title: "Hatalı Altyapı Onarımı",
        link: "/hatali-altyapi-onarimi",
        order: 3,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      // Diğer child buttonlar...
    ],
  },
  {
    id: 8,
    title: "Hakkımızda",
    link: "/hakkimizda",
    order: 3,
    style: "",
    function: "parentButton",
    color: "#ffffff",
    children: [
      {
        id: 9,
        title: "Biz Kimiz?",
        link: "/biz-kimiz",
        order: 1,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      {
        id: 10,
        title: "Kurumsal",
        link: "/kurumsal",
        order: 2,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      {
        id: 11,
        title: "Referanslarımız",
        link: "/referanslarimiz",
        order: 3,
        style: "",
        function: "childButton",
        color: "#ffffff",
        children: [
          {
            id: 12,
            title: "Geçmiş Referanslar",
            link: "/gecmis-referanslar",
            order: 1,
            style: "",
            function: "childButton",
            color: "#ffffff",
          },
          {
            id: 13,
            title: "Gelecek Referanslar",
            link: "/gelecek-referanslar",
            order: 2,
            style: "",
            function: "childButton",
            color: "#ffffff",
          },
          // Diğer child buttonlar...
        ],
      },
      {
        id: 14,
        title: "Vizyon",
        link: "/vizyon",
        order: 4,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      {
        id: 15,
        title: "Misyon",
        link: "/misyon",
        order: 5,
        style: "",
        function: "childButton",
        color: "#ffffff",
      },
      // Diğer child buttonlar...
    ],
  },
  {
    id: 16,
    title: "İletişim",
    link: "/iletisim",
    order: 4,
    style: "",
    function: "mainButton",
    color: "#ffffff",
  },
  {
    id: 17,
    title: "Kayıt Ol",
    link: "/kayit-ol",
    order: 5,
    style: "",
    function: "mainButton",
    color: "#ffffff",
  },
  {
    id: 18,
    title: "Giriş Yap",
    link: "/giris-yap",
    order: 6,
    style: "",
    function: "mainButton",
    color: "#ffffff",
  },
];
export default data;

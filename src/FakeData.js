const data = [
    {
      label: 'Anasayfa',
      url: '#',
      functionType: 'mainButton',
      css: 'text-red-500'
    },
    {
      label: 'Hizmetlerimiz',
      url: '#',
      functionType: 'parentButton',
      css: 'text-green-500',
      children: [
        {
          label: 'Teknik Hizmetlerimiz',
          url: '#',
          functionType: 'childButton',
          css: 'text-blue-500',
          children: [
            { label: 'Frontend Teknolojileri', url: '#' },
            { label: 'Backend Teknolojileri', url: '#' },
            { label: 'AWS Hizmetleri', url: '#' }
          ]
        },
        {
          label: 'Danışmanlık Hizmetlerimiz',
          url: '#',
          functionType: 'childButton',
          css: 'text-yellow-500',
          children: [
            { label: 'Teknik Destek',functionType: 'subChildButton', url: '#' },
            { label: 'Bilgilendirme Hizmetleri', url: '#' },
            { label: 'Mentorluk Hizmetleri', url: '#' },
            {
              label: 'Danışmanlık Eğitimleri',
              url: '#',
              functionType: 'subChildButton',
              css: 'text-indigo-500',
              children: [
                { label: 'Sertifikalı Danışmanlık Hizmeti',functionType: 'subChildButton', url: '#' },
                { label: 'Kurumsal Danışmanlık Hizmeti',functionType: 'subChildButton', url: '#' }
              ]
            },
            { label: 'Eğitim Öğretim Planlama', url: '#' },
            { label: 'Yazılım Danışmanlığı', url: '#' },
            { label: 'Proje Danışmanlığı', url: '#' }
          ]
        },
        { label: 'Hatalı Altyapı Onarımı', url: '#' }
      ]
    },
    {label: 'Hakkımızda',
    url: '#',
    functionType: 'parentButton',
    css: 'text-green-500',
    children:[
        {label: 'Biz Kimiz?', url: '#'},
        {label: 'Kurumsal', url: '#'},
        {label: 'Referanslarımız', url: '#',
    functionType: 'childButton',
    css:'text-green-500', children: [
    {
        label: "Geçmiş Referanslar",
        url: '#',
        functionType: 'childButton',
        css: 'text-green-500',
        children: [
            {label: "X Referansı", url: "#"},
            {label: "Y Referansı", url: "#"},
            {label: "Z Referansı", url: "#"},
            
        ]
    },
    {
        label: "Gelecek Referanslar",
        url: '#',
        functionType: 'childButton',
        css: 'text-green-500',
        children: [
            {label: "A Referansı", url: "#"},
            {label: "B Referansı", url: "#"},
            {label: "C Referansı", url: "#"},
            
        ]
    }
   ]},

{
    label: "Vizyon", url: '#'

},
{
    label: "Misyon", url: "#"
}    
] 
},
    
    { label: 'İletişim', url: '#' },
    { label: 'Kayıt Ol', url: '#' },
    { label: 'Giriş Yap', url: '#' }
  ];

  export default data;

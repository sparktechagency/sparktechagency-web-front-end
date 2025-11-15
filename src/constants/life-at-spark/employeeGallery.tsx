export type ImageItem =
  | string
  | { src: string; alt?: string; name?: string; designation?: string };

const DEFAULT_IMAGES: ImageItem[] = [
  {
    src: "https://i.ibb.co.com/Gv2nbhXn/farzana-img.png",
    alt: "Abstract art",
    name: "Love BdCalling",
    designation: "UI/UX Designer",
  },

  {
    src: "https://i.ibb.co.com/Ng62nrs1/inspiring-new-boss-copy1-768x1147-3-4.png",
    alt: "Nadir",
    name: "Nadir Hossain",
    designation: "Sr Backend Developer",
  },
  {
    src: "https://i.ibb.co.com/Ps7z6hZ4/93995954-2667124773520254-2730501655723245568-n.jpg",
    alt: "Masum",
    name: "H. M. Masum",
    designation: "Jr. Frontend Developer",
  },
  {
    src: "https://i.ibb.co.com/FqzSsdfj/580512431-4116207195308135-3270780407261229590-n.jpg",
    alt: "Abstract art",
    name: "Asadur Rahaman Yead",
    designation: "Jr Frontend Developer",
  },
  {
    src: "https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern sculpture",
    name: "Alice Smith",
    designation: "Sculptor",
  },
  {
    src: "https://i.ibb.co.com/rfHkfHB3/517693226-2530034364005098-6571637773511387247-n.jpg",
    alt: "Abstract art",
    name: "Farjana Ahamed Shuchona",
    designation: "UI/UX Designer",
  },
  {
    src: "https://i.ibb.co.com/qG6vvtQ/Frame-2147238452.png",
    alt: "Digital artwork",
    name: "Saiful Islam Fahim",
    designation: "LF Member & Backend Developer",
  },
  {
    src: "https://images.unsplash.com/photo-1755353985163-c2a0fe5ac3d8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Contemporary art",
    name: "Clara Lee",
    designation: "Visual Artist",
  },
  {
    src: "https://i.ibb.co.com/jBsYrqv/Frame-2147238448.png",
    alt: "Rafsan ",
    name: "David Brown",
    designation: "Pattern Designer",
  },
  {
    src: "https://i.ibb.co.com/FqzSsdfj/580512431-4116207195308135-3270780407261229590-n.jpg",
    alt: "Abstract art",
    name: "Asadur Rahaman Yead",
    designation: "Jr Frontend Developer",
  },
  // {
  //   src: "https://i.ibb.co.com/RTLhwdcY/Frame-2147238514-1.png",
  //   alt: "Hasibul Hasan Shanto",
  //   name: "Hasibul Hasan Shanto",
  //   designation: "LF Member & Flutter Developer",
  // },
  {
    src: "https://i.ibb.co.com/N2C3qLwJ/476160446-2158314191270526-2862639120188139429-n.jpg",
    alt: "Mostain",
    name: "Mostain Billah",
    designation: "Sr. UI/UX Designer",
  },

  {
    src: "https://i.ibb.co.com/Hfhw6ggV/asad.png",
    alt: "Asaduzzaman Mahfuz",
    name: "Asaduzzaman Mahfuz",
    designation: "Sr Ui/UX Designer",
  },
];
export default DEFAULT_IMAGES;

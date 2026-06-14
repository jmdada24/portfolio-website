export type CertificateItem = {
  slug: string;
  name: string;
  issuer: string;
  issuedOn: string;
  year: number;
  image?: string;
  imageAlt?: string;
  credentialId?: string;
  href?: string;
};

export const certificates: CertificateItem[] = [
  {
    slug: "its-certiport-database",
    name: "ITS Certiport Database",
    issuer: "Certiport",
    issuedOn: "2025",
    year: 2025,
    image:"/assets/images/certificates/itsdatabase.png",
    imageAlt: "ITS Certiport Database certificate preview",
    href: "/assets/files/itsdatabase.pdf",
  },
  {
    slug: "its-certiport-java",
    name: "ITS Certiport Java",
    issuer: "Certiport",
    issuedOn: "2024",
    year: 2024,
    image:"/assets/images/certificates/itsjava.png",
    imageAlt: "ITS Certiport Java certificate preview",
    href: "/assets/files/itsjava.pdf",
  },

];



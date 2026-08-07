/**
 * The full set of official client-logo assets in public/client-logos/,
 * deduplicated to one file per brand. Several brands had two exports in
 * the asset pack (a clean vector and a heavier raster-embedded re-export
 * of the same mark, e.g. avis-logo.svg vs avis-svg-1.svg) — this list picks
 * the cleaner one per brand rather than showing the same logo twice.
 */
export const clientLogos = [
  { name: "Attica Group", src: "/client-logos/Attica_group_logo_fnl.svg" },
  { name: "COSMOTE", src: "/client-logos/COSMOTE@2xGREY.png" },
  { name: "GRNET", src: "/client-logos/GRNET.png" },
  { name: "JTI", src: "/client-logos/JTI_Logo.svg" },
  { name: "Aegean Motorway", src: "/client-logos/aegean.svg" },
  { name: "AVIS", src: "/client-logos/avis-svg-1.svg" },
  { name: "EKT", src: "/client-logos/ekt-logo.svg" },
  { name: "Fysiko Aerio", src: "/client-logos/fisiko-aerio-logo.svg" },
  { name: "HHG", src: "/client-logos/hhg_logo-2.svg" },
  { name: "Information Society", src: "/client-logos/infosociety.png" },
  { name: "Ktimatologio", src: "/client-logos/ktimalogio-logo.svg" },
  { name: "Nea Odos", src: "/client-logos/neaodos.svg" },
  { name: "Transport for Athens", src: "/client-logos/oasa-logo.svg" },
  { name: "Vodafone", src: "/client-logos/vodafone-logo.svg" },
  { name: "Hygeia", src: "/client-logos/ygeia-logo_en.png" },
] as const;

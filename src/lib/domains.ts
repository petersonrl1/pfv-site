export type DomainSlug = "audio" | "slides" | "livestream";

export interface DomainMeta {
  slug: DomainSlug;
  title: string;
  blurb: string;
  newbie: string;
  primaryLabel: string;
  primaryHref: string;
  contact: string;
}

export const DOMAINS: Record<DomainSlug, DomainMeta> = {
  audio: {
    slug: "audio",
    title: "Audio",
    blurb:
      "The console, the stage boxes, wireless, and monitors. If it makes sound in the room, it is documented here.",
    newbie: "Read the SQ-6 Welcome and Console Zones sections, then shadow a service before you run one alone.",
    primaryLabel: "Open SQ-6 guide",
    primaryHref: "/av/audio/sq6/welcome",
    contact: "Booth lead",
  },
  slides: {
    slug: "slides",
    title: "Slides & Presentation",
    blurb: "ProPresenter, the booth machine, the displays, and the countdown timer that starts the service.",
    newbie: "Start with the service-day workflow — it covers the whole morning in order, from arriving to shutdown.",
    primaryLabel: "Open workflow",
    primaryHref: "/av/sops",
    contact: "Slides lead",
  },
  livestream: {
    slug: "livestream",
    title: "Livestream Video",
    blurb: "Cameras, the switcher, the Boxcast encoder, and how to tell whether the stream is actually up.",
    newbie: "Learn the go-live checklist first. Everything else is monitoring and recovery once the stream is up.",
    primaryLabel: "Open go-live checklist",
    primaryHref: "/av/sops",
    contact: "Stream lead",
  },
};

export const DOMAIN_SLUGS: DomainSlug[] = ["audio", "slides", "livestream"];

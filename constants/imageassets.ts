// Centralized static image and icon assets registry

export const IMAGES = {
  profile: "/profile.jpeg",
  bg1Texture: "/icons/bg1.avif",
  actionIcon: "/icons/icon.svg",
  youtubeThumbnail: "/icons/yt1.svg",
  resumePdf: "/Rakesh Choudhary - Full Stack Developer Resume.pdf",
} as const;

export const PROFILE_IMAGE = IMAGES.profile;
export const BG1_TEXTURE = IMAGES.bg1Texture;
export const ACTION_ICON = IMAGES.actionIcon;
export const YOUTUBE_THUMBNAIL = IMAGES.youtubeThumbnail;
export const RESUME_PDF = IMAGES.resumePdf;

export default IMAGES;

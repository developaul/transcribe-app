export const getAvatarFallbackName = (fullName: string) => {
  const words: string[] = fullName.split(" ");

  let initials: string = "";
  for (let i = 0; i < words.length; i++) {
    initials += words[i][0].toUpperCase();
  }

  return initials;
}
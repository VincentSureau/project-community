

export default function allowedUser(slug) {
  console.log(localStorage);
  if (localStorage.connect_token !== null) {
    const tokenDecoded = localStorage.connect_token;
    console.log(tokenDecoded);
    if ((tokenDecoded.slugProject === slug) || (tokenDecoded.slugProfile === slug)) {
      return true;
    }
  }
  return false;
}

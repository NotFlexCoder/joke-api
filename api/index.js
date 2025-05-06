export default async function handler(req, res) {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const joke = await response.json();
  res.status(200).json(joke);
}
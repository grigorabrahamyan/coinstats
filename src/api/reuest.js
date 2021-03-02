export async function sendRequest(url, abort) {
  const request = await fetch(`${process.env.REACT_APP_BASE_URL}${url}`, abort);
  const data = await request.json();
  return data;
};

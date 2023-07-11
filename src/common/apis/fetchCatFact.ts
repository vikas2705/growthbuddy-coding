const baseURL = "https://catfact.ninja/"

export const fetchCats = async () => {

    const url = `${baseURL}fact`;
    const res = await fetch(url);
    const jsonRes = await res.json();
    return jsonRes

}
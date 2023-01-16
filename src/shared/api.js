const BASE_URL = "https://psw-server.onrender.com/";
const PUBLIC_ID = 24920
const PRIVATE_ID = "nkimro";

export function GetHeroes(){
     return fetch(BASE_URL + "Users/" + PUBLIC_ID, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
}

export function GetFavorites() {
  return fetch(BASE_URL + "Users/" + PUBLIC_ID + "/top", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
}

export function UpdateHero(list) {
  return fetch(BASE_URL + "Users/" + PRIVATE_ID, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
}

export function UpdateFavorites(list) {
  return fetch(BASE_URL + "Users/" + PRIVATE_ID + "/top", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(list),
  }).then((response) => {
    if (response.status !== 200) {
      return [];
    }
    return response.json();
  });
}

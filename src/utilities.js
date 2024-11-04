import axios from "axios";

// export const fetchVillagers = async () => {
//   try {
//     const response = await axios.get("https://api.nookipedia.com/villagers", {
//       headers: {
//         "X-API-KEY": process.env.REACT_APP_API_KEY,
//         Accept: "application/json",
//       },
//     });
//     return response.data;
//   } catch (err) {
//     console.error("오류가 발생했습니다: ", err);
//   }
// };

export const speciesToKR = (species) => {
  const translations = {
    Alligator: "악어",
    Anteater: "개미핥기",
    Bear: "곰",
    "Bear cub": "꼬마곰",
    Bird: "새",
    Bull: "황소",
    Cat: "고양이",
    Cub: "새끼 곰",
    Chicken: "닭",
    Cow: "소",
    Deer: "사슴",
    Dog: "개",
    Duck: "오리",
    Eagle: "독수리",
    Elephant: "코끼리",
    Frog: "개구리",
    Goat: "염소",
    Gorilla: "고릴라",
    Hamster: "햄스터",
    Hippo: "하마",
    Horse: "말",
    Koala: "코알라",
    Kangaroo: "캥거루",
    Lion: "사자",
    Monkey: "원숭이",
    Mouse: "쥐",
    Octopus: "문어",
    Ostrich: "타조",
    Penguin: "펭귄",
    Pig: "돼지",
    Rabbit: "토끼",
    Rhinoceros: "코뿔소",
    Sheep: "양",
    Squirrel: "다람쥐",
    Tiger: "호랑이",
    Wolf: "늑대",
  };

  return translations[species] || species;
};

export const personalityToKR = (personality) => {
  const translations = {
    Jock: "운동광",
    Cranky: "무뚝뚝",
    Peppy: "아이돌",
    "Big Sister": "단순활발",
    Lazy: "먹보",
    Normal: "친절함",
    Snooty: "성숙함",
    Smug: "느끼함",
  };

  return translations[personality] || personality;
};

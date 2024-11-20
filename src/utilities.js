import { items } from "animal-crossing";
import axios from "axios";

const fetchVillagers = async () => {
  try {
    const response = await axios.get("https://api.nookipedia.com/villagers", {
      headers: {
        "X-API-KEY": process.env.REACT_APP_API_KEY,
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (err) {
    console.error("데이터 가져오는 중 오류: ", err);
  }
};

const getVillagerStandingImg = async (name) => {
  try {
    const villagers = await fetchVillagers();

    if (villagers) {
      const villager = villagers.find((v) => v.name === name);
      return villager ? villager.image_url : null;
    } else {
      console.error("주민 데이터를 가져오지 못했습니다.");
      return null;
    }
  } catch (err) {
    console.error("이미지 URL을 가져오는 중 오류가 발생했습니다: ", err);
    return null;
  }
};

const speciesToKR = (species) => {
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

const personalityToKR = (personality) => {
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

const creatureTypeToKR = (type) => {
  const translations = {
    Fish: "물고기",
    Insects: "곤충",
    "Sea Creatures": "해산물",
  };

  return translations[type] || type;
};

const catchAreaToKR = (area) => {
  const translations = {
    Sea: "바다",
    River: "강",
    Pier: "부두",
    Pond: "연못",
    "River (clifftop)": "강 (절벽 위)",
    "Sea (rainy days)": "강 (비오는 날)",
    "River (mouth)": "강 하구",
    "On trees (any kind)": "모든 나무",
    "Flying near flowers": "꽃 주위",
    "On rotten turnips or candy": "썩은 무 또는 사탕",
    "Shaking trees (hardwood or cedar only)": "나무 흔들기(활엽수 또는 칠엽수)",
    "Flying near water": "물 주위",
    "On the ground": "땅",
    "On palm trees": "야자수",
    "On hardwood/cedar trees": "활엽수 또는 칠엽수",
    "From hitting rocks": "바위 때리기",
    "On tree stumps": "나무 그루터기",
    Flying: "하늘",
    "On rivers/ponds": "강/연못 위",
    "Pushing snowballs": "눈덩이",
    "On villagers": "주민 위",
    "Flying near trash (boots, tires, cans, used fountain fireworks) or rotten turnips": "썩은 무 또는 쓰레기 주위",
    "Disguised on shoreline": "해변에 위장",
    "On flowers": "꽃 위",
    "Underground (dig where noise is loudest)": "땅 속",
    "Flying near light sources": "전등 주위",
    "On white flowers": "흰색 꽃 위",
    "Flying near blue/purple/black flowers": "파랑/보라/검은 꽃 주위",
    "On rocks/bushes": "바위/낮은 묘목",
    "Disguised under trees": "나무 밑에 위장",
    "Shaking trees": "나무 흔들기",
    "On beach rocks": "해변 바위",
  };

  return translations[area] || area;
};

const weatherToKR = (wather) => {
  const translations = {
    "Any weather": "모든 날씨",
    "Any except rain": "비가 오지 않는 날",
  };
};

const findKKMusic = (music) => {
  const findMusic = items.find((m) => m.name === music);
  return findMusic;
};

const itemTypeToKR = (type) => {
  const translations = {
    Accessories: "액세서리",
    Artwork: "예술품",
    Bags: "가방",
    Bottoms: "하의",
    "Ceiling Decor": "천장 장식",
    "Clothing Other": "기타 의류",
    "Dress-Up": "원피스",
    Fencing: "울타리",
    Floors: "바닥",
    Fossils: "화석",
    Gyroids: "토용",
    Headwear: "모자",
    Housewares: "가구",
    "Message Cards": "메시지 카드",
    Miscellaneous: "잡화",
    Music: "음악",
    Other: "기타",
    Photos: "사진",
    Posters: "포스터",
    Rugs: "러그",
    Shoes: "신발",
    Socks: "양말",
    "Tools/Goods": "도구/잡화",
    Tops: "상의",
    Umbrellas: "우산",
    "Wall-mounted": "벽걸이",
    Wallpaper: "벽지",
  };

  return translations[type] || type;
};

function difficultyToKR(difficulty) {
  const translations = {
    Easy: "쉬움",
    Hard: "어려움",
    Medium: "보통",
    "Very Easy": "매우 쉬움",
    "Very Hard": "매우 어려움",
  };

  return translations[difficulty] || difficulty;
}

export {
  getVillagerStandingImg,
  speciesToKR,
  personalityToKR,
  creatureTypeToKR,
  catchAreaToKR,
  findKKMusic,
  itemTypeToKR,
  difficultyToKR,
};

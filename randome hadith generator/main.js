const hadiths = [
    "Actions are judged by intentions, so each man will have what he intended. (Bukhari)",
    "He who believes in Allah and the Last Day should speak a good word or remain silent. (Bukhari)",
    "None of you truly believes until he loves for his brother what he loves for himself. (Bukhari)",
    "The best among you are those who are best to their wives. (Tirmidhi)",
    "Allah does not look at your figures, nor at your attire but He looks at your hearts and accomplishments. (Muslim)",
    "The strong man is not the good wrestler; the strong man is only the one who controls himself when he is angry. (Bukhari)",
    "The most beloved of places to Allah are the mosques, and the most hated of places to Allah are the markets. (Muslim)",
    "The best of charity is to give water to drink. (Ahmad)",
    "Do not waste water, even if you perform your ablution on the banks of an abundantly flowing river. (Ibn Majah)",
    "Part of someone’s being a good Muslim is leaving alone that which does not concern him. (Tirmidhi)",
    "The best of you are those who learn the Quran and teach it. (Bukhari)",
  "God has mercy on those who are merciful. Be merciful on the earth, and you will be shown mercy from Who is above the heavens. (Tirmidhi)",
  "The believer does not slander, curse, or speak in an obscene or foul manner. (Tirmidhi)",
  "Let him who believes in Allah and the Last Day either say good or keep silent, and let him who believes in Allah and the Last Day be generous to his neighbor, and let him who believes in Allah and the Last Day be generous to his guest. (Bukhari and Muslim)",
  "It is also charity to utter a good word. (Bukhari and Muslim)",
  "The most perfect believer in faith is the one whose character is finest and who is kindest to his wife. (Tirmidhi)",
  "Seeking knowledge is an obligation upon every Muslim. (Ibn Majah)",
  "Do not envy one another; do not inflate prices one to another; do not hate one another; do not turn away from one another; and do not undercut one another, but be you, O servants of Allah, brothers. (Muslim)",
  "The most beloved deed to Allah is the most regular and constant even if it were little. (Bukhari)",
  "Whoever does not thank the people has not thanked Allah. (Abu Dawud)"
  ];

const body= document.getElementsByTagName('body')[0];
function randomColor() {
    red = Math.round(Math.random()*255)
    
    green = Math.round(Math.random()*255)
    blue = Math.round(Math.random()*255)

    const color= `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = color

    element1= document.getElementById('random');
    element1.style.backgroundColor = color;
    
}

function generateHadith(){
    const index = Math.floor(Math.random() * hadiths.length);
    document.getElementById("hadith").innerHTML = hadiths[index];
    randomColor();
}
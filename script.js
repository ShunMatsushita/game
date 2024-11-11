// シナリオデータ
const storyData = {
    start: {
        text: "あなたは暗い森の中にいます。前方には二つの道があります。一つは左に続く道、もう一つは右に続く道です。どちらに進みますか？",
        choices: [
            { text: "左に進む", next: "leftPath" },
            { text: "右に進む", next: "rightPath" }
        ]
    },
    leftPath: {
        text: "左の道を進むと、小さな小屋が見えます。中に入りますか？",
        choices: [
            { text: "入る", next: "cabinInside" },
            { text: "戻る", next: "start" }
        ]
    },
    rightPath: {
        text: "右の道を進むと、大きな川にたどり着きます。どうしますか？",
        choices: [
            { text: "川を渡る", next: "crossRiver" },
            { text: "戻る", next: "start" }
        ]
    },
    cabinInside: {
        text: "小屋の中には古い宝箱があります。開けますか？",
        choices: [
            { text: "開ける", next: "treasure" },
            { text: "開けない", next: "leftPath" }
        ]
    },
    crossRiver: {
        text: "川を渡ろうとしましたが、流れが強く流されてしまいました。ゲームオーバー！",
        choices: [
            { text: "もう一度プレイ", next: "start" }
        ]
    },
    treasure: {
        text: "宝箱の中には大量の金貨が入っていました！あなたの勝利です！",
        choices: [
            { text: "もう一度プレイ", next: "start" }
        ]
    }
};

// ゲームの初期化
let currentScene = "start";

// テキストと選択肢を更新する関数
function updateScene() {
    const scene = storyData[currentScene];
    const storyText = document.getElementById("storyText");
    const choices = document.getElementById("choices");

    // テキストを更新
    storyText.textContent = scene.text;

    // 選択肢をクリア
    choices.innerHTML = "";

    // 選択肢のボタンを追加
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice.text;
        button.onclick = () => {
            currentScene = choice.next;
            updateScene();
        };
        choices.appendChild(button);
    });
}

// ゲーム開始
updateScene();

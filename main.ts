namespace SpriteKind {
    export const wall_25d = SpriteKind.create()
    export const map = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (プレイヤー向き == "北") {
        プレイヤー向き = "東"
    } else if (プレイヤー向き == "東") {
        プレイヤー向き = "南"
    } else if (プレイヤー向き == "南") {
        プレイヤー向き = "西"
    } else if (プレイヤー向き == "西") {
        プレイヤー向き = "北"
    }
    画面描画()
})
function ミニマップ初期化 () {
    ミニマップ画像 = image.create(25, 25)
    ミニマップ画像.fill(2)
}
function 位置計算 () {
    let m = {
    L0: { x: 0, y: 0 },
    L1: { x: 0, y: 0 },
    L2: { x: 0, y: 0 },
    L3: { x: 0, y: 0 },
    LL3: { x: 0, y: 0 },
    C1: { x: 0, y: 0 },
    C2: { x: 0, y: 0 },
    C3: { x: 0, y: 0 },
    R0: { x: 0, y: 0 },
    R1: { x: 0, y: 0 },
    R2: { x: 0, y: 0 },
    R3: { x: 0, y: 0 },
    RR3: { x: 0, y: 0 },
};
switch (プレイヤー向き) {
    case "東":
        m.R0 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 1 };
        m.R1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 1 };
        m.R2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 + 1 };
        m.R3 = { x: プレイヤーX座標 + 3, y: プレイヤーY座標 + 1 };
        m.RR3 = { x: プレイヤーX座標 + 3, y: プレイヤーY座標 + 2 };
        m.C1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 0 };
        m.C2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 + 0 };
        m.C3 = { x: プレイヤーX座標 + 3, y: プレイヤーY座標 + 0 };
        m.L0 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 1 };
        m.L1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 1 };
        m.L2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 - 1 };
        m.L3 = { x: プレイヤーX座標 + 3, y: プレイヤーY座標 - 1 };
        m.LL3 = { x: プレイヤーX座標 + 3, y: プレイヤーY座標 - 2 };
        break;
    case "西":
        m.R0 = { x: プレイヤーX座標 - 0, y: プレイヤーY座標 - 1 };
        m.R1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 1 };
        m.R2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 - 1 };
        m.R3 = { x: プレイヤーX座標 - 3, y: プレイヤーY座標 - 1 };
        m.RR3 = { x: プレイヤーX座標 - 3, y: プレイヤーY座標 - 2 };
        m.C1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 0 };
        m.C2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 + 0 };
        m.C3 = { x: プレイヤーX座標 - 3, y: プレイヤーY座標 + 0 };
        m.L0 = { x: プレイヤーX座標 - 0, y: プレイヤーY座標 + 1 };
        m.L1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 1 };
        m.L2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 + 1 };
        m.L3 = { x: プレイヤーX座標 - 3, y: プレイヤーY座標 + 1 };
        m.LL3 = { x: プレイヤーX座標 - 3, y: プレイヤーY座標 + 2 };
        break;
    case "北":
        m.R0 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 0 };
        m.R1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 1 };
        m.R2 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 2 };
        m.R3 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 3 };
        m.RR3 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 - 3 };
        m.C1 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 1 };
        m.C2 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 2 };
        m.C3 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 3 };
        m.L0 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 0 };
        m.L1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 1 };
        m.L2 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 2 };
        m.L3 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 3 };
        m.LL3 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 - 3 };
        break;
    case "南":
        m.R0 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 0 };
        m.R1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 1 };
        m.R2 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 2 };
        m.R3 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 3 };
        m.RR3 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 + 3 };
        m.C1 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 1 };
        m.C2 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 2 };
        m.C3 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 3 };
        m.L0 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 0 };
        m.L1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 1 };
        m.L2 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 2 };
        m.L3 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 3 };
        m.LL3 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 + 3 };
        break;
}
return m
}
function マップ (X座標: number, Y座標: number, 壁: string) {
    if (マップデータ.getPixel(X座標, Y座標) == 14) {
        return true
    }
    return false
}
function 壁クリア () {
    左左壁3.destroy()
    左壁3.destroy()
    左壁2.destroy()
    左壁1.destroy()
    左壁0.destroy()
    中壁3.destroy()
    中壁2.destroy()
    中壁1.destroy()
    右右壁3.destroy()
    右壁3.destroy()
    右壁2.destroy()
    右壁1.destroy()
    右壁0.destroy()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (プレイヤー向き == "北") {
        プレイヤーY座標 += 1
    } else if (プレイヤー向き == "西") {
        プレイヤーX座標 += 1
    } else if (プレイヤー向き == "南") {
        プレイヤーY座標 += -1
    } else if (プレイヤー向き == "東") {
        プレイヤーX座標 += -1
    }
    画面描画()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (プレイヤー向き == "北") {
        プレイヤー向き = "西"
    } else if (プレイヤー向き == "西") {
        プレイヤー向き = "南"
    } else if (プレイヤー向き == "南") {
        プレイヤー向き = "東"
    } else if (プレイヤー向き == "東") {
        プレイヤー向き = "北"
    }
    画面描画()
})
function ミニマップ描画 () {
    ミニマップ画像.fillRect(0, 0, 25, 25, 15)
    for (let カウンターY = 0; カウンターY <= 4; カウンターY++) {
        for (let カウンターX = 0; カウンターX <= 4; カウンターX++) {
            if (マップ(プレイヤーX座標 + (カウンターX - 2), プレイヤーY座標 + (カウンターY - 2), "壁")) {
                ミニマップ画像.fillRect(カウンターX * 5, カウンターY * 5, 5, 5, 13)
            }
        }
    }
    ミニマップ画像.fillRect(12, 10, 1, 5, 1)
    ミニマップ画像.fillRect(10, 12, 5, 1, 1)
    if (プレイヤー向き == "北") {
        ミニマップ画像.fillRect(11, 11, 3, 1, 1)
    } else if (プレイヤー向き == "東") {
        ミニマップ画像.fillRect(13, 11, 1, 3, 1)
    } else if (プレイヤー向き == "南") {
        ミニマップ画像.fillRect(11, 13, 3, 1, 1)
    } else if (プレイヤー向き == "西") {
        ミニマップ画像.fillRect(11, 11, 1, 3, 1)
    }
    ミニマップ画像.drawRect(0, 0, 25, 25, 6)
    ミニマップ = sprites.create(ミニマップ画像, SpriteKind.map)
    ミニマップ.setPosition(135, 20)
}
function 壁初期化 () {
    左左壁3 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁3 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁0 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    中壁3 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    中壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    中壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右右壁3 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁3 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁0 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
}
function 壁描画 () {
    n = 位置計算()
    if (マップ(n.LL3.x, n.LL3.y, "壁")) {
        左左壁3 = sprites.create(assets.image`leftLeftWall2`, SpriteKind.wall_25d)
    }
    if (マップ(n.RR3.x, n.RR3.y, "壁")) {
        右右壁3 = sprites.create(assets.image`rightRightWall3`, SpriteKind.wall_25d)
    }
    if (マップ(n.L3.x, n.L3.y, "壁")) {
        左壁3 = sprites.create(assets.image`leftWall3`, SpriteKind.wall_25d)
    }
    if (マップ(n.L2.x, n.L2.y, "壁")) {
        左壁2 = sprites.create(assets.image`leftWall2`, SpriteKind.wall_25d)
    }
    if (マップ(n.L1.x, n.L1.y, "壁")) {
        左壁1 = sprites.create(assets.image`leftWall1`, SpriteKind.wall_25d)
    }
    if (マップ(n.L0.x, n.L0.y, "壁")) {
        左壁0 = sprites.create(assets.image`leftWall0`, SpriteKind.wall_25d)
    }
    if (マップ(n.R3.x, n.R3.y, "壁")) {
        右壁3 = sprites.create(assets.image`rightWall3`, SpriteKind.wall_25d)
    }
    if (マップ(n.R2.x, n.R2.y, "壁")) {
        右壁2 = sprites.create(assets.image`rightWall2`, SpriteKind.wall_25d)
    }
    if (マップ(n.R1.x, n.R1.y, "壁")) {
        右壁1 = sprites.create(assets.image`rightWall1`, SpriteKind.wall_25d)
    }
    if (マップ(n.R0.x, n.R0.y, "壁")) {
        右壁0 = sprites.create(assets.image`rightWall0`, SpriteKind.wall_25d)
    }
    if (マップ(n.C3.x, n.C3.y, "壁")) {
        中壁3 = sprites.create(assets.image`centerWall3`, SpriteKind.wall_25d)
    }
    if (マップ(n.C2.x, n.C2.y, "壁")) {
        中壁2 = sprites.create(assets.image`centerWall2`, SpriteKind.wall_25d)
    }
    if (マップ(n.C1.x, n.C1.y, "壁")) {
        中壁1 = sprites.create(assets.image`centerWall1`, SpriteKind.wall_25d)
    }
}
function ミニマップクリア () {
    ミニマップ.destroy()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (プレイヤー向き == "北") {
        プレイヤーY座標 += -1
    } else if (プレイヤー向き == "西") {
        プレイヤーX座標 += -1
    } else if (プレイヤー向き == "南") {
        プレイヤーY座標 += 1
    } else if (プレイヤー向き == "東") {
        プレイヤーX座標 += 1
    }
    画面描画()
})
function 画面描画 () {
    壁クリア()
    壁描画()
    ミニマップ初期化()
    ミニマップ描画()
}
let ミニマップ: Sprite = null
let 右壁0: Sprite = null
let 右壁1: Sprite = null
let 右壁2: Sprite = null
let 右壁3: Sprite = null
let 右右壁3: Sprite = null
let 中壁1: Sprite = null
let 中壁2: Sprite = null
let 中壁3: Sprite = null
let 左壁0: Sprite = null
let 左壁1: Sprite = null
let 左壁2: Sprite = null
let 左壁3: Sprite = null
let 左左壁3: Sprite = null
let ミニマップ画像: Image = null
let マップデータ: Image = null
let プレイヤーY座標 = 0
let プレイヤーX座標 = 0
let プレイヤー向き = ""
scene.setBackgroundImage(assets.image`background1`)
プレイヤー向き = "南"
let n = {
    L0: { x: 0, y: 0 },
    L1: { x: 0, y: 0 },
    L2: { x: 0, y: 0 },
    L3: { x: 0, y: 0 },
    LL3: { x: 0, y: 0 },
    C1: { x: 0, y: 0 },
    C2: { x: 0, y: 0 },
    C3: { x: 0, y: 0 },
    R0: { x: 0, y: 0 },
    R1: { x: 0, y: 0 },
    R2: { x: 0, y: 0 },
    R3: { x: 0, y: 0 },
    RR3: { x: 0, y: 0 },
};
マップデータ = assets.image`マップ１`
プレイヤーX座標 = 1
プレイヤーY座標 = 1
プレイヤー向き = "南"
壁初期化()
画面描画()

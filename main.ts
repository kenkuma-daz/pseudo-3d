namespace SpriteKind {
    export const wall_25d = SpriteKind.create()
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
    壁クリア()
    画面描画()
})
function 位置計算 () {
    let m = {
    L0: { x: 0, y: 0 },
    L1: { x: 0, y: 0 },
    L2: { x: 0, y: 0 },
    C1: { x: 0, y: 0 },
    C2: { x: 0, y: 0 },
    R0: { x: 0, y: 0 },
    R1: { x: 0, y: 0 },
    R2: { x: 0, y: 0 },
};
switch (プレイヤー向き) {
    case "東":
        m.R0 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 1 };
        m.R1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 1 };
        m.R2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 + 1 };
        m.C1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 0 };
        m.C2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 + 0 };
        m.L0 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 1 };
        m.L1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 1 };
        m.L2 = { x: プレイヤーX座標 + 2, y: プレイヤーY座標 - 1 };
        break;
    case "西":
        m.R0 = { x: プレイヤーX座標 - 0, y: プレイヤーY座標 - 1 };
        m.R1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 1 };
        m.R2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 - 1 };
        m.C1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 0 };
        m.C2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 + 0 };
        m.L0 = { x: プレイヤーX座標 - 0, y: プレイヤーY座標 + 1 };
        m.L1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 1 };
        m.L2 = { x: プレイヤーX座標 - 2, y: プレイヤーY座標 + 1 };
        break;
    case "北":
        m.R0 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 0 };
        m.R1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 1 };
        m.R2 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 - 2 };
        m.C1 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 1 };
        m.C2 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 - 2 };
        m.L0 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 0 };
        m.L1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 1 };
        m.L2 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 - 2 };
        break;
    case "南":
        m.R0 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 0 };
        m.R1 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 1 };
        m.R2 = { x: プレイヤーX座標 - 1, y: プレイヤーY座標 + 2 };
        m.C1 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 1 };
        m.C2 = { x: プレイヤーX座標 + 0, y: プレイヤーY座標 + 2 };
        m.L0 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 0 };
        m.L1 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 1 };
        m.L2 = { x: プレイヤーX座標 + 1, y: プレイヤーY座標 + 2 };
        break;
}
return m
}
function 壁クリア () {
    左壁2.destroy()
    左壁1.destroy()
    左壁0.destroy()
    中壁2.destroy()
    中壁1.destroy()
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
    壁クリア()
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
    壁クリア()
    画面描画()
})
function 壁初期化 () {
    左壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    左壁0 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    中壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    中壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁2 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁1 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
    右壁0 = sprites.create(assets.image`emptyWall`, SpriteKind.wall_25d)
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
    壁クリア()
    画面描画()
})
function 画面描画 () {
    n = 位置計算()
    if (マップデータ.getPixel(n.L2.x, n.L2.y) == 14) {
        左壁2 = sprites.create(assets.image`baseWall0`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.L1.x, n.L1.y) == 14) {
        左壁1 = sprites.create(assets.image`leftWall1`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.L0.x, n.L0.y) == 14) {
        左壁0 = sprites.create(assets.image`leftWall0`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.R2.x, n.R2.y) == 14) {
        右壁2 = sprites.create(assets.image`rightWall2`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.R1.x, n.R1.y) == 14) {
        右壁1 = sprites.create(assets.image`rightWall1`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.R0.x, n.R0.y) == 14) {
        右壁0 = sprites.create(assets.image`rightWall0`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.C2.x, n.C2.y) == 14) {
        中壁2 = sprites.create(assets.image`centerWall2`, SpriteKind.wall_25d)
    }
    if (マップデータ.getPixel(n.C1.x, n.C1.y) == 14) {
        中壁1 = sprites.create(assets.image`centerWall1`, SpriteKind.wall_25d)
    }
}
let 右壁0: Sprite = null
let 右壁1: Sprite = null
let 右壁2: Sprite = null
let 中壁1: Sprite = null
let 中壁2: Sprite = null
let 左壁0: Sprite = null
let 左壁1: Sprite = null
let 左壁2: Sprite = null
let マップデータ: Image = null
let プレイヤー向き = ""
let n = {
    L0: { x: 0, y: 0 },
    L1: { x: 0, y: 0 },
    L2: { x: 0, y: 0 },
    C1: { x: 0, y: 0 },
    C2: { x: 0, y: 0 },
    R0: { x: 0, y: 0 },
    R1: { x: 0, y: 0 },
    R2: { x: 0, y: 0 },
};
壁初期化()
マップデータ = assets.image`マップ１`
let プレイヤーX座標 = 1
let プレイヤーY座標 = 1
プレイヤー向き = "南"
画面描画()

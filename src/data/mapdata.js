var GridType = {
    "unuse":0,
    "normal":1,
    "buff":2,
    "appoint":3,
    "purify": 4
}

var ShikikamiMap ={
    "桃花妖" :200,
    "雪女" :201,
    "三尾狐" :202,
    "灯笼鬼" :203,
    "小白" :204,
    "座敷童子" :205,
    "鲤鱼精" :206,
    "九命猫" :207,
    "狸猫" :208,
    "河童" :209,
    "鬼使白" :210,
    "鬼使黑" :211,
    "童男" :212,
    "童女" :213,
    "饿鬼" :214,
    "孟婆" :215,
    "巫蛊师" :216,
    "大天狗" :217,
    "鸦天狗" :218,
    "酒吞童子" :219,
    "犬神" :220,
    "食发鬼" :221,
    "武士之灵" :222,
    "骨女" :223,
    "雨女" :224,
    "跳跳弟弟" :225,
    "跳跳妹妹" :226,
    "兵俑" :227,
    "丑时之女" :228,
    "独眼小僧" :230,
    "鬼女红叶" :231,
    "铁鼠" :232,
    "跳跳哥哥" :233,
    "椒图" :234,
    "管狐" :236,
    "山兔" :237,
    "莹草" :238,
    "蝴蝶精" :241,
    "傀儡师" :242,
    "山童" :243,
    "首无" :244,
    "提灯小僧" :245,
    "赤舌" :246,
    "海坊主" :247,
    "荒川之主" :248,
    "觉" :249,
    "青蛙瓷器" :250,
    "判官" :251,
    "凤凰火" :252,
    "吸血姬" :253,
    "妖狐" :254,
    "阎魔" :255,
    "妖琴" :256,
    "食梦貘" :257,
    "两面佛" :258,
    "小鹿男" :259,
    "清姬" :260,
    "镰鼬" :261,
    "姑获鸟" :262,
    "二口女" :263,
    "白狼" :264,
    "茨木童子" :265,
    "青行灯" :266,
    "樱花妖" :267,
    "惠比寿" :268,
    "妖刀姬" :269,
    "络新妇" :270,
    "般若" :271,
    "一目连" :272,
    "青坊主" :273,
    "古笼火" :274,
    "万年竹" :275,
    "夜叉" :276,
    "黑童子" :277,
    "白童子" :278,
    "花鸟卷" :279,
    "辉夜姬" :280,
    "烟烟罗" :281,
    "金鱼姬" :282,
    "荒" :283,
    // "荒" :284,
    "鸩" :285,
    "以津真天" :286,
    "匣中少女" :287,
    "彼岸花" :288,
    "兔丸" :289,
    "小松丸" :290,
    "书翁" :291,
    "雪童子" :292,
    "百目鬼" :293,
    "奴良陆生" :294,
    "追月神" :295,
    "山风" :296,
    "日和坊" :297,
    "薰" :298,
    "小纸人" :299,
    "玉藻前" :300,
    "数珠" :301,
    "小袖之手" :302,
    "弈" :303,
    "御馔津" :304,
    "卖药郎" :305,
    "虫师" :306,
    "猫掌柜" :307,
    "鬼灯" :308,
    "阿香" :309,
    "蜜桃" :310,
    "面灵气" :311,
    "鬼切" :312,
    "犬夜叉" :313,
    "杀生丸" :314,
    "少羽大天狗" :315,
    "白藏主" :316,
    "人面树" :317,
    "於菊虫" :318,
    "桔梗" :319,
    "一反木绵" :320,
    "入殓师" :321,
    "炼狱茨木童子" :322,
    "天井下" :323,
    "化鲸" :324,
    "八岐大蛇" :325,
    "稻荷神御馔津" :326,
    "苍风一目连" :327,
    "赤影妖刀姬" :328,
    "海忍" :329,
    "不知火" :330,
    "御怨般若" :331,
    "久次良" :332,
    "大岳丸" :333,
    "骁浪荒川之主" :334,
    "蟹姬" :335,
    "朽木露琪亚" :336,
    "黑崎一护" :337,
    "泷夜叉姬" :338,
    "烬天玉藻前" :339,
    "纸舞" :340,
    "鬼王酒吞童子" :341,
    "星熊童子" :342,
    "天剑韧心鬼切" :343,
    "海国小怪" :990,
    "天邪鬼黄" :991,
}
var Buff = {
    "onmyoji":{
        "七角山阵力":{
            desc:'每3回合触发一次,在阴阳师的回合结束后,使友方全体增加25%行动条并恢复状态,可在行动前治疗生命上限3%的生命,持续1回合.'
        },
        "逢魔之原阵力":{
            desc:"战斗开始时,使鬼火增加至上限.任一友方的回合开始时,有50%概率获得1点鬼火."
        },
        "大江山阵力":{
            desc:"战斗开始时,使鬼火增加至上限.战斗时,友方全体获得11%吸血,20%减伤."
        },
        "荒川之力":{
            desc:"80%概率协战,回合开始时,提升17%暴击率,25%攻击,上限6层,直到战斗结束."
        },
        "黑夜山阵力":{
            desc:"战斗开始时,使敌方全体降低25%效果抵抗,90防御,直到战斗结束."
        }
    },
    "shikikami": {
        "山风的祝福":{
            desc:"造成伤害时,目标生命比例每降低1%,提升1%伤害.",
        },
        "薰的祝福":{
            desc:"回合结束时,对友方全体各驱散1个减益状态或是控制效果."
        },
        "小鹿男的祝福":{
            desc:"每当敌方消耗鬼火时,使友方全体增加15%行动条."
        },
        "小松丸的祝福":{
            desc:"受到伤害时,若自身未处于无法动作,则有30%概率免疫伤害,并为攻击者附加1层5%易伤,上限50层,持续直到战斗结束.单次攻击内最多触发1次."
        },
        "一目连的祝福":{
            desc:"战斗开始时,友方全体获得风神庇护,提升15%攻击,持续直到战斗结束.拥有风神庇护的友方死亡时,若仍有其他友方存活,则其牺牲风神庇护来免疫该次死亡,并恢复至50%生命值."
        },
        "雪童子的祝福":{
            desc:"战斗开始时,呼唤暴风雪攻击敌方全体3次,每次造成攻击45%伤害,并将其冰冻3回合.",
        },
        "百目鬼的祝福":{
            desc:"任一友方受到伤害时，有25%概率削减伤害者1点鬼火，单次攻击内最多触发1次。",
        },
        "胧车的祝福":{
            desc:"战斗开始时，使友方全体提升125点速度，持续3回合",
        },
        "酒吞童子的祝福":{
            desc:"提升30%普攻伤害",
        },
        "茨木童子的祝福":{
            desc:"自身技能造成单体伤害时，额外对其他敌方造成真实伤害，伤害量等同该次伤害的50%。",
        },
        "星熊童子的祝福":{
            desc:"回合结束后，对敌方全体造成攻击132%伤古并有25%基础概率使共混乱1回合。每3回合触发一次。",
        },
        "鬼切的祝福":{
            desc:"提升50%攻击，消耗鬼火时，每消耗1点鬼火，对自身造成当前生命6%的伤害。",
        },
        "椒图的祝福":{
            desc:"战斗开始时，友方全体获得75%减伤，持续3回合。",
        },
        "河童的祝福":{
            desc:"回合结束时，获得1层祝福，每层提升55%防御及15%暴击伤害，上限10层， 直到战斗伤害，上限10层， 直到战斗结束。",
        },
        "惠比寿的祝福":{
            desc:"受到攻击时，有33%概率回复1点鬼火",
        },
        "鲤鱼精的祝福":{
            desc:"回合结束后，使自身和另一名生命比例最低的友方获得护盾，能吸收12%生命上限的伤害及50%反伤，持续1回合。",
        },
        "大天狗的祝福":{
            desc:"战斗开始及回合结来时获得庇护，庇护可抵挡单次技能当中的所有控制效果。回合开始时，失去庇护，获得雄姿英发，提升15%攻击、10%暴击伤害，直到回合结束。",
        },
        "食发鬼的祝福":{
            desc:"攻击时，若目标带有控制效果，提升100%伤害。",
        },
        "烟烟罗的祝福":{
            desc:"免疫控制效果。附加负面状态时，无视20%总效果抵抗。",
        },
        "玉藻前的祝福":{
            desc:"回合结束后，爆发力量攻击敌方全体，造成攻击132%伤害。每2回合触发一次。",
        },
        "姑获鸟的祝福":{
            desc:"33%概率协战。",
        },
        "妖刀姬的祝福":{
            desc:"造成伤害时，30%概率对目标造成其生命上限10%伤害，最高不超过攻击160%。",
        },

    }
}
var MapData = [
    {
        index: 0,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 1,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 2,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward: {
            token:100
        },
        boss:"人面树"
    },
    {
        index: 3,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward: {
            token:100
        },
        boss:"铁鼠"
    },
    {
        index: 4,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward: {
            token:100
        },
        boss:"樱花妖"
    },
    {
        index: 5,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward: {
            blessing:"山风的祝福"
        },
        boss: "二口女",
    },
    {
        index: 6,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "精锐",
            "指挥"
        ],
        reward: {
            token:100
        }
    },
    {
        index: 7,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward: {
            token:100
        },
        boss:"白狼"
    },
    {
        index: 8,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward: {
            token:100
        },
        boss:"吸血姬"
    },
    {
        index: 9,
        typeint: 4,
        skill: [],
        reward: {
            token:100
        }
    },
    {
        index: 10,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward: {
            token:100
        },
        boss:"铁鼠"
    },
    {
        index: 11,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward: {
            token:100
        },
        boss:"姑获鸟"
    },
    {
        index: 12,
        typeint: 3,
        skill: [
            "重装",
            "死士",
            "狙击"
        ],
        reward: {
            token:100
        }
    },
    {
        index: 13,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 14,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 15,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 16,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 17,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"鬼使黑"
    },
    {
        index: 18,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 19,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "死士",
            "指挥"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 20,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 21,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 22,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 23,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "死士",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 24,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"吸血姬"
    },
    {
        index: 25,
        typeint: 4,
		special:1,
        skill: [],
        reward: {supply:30}
    },
    {
        index: 26,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 27,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 28,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 29,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 30,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 31,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 32,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {
            token:100
        },
        boss:"河童"
    },
    {
        index: 33,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {
            token:200,
            coin:3000
        },
        boss:"入殓师"
    },
    {
        index: 34,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 35,
        typeint: 4,
        skill: [],
        reward: {
            token:100
        }
    },
    {
        index: 36,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 37,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {
            token:100
        },
        boss:"跳跳弟弟"
    },
    {
        index: 38,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"黑童子"
    },
    {
        index: 39,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 40,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻",
            "浪潮囹圄",
            "觅能一击"
        ],
        reward: {
            blessing:"七角山阵力"
        },
        boss:"骑海马的海国术士"
    },
    {
        index: 41,
        typeint: 4,
        skill: [],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 42,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 43,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward:{token:200,coin:3000},
        boss:"铁鼠"
    },
    {
        index: 44,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "精锐",
            "指挥"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 45,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 46,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 47,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 48,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 49,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 50,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 51,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "妖术",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 52,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:100},
        boss:"巫蛊师"
    },
    {
        index: 53,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 54,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"跳跳哥哥"
    },
    {
        index: 55,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 56,
        typeint: 3,
        skill: [
            "刺杀",
            "死士"
        ],
        reward:{token:100},
    },
    {
        index: 57,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 58,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
            "狙击"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
    },
    {
        index: 59,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:200,coin:3000},
        boss:"跳跳哥哥"
    },
    {
        index: 60,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 61,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward: {
            enhance:true,
        },
        boss:"巫蛊师"
    },
    {
        index: 62,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"吸血姬"
    },
    {
        index: 63,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 64,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 65,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"樱花妖"
    },
    {
        index: 66,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"吸血姬"
    },
    {
        index: 67,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward: {
            token:100
        },
        boss:"人面树"
    },
    {
        index: 68,
        typeint: 4,
		special:1,
        skill: [],
        reward: {
            blessing:"小松丸的祝福"
        }
    },
    {
        index: 69,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 70,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 71,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 72,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 73,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 74,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 75,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward: {
            blessing:"薰的祝福"
        },
        boss:"跳跳哥哥"
    },
    {
        index: 76,
        typeint: 3,
        skill: [
            "重装",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 77,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 78,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 79,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 80,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 81,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"跳跳弟弟"
    },
    {
        index: 82,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 83,
        typeint: 3,
		special:1,
        skill: [
            "重装",
            "刺杀",
            "精锐"
        ],
        reward: {
            blessing:"胧车的祝福"
        }
    },
    {
        index: 84,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 85,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "棒球炸弹"
        ],
        reward:{token:200,coin:3000},
        boss:"觉"
    },
    {
        index: 86,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 87,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {
            enhance:true
        },
        boss:"跳跳弟弟"
    },
    {
        index: 88,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 89,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 90,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 91,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:200,coin:3000},
        boss:"白狼"
    },
    {
        index: 92,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"兵俑"
    },
    {
        index: 93,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"跳跳哥哥"
    },
    {
        index: 94,
        typeint: 3,
        skill: [
            "重装",
            "死士"
        ],
        reward:{token:100},
    },
    {
        index: 95,
        typeint: 3,
        skill: [
            "重装",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 96,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 97,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵"
        ],
        reward:{token:100},
        boss:"天邪鬼黄"
    },
    {
        index: 98,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "棒球炸弹"
        ],
        reward:{token:100},
        boss:"觉"
    },
    {
        index: 99,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 100,
        typeint: 3,
        skill: [
            "刺杀",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 101,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 102,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 103,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影",
        ],
        reward:{token:100},
        boss:"樱花妖"
    },
    {
        index: 104,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影",
        ],
        reward:{token:200,coin:3000},
        boss:"雨女"
    },
    {
        index: 105,
        typeint: 3,
        skill: [
            "大军",
            "妖术"
        ],
        reward:{token:100},
    },
    {
        index: 106,
        typeint: 3,
        skill: [
            "重装",
            "死士",
            "精锐"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 107,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 108,
        typeint: 3,
        skill: [
            "大军",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 109,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 110,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward: {
            blessing:"百目鬼的祝福"
        },
        boss:"数珠"
    },
    {
        index: 111,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward: {
            enhance:true
        },
        boss:"跳跳哥哥"
    },
    {
        index: 112,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 113,
        typeint: 1,
        unuse: true,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:200,coin:3000},
        boss:"夜叉"
    },
    {
        index: 114,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 115,
        typeint: 3,
        skill: [
            "重装",
            "妖术",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 116,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 117,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 118,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"夜叉"
    },
    {
        index: 119,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 120,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 121,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 122,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:200,coin:3000},
        boss:"巫蛊师"
    },
    {
        index: 123,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 124,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 125,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵",
        ],
        reward: {
            blessing:"小鹿男的祝福",
        },
        boss:"天邪鬼黄"
    },
    {
        index: 126,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 127,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵",
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"天邪鬼黄"
    },
    {
        index: 128,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 129,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 130,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"河童"
    },
    {
        index: 131,
        typeint: 3,
        skill: [
            "刺杀",
            "妖术",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 132,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 133,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 134,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"兵俑"
    },
    {
        index: 135,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 136,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵",
        ],
        reward:{token:100},
        boss:"天邪鬼黄"
    },
    {
        index: 137,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 138,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 139,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 140,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward:{token:200,coin:3000},
        boss:"铁鼠"
    },
    {
        index: 141,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 142,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 143,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 144,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 145,
        typeint: 3,
        skill: [
            "刺杀",
            "狂暴",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 146,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"夜叉"
    },
    {
        index: 147,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯",
            "钱财护我",
            "财大气粗",
            "守护",
            "嫉恨之心"
        ],
        reward: {
            blessing:"逢魔之原阵力"
        },
        boss:"财主海妖"
    },
    {
        index: 148,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 149,
        typeint: 3,
        skill: [
            "狂暴",
            "妖术"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 150,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 151,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 152,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 153,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 154,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 155,
        typeint: 4,
        skill: [],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 156,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"天邪鬼黄"
    },
    {
        index: 157,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"兵俑"
    },
    {
        index: 158,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 159,
        typeint: 41,
        skill: [],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 160,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward: {
            blessing:"一目连的祝福"
        },
        boss:"赤舌"
    },
    {
        index: 161,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward: {
            enhance:true
        },
        boss:"赤舌"
    },
    {
        index: 162,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 163,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 164,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 165,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:200,coin:3000},
        boss:"跳跳哥哥"
    },
    {
        index: 166,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {
            token: 200,
            coin: 3000,
        },
        boss:"入殓师"
    },
    {
        index: 167,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
            "指挥"
        ],
        reward: {
            token:100,
        }
    },
    {
        index: 168,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 169,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 170,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 171,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 172,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "棒球炸弹"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"觉"
    },
    {
        index: 173,
        typeint: 3,
        skill: [
            "重装",
            "大军",
            "精锐",
            "指挥"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 174,
        typeint: 3,
        skill: [
            "重装",
            "大军",
            "妖术",
            "狙击"
        ],
        reward: {supply:30}
    },
    {
        index: 175,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 176,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 177,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 178,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"人面树"
    },
    {
        index: 179,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward: {supply:30},
        boss:"兵俑"
    },
    {
        index: 180,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 181,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 182,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 183,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 184,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 185,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 186,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "妖术",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 187,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 188,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 189,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:200,coin:3000},
        boss:"跳跳哥哥"
    },
    {
        index: 190,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 191,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:200,coin:3000},
        boss:"入殓师"
    },
    {
        index: 192,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"夜叉"
    },
    {
        index: 193,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{supply:30},
        boss:"黑童子"
    },
    {
        index: 194,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "狙击"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 195,
        typeint: 1,
        skill:[
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{
            token: 100,
        },
        boss:"弈"
    },
    {
        index: 196,
        typeint: 999,
        skill: [],
        reward: {}
    },
    {
        index: 197,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 198,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 199,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward: {supply:30},
        boss:"白狼"
    },
    {
        index: 200,
        typeint: 1,
        unuse: true,
        skill: [
            "海国之军",
            "海国壳甲",
            "棒球炸弹"
        ],
        reward:{token:200,coin:3000},
        boss:"觉"
    },
    {
        index: 201,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"跳跳弟弟"
    },
    {
        index: 202,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "妖术",
            "精锐"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 203,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 204,
        typeint: 3,
        skill: [
            "刺杀",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 205,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"薰"
    },
    {
        index: 206,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 207,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"吸血姬"
    },
    {
        index: 208,
        typeint:31,
        skill: [
            "重装",
            "狂暴",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 209,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 210,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"吸血姬"
    },
    {
        index: 211,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 212,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward: {
            blessing:"鬼切的祝福",
        },
        boss:"黑童子"
    },
    {
        index: 213,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:200,coin:3000},
        boss:"弈"
    },
    {
        index: 214,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 215,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 216,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 217,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 218,
        typeint: 3,
		special:1,
        skill: [
            "大军",
            "刺杀",
            "精锐"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
    },
    {
        index: 219,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 220,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 221,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 222,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 223,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 224,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 225,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 226,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 227,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 228,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 229,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:200,coin:3000},
        boss:"犬神"
    },
    {
        index: 230,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"跳跳弟弟"
    },
    {
        index: 231,
        typeint: 1,
        unuse: true,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"人面树"
    },
    {
        index: 232,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 233,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"入殓师"
    },
    {
        index: 234,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:200,coin:3000},
        boss:"姑获鸟"
    },
    {
        index: 235,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"入殓师"
    },
    {
        index: 236,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 237,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 238,
        typeint: 3,
        skill: [
            "重装",
            "大军",
            "死士",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 239,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 240,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 241,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"樱花妖"
    },
    {
        index: 242,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 243,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 244,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "棒球炸弹"
        ],
        reward:{token:100},
        boss:"觉"
    },
    {
        index: 245,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 246,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 247,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 248,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 249,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 250,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 251,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 252,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 253,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 254,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 255,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 256,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 257,
        typeint: 1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 258,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 259,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 260,
        typeint: 999,
        skill: [],
        reward: {}
    },
    {
        index: 261,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 262,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "精锐",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 263,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:200,coin:3000},
        boss:"姑获鸟"
    },
    {
        index: 264,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 265,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 266,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {
            blessing:"雪童子的祝福"
        },
        boss:"河童"
    },
    {
        index: 267,
        typeint: 3,
        skill: [
            "重装",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 268,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"樱花妖"
    },
    {
        index: 269,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 270,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 271,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"兵俑"
    },
    {
        index: 272,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 273,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"兵俑"
    },
    {
        index: 274,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{
            enhance: true,
        },
        boss:"二口女"
    },
    {
        index: 275,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:200,coin:3000},
        boss:"樱花妖"
    },
    {
        index: 276,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:100},
        boss:"白狼"
    },
    {
        index: 277,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 278,
        typeint: 3,
		special:1,
        skill: [
            "大军",
            "刺杀",
            "妖术",
            "狙击"
        ],
        reward: {
            blessing:"茨木童子的祝福"
        }
    },
    {
        index: 279,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 280,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 281,
        typeint: 0,
        skill: [],
        reward: {}
    },
    {
        index: 282,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 283,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 284,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 285,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 286,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 287,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 288,
        typeint: 1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 289,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 290,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 291,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 292,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 293,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "死士",
            "狙击"
        ],
        reward: {supply:30}
    },
    {
        index: 294,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 295,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 296,
        typeint: 1,
        unuse: true,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 297,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 298,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 299,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 300,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 301,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward: {
            blessing:"酒吞童子的祝福"
        },
        boss:"姑获鸟"
    },
    {
        index: 302,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
            "狙击"
        ],
        reward:{token:100},

    },
    {
        index: 303,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 304,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:100},
        boss:"巫蛊师"
    },
    {
        index: 305,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 306,
        typeint: 1,
        unuse: true,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"人面树"
    },
    {
        index: 307,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 308,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"人面树"
    },
    {
        index: 309,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 310,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 311,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 312,
        typeint: 1,
		special:1,
        skill: [],
        reward: {}
    },
    {
        index: 313,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 314,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 315,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 316,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 317,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 318,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 319,
        typeint: 1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 320,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 321,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 322,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 323,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 324,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 325,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 326,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 327,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 328,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 329,
        typeint: 3,
        skill: [
            "刺杀",
            "指挥"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 330,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 331,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 332,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 333,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
        ],
        reward: {
            blessing:"大江山阵力"
        },
        boss:"敲鼓的女海妖"
    },
    {
        index: 334,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 335,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 336,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 337,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 338,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"人面树"
    },
    {
        index: 339,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 340,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 341,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 342,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 343,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 344,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 345,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 346,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 347,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 348,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 349,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 350,
        typeint: 1,
		special:1,
        skill: [],
        reward: {}
    },
    {
        index: 351,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 352,
        typeint: 999,
        skill: [],
        reward: {}
    },
    {
        index: 353,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:100},
        boss:"白狼"
    },
    {
        index: 354,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 355,
        typeint: 3,
        skill: [
            "重装",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 356,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward: {
            blessing:"河童的祝福"
        },
        boss:"樱花妖"
    },
    {
        index: 357,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 358,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"夜叉"
    },
    {
        index: 359,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward: {supply:30},
        boss:"跳跳弟弟"
    },
    {
        index: 360,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 361,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"巫蛊师"
    },
    {
        index: 362,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 363,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 364,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 365,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"    
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 366,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {
            enhance:true
        },
        boss:"薰"
    },
    {
        index: 367,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 368,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 369,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 370,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 371,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 372,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 373,
        typeint: 1,
		special:1,
        skill: [],
        reward: {
            blessing:'妖刀姬的祝福'
        }
    },
    {
        index: 374,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 375,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 376,
        typeint: 1,
		special:1,
        skill: [],
        reward: {},
        boss:"久次良"
    },
    {
        index: 377,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 378,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 379,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 380,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 381,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 382,
        typeint: 3,
		special:1,
        skill: [
            "大军",
            "死士",
            "精锐"
        ],
        reward: {
            blessing:"椒图的祝福"
        }
    },
    {
        index: 383,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 384,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 385,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"跳跳弟弟"
    },
    {
        index: 386,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 387,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 388,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 389,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "精锐"
        ],
        reward:{token:200,coin:3000},

    },
    {
        index: 390,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 391,
        typeint: 3,
        skill: [
            "大军",
            "精锐"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 392,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"薰"
    },
    {
        index: 393,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:200,coin:3000},
        boss:"樱花妖"
    },
    {
        index: 394,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 395,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward:{token:100},
        boss:"铁鼠"
    },
    {
        index: 396,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 397,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"人面树"
    },
    {
        index: 398,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 399,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 400,
        typeint: 1,
		special:1,
        skill: [],
        reward: {}
    },
    {
        index: 401,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 402,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 403,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 404,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 405,
        typeint: 1,
		special:1,
        skill: [],
        reward: {},
        boss:"蟹姬"
    },
    {
        index: 406,
        typeint: 1,
		special:1,
        skill: [],
        reward: {
            blessing:"决战"
        },
        boss:"大岳丸"
    },
    {
        index: 407,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 408,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 409,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 410,
        typeint: 1,
		special:1,
        skill: [],
        reward: {}
    },
    {
        index: 411,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 412,
        typeint: 4,
        skill: [],
        reward: {supply:30}
    },
    {
        index: 413,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "指挥"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 414,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 415,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {
            enhance:true
        },
        boss:"黑童子"
    },
    {
        index: 416,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 417,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "精锐",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 418,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:100},
        boss:"白狼"
    },
    {
        index: 419,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"兵俑"
    },
    {
        index: 420,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 421,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 422,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:'入殓师'
    },
    {
        index: 423,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward: {
            blessing: "星熊童子的祝福",
        },
        boss:"纸舞"
    },
    {
        index: 424,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 425,
        typeint: 3,
        skill: [
            "重装",
            "妖术",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 426,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
            "精锐"
        ],
        reward:{token:100},
    },
    {
        index: 427,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward: {supply:30},
        boss:"人面树"
    },
    {
        index: 428,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 429,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 430,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 431,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 432,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 433,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 434,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 435,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 436,
        typeint: 1,
		special:1,
        skill: [],
        reward: {},
        boss:"海国小怪"
    },
    {
        index: 437,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 438,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 439,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 440,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 441,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 442,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 443,
        typeint: 3,
        skill: [
            "重装",
            "狂暴"
        ],
        reward:{token:100},
    },
    {
        index: 444,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 445,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward: {supply:30},
        boss:"薰"
    },
    {
        index: 446,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward:{token:100},
        boss:"铁鼠"
    },
    {
        index: 447,
        typeint: 3,
        skill: [
            "刺杀",
            "死士",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 448,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {
            blessing:"惠比寿的祝福"
        },
        boss:"入殓师"
    },
    {
        index: 449,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 450,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 451,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "妖术",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 452,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "妖术",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 453,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:200,coin:3000},
        boss:"姑获鸟"
    },
    {
        index: 454,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 455,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 456,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 457,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 458,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 459,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 460,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 461,
        typeint: 1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 462,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 463,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 464,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 465,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 466,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 467,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 468,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 469,
        typeint: 1,
		special:1,
        skill: [],
        reward: {
            blessing: "玉藻前的祝福"
        }
    },
    {
        index: 470,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 471,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 472,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 473,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"河童"
    },
    {
        index: 474,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 475,
        typeint: 3,
        skill: [
            "重装",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 476,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 477,
        typeint: 4,
        skill: [],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 478,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"入殓师"
    },
    {
        index: 479,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"天邪鬼黄"
    },
    {
        index: 480,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 481,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "精锐",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 482,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 483,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 484,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"吸血姬"
    },
    {
        index: 485,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 486,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 487,
        typeint: 999,
        skill: [],
        reward: {}
    },
    {
        index: 488,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 489,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 490,
        typeint: 1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 491,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 492,
        typeint: 1,
		special:1,
        skill: [],
        reward: {
            blessing:"姑获鸟的祝福"
        }
    },
    {
        index: 493,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 494,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 495,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 496,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 497,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 498,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 499,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 500,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 501,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 502,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:200,coin:3000},
        boss:"姑获鸟"
    },
    {
        index: 503,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward: {
            blessing:"鲤鱼精的祝福"
        },
        boss:"姑获鸟"
    },
    {
        index: 504,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:200,coin:3000},
        boss:"赤舌"
    },
    {
        index: 505,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 506,
        typeint: 3,
        skill: [
            "大军",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 507,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 508,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"兵俑"
    },
    {
        index: 509,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:100},
        boss:"巫蛊师"
    },
    {
        index: 510,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 511,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"薰"
    },
    {
        index: 512,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"铁鼠"
    },
    {
        index: 513,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 514,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 515,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 516,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"入殓师"
    },
    {
        index: 517,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 518,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 519,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 520,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 521,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 522,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 523,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 524,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 525,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 526,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 527,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 528,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 529,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 530,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 531,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 532,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 533,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"纸舞"
    },
    {
        index: 534,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 535,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 536,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "精锐",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 537,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 538,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"姑获鸟"
    },
    {
        index: 539,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 540,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 541,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 542,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 543,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 544,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 545,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 546,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 547,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 548,
        typeint: 999,
        skill: [],
        reward: {}
    },
    {
        index: 549,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 550,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 551,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 552,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 553,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 554,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 555,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 556,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 557,
        typeint: 1,
		special:1,
        skill: [],
        reward: {}
    },
    {
        index: 558,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 559,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 560,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 561,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 562,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 563,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:200,coin:3000},
        boss:"白狼"
    },
    {
        index: 564,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:200,coin:3000},
        boss:"夜叉"
    },
    {
        index: 565,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:'二口女'
    },
    {
        index: 566,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵",
            "钳鳌重击",
            "觅能一击"
        ],
        reward: {
            blessing:"荒川之力"
        },
        boss:"拿棒子的海妖"
    },
    {
        index: 567,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "妖术",
            "狙击"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 568,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:200,coin:3000},
        boss:"雨女"
    },
    {
        index: 569,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"河童"
    },
    {
        index: 570,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 571,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 572,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 573,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward: {supply:30},
        boss:"姑获鸟"
    },
    {
        index: 574,
        typeint: 3,
        skill: [
            "重装",
            "妖术",
            "指挥"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 575,
        typeint: 5,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 576,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"入殓师"
    },
    {
        index: 577,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 578,
        typeint: 3,
        skill: [
            "重装",
            "死士",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 579,
        typeint: 4,
        skill: [],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 580,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 581,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 582,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 583,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 584,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 585,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 586,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 587,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 588,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 589,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 590,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 591,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 592,
        typeint: 3,
		special:1,
        skill: [
            "刺杀",
            "精锐",
            "指挥"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
    },
    {
        index: 593,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"跳跳弟弟"
    },
    {
        index: 594,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 595,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 596,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"河童"
    },
    {
        index: 597,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"纸舞"
    },
    {
        index: 598,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 599,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 600,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 601,
        typeint: 3,
        skill: [
            "重装",
            "死士",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 602,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 603,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:200,coin:3000},
        boss:"薰"
    },
    {
        index: 604,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 605,
        typeint: 3,
        skill: [
            "狂暴",
            "狙击"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 606,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 607,
        typeint: 3,
        skill: [
            "重装",
            "死士",
            "狙击"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 608,
        typeint: 3,
        skill: [
            "刺杀",
            "狙击"
        ],
        reward: {supply:30}
    },
    {
        index: 609,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 610,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "锵锵锵"
        ],
        reward:{token:100},
        boss:"天邪鬼黄"
    },
    {
        index: 611,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 612,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 613,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 614,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 615,
        typeint: 1,
		special:1,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 616,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 617,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 618,
        typeint: 1,
        skill: [],
        reward: {}
    },
    {
        index: 619,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 620,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 621,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 622,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 623,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 624,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 625,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 626,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 627,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 628,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 629,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 630,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 631,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 632,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "横财护身",
            "钱即正义"
        ],
        reward: {
            blessing:"烟烟罗的祝福"
        },
        boss:"铁鼠"
    },
    {
        index: 633,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"姑获鸟"
    },
    {
        index: 634,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 635,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 636,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 637,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:100},
        boss:"白狼"
    },
    {
        index: 638,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 639,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 640,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 641,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "指挥"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 642,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 643,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "狙击"
        ],
        reward:{token:200,coin:3000},
    },
    {
        index: 644,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 645,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 646,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 647,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 648,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 649,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 650,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 651,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 652,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 653,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 654,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 655,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 656,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 657,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 658,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 659,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 660,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 661,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 662,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"薰"
    },
    {
        index: 663,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 664,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward:{token:200,coin:3000},
        boss:"黑童子"
    },
    {
        index: 665,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 666,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 667,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 668,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 669,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 670,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
        boss:"弈"
    },
    {
        index: 671,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"二口女"
    },
    {
        index: 672,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 673,
        typeint: 4,
        skill: [],
        reward:{token:200,coin:3000},
    },
    {
        index: 674,
        typeint: 3,
        skill: [
            "大军",
            "狂暴",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 675,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 676,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 677,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 678,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 679,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 680,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 681,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 682,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 683,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 684,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 685,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 686,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 687,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 688,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 689,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 690,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 691,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 692,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 693,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:200,coin:3000},
        boss:"人面树"
    },
    {
        index: 694,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward: {
            blessing:"大天狗的祝福"
        },
        boss:"赤舌"
    },
    {
        index: 695,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "死亡宣判"
        ],
        reward:{token:100},
        boss:"鬼使黑"
    },
    {
        index: 696,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·残孽之力",
            "青魔孽力",
            "乌魔孽力"
        ],
        reward:{token:100},
        boss:"跳跳哥哥"
    },
    {
        index: 697,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 698,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 699,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"夜叉"
    },
    {
        index: 700,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 701,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {
            enhance:true
        },
        boss:"入殓师"
    },
    {
        index: 702,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·大妖杀手"
        ],
        reward:{token:100},
        boss:"赤舌"
    },
    {
        index: 703,
        typeint: 3,
		special:1,
        skill: [
            "大军",
            "妖术",
            "指挥"
        ],
        reward: {
            blessing:"食发鬼的祝福"
        }
    },
    {
        index: 704,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:200,coin:3000},
        boss:"巫蛊师"
    },
    {
        index: 705,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward: {
            enhance:true
        },
        boss:"入殓师"
    },
    {
        index: 706,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 707,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 708,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 709,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 710,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 711,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 712,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 713,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 714,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 715,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 716,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 717,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 718,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 719,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 720,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 721,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 722,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 723,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"二口女"
    },
    {
        index: 724,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 725,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·蜃影"
        ],
        reward:{token:100},
        boss:"雨女"
    },
    {
        index: 726,
        typeint: 3,
        skill: [
            "重装",
            "狂暴",
            "妖术",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 727,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"兵俑"
    },
    {
        index: 728,
        typeint: 1,
		special:1,
        skill: [
            "海国之军",
            "海国壳甲",
            "回忆·哀恸",
            "魂响·嘶吼",
            "窒灵咒",
            "丧心蚀魂"
        ],
        reward: {
            blessing:"黑夜山阵力"
        },
        boss:"盗之飞钳"
    },
    {
        index: 729,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "死士",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 730,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·急攻"
        ],
        reward:{token:100},
        boss:"弈"
    },
    {
        index: 731,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"数珠"
    },
    {
        index: 732,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"吸血姬"
    },
    {
        index: 733,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 734,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "施蛊",
            "魔蛊毒爆"
        ],
        reward:{token:100},
        boss:"巫蛊师"
    },
    {
        index: 735,
        typeint: 3,
        skill: [
            "大军",
            "妖术",
            "狙击"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 736,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
        boss:"数珠"
    },
    {
        index: 737,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "无我"
        ],
        reward:{token:100},
        boss:"白狼"
    },
    {
        index: 738,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·秽躯"
        ],
        reward:{token:100},
        boss:"黑童子"
    },
    {
        index: 739,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 740,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 741,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 742,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 743,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 744,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 745,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 746,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 747,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 748,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 749,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 750,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 751,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 752,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 753,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 754,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"二口女"
    },
    {
        index: 755,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:100},
        boss:"夜叉"
    },
    {
        index: 756,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 757,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·莽进"
        ],
        reward:{token:100},
        boss:"薰"
    },
    {
        index: 758,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·鳞铠"
        ],
        reward:{token:100},
        boss:"犬神"
    },
    {
        index: 759,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·符卫"
        ],
        reward:{token:100},
        boss:"兵俑"
    },
    {
        index: 760,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 761,
        typeint: 3,
        skill: [
            "大军",
            "死士",
            "精锐",
            "狙击"
        ],
        reward:{token:100},

    },
    {
        index: 762,
        typeint: 4,
        skill: [],
        reward:{token:100},
    },
    {
        index: 763,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 764,
        typeint: 3,
        skill: [
            "重装",
            "刺杀",
            "死士",
            "精锐"
        ],
        reward:{token:500,scales:20,bdm:1,coin:5000},
    },
    {
        index: 765,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·浴血",
            "汐蚀之锋",
            "潮龙卷"
        ],
        reward: {supply:30},
        boss:"黑童子"
    },
    {
        index: 766,
        typeint: 3,
        skill: [
            "大军",
            "刺杀",
            "指挥"
        ],
        reward:{token:100},
    },
    {
        index: 767,
        typeint: 3,
        skill: [
            "重装",
            "大军",
            "死士",
            "狙击"
        ],
        reward:{token:100},
    },
    {
        index: 768,
        typeint: 1,
        skill: [
            "海国之军",
            "海国壳甲",
            "铃鹿军势·破阵"
        ],
        reward:{token:200,coin:3000},
        boss:"二口女"
    },
    {
        index: 769,
        typeint: 3,
		special:1,
        skill: [
            "大军",
            "死士"
        ],
        reward:{token:1000,jade:100,gscales:25,ldm:1},
    },
    {
        index: 770,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 771,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 772,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 773,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 774,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 775,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 776,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 777,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 778,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    },
    {
        index: 779,
        typeint: 0,
        unuse: true,
        skill: [],
        reward: {}
    }
];

var GameData = {
    mapdata: MapData,
    BuffType: Buff,
    GridType: GridType,
    ShikikamiMap: ShikikamiMap
}
export default GameData;

const cardsData = [{
        id: 0,
        name: '小笼包',
        type: 0,
        rarity: 0,
        energy: 100,
        ability: '向前方发射一个小笼包子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '贵族小笼包',
            energy: 100,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '双层小笼包',
            energy: 200,
            info: '增加1发子弹'
        },
        transfer3: {
            name: '机枪小笼包',
            energy: 250,
            info: '增加2发子弹'
        },
        transfer4: {
            name: '格林机枪小笼包',
            energy: 250,
            info: '增加2发子弹'
        },
        transfer5: {
            name: '马克沁重机枪小笼包',
            energy: 300,
            info: '增加3发子弹'
        }
    },
    {
        id: 1,
        name: '小火炉',
        type: 1,
        rarity: 0,
        energy: 50,
        ability: '生产火苗',
        reinforcement: '减少生产间隔',
        skill: '提升火苗产值',
        transfer1: {
            name: '日光炉',
            energy: 50,
            info: '放置卡片时立即产火'
        },
        transfer2: {
            name: '太阳能高效炉',
            energy: 50,
            info: '多生产1朵火苗'
        },
        transfer3: {
            name: '高能高效炉',
            energy: 100,
            info: '多生产1朵火苗'
        },
        transfer4: {
            name: '超能燃气炉',
            energy: 100,
            info: '多生产1朵火苗'
        },
        transfer5: {
            name: '太阳神燃气炉',
            energy: 200,
            info: '多生产2朵火苗'
        }
    },
    {
        id: 2,
        name: '可乐炸弹',
        type: 3,
        rarity: 0,
        energy: 150,
        ability: '3*3矩形范围内爆炸',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '云爆可乐弹',
            energy: 200,
            info: '爆炸伤害增加30%'
        },
        transfer2: {
            name: '燃烧可乐弹',
            energy: 200,
            info: '爆炸后附加3秒的3*3矩形范围火焰灼烧伤害；并使敌人减速'
        }
    },
    {
        id: 3,
        name: '吐司面包',
        type: 2,
        rarity: 0,
        energy: 50,
        ability: '能暂时阻挡老鼠的进攻',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '巧克力面包',
            energy: 125,
            info: '阻挡老鼠跳跃'
        },
        transfer2: {
            name: '德芙面包',
            energy: 175,
            info: '体力提高50%'
        },
        transfer3: {
            name: '独角菠萝面包',
            energy: 175,
            info: '消失后造成3*3范围爆炸'
        },
        transfer4: {
            name: '皇冠菠萝面包',
            energy: 225,
            info: '爆炸范围扩大到5*5'
        }
    },
    {
        id: 4,
        name: '老鼠夹子',
        type: 3,
        rarity: 0,
        energy: 25,
        ability: '放置后等待一段时间后老鼠触碰会爆炸',
        reinforcement: '减少等待时间',
        transfer1: {
            name: '多用老鼠夹子',
            energy: 25,
            info: '可以攻击空中单位'
        },
        transfer2: {
            name: '黑猫捕鼠夹',
            energy: 25,
            info: '爆炸范围扩大到3*3'
        },
        transfer3: {
            name: '鼠鼠乐爆竹',
            energy: 25,
            info: '能够炸到地下老鼠；爆炸后有概率在原地生成一个黑猫捕鼠夹'
        }
    },
    {
        id: 5,
        name: '冰块冷萃机',
        type: 0,
        rarity: 0,
        energy: 200,
        ability: '发射冰块狙击前方或后方的老鼠，令其减速',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '低温冷萃机',
            energy: 200,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '迅捷冷萃机',
            energy: 250,
            info: '攻击范围扩大至3行；每次攻击有5%概率冰冻老鼠'
        },
        transfer3: {
            name: '酸梅制冰机',
            energy: 250,
            info: '攻击力提高50%；酸梅制冰机每击杀一只老鼠，自己增加些许攻击力'
        },
        transfer4: {
            name: '无糖可乐制冰机',
            energy: 250,
            info: '攻击范围扩大至5行；每次攻击有10%概率冰冻老鼠'
        }
    },
    {
        id: 6,
        name: '汉堡包',
        type: 0,
        rarity: 0,
        energy: 150,
        ability: '吞噬前方一只老鼠，然后消化掉',
        reinforcement: '减少消化时间',
        transfer1: {
            name: '香辣鸡腿堡',
            energy: 150,
            info: '攻击范围扩大至前方2格'
        },
        transfer2: {
            name: '巨无霸汉堡',
            energy: 150,
            info: '体力提高500%'
        },
        transfer3: {
            name: '秘制蟹黄堡',
            energy: 200,
            info: '吞噬攻击范围内的所有老鼠'
        }
    },
    {
        id: 7,
        name: '爆米花',
        type: 0,
        rarity: 0,
        energy: 200,
        ability: '向前方发射2颗具有穿透效果的爆米花',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '奶油爆米花',
            energy: 200,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '焦糖爆米花',
            energy: 250,
            info: '子弹能被火盆（包括转职卡）强化'
        },
        transfer3: {
            name: '街头烤肉大师',
            energy: 350,
            info: '向前方三行各发射2串具有穿透效果的烤肉'
        },
        transfer4: {
            name: '户外烤肉大师',
            energy: 350,
            info: '三行各增加1发子弹'
        },
        transfer5: {
            name: 'BBQ烤肉大师',
            energy: 350,
            info: '三行各增加1发子弹'
        }
    },
    {
        id: 8,
        name: '咖啡杯',
        type: 0,
        rarity: 0,
        energy: 0,
        ability: '喷射咖啡，攻击前方三格的老鼠；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '花纹咖啡杯',
            energy: 0,
            info: '攻击范围扩大至一行'
        },
        transfer2: {
            name: '骨瓷咖啡杯',
            energy: 0,
            info: '可以在白天使用；可以放在水上'
        },
        transfer3: {
            name: '皇室咖啡杯',
            energy: 0,
            info: '增加一发子弹'
        }
    },
    {
        id: 9,
        name: '酒杯灯',
        type: 1,
        rarity: 0,
        energy: 25,
        ability: '生产小火苗，成长后生成大火苗；白天会睡觉',
        reinforcement: '减少生产间隔',
        skill: '提升火苗产值',
        transfer1: {
            name: '高效酒杯灯',
            energy: 25,
            info: '放置卡片时立即产火'
        },
        transfer2: {
            name: '高能酒杯灯',
            energy: 25,
            info: '多生产1朵火苗'
        },
        transfer3: {
            name: '奢华酒杯灯',
            energy: 50,
            info: '多生产1朵火苗'
        },
        transfer4: {
            name: '梦幻酒杯灯',
            energy: 50,
            info: '多生产1朵火苗'
        },
        transfer5: {
            name: '赖茅酒杯灯',
            energy: 100,
            info: '多生产2朵火苗'
        }
    },
    {
        id: 10,
        name: '油壶',
        type: 0,
        rarity: 0,
        energy: 75,
        ability: '喷射食用油，攻击前方五格的老鼠；穿过火盆将喷射火焰；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '强力油壶',
            energy: 75,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '祝融喷壶',
            energy: 75,
            info: '每隔一段时间进入狂暴模式，攻速提高100%'
        },
        transfer3: {
            name: '橄榄油喷壶',
            energy: 150,
            info: '可以在白天使用；延长狂暴模式的持续时间'
        },
        transfer4: {
            name: '特级初榨橄榄油喷壶',
            energy: 150,
            info: '攻击力提高100%'
        }
    },
    {
        id: 11,
        name: '柠檬糖',
        type: 4,
        rarity: 0,
        energy: 75,
        ability: '爆炸后清除一个老鼠洞，无伤害',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '葡萄青柠糖',
            energy: 150,
            info: '清除范围扩大至3*3'
        },
        transfer2: {
            name: '樱桃柠檬糖',
            energy: 150,
            info: '爆炸后让老鼠眩晕'
        },
        transfer3: {
            name: '酸柠檬爆弹',
            energy: 150,
            info: '延长眩晕时间'
        },
        transfer4: {
            name: '电子柠檬爆弹',
            energy: 275,
            info: '清除范围扩大至5*5'
        },
        transfer5: {
            name: '质子柠檬爆弹',
            energy: 275,
            info: '可以清除障碍'
        }
    },
    {
        id: 12,
        name: '奶酪棒',
        type: 4,
        rarity: 0,
        energy: 75,
        ability: '收买一只老鼠，让它原路返回，为我们作战；白天会睡觉',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '驼鹿奶酪',
            energy: 75,
            info: '可以收买本格所有老鼠'
        },
        transfer2: {
            name: '普乐奶酪',
            energy: 75,
            info: '消失后，短暂提高3*3范围内卡片的攻速'
        }
    },
    {
        id: 13,
        name: '咖喱龙虾炮',
        type: 0,
        rarity: 0,
        energy: 275,
        ability: '向最近的老鼠投掷带有溅射效果的龙虾球；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '蒜蓉龙虾炮',
            energy: 275,
            info: '攻击力增加30%，并附加减速效果'
        },
        transfer2: {
            name: '麻辣龙虾炮',
            energy: 275,
            info: '增加1发炮弹'
        },
        transfer3: {
            name: '咸蛋黄龙虾炮',
            energy: 275,
            info: '可以在白天使用'
        },
        transfer4: {
            name: '十三香龙虾炮',
            energy: 275,
            info: '增加1发炮弹'
        }
    },
    {
        id: 14,
        name: '冰桶炸弹',
        type: 3,
        rarity: 0,
        energy: 75,
        ability: '爆炸后会冰冻全屏老鼠；白天会睡觉',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '酸橙冰桶炸弹',
            energy: 75,
            info: '爆炸后对全屏老鼠造成一定伤害'
        },
        transfer2: {
            name: '杂果冰桶炸弹',
            energy: 75,
            info: '极小几率直接冻死普通鼠军'
        },
        transfer3: {
            name: '长岛冰茶炸弹',
            energy: 75,
            info: '延长冰冻时间'
        },
        transfer4: {
            name: '冰镇玛格丽特炸弹',
            energy: 75,
            info: '爆炸后在本行留下让老鼠持续减速的冰渣'
        },
        transfer5: {
            name: '冰薄荷茱莉普炸弹',
            energy: 75,
            info: '在上下两行也留下冰渣；冰渣可以持续伤害老鼠'
        }
    },
    {
        id: 15,
        name: '开水壶炸弹',
        type: 3,
        rarity: 0,
        energy: 125,
        ability: '5*5矩形范围内爆炸；白天会睡觉',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '汽油壶炸弹',
            energy: 225,
            info: '爆炸伤害增加30%'
        },
        transfer2: {
            name: '汽油干冰弹',
            energy: 225,
            info: '放置后立即爆炸；附加冰冻减速'
        }
    },
    {
        id: 16,
        name: '黑芝麻汤圆',
        type: 4,
        rarity: 0,
        energy: 25,
        ability: '放在水上，承载其他防御卡',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '大黄米汤圆',
            energy: 0,
            info: '不消耗火苗'
        },
        transfer2: {
            name: '柿柿如意汤圆',
            energy: 0,
            info: '消失后产生3*3十字爆炸'
        }
    },
    {
        id: 17,
        name: '面粉袋',
        type: 0,
        rarity: 0,
        energy: 50,
        ability: '压扁前方或后方老鼠',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '影分身袋',
            energy: 75,
            info: '左右各召唤一个分身'
        },
        transfer2: {
            name: '乾坤分身袋',
            energy: 75,
            info: '左右各多召唤一个分身'
        }
    },
    {
        id: 18,
        name: '三线酒架',
        type: 0,
        rarity: 0,
        energy: 325,
        ability: '向前方三路分别发射1发子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '强力三线酒架',
            energy: 325,
            info: '本行增加1发子弹'
        },
        transfer2: {
            name: '终结者酒架',
            energy: 325,
            info: '上下两行各增加1发子弹'
        },
        transfer3: {
            name: '乔治·卢米慕西尼特级园酒架',
            energy: 325,
            info: '三行各增加1发子弹'
        },
        transfer4: {
            name: '罗曼尼·康帝特级园酒架',
            energy: 325,
            info: '三行各增加1发子弹'
        },
        transfer5: {
            name: '乐花慕西尼特级园酒架',
            energy: 325,
            info: '三行各增加2发子弹'
        }
    },
    {
        id: 19,
        name: '阳春面',
        type: 0,
        rarity: 0,
        energy: 150,
        ability: '挥拳攻击前方或后方的老鼠，老鼠靠近后将其拖下水；只能放在水上',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '牛肉拉面',
            energy: 150,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '虾子小刀面',
            energy: 150,
            info: '攻击范围扩大至前方或后方3格'
        },
        transfer3: {
            name: '麻酱热干面',
            energy: 150,
            info: '可以放置在陆地上'
        }
    },
    {
        id: 20,
        name: '酒瓶炸弹',
        type: 3,
        rarity: 0,
        energy: 125,
        ability: '爆炸后烧伤一整行老鼠',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '高爆酒瓶弹',
            energy: 175,
            info: '伤害增加30%'
        },
        transfer2: {
            name: '子母酒瓶弹',
            energy: 175,
            info: '爆炸范围增加一列'
        },
        transfer3: {
            name: '路易十三',
            energy: 175,
            info: '爆炸后在本行本列留下持续燃烧的火焰'
        }
    },
    {
        id: 21,
        name: '鱼刺',
        type: 0,
        rarity: 0,
        energy: 100,
        ability: '连续攻击路过的老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '钢鱼刺',
            energy: 125,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '特种钢鱼刺',
            energy: 125,
            info: '体力提高500%'
        },
        transfer3: {
            name: '海贼王鱼刺',
            energy: 125,
            info: '有概率使被攻击的老鼠减速、眩晕、后退；消失后爆炸'
        }
    },
    {
        id: 22,
        name: '火盆',
        type: 4,
        rarity: 0,
        energy: 175,
        ability: '子弹穿过后变成高温子弹，伤害飞升；冰弹无效',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却',
        transfer1: {
            name: '果木烤盘',
            energy: 175,
            info: '体力提升500%'
        },
        transfer2: {
            name: '电子烤盘',
            energy: 125,
            info: '耗能减少'
        },
        transfer3: {
            name: '多功能烤盘',
            energy: 125,
            info: '增幅提高10%'
        },
        transfer4: {
            name: '岩烧烤盘',
            energy: 125,
            info: '子弹附加火焰群伤'
        },
        transfer5: {
            name: '厨神烤盘',
            energy: 125,
            info: '增幅提高15%'
        }
    },
    {
        id: 23,
        name: '生煎锅',
        type: 0,
        rarity: 0,
        energy: 150,
        ability: '投掷生煎包，让前方3*3十字范围持续燃烧',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '水煎包锅',
            energy: 150,
            info: '攻击力提高10%'
        },
        transfer2: {
            name: '三鲜豆皮锅',
            energy: 150,
            info: '燃烧范围扩大至3*3矩形范围'
        },
        transfer3: {
            name: '驴肉火烧锅',
            energy: 150,
            info: '攻击力提高20%'
        }
    },
    {
        id: 24,
        name: '雷电长棍面包',
        type: 0,
        rarity: 0,
        energy: 225,
        ability: '同一列中的2个雷电长棍面包之间会放出强力电流',
        reinforcement: '提高攻击速度',
        skill: '减少卡片冷却',
        transfer1: {
            name: '节能面包',
            energy: 175,
            info: '能量消耗减少'
        },
        transfer2: {
            name: '负离子面包',
            energy: 175,
            info: '电流伤害提高20%'
        },
        transfer3: {
            name: '特高压面包',
            energy: 175,
            info: '可连续电击两次'
        }
    },
    {
        id: 25,
        name: '油灯',
        type: 4,
        rarity: 0,
        energy: 25,
        ability: '照亮3*3范围的大雾；让隐身的老鼠显形',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '酥油灯',
            energy: 25,
            info: '对3*3范围内的老鼠产生伤害'
        },
        transfer2: {
            name: '高亮油灯',
            energy: 25,
            info: '照亮范围扩大至全屏'
        }
    },
    {
        id: 26,
        name: '香肠',
        type: 0,
        rarity: 0,
        energy: 125,
        ability: '可以对空、对地发射子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '香肠加农炮',
            energy: 225,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '热狗高射炮',
            energy: 225,
            info: '对空增加一粒炮弹；炮弹附带减速效果'
        },
        transfer3: {
            name: '热狗榴弹炮',
            energy: 225,
            info: '攻击力提高30%'
        },
        transfer4: {
            name: '热狗火箭炮',
            energy: 225,
            info: '对空对地各增加一粒炮弹'
        },
        transfer5: {
            name: '1130热狗炮',
            energy: 225,
            info: '对空对地各增加2粒炮弹'
        }
    },
    {
        id: 27,
        name: '棕榈吹风机',
        type: 4,
        rarity: 0,
        energy: 100,
        ability: '吹走大雾和空中的部分老鼠',
        reinforcement: '延长吹散时间',
        skill: '减少卡片冷却',
        transfer1: {
            name: '金棕榈吹风机',
            energy: 100,
            info: '秒杀空中血量不足50%的老鼠'
        }
    },
    {
        id: 28,
        name: '通心粉',
        type: 0,
        rarity: 0,
        energy: 125,
        ability: '向前方发射1发子弹，向后方发射2发子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '辣炒通心粉',
            energy: 125,
            info: '前方增加1发子弹'
        },
        transfer2: {
            name: '番茄肉酱通心粉',
            energy: 125,
            info: '后方增加1发子弹'
        },
        transfer3: {
            name: '奶油培根通心粉',
            energy: 125,
            info: '前方增加1发子弹'
        },
        transfer4: {
            name: '罗勒鸡肉通心粉',
            energy: 150,
            info: '攻击力提高20%'
        },
        transfer5: {
            name: '柠香金枪鱼通心粉',
            energy: 150,
            info: '前后各增加1发子弹'
        }
    },
    {
        id: 29,
        name: '炭烧海星',
        type: 0,
        rarity: 0,
        energy: 175,
        ability: '向5个触角的方向发射星星子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '芝士焗海星',
            energy: 175,
            info: '可在陆地上使用'
        },
        transfer2: {
            name: '芥末海星刺身',
            energy: 175,
            info: '每路增加1发子弹'
        },
        transfer3: {
            name: '芥末怪味鱿鱼',
            energy: 225,
            info: '向8个方向分别发射2发子弹'
        },
        transfer4: {
            name: '爆汁怪味鱿鱼',
            energy: 225,
            info: '攻击力提高30%'
        },
        transfer5: {
            name: '天椒怪味鱿鱼',
            energy: 225,
            info: '每路增加1发子弹'
        }
    },
    {
        id: 30,
        name: '瓜皮护罩',
        type: 2,
        rarity: 0,
        energy: 125,
        ability: '保护套在里面的卡片',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '尖刺瓜皮护罩',
            energy: 125,
            info: '被老鼠啃咬时向3*3范围反弹伤害'
        },
        transfer2: {
            name: '锋芒瓜皮护罩',
            energy: 175,
            info: '体力提高50%；受伤后会缓慢自愈'
        },
        transfer3: {
            name: '猫山王榴莲护罩',
            energy: 175,
            info: '反伤提升30%'
        },
        transfer4: {
            name: '黑刺榴莲护罩',
            energy: 250,
            info: '反伤范围扩大到5*5'
        }
    },
    {
        id: 31,
        name: '樱桃反弹布丁',
        type: 4,
        rarity: 0,
        energy: 100,
        ability: '可以直线子弹反弹至相反方向；白天会睡觉',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '金橘反弹布丁',
            energy: 100,
            info: '体力提高100%'
        },
        transfer2: {
            name: '双莓反弹布丁',
            energy: 100,
            info: '可以在白天使用；被反弹子弹击中的老鼠有概率后退'
        },
        transfer3: {
            name: '什锦反弹布丁',
            energy: 125,
            info: '强化被反弹的子弹'
        },
        transfer4: {
            name: '山楂提子凉粉',
            energy: 150,
            info: '强化被反弹的子弹'
        },
        transfer5: {
            name: '焦糖珍珠凉粉',
            energy: 150,
            info: '被反弹的子弹附加毒伤'
        }
    },
    {
        id: 32,
        name: '沙拉投手',
        type: 0,
        rarity: 0,
        energy: 100,
        ability: '向本行前方投出一个番茄，击中第一只老鼠后向后三格溅射，伤害为第一次攻击的50%',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '强力沙拉投手',
            energy: 100,
            info: '溅射伤害提高至80%'
        },
        transfer2: {
            name: '果蔬沙拉投手',
            energy: 100,
            info: '一次投掷2枚番茄'
        },
        transfer3: {
            name: '凯撒沙拉投手',
            energy: 100,
            info: '攻击力提高100%'
        }
    },
    {
        id: 33,
        name: '棉花糖',
        type: 4,
        rarity: 0,
        energy: 25,
        ability: '可在空中以及岩浆上承载卡片',
        reinforcement: '增强体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '麦芽糖',
            energy: 25,
            info: '体力提升1000%'
        },
        transfer2: {
            name: '魔法软糖',
            energy: 0,
            info: '不消耗火苗；可以在所有特殊场地（水上、空中、岩浆等）承载卡片'
        }
    },
    {
        id: 34,
        name: '巧克力投手',
        type: 0,
        rarity: 0,
        energy: 125,
        ability: '投掷巧克力豆或巧克力块，巧克力块可以定住老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '浓情巧克力投手',
            energy: 125,
            info: '攻击力提高100%；定身时间延长2秒'
        },
        transfer2: {
            name: '脆心巧克力投手',
            energy: 125,
            info: '攻击力提高100%；定身时间再延长2秒'
        },
        transfer3: {
            name: '酒心巧克力投手',
            energy: 125,
            info: '每次攻击有5%的概率投掷巧克力炸弹轰炸鼠军'
        }
    },
    {
        id: 35,
        name: '咖啡粉',
        type: 4,
        rarity: 0,
        energy: 75,
        ability: '唤醒一格内沉睡的夜间卡片，使其能在白天使用',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '手磨咖啡粉',
            energy: 75,
            info: '激励一格内的卡片，提升攻速'
        },
        transfer2: {
            name: '瑰夏咖啡粉',
            energy: 125,
            info: '唤醒、激励范围扩大至3*3'
        },
        transfer3: {
            name: '蓝山咖啡粉',
            energy: 125,
            info: '唤醒、激励范围扩大至5*5'
        }
    },
    {
        id: 36,
        name: '五仁月饼',
        type: 4,
        rarity: 0,
        energy: 100,
        ability: '每隔一段时间释放香味，吸引3*3格范围内的老鼠移动到本行',
        reinforcement: '强化体力',
        skill: '减少卡片冷却',
        transfer1: {
            name: '蛋黄莲蓉月饼',
            energy: 150,
            info: '吸引范围扩大至5*5'
        },
        transfer2: {
            name: '枣泥冰皮月饼',
            energy: 200,
            info: '老鼠啃咬时减速，有概率被冰冻；体力为0时召唤一只玉兔撞飞本行老鼠'
        }
    },
    {
        id: 37,
        name: '黯然销魂饭',
        type: 4,
        rarity: 0,
        energy: 375,
        ability: '复活3*3范围内消失的卡片，对一次性卡片无效',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '青椒肉丝饭',
            energy: 325,
            info: '耗能减少'
        },
        transfer2: {
            name: '培根香肠饭',
            energy: 325,
            info: '可以复活炸弹型卡片'
        },
        transfer3: {
            name: '天妇罗盖饭',
            energy: 325,
            info: '复活范围扩大至5*5'
        }
    },
    {
        id: 38,
        name: '冰淇淋',
        type: 4,
        rarity: 0,
        energy: 125,
        ability: '放在卡片上，可使该卡片冷却立刻结束',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '香草冰淇淋',
            energy: 75,
            info: '耗能减少'
        },
        transfer2: {
            name: '果蔬冰淇淋',
            energy: 75,
            info: '放置后有概率返还消耗的火苗'
        },
        transfer3: {
            name: '草莓圣代',
            energy: 75,
            info: '作用范围扩大至3*3'
        },
        transfer4: {
            name: '巧克力圣代',
            energy: 75,
            info: '作用范围扩大至5*5'
        },
        transfer5: {
            name: '极寒冰沙',
            energy: 75,
            info: '全体卡片冷却立刻结束'
        }
    },
    {
        id: 39,
        name: '煮蛋器投手',
        type: 0,
        rarity: 0,
        energy: 300,
        ability: '向前方投掷1枚鸡蛋攻击老鼠，并对3*3范围的鼠军造成35%的溅射伤害',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '威力煮蛋器',
            energy: 300,
            info: '攻击力提高30%，溅射伤害提高至50%'
        },
        transfer2: {
            name: '强袭煮蛋器',
            energy: 300,
            info: '一次投掷2枚鸡蛋'
        },
        transfer3: {
            name: '节能冰煮蛋器',
            energy: 250,
            info: '耗能减少；攻击使敌人减速'
        },
        transfer4: {
            name: '极寒煮蛋器',
            energy: 250,
            info: '溅射范围扩大至5*5；攻击有概率冰冻老鼠'
        },
        transfer5: {
            name: '冰河世纪煮蛋器',
            energy: 250,
            info: '一次投掷3枚冰鸡蛋；溅射伤害提高至80%'
        }
    },
    {
        id: 40,
        name: '糖葫芦',
        type: 0,
        rarity: 0,
        energy: 200,
        ability: '发射1枚糖葫芦炮弹，全屏追踪攻击空中老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '扁山楂糖葫芦',
            energy: 200,
            info: '炮弹飞行速度提高50%；攻击附加减速效果'
        },
        transfer2: {
            name: '酸奶夹心糖葫芦',
            energy: 200,
            info: '攻击力提高30%'
        },
        transfer3: {
            name: '水果糖葫芦弹',
            energy: 250,
            info: '多发射1枚炮弹'
        },
        transfer4: {
            name: '七彩糖葫芦弹',
            energy: 250,
            info: '多发射1枚炮弹'
        },
        transfer5: {
            name: '奶皮子草莓糖葫芦弹',
            energy: 250,
            info: '多发射1枚炮弹'
        }
    },
    {
        id: 41,
        name: '辣椒粉',
        type: 3,
        rarity: 0,
        energy: 50,
        ability: '3*3十字范围爆炸，将被炸死的老鼠转化成火苗',
        reinforcement: '减少卡片冷却',
        skill: '提升火苗产值',
        transfer1: {
            name: '魔鬼辣椒粉',
            energy: 100,
            info: '爆炸范围扩大至3*3'
        },
        transfer2: {
            name: '花椒辣椒粉',
            energy: 225,
            info: '爆炸范围扩大至5*5'
        },
        transfer3: {
            name: '芥末辣椒粉',
            energy: 225,
            info: '连续爆炸2次'
        }
    },
    {
        id: 42,
        name: '旋转咖啡喷壶',
        type: 0,
        rarity: 0,
        energy: 150,
        ability: '向3*3范围喷射咖啡攻击老鼠；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '香醇咖啡壶',
            energy: 150,
            info: '攻击力提升20%并附加减速效果'
        },
        transfer2: {
            name: '原子咖啡壶',
            energy: 225,
            info: '攻击范围扩大至5*5'
        },
        transfer3: {
            name: '摩卡咖啡壶',
            energy: 225,
            info: '可以在白天使用'
        },
        transfer4: {
            name: '虹吸咖啡壶',
            energy: 275,
            info: '增加1波咖啡伤害'
        },
        transfer5: {
            name: '胶囊咖啡机',
            energy: 275,
            info: '增加1波咖啡伤害；场上每多一个胶囊咖啡机，全体旋转咖啡喷壶（包括转职卡）伤害提升一次'
        }
    },
    {
        id: 43,
        name: '章鱼烧',
        type: 0,
        rarity: 0,
        energy: 225,
        ability: '向全屏范围发射两枚回旋镖追踪攻击老鼠；只能放在水上',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '两栖章鱼烧',
            energy: 225,
            info: '可以放置在陆地上'
        },
        transfer2: {
            name: '火影章鱼烧',
            energy: 225,
            info: '减少卡片冷却；一次发射3枚回旋镖'
        },
        transfer3: {
            name: '迷你披萨炉',
            energy: 225,
            info: '一次发射4张披萨追踪攻击老鼠，如果老鼠未死亡，可以分裂出攻击更高的子弹'
        },
        transfer4: {
            name: '香脆披萨炉',
            energy: 225,
            info: '增加一张披萨'
        },
        transfer5: {
            name: '拉丝披萨炉',
            energy: 225,
            info: '增加一张披萨'
        }
    },
    {
        id: 44,
        name: '臭豆腐投手',
        type: 0,
        rarity: 0,
        energy: 175,
        ability: '投掷一块臭豆腐攻击老鼠；有概率投出毒豆腐，产生一格持续3秒的毒气，每秒减少老鼠1%的生命',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '什锦臭豆腐投手',
            energy: 175,
            info: '毒气持续4秒'
        },
        transfer2: {
            name: '铁板臭豆腐投手',
            energy: 175,
            info: '连投两块臭豆腐'
        },
        transfer3: {
            name: '剁椒臭豆腐投手',
            energy: 175,
            info: '攻击力提高100%；提高投掷毒豆腐的概率'
        }
    },
    {
        id: 45,
        name: '火龙果',
        type: 1,
        rarity: 0,
        energy: 150,
        ability: '放置后准备一段时间，释放大量火苗',
        reinforcement: '提升火苗产值',
        skill: '减少准备时间',
        transfer1: {
            name: '炽焰火龙果',
            energy: 150,
            info: '放置后返还消耗的火苗'
        },
        transfer2: {
            name: '炎阳火龙果',
            energy: 150,
            info: '在准备时间向3*3范围喷洒岩浆灼烧老鼠'
        },
        transfer3: {
            name: '九天皓日火龙果',
            energy: 150,
            info: '提高火苗产量'
        }
    },
    {
        id: 46,
        name: '蓝莓信号塔塔',
        type: 4,
        rarity: 0,
        energy: 150,
        ability: '发射蓝莓信号波，为本行投掷类卡片增加攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却',
        transfer1: {
            name: '鼠鼠蛋糕加强器',
            energy: 175,
            info: '体力提升500%'
        },
        transfer2: {
            name: '喵博士蛋糕加强器',
            energy: 200,
            info: '消失后返还消耗的火苗'
        },
        transfer3: {
            name: '美味水果塔',
            energy: 200,
            info: '增幅提高10%；被老鼠啃咬时向3*3范围反弹伤害'
        },
        transfer4: {
            name: '风车水果塔',
            energy: 225,
            info: '增幅提高10%；消失后造成3*3范围爆炸'
        },
        transfer5: {
            name: '巧克力风车塔',
            energy: 250,
            info: '增幅提高10%；能够强化投掷类卡片的溅射伤害'
        }
    },
    {
        id: 47,
        name: '巧克力大炮',
        type: 0,
        rarity: 0,
        energy: 375,
        ability: '每隔一段时间发射1枚巧克力炸弹轰炸前方3*3矩形范围内的老鼠',
        reinforcement: '提高攻击速度',
        skill: '减少卡片冷却',
        transfer1: {
            name: '浓情巧克力大炮',
            energy: 325,
            info: '耗能减少'
        },
        transfer2: {
            name: '脆心巧克力大炮',
            energy: 325,
            info: '一次发射2枚巧克力炸弹'
        },
        transfer3: {
            name: '酒心巧克力大炮',
            energy: 325,
            info: '攻击力提高20%；放置后立即攻击一次'
        },
        transfer4: {
            name: '金箔巧克力大炮',
            energy: 325,
            info: '一次发射3枚巧克力炸弹'
        },
        transfer5: {
            name: '黑松露巧克力大炮',
            energy: 325,
            info: '轰炸范围扩大至5*5'
        }
    },
    {
        id: 48,
        name: '神秘粽子',
        type: 4,
        rarity: 0,
        energy: 325,
        ability: '放置后变身成上一次放置的卡片，不能变身为冰淇淋',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '竹筒粽子',
            energy: 325,
            info: '变身后造成5*5范围爆炸'
        },
        transfer2: {
            name: '爱心便当',
            energy: 275,
            info: '耗能减少'
        },
        transfer3: {
            name: '五谷丰登',
            energy: 275,
            info: '放置后有概率返还消耗的火苗'
        },
        transfer4: {
            name: '五谷营养餐',
            energy: 275,
            info: '变身出2张上一次放置的卡片'
        },
        transfer5: {
            name: '杂粮大丰收',
            energy: 275,
            info: '变身出3张上一次放置的卡片'
        }
    },
];
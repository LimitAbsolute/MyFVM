const cardsData = [{
        id: 0,
        name: '小笼包',
        type: 0,
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
        type: 0,
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
        type: 0,
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
        type: 0,
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
        type: 0,
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
            name: '改良型黑猫捕鼠夹',
            energy: 25,
            info: '爆炸后有概率在原地生成一个黑猫捕鼠夹'
        }
    },
    {
        id: 5,
        name: '冰冻小笼包',
        type: 0,
        energy: 175,
        ability: '向前方发射一个让老鼠减速的冰冻小笼包子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '贵族冰冻小笼包',
            energy: 175,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '双层冰冻小笼包',
            energy: 250,
            info: '增加1发子弹；每次攻击有5%概率冰冻老鼠'
        },
        transfer3: {
            name: '机枪冰冻小笼包',
            energy: 275,
            info: '增加2发子弹'
        },
        transfer4: {
            name: '格林机枪冰冻小笼包',
            energy: 275,
            info: '增加2发子弹；冰冻概率提高至10%'
        },
        transfer5: {
            name: '马克沁重机枪冰冻小笼包',
            energy: 325,
            info: '增加3发子弹'
        }
    },
    {
        id: 6,
        name: '汉堡包',
        type: 0,
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
        name: '爆米花机',
        type: 0,
        energy: 200,
        ability: '向前方发射2个具有穿透效果的爆米花',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '奶油爆米花机',
            energy: 200,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '焦糖爆米花机',
            energy: 250,
            info: '增加1发子弹'
        },
        transfer3: {
            name: '巧克力爆米花机',
            energy: 250,
            info: '增加1发子弹'
        },
        transfer4: {
            name: '金箔爆米花机',
            energy: 275,
            info: '增加2发子弹'
        }
    },
    {
        id: 8,
        name: '咖啡杯',
        type: 0,
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
            info: '攻击力提高50%'
        }
    },
    {
        id: 9,
        name: '酒杯灯',
        type: 0,
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
            name: '橄榄油喷壶',
            energy: 125,
            info: '可以在白天使用'
        },
        transfer3: {
            name: '特级初榨橄榄油喷壶',
            energy: 150,
            info: '攻击力提高50%'
        }
    },
    {
        id: 11,
        name: '糖渍青李子',
        type: 0,
        energy: 75,
        ability: '爆炸后清除一个老鼠洞，无伤害',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '山楂糖雪球',
            energy: 150,
            info: '清除范围扩大至3*3'
        },
        transfer2: {
            name: '百香果爆弹',
            energy: 150,
            info: '爆炸后让老鼠眩晕'
        },
        transfer3: {
            name: '酸香青柠糖',
            energy: 150,
            info: '可以清除障碍'
        },
        transfer4: {
            name: '爆酸柠檬糖',
            energy: 150,
            info: '清除范围扩大至5*5'
        }
    },
    {
        id: 12,
        name: '奶酪棒',
        type: 0,
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
        type: 0,
        energy: 75,
        ability: '冰冻全屏老鼠，并对老鼠造成一定伤害；白天会睡觉',
        reinforcement: '减少卡片冷却',
        transfer1: {
            name: '长岛冰茶',
            energy: 75,
            info: '延长冰冻时间'
        },
        transfer2: {
            name: '冰镇玛格丽特',
            energy: 75,
            info: '爆炸后在本行留下让老鼠持续减速的冰渣'
        },
        transfer3: {
            name: '冰薄荷茱莉普',
            energy: 75,
            info: '在上下两行也留下冰渣；冰渣可以造成持续伤害'
        }
    },
    {
        id: 15,
        name: '开水壶炸弹',
        type: 0,
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
        type: 0,
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
        type: 0,
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
            name: '海贼王鱼刺',
            energy: 125,
            info: '有概率使被攻击的老鼠减速、眩晕、后退；消失后爆炸'
        }
    },
    {
        id: 22,
        name: '火盆',
        type: 0,
        energy: 175,
        ability: '子弹穿过后变成高温子弹，伤害飞升；冰弹无效',
        reinforcement: '提高增幅倍率',
        transfer1: {
            name: '果木烤盘',
            energy: 175,
            info: '体力提升500%'
        },
        transfer2: {
            name: '电子烤盘',
            energy: 125,
            info: '耗能减少50'
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
        type: 0,
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
        type: 0,
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
        type: 0,
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
            name: '钢盔瓜皮护罩',
            energy: 175,
            info: '体力提高50%'
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
        type: 0,
        energy: 100,
        ability: '可以直线子弹反弹至相反方向',
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
            info: '被反弹子弹击中的老鼠有概率后退'
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
        type: 0,
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
];
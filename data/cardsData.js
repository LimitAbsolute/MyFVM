const cardsData = [{
        id: 0,
        name: '小笼包',
        type: 0,
        attackType: 0,
        rarity: 0,
        energy: 100,
        ability: '向前方发射一个小笼包子弹；子弹能被火盆（包括转职卡）强化',
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
            name: '竹筒机枪小笼包',
            energy: 250,
            info: '增加2发子弹'
        },
        transfer5: {
            name: '格林机枪小笼包',
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
        ability: '生产火苗；夜间生产速度下降50%',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值',
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
            name: '高能火炉',
            energy: 100,
            info: '多生产1朵火苗；夜间生产速度提高100%'
        },
        transfer4: {
            name: '超能燃气炉',
            energy: 100,
            info: '多生产1朵火苗'
        },
        transfer5: {
            name: '核子光炉',
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
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '云爆可乐弹',
            energy: 200,
            info: '爆炸伤害增加30%'
        },
        transfer2: {
            name: '燃烧可乐弹',
            energy: 200,
            info: '爆炸后附加3秒的3*3矩形范围火焰灼烧伤害，并使敌人减速'
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
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '巧克力面包',
            energy: 125,
            info: '能阻挡老鼠跳跃'
        },
        transfer2: {
            name: '德芙面包',
            energy: 175,
            info: '体力提高50%'
        },
        transfer3: {
            name: '菠萝爆炸面包',
            energy: 175,
            info: '被老鼠吃掉后造成3*3范围爆炸'
        },
        transfer4: {
            name: '独角菠萝面包',
            energy: 175,
            info: '被老鼠啃咬时向3*3范围反弹伤害；受伤后会缓慢自愈'
        },
        transfer5: {
            name: '皇冠菠萝面包',
            energy: 225,
            info: '爆炸伤害增加30%；爆炸范围扩大至5*5'
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
            info: '可以攻击空中老鼠'
        },
        transfer2: {
            name: '黑猫捕鼠夹',
            energy: 25,
            info: '爆炸范围扩大至3*3'
        },
        transfer3: {
            name: '鼠鼠乐爆竹',
            energy: 25,
            info: '可以攻击地下老鼠；爆炸后有概率在原地生成一个黑猫捕鼠夹'
        }
    },
    {
        id: 5,
        name: '烧鸡',
        type: 0,
        attackType: 3,
        rarity: 0,
        energy: 200,
        ability: '发射子弹狙击前方或后方的老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '美味烤鸡',
            energy: 200,
            info: '攻击力提高20%'
        },
        transfer2: {
            name: '奥尔良烤鸡',
            energy: 250,
            info: '能同时狙击3只老鼠；攻击范围扩大至3行；每次攻击有5%概率击晕老鼠'
        },
        transfer3: {
            name: '美味鲈鱼',
            energy: 275,
            info: '攻击力提高30%；美味鲈鱼每击杀一只老鼠，自己增加些许攻击力'
        },
        transfer4: {
            name: '龙门鲈鱼',
            energy: 275,
            info: '每击杀一只老鼠，增加更多攻击力'
        },
        transfer5: {
            name: '波士顿龙虾',
            energy: 300,
            info: '能同时狙击5只老鼠；攻击范围扩大至5行；每次攻击有10%概率击晕老鼠'
        }
    },
    {
        id: 6,
        name: '汉堡包',
        type: 0,
        attackType: 4,
        rarity: 0,
        energy: 150,
        ability: '吞噬前方一只陆地老鼠，然后消化掉',
        reinforcement: '减少消化时间',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '香辣鸡腿堡',
            energy: 150,
            info: '吞噬攻击范围内的所有老鼠'
        },
        transfer2: {
            name: '巨无霸汉堡',
            energy: 200,
            info: '体力提高500%'
        },
        transfer3: {
            name: '深海鳕鱼堡',
            energy: 200,
            info: '攻击范围扩大至3*3'
        },
        transfer4: {
            name: '北京烤鸭堡',
            energy: 200,
            info: '被老鼠吃掉后造成3*3范围爆炸'
        },
        transfer5: {
            name: '秘制蟹黄堡',
            energy: 200,
            info: '攻击范围扩大至5*5'
        }
    },
    {
        id: 7,
        name: '爆米花',
        type: 0,
        attackType: 0,
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
        attackType: 0,
        rarity: 0,
        energy: 0,
        ability: '发射咖啡，攻击前方三格的老鼠；子弹不能穿透攻击;白天会睡觉',
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
            info: '增加一发子弹；可以堆叠放置，一个皇室咖啡杯上面最多能放置2个咖啡杯（包括转职卡）'
        }
    },
    {
        id: 9,
        name: '酒杯灯',
        type: 1,
        rarity: 0,
        energy: 25,
        ability: '生产小火苗，成长后生成大火苗；白天会睡觉',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值',
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
            name: '青瓷露酒灯',
            energy: 50,
            info: '多生产1朵火苗'
        },
        transfer4: {
            name: '白夜琉璃灯',
            energy: 50,
            info: '多生产1朵火苗'
        },
        transfer5: {
            name: '赖茅水晶灯',
            energy: 100,
            info: '多生产2朵火苗'
        }
    },
    {
        id: 10,
        name: '咖啡喷壶',
        type: 0,
        attackType: 2,
        rarity: 0,
        energy: 75,
        ability: '喷射咖啡，攻击前方五格的老鼠；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '香醇咖啡喷壶',
            energy: 75,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '红温咖啡喷壶',
            energy: 75,
            info: '每隔一段时间进入狂暴模式，攻速提高100%'
        },
        transfer3: {
            name: '油壶',
            energy: 150,
            info: '可以在白天使用；攻击范围扩大至一行；穿过火盆（包括转职卡）将喷射火焰'
        },
        transfer4: {
            name: '强力油壶',
            energy: 150,
            info: '攻击力提高50%；延长狂暴模式的持续时间'
        },
        transfer5: {
            name: '祝融喷壶',
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
        reinforcement: '减少卡片冷却时间',
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
            info: '可以清除老鼠制造的障碍物'
        }
    },
    {
        id: 12,
        name: '奶酪棒',
        type: 3,
        rarity: 0,
        energy: 125,
        ability: '收买3*3范围内的所有老鼠，让它们原路返回，为我们作战；白天会睡觉',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '驼鹿奶酪',
            energy: 125,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '普乐奶酪',
            energy: 125,
            info: '消失后，短暂提高5*5范围内卡片的攻速'
        }
    },
    {
        id: 13,
        name: '咖喱龙虾炮',
        type: 0,
        attackType: 3,
        rarity: 0,
        energy: 275,
        ability: '向全场最近的陆地、空中老鼠发射龙虾球，造成3*3范围群体伤害；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '麻辣龙虾炮',
            energy: 275,
            info: '攻击力增加30%，并附加减速效果'
        },
        transfer2: {
            name: '十三香龙虾炮',
            energy: 275,
            info: '增加1发炮弹'
        },
        transfer3: {
            name: '香辣年糕蟹',
            energy: 275,
            info: '向全场最近的陆地、空中老鼠发射2个年糕蟹钳锤，造成3*3范围群体伤害；年糕蟹钳锤落地后可以阻挡老鼠前进'
        },
        transfer4: {
            name: '中辣年糕蟹',
            energy: 275,
            info: '提高年糕蟹钳锤的体力；年糕蟹钳锤被老鼠吃掉后会造成一格范围的爆炸'
        },
        transfer5: {
            name: '厨神年糕蟹',
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
        reinforcement: '减少卡片冷却时间',
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
        reinforcement: '减少卡片冷却时间',
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
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '大黄米汤圆',
            energy: 0,
            info: '不消耗火苗'
        },
        transfer2: {
            name: '柿柿如意汤圆',
            energy: 0,
            info: '被老鼠吃掉后产生3*3十字爆炸'
        }
    },
    {
        id: 17,
        name: '面粉袋',
        type: 0,
        attackType: 4,
        rarity: 0,
        energy: 50,
        ability: '压扁前方或后方老鼠',
        reinforcement: '减少卡片冷却时间',
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
        attackType: 0,
        rarity: 0,
        energy: 325,
        ability: '向前方三路分别发射1发子弹；子弹能被火盆（包括转职卡）强化',
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
            info: '本行增加1发子弹'
        },
        transfer4: {
            name: '罗曼尼·康帝特级园酒架',
            energy: 325,
            info: '上下两行各增加1发子弹'
        },
        transfer5: {
            name: '乐花慕西尼特级园酒架',
            energy: 325,
            info: '三行各增加1发子弹'
        }
    },
    {
        id: 19,
        name: '牛肉拉面',
        type: 0,
        attackType: 4,
        rarity: 0,
        energy: 150,
        ability: '挥拳攻击前方或后方的老鼠，老鼠靠近后将其拖下水；只能放在水上',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '刀削拉面',
            energy: 150,
            info: '可以放置在陆地上；攻击力提高50%'
        },
        transfer2: {
            name: '真·刀削拉面',
            energy: 150,
            info: '攻击范围扩大至前方或后方3格'
        }
    },
    {
        id: 20,
        name: '酒瓶炸弹',
        type: 3,
        rarity: 0,
        energy: 125,
        ability: '爆炸后烧伤一整行老鼠',
        reinforcement: '减少卡片冷却时间',
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
            name: '威士忌炸弹',
            energy: 200,
            info: '爆炸后在爆炸范围内留下持续燃烧的火焰'
        },
        transfer4: {
            name: '水晶威士忌炸弹',
            energy: 275,
            info: '爆炸范围增加上下两行'
        },
        transfer5: {
            name: '钻石威士忌炸弹',
            energy: 275,
            info: '爆炸范围增加前后两列'
        }
    },
    {
        id: 21,
        name: '鱼刺',
        type: 0,
        attackType: 4,
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
            info: '有概率使被攻击的老鼠减速、眩晕、后退；消失后造成3*3范围爆炸'
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
        skill: '减少卡片冷却时间',
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
            info: '增幅提高10%；被老鼠吃掉后留下一行持续燃烧的火焰'
        },
        transfer4: {
            name: '岩烧烤盘',
            energy: 125,
            info: '子弹附加火焰群伤'
        },
        transfer5: {
            name: '厨神烤盘',
            energy: 125,
            info: '增幅提高15%；被老鼠吃掉后留下3行持续燃烧的火焰'
        }
    },
    {
        id: 23,
        name: '生煎锅',
        type: 0,
        attackType: 1,
        rarity: 0,
        energy: 150,
        ability: '投掷生煎包，让前方3*3十字范围持续燃烧',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '水煎包锅',
            energy: 175,
            info: '攻击力提高10%'
        },
        transfer2: {
            name: '驴肉火烧锅',
            energy: 225,
            info: '燃烧范围扩大至3*3矩形范围'
        },
        transfer3: {
            name: '糖炒栗子',
            energy: 250,
            info: '投掷滚烫的栗子持续灼烧3*3范围内的老鼠；攻击范围扩大至前方5格'
        },
        transfer4: {
            name: '开口笑栗子',
            energy: 250,
            info: '攻击力提高20%'
        },
        transfer5: {
            name: '焦香烤栗子',
            energy: 250,
            info: '燃烧范围扩大至5*5'
        }
    },
    {
        id: 24,
        name: '雷电长棍面包',
        type: 0,
        attackType: 4,
        rarity: 0,
        energy: 225,
        ability: '同一列中的2个雷电长棍面包之间会放出强力电流',
        reinforcement: '提高攻击速度',
        skill: '减少卡片冷却时间',
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
        name: '蜡烛',
        type: 4,
        rarity: 0,
        energy: 25,
        ability: '照亮3*3范围的大雾；让隐身的老鼠显形',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '油灯',
            energy: 25,
            info: '每隔一段时间生产一朵火苗'
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
        attackType: 0,
        rarity: 0,
        energy: 125,
        ability: '可以对空、对地发射子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '热狗大炮',
            energy: 225,
            info: '攻击力提高30%；对空发射2粒炮弹，对地发射1粒炮弹；炮弹附带减速效果'
        },
        transfer2: {
            name: '热狗高射炮',
            energy: 225,
            info: '对空增加1粒炮弹'
        },
        transfer3: {
            name: '热狗榴弹炮',
            energy: 225,
            info: '对空对地各增加1粒炮弹'
        },
        transfer4: {
            name: '伯爵蚝油双菇',
            energy: 225,
            info: '可以同时攻击空中和陆地老鼠；对空发射4个蘑菇，对地发射2个蘑菇；对地子弹能被火盆（包括转职卡）强化'
        },
        transfer5: {
            name: '皇家蚝油双菇',
            energy: 225,
            info: '对空对地各增加2个蘑菇'
        }
    },
    {
        id: 27,
        name: '棕榈吹风机',
        type: 4,
        rarity: 0,
        energy: 100,
        ability: '吹走大雾、沙尘暴和空中的部分老鼠',
        reinforcement: '延长吹散时间',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '金棕榈吹风机',
            energy: 100,
            info: '秒杀空中血量不足50%的老鼠'
        }
    },
    {
        id: 28,
        name: '仙人掌刺身',
        type: 0,
        attackType: 0,
        rarity: 0,
        energy: 125,
        ability: '向前方发射1根尖刺，向后方发射2根尖刺；尖刺能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '仙人球刺身',
            energy: 125,
            info: '前方增加1根尖刺'
        },
        transfer2: {
            name: '仙人掌花刺身',
            energy: 125,
            info: '后方增加1根尖刺'
        },
        transfer3: {
            name: '爆辣河豚',
            energy: 125,
            info: '向前方、后方各发射3根尖刺；攻击会造成老鼠持续流血；被老鼠吃掉后向8个方向各发射1根尖刺'
        },
        transfer4: {
            name: '朝天椒河豚',
            energy: 150,
            info: '攻击力提高20%；被老鼠吃掉后向8个方向各发射2根尖刺'
        },
        transfer5: {
            name: '青芥末河豚',
            energy: 150,
            info: '前后各增加1根尖刺；提高流血伤害；被老鼠吃掉后向8个方向各发射3根尖刺'
        }
    },
    {
        id: 29,
        name: '炭烧海星',
        type: 0,
        attackType: 0,
        rarity: 0,
        energy: 175,
        ability: '向5个触角的方向发射星星子弹；只能放置在水上',
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
            info: '向8个方向分别发射2发子弹；中路子弹能被火盆（包括转职卡）强化'
        },
        transfer4: {
            name: '爆汁怪味鱿鱼',
            energy: 225,
            info: '攻击力提高20%'
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
        skill: '减少卡片冷却时间',
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
            name: '榴莲护罩',
            energy: 175,
            info: '额外制造3*3范围的毒雾攻击老鼠'
        },
        transfer4: {
            name: '猫山王榴莲护罩',
            energy: 175,
            info: '反伤提升30%'
        },
        transfer5: {
            name: '黑刺榴莲护罩',
            energy: 250,
            info: '反伤范围、毒雾范围扩大至5*5'
        }
    },
    {
        id: 31,
        name: '樱桃反弹布丁',
        type: 4,
        rarity: 0,
        energy: 100,
        ability: '可以将直线子弹反弹至相反方向；白天会睡觉',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '双拼反弹布丁',
            energy: 100,
            info: '可以在白天使用；体力提高100%'
        },
        transfer2: {
            name: '热量反弹布丁',
            energy: 100,
            info: '被反弹子弹击中的老鼠有概率后退'
        },
        transfer3: {
            name: '芝麻红糖凉粉',
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
        attackType: 1,
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
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '草莓棉花糖',
            energy: 25,
            info: '体力提升1000%'
        },
        transfer2: {
            name: '彩虹棉花糖',
            energy: 0,
            info: '不消耗火苗；消失后造成3*3范围爆炸'
        }
    },
    {
        id: 34,
        name: '巧克力投手',
        type: 0,
        attackType: 1,
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
        reinforcement: '减少卡片冷却时间',
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
        ability: '每隔一段时间释放香味，吸引3*3范围内的老鼠移动到本行',
        reinforcement: '强化体力',
        skill: '减少卡片冷却时间',
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
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '培根香肠饭',
            energy: 325,
            info: '耗能减少；可以复活炸弹型卡片'
        },
        transfer2: {
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
        ability: '放在卡片上，可使该卡片冷却时间立刻结束',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '果蔬冰淇淋',
            energy: 75,
            info: '耗能减少'
        },
        transfer2: {
            name: '樱花冰激凌',
            energy: 75,
            info: '放置后有概率返还消耗的火苗'
        },
        transfer3: {
            name: '金箔甜筒',
            energy: 75,
            info: '作用范围扩大至3*3'
        },
        transfer4: {
            name: '金箔可可甜筒',
            energy: 75,
            info: '作用范围扩大至5*5'
        },
        transfer5: {
            name: '极寒冰沙',
            energy: 75,
            info: '全体卡片冷却时间立刻结束'
        }
    },
    {
        id: 39,
        name: '煮蛋器投手',
        type: 0,
        attackType: 1,
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
        attackType: 3,
        rarity: 0,
        energy: 200,
        ability: '发射1枚糖葫芦炮弹，全屏追踪攻击空中老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '水果糖葫芦弹',
            energy: 200,
            info: '炮弹飞行速度提高50%；攻击附加减速效果'
        },
        transfer2: {
            name: '七彩糖葫芦弹',
            energy: 200,
            info: '攻击力提高30%'
        },
        transfer3: {
            name: '梦幻多拿滋',
            energy: 250,
            info: '一次发射2个多拿滋炮弹，全屏追踪攻击空中老鼠'
        },
        transfer4: {
            name: '仙女多拿滋',
            energy: 250,
            info: '多发射1个炮弹'
        },
        transfer5: {
            name: '女王多拿滋',
            energy: 250,
            info: '多发射1个炮弹'
        }
    },
    {
        id: 41,
        name: '辣椒粉',
        type: 3,
        rarity: 0,
        energy: 50,
        ability: '3*3十字范围爆炸，将被炸死的老鼠转化成火苗',
        reinforcement: '减少卡片冷却时间',
        skill: '提高火苗产值',
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
        attackType: 2,
        rarity: 0,
        energy: 150,
        ability: '向3*3范围喷射咖啡攻击老鼠；白天会睡觉',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '香醇咖啡壶',
            energy: 150,
            info: '攻击力提高50%；攻击附加减速效果'
        },
        transfer2: {
            name: '原子咖啡壶',
            energy: 225,
            info: '攻击范围扩大至5*5'
        },
        transfer3: {
            name: '甜橙榨汁机',
            energy: 225,
            info: '向5*5范围喷射果汁攻击老鼠；可以在白天使用'
        },
        transfer4: {
            name: '草莓榨汁机',
            energy: 275,
            info: '增加1波果汁伤害'
        },
        transfer5: {
            name: '大菠萝榨汁机',
            energy: 275,
            info: '攻击力提高100%；场上每多一个大菠萝榨汁机，全体旋转咖啡喷壶（包括转职卡）伤害提升一次'
        }
    },
    {
        id: 43,
        name: '章鱼烧',
        type: 0,
        attackType: 3,
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
            info: '减少卡片冷却时间；一次发射3枚回旋镖'
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
        attackType: 1,
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
        type: 4,
        rarity: 0,
        energy: 200,
        ability: '提高3*3范围内生产型卡片的火苗产值',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '炎阳火龙果',
            energy: 200,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '九天皓日火龙果',
            energy: 200,
            info: '增幅提高30%'
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
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '鼠鼠蛋糕加强器',
            energy: 175,
            info: '体力提升500%'
        },
        transfer2: {
            name: '喵博士蛋糕加强器',
            energy: 200,
            info: '被老鼠吃掉后返还消耗的火苗'
        },
        transfer3: {
            name: '美味水果塔',
            energy: 200,
            info: '增幅提高10%；被老鼠啃咬时向3*3范围反弹伤害'
        },
        transfer4: {
            name: '风车水果塔',
            energy: 225,
            info: '增幅提高10%；被老鼠吃掉后造成3*3范围爆炸'
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
        attackType: 1,
        rarity: 0,
        energy: 375,
        ability: '每隔一段时间发射1枚巧克力炸弹轰炸最前方3*3矩形范围内的老鼠',
        reinforcement: '提高攻击速度',
        skill: '减少卡片冷却时间',
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
            info: '攻击力提高30%；放置后立即攻击一次'
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
        reinforcement: '减少卡片冷却时间',
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
    {
        id: 49,
        name: '双子座精灵',
        type: 1,
        rarity: 3,
        energy: 200,
        ability: '一次生产4朵火苗',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值',
        transfer1: {
            name: '双子座战将',
            energy: 200,
            info: '多生产2朵火苗'
        },
        transfer2: {
            name: '双子座星宿',
            energy: 200,
            info: '多生产2朵火苗'
        }
    },
    {
        id: 50,
        name: '天秤座精灵',
        type: 0,
        attackType: 0,
        rarity: 3,
        energy: 150,
        ability: '对前后各发射3发强力子弹；子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '天秤座战将',
            energy: 150,
            info: '前后各增加1发子弹'
        },
        transfer2: {
            name: '天秤座星宿',
            energy: 150,
            info: '前后各增加1发子弹'
        }
    },
    {
        id: 51,
        name: '射手座精灵',
        type: 0,
        attackType: 0,
        rarity: 3,
        energy: 300,
        ability: '同时向正前方三行发射4发强力箭，中间2发，两边各1发；子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '射手座战将',
            energy: 300,
            info: '两边各增加1发子弹'
        },
        transfer2: {
            name: '射手座星宿',
            energy: 300,
            info: '三行各增加1发子弹'
        }
    },
    {
        id: 52,
        name: '双鱼座精灵',
        type: 0,
        attackType: 1,
        rarity: 3,
        energy: 200,
        ability: '投掷2枚强力冰鱼，并对3*3范围的鼠军产生40%的溅射伤害',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '双鱼座战将',
            energy: 200,
            info: '一次投掷3枚强力冰鱼'
        },
        transfer2: {
            name: '双鱼座星宿',
            energy: 200,
            info: '一次投掷4枚强力冰鱼'
        }
    },
    {
        id: 53,
        name: '巨蟹座精灵',
        type: 0,
        attackType: 3,
        rarity: 3,
        energy: 225,
        ability: '扔出4发强力大钳子，全屏跟踪，无死角攻击',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '巨蟹座战将',
            energy: 225,
            info: '增加1发子弹'
        },
        transfer2: {
            name: '巨蟹座星宿',
            energy: 225,
            info: '增加1发子弹'
        }
    },
    {
        id: 54,
        name: '金牛座精灵',
        type: 4,
        rarity: 3,
        energy: 175,
        ability: '凡是穿透它能变成火弹的子弹，威力伤害超强提升',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '金牛座战将',
            energy: 175,
            info: '增幅提高10%'
        },
        transfer2: {
            name: '金牛座星宿',
            energy: 175,
            info: '增幅提高10%'
        }
    },
    {
        id: 55,
        name: '狮子座精灵',
        type: 0,
        attackType: 2,
        rarity: 3,
        energy: 275,
        ability: '连续快速向周边5*5范围发出猛烈攻击，海陆空交通管制',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '狮子座战将',
            energy: 275,
            info: '攻击力提高100%'
        },
        transfer2: {
            name: '狮子座星宿',
            energy: 275,
            info: '攻击力提高100%'
        }
    },
    {
        id: 56,
        name: '处女座精灵',
        type: 2,
        rarity: 3,
        energy: 175,
        ability: '保护被罩住的卡片，被老鼠啃咬时向3*3范围反弹伤害',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '处女座战将',
            energy: 200,
            info: '反伤提升30%'
        },
        transfer2: {
            name: '处女座星宿',
            energy: 250,
            info: '反伤范围扩大至5*5'
        }
    },
    {
        id: 57,
        name: '水瓶座精灵',
        type: 3,
        rarity: 3,
        energy: 150,
        ability: '进化版超级炸弹，对本行本列造成巨大伤害，对爆炸中心造成双倍伤害',
        reinforcement: '减少卡片冷却时间',
        skill: '提高爆炸伤害',
        transfer1: {
            name: '水瓶座战将',
            energy: 200,
            info: '爆炸伤害增加30%'
        },
        transfer2: {
            name: '水瓶座星宿',
            energy: 250,
            info: '爆炸范围扩大至3行3列'
        }
    },
    {
        id: 58,
        name: '天蝎座精灵',
        type: 0,
        attackType: 1,
        rarity: 3,
        energy: 200,
        ability: '向本行连续4格发射猩红毒针，分裂式穿透攻击；攻击额外附加毒伤，每秒减少老鼠1%的生命',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '天蝎座战将',
            energy: 200,
            info: '攻击力提高100%'
        },
        transfer2: {
            name: '天蝎座星宿',
            energy: 200,
            info: '毒伤效果提高至2%'
        }
    },
    {
        id: 59,
        name: '白羊座精灵',
        type: 3,
        rarity: 3,
        energy: 300,
        ability: '召唤一只白羊精灵，休息一段时间后，撞飞一整行老鼠',
        reinforcement: '减少卡片冷却时间',
        skill: '减少休息时间',
        transfer1: {
            name: '白羊座战将',
            energy: 300,
            info: '将撞飞的老鼠转化为火苗'
        },
        transfer2: {
            name: '白羊座星宿',
            energy: 300,
            info: '召唤3只白羊精灵，撞飞3行老鼠'
        }
    },
    {
        id: 60,
        name: '摩羯座精灵',
        type: 0,
        attackType: 4,
        rarity: 3,
        energy: 300,
        ability: '召唤摩羯精灵，在5*5范围内制造暴风雪，持续攻击老鼠并令其减速；一段时间后消失',
        reinforcement: '提高攻击力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '摩羯座战将',
            energy: 300,
            info: '体力提高50%'
        },
        transfer2: {
            name: '摩羯座星宿',
            energy: 300,
            info: '延长摩羯精灵存在时间'
        }
    },
    {
        id: 61,
        name: '幻幻鸡',
        type: 4,
        rarity: 2,
        energy: 375,
        ability: '放置后变身出2张上一次放置的卡片，不能变身为同类卡片、冰淇淋',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '学者幻幻鸡',
            energy: 325,
            info: '耗能减少；变身后造成5*5范围爆炸'
        },
        transfer2: {
            name: '导师幻幻鸡',
            energy: 325,
            info: '变身出3张上一次放置的卡片'
        }
    },
    {
        id: 62,
        name: '咕咕鸡',
        type: 1,
        rarity: 2,
        energy: 100,
        ability: '一次生产4朵小火苗，成长后生成大火苗；白天会睡觉',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值',
        transfer1: {
            name: '萤火咕咕鸡',
            energy: 100,
            info: '放置卡片时立即产火'
        },
        transfer2: {
            name: '梦幻咕咕鸡',
            energy: 100,
            info: '多生产2朵火苗'
        },
    },
    {
        id: 63,
        name: '派派鸡',
        type: 0,
        attackType: 0,
        rarity: 2,
        energy: 200,
        ability: '向前方发射4颗具有穿透效果的鸡米花；子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '少校派派鸡',
            energy: 250,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '将军派派鸡',
            energy: 350,
            info: '向前方三行各发射4颗具有穿透效果的鸡米花'
        }
    },
    {
        id: 64,
        name: '盘盘鸡',
        type: 4,
        rarity: 2,
        energy: 25,
        ability: '放在水上，承载其他防御卡',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '王者盘盘鸡',
            energy: 0,
            info: '不消耗火苗；体力提升1000%'
        },
        transfer2: {
            name: '超神盘盘鸡',
            energy: 0,
            info: '被老鼠吃掉后产生3*3十字爆炸；可以在所有特殊场地（水上、空中、岩浆等）承载卡片'
        }
    },
    {
        id: 65,
        name: '功夫汪',
        type: 0,
        attackType: 4,
        rarity: 2,
        energy: 150,
        ability: '向前后方2格出拳攻击老鼠，并有概率眩晕老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '铁皮功夫汪',
            energy: 150,
            info: '攻击力提高100%'
        },
        transfer2: {
            name: '金甲功夫汪',
            energy: 150,
            info: '攻击范围扩大至前方或后方3格；攻击附加1格溅射伤害'
        }
    },
    {
        id: 66,
        name: '布丁汪',
        type: 4,
        rarity: 2,
        energy: 100,
        ability: '反弹直线子弹，并提高子弹些许攻击力',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '双拼布丁汪',
            energy: 100,
            info: '体力提高100%'
        },
        transfer2: {
            name: '什锦布丁汪',
            energy: 100,
            info: '提升附加攻击力100%'
        },
    },
    {
        id: 67,
        name: '喷壶汪',
        type: 0,
        attackType: 2,
        rarity: 2,
        energy: 150,
        ability: '喷射食用油，攻击前方五格的老鼠；穿过火盆（包括转职卡）将喷射火焰',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '高压喷壶汪',
            energy: 150,
            info: '攻击力提高100%'
        },
        transfer2: {
            name: '连射喷壶汪',
            energy: 150,
            info: '每隔一段时间进入狂暴模式，攻速提高100%'
        }
    },
    {
        id: 68,
        name: '酋长汪',
        type: 3,
        rarity: 2,
        energy: 300,
        ability: '放置后休息一会，向前奔跑，吓飞一整行老鼠',
        reinforcement: '减少卡片冷却时间',
        skill: '减少休息时间',
        transfer1: {
            name: '天使酋长汪',
            energy: 300,
            info: '将吓飞的老鼠转化为火苗'
        },
        transfer2: {
            name: '金翼酋长汪',
            energy: 300,
            info: '能吓飞3行老鼠'
        }
    },
    {
        id: 69,
        name: '猪猪加强器',
        type: 4,
        rarity: 2,
        energy: 175,
        ability: '发射信号波，为本行投掷类卡片增加攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '猪猪信号塔',
            energy: 175,
            info: '体力提升500%'
        },
        transfer2: {
            name: '猪猪发射站',
            energy: 175,
            info: '增幅提高35%'
        }
    },
    {
        id: 70,
        name: '清障猪',
        type: 4,
        rarity: 2,
        energy: 225,
        ability: '炸掉3*3范围内的老鼠洞、路障',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '拉环清障猪',
            energy: 225,
            info: '附加相同范围的爆炸伤害'
        },
        transfer2: {
            name: '核能清障猪',
            energy: 225,
            info: '爆炸范围扩大至5*5'
        }
    },
    {
        id: 71,
        name: '猪猪料理机',
        type: 0,
        attackType: 0,
        rarity: 2,
        energy: 175,
        ability: '向5个方向各发射2枚刀片',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '猪猪搅拌机',
            energy: 175,
            info: '每路增加1枚刀片'
        },
        transfer2: {
            name: '猪猪破壁机',
            energy: 175,
            info: '向8个方向各发射3枚刀片'
        }
    },
    {
        id: 72,
        name: '奶茶猪',
        type: 0,
        attackType: 0,
        rarity: 2,
        energy: 250,
        ability: '可以同时攻击本行空中和陆地老鼠；对空发射4个珍珠，对地发射2个红豆；对地子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '紫薯奶茶猪',
            energy: 250,
            info: '对空对地各增加1发子弹'
        },
        transfer2: {
            name: '爆弹奶茶猪',
            energy: 250,
            info: '对空对地各增加1发子弹'
        }
    },
    {
        id: 73,
        name: '招财喵',
        type: 0,
        attackType: 3,
        rarity: 2,
        energy: 300,
        ability: '召唤2枚带有3*3范围群体伤害的金币巧克力攻击全场最近的陆地、空中老鼠，金币巧克力落地后可以阻挡老鼠前进',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '贵族招财喵',
            energy: 300,
            info: '提高金币巧克力的体力；金币巧克力被老鼠吃掉后会造成一格范围的爆炸'
        },
        transfer2: {
            name: '御守招财喵',
            energy: 300,
            info: '一次召唤3枚金币巧克力'
        }
    },
    {
        id: 74,
        name: '喵喵炉',
        type: 2,
        rarity: 2,
        energy: 125,
        ability: '保护被罩住的卡片；每隔一段时间生产2朵火苗',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '靓粉喵喵炉',
            energy: 125,
            info: '强化同时提高火苗产值'
        },
        transfer2: {
            name: '炫紫喵喵炉',
            energy: 125,
            info: '一次生产4朵火苗'
        }
    },
    {
        id: 75,
        name: '防空喵',
        type: 0,
        attackType: 3,
        rarity: 2,
        energy: 225,
        ability: '弹出2个猫猫钢弹，全屏追踪轰炸空中鼠军',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '钢盔防空喵',
            energy: 225,
            info: '攻击力提高30%；攻击附加减速效果'
        },
        transfer2: {
            name: '狂暴防空喵',
            energy: 225,
            info: '一次弹出4个猫猫钢弹'
        },
    },
    {
        id: 76,
        name: '治愈喵',
        type: 4,
        rarity: 2,
        energy: 375,
        ability: '复活3*3范围内消失的卡片，对一次性卡片无效',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '武装治愈喵',
            energy: 325,
            info: '耗能减少；可以复活炸弹型卡片'
        },
        transfer2: {
            name: '全能治愈喵',
            energy: 325,
            info: '复活范围扩大至5*5'
        }
    },
    {
        id: 77,
        name: '逆转牛',
        type: 4,
        rarity: 2,
        energy: 150,
        ability: '将5*5范围内的老鼠传送回起点',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '匀速逆转牛',
            energy: 150,
            info: '被传送的老鼠会眩晕一段时间'
        },
        transfer2: {
            name: '光速逆转牛',
            energy: 150,
            info: '作用范围扩大至全屏'
        }
    },
    {
        id: 78,
        name: '旋风牛',
        type: 4,
        rarity: 2,
        energy: 350,
        ability: '吹走大雾、沙尘暴和所有空中老鼠',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '强压旋风牛',
            energy: 350,
            info: '使地面鼠军进入一段时间的虚弱状态，受到的伤害增加20%'
        },
        transfer2: {
            name: '极速旋风牛',
            energy: 350,
            info: '能吹走所有老鼠制造的障碍物'
        }
    },
    {
        id: 79,
        name: '火焰牛',
        type: 1,
        rarity: 2,
        energy: 100,
        ability: '生产火苗；能够额外储存最多1500火苗，并在消失后返还',
        reinforcement: '增加存火比例；减少卡片冷却时间',
        skill: '提高火苗产值',
        transfer1: {
            name: '幽蓝火焰牛',
            energy: 100,
            info: '一次生产2朵火苗'
        },
        transfer2: {
            name: '幻紫火焰牛',
            energy: 100,
            info: '储存火苗上限提升至3000'
        }
    },
    {
        id: 80,
        name: '弩箭牛',
        type: 0,
        attackType: 3,
        rarity: 2,
        energy: 300,
        ability: '一次狙击3行内的3只老鼠；每次攻击有5%概率冰冻老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '精英弩箭牛',
            energy: 300,
            info: '攻击力提高30%；精英弩箭牛每击杀一只老鼠，自己增加些许攻击力'
        },
        transfer2: {
            name: '暴力弩箭牛',
            energy: 300,
            info: '一次狙击5行内的5只老鼠；每次攻击有10%概率冰冻老鼠'
        }
    },
    {
        id: 81,
        name: '铛铛虎',
        type: 0,
        attackType: 1,
        rarity: 2,
        energy: 200,
        ability: '投掷高温糕饼，持续灼烧前方3*3范围内的老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '速热铛铛虎',
            energy: 200,
            info: '攻击力提高30%；攻击范围扩大至前方5格'
        },
        transfer2: {
            name: '微波铛铛虎',
            energy: 250,
            info: '燃烧范围扩大至5*5'
        }
    },
    {
        id: 82,
        name: '香料虎',
        type: 4,
        rarity: 2,
        energy: 225,
        ability: '提高3*3范围内追踪类卡片的攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '海洋香料虎',
            energy: 225,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '魔力香料虎',
            energy: 225,
            info: '增幅提高35%'
        }
    },
    {
        id: 83,
        name: '电流虎',
        type: 0,
        attackType: 3,
        rarity: 2,
        energy: 300,
        ability: '释放电弧持续追踪攻击前方三行内最近的陆地或空中老鼠一段时间，并对这只老鼠3*3范围内最多5只老鼠造成50%的连锁伤害',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '磁铁电流虎',
            energy: 300,
            info: '连锁伤害提高至75%；有30%的概率释放红色高能电弧，攻击力翻倍，并使老鼠眩晕'
        },
        transfer2: {
            name: '氢能电流虎',
            energy: 300,
            info: '一次攻击2只老鼠'
        }
    },
    {
        id: 84,
        name: '大福虎',
        type: 3,
        rarity: 2,
        energy: 175,
        ability: '收买3*3范围内的所有老鼠，让它们原路返回，为我们作战',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '草莓大福虎',
            energy: 175,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '可可大福虎',
            energy: 175,
            info: '消失后，短暂提高5*5范围内卡片的攻速'
        }
    },
    {
        id: 85,
        name: '炎焱兔',
        type: 4,
        rarity: 2,
        energy: 200,
        ability: '提高3*3范围内生产型卡片的火苗产值',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '火火炎焱兔',
            energy: 200,
            info: '增幅提高30%'
        },
        transfer2: {
            name: '焱焱炎焱兔',
            energy: 200,
            info: '作用范围扩大至5*5'
        }
    },
    {
        id: 86,
        name: '星星兔',
        type: 0,
        attackType: 0,
        rarity: 2,
        energy: 225,
        ability: '向前方5个方向各发射1个星星子弹；中路子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '科技星星兔',
            energy: 225,
            info: '每路增加1发子弹'
        },
        transfer2: {
            name: '宇宙星星兔',
            energy: 225,
            info: '每路增加1发子弹'
        }
    },
    {
        id: 87,
        name: '蛋蛋兔',
        type: 4,
        rarity: 2,
        energy: 100,
        ability: '每隔一段时间释放香味，吸引3*3范围内的老鼠移动到本行',
        reinforcement: '强化体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '智能蛋蛋兔',
            energy: 150,
            info: '吸引范围扩大至5*5'
        },
        transfer2: {
            name: '外星蛋蛋兔',
            energy: 350,
            info: '外星蛋蛋兔在场期间能储存周围3*3范围内攻击型卡片的伤害，上限60000，外星蛋蛋兔消失后释放一整行能量波攻击老鼠'
        }
    },
    {
        id: 88,
        name: '勺勺兔',
        type: 0,
        attackType: 1,
        rarity: 2,
        energy: 300,
        ability: '向前方3行分别投掷1发带有3*3溅射范围、35%溅射伤害的胡萝卜炮弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '增强勺勺兔',
            energy: 350,
            info: '中路增加1发炮弹；溅射伤害提升至45%'
        },
        transfer2: {
            name: '盖世勺勺兔',
            energy: 350,
            info: '上下两路各增加1发炮弹'
        }
    },
    {
        id: 89,
        name: '吞噬龙',
        type: 0,
        attackType: 4,
        rarity: 2,
        energy: 200,
        ability: '用大嘴吞噬3*3范围的陆地鼠军，然后消化掉',
        reinforcement: '减少消化时间',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '幼年吞噬龙',
            energy: 200,
            info: '被老鼠吃掉后造成3*3范围爆炸'
        },
        transfer2: {
            name: '成年吞噬龙',
            energy: 200,
            info: '作用范围扩大至5*5'
        }
    },
    {
        id: 90,
        name: '花火龙',
        type: 1,
        rarity: 2,
        energy: 150,
        ability: '放置后准备一段时间，释放产生火苗的烟花',
        reinforcement: '提高火苗产值',
        skill: '减少准备时间',
        transfer1: {
            name: '灼灼花火龙',
            energy: 150,
            info: '放置后返还消耗的火苗'
        },
        transfer2: {
            name: '炽焰花火龙',
            energy: 150,
            info: '提高火苗产量'
        }
    },
    {
        id: 91,
        name: '烈焰龙',
        type: 0,
        attackType: 2,
        rarity: 2,
        energy: 250,
        ability: '向前方喷射高温穿透火焰，灼烧沿途老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '火山烈焰龙',
            energy: 250,
            info: '攻击力提高60%'
        },
        transfer2: {
            name: '岩浆烈焰龙',
            energy: 325,
            info: '攻击范围扩大至前方3行'
        }
    },
    {
        id: 92,
        name: '转龙壶',
        type: 4,
        rarity: 2,
        energy: 200,
        ability: '减少3*3范围内卡片30%的冷却时间',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '充能转龙壶',
            energy: 200,
            info: '减少卡片冷却时间能力提升至50%'
        },
        transfer2: {
            name: '巨星转龙壶',
            energy: 200,
            info: '作用范围扩大至5*5'
        }
    },
    {
        id: 93,
        name: '赖皮蛇',
        type: 0,
        attackType: 5,
        rarity: 2,
        energy: 375,
        ability: '召唤1个延固定轨迹飞行的刺刺球，伤害沿途的海陆空老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '宝石赖皮蛇',
            energy: 375,
            info: '一次召唤2个刺刺球'
        },
        transfer2: {
            name: '大王赖皮蛇',
            energy: 375,
            info: '一次召唤3个刺刺球；被击杀的老鼠化为泡沫'
        }
    },
    {
        id: 94,
        name: '导弹蛇',
        type: 0,
        attackType: 1,
        rarity: 2,
        energy: 400,
        ability: '发射一枚柿子导弹轰炸最前方3*3矩形范围内的老鼠',
        reinforcement: '提高攻击速度',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '舰地导弹蛇',
            energy: 400,
            info: '攻击力提高35%；柿子导弹爆炸后能眩晕未被炸死的老鼠'
        },
        transfer2: {
            name: '洲际导弹蛇',
            energy: 400,
            info: '一次发射3枚柿子导弹'
        }
    },
    {
        id: 95,
        name: '蛇蛇酒',
        type: 4,
        rarity: 2,
        energy: 400,
        ability: '为3*3范围内卡片随机升星或者降星（1-3星），持续一段时间后恢复',
        reinforcement: '减少卡片冷却时间',
        skill: '延长作用时间',
        transfer1: {
            name: '仙露蛇蛇酒',
            energy: 400,
            info: '星级升降范围扩大至1-4星'
        },
        transfer2: {
            name: '琼浆蛇蛇酒',
            energy: 400,
            info: '星级只升不降'
        }
    },
    {
        id: 96,
        name: '魔杖蛇',
        type: 4,
        rarity: 2,
        energy: 225,
        ability: '提高3*3范围内喷射类卡片的攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '青木魔杖蛇',
            energy: 225,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '凤羽魔杖蛇',
            energy: 225,
            info: '增幅提高80%'
        }
    },
    {
        id: 97,
        name: '美味计时器',
        type: 4,
        rarity: 1,
        energy: 275,
        ability: '放置后一段时间内，持续给该格内的卡片缩短30%的冷却时间',
        reinforcement: '减少卡片冷却时间',
        skill: '延长卡片存在时间',
        transfer1: {
            name: '佳肴计时器',
            energy: 275,
            info: '减少卡片冷却时间能力提升至50%'
        },
        transfer2: {
            name: '珍馐计时器',
            energy: 275,
            info: '作用范围增加前后两格'
        }
    },
    {
        id: 98,
        name: '关东煮',
        type: 4,
        rarity: 1,
        energy: 150,
        ability: '提高3*3范围内喷射类卡片的攻击力；白天会睡觉',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '福袋关东煮',
            energy: 150,
            info: '可以在白天使用；被老鼠吃掉后喷射十字蒸汽攻击本行本列的老鼠'
        },
        transfer2: {
            name: '海鲜关东煮',
            energy: 150,
            info: '增幅提高40%'
        },
        transfer3: {
            name: '藤椒钵钵鸡',
            energy: 225,
            info: '作用范围扩大至5*5'
        },
        transfer4: {
            name: '飘香钵钵鸡',
            energy: 225,
            info: '十字蒸汽的攻击力提高50%'
        },
        transfer5: {
            name: '川香钵钵鸡',
            energy: 225,
            info: '增幅提高40%'
        }
    },
    {
        id: 99,
        name: '猫猫盒',
        type: 0,
        attackType: 5,
        rarity: 1,
        energy: 200,
        ability: '发射1发带有3*3溅射范围、25%溅射伤害的子弹攻击本行老鼠，优先攻击空中老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '猫猫箱',
            energy: 200,
            info: '溅射伤害提高至40%'
        },
        transfer2: {
            name: '小丑猫猫箱',
            energy: 200,
            info: '增加1发子弹'
        },
        transfer3: {
            name: '弹簧虎',
            energy: 200,
            info: '子弹有概率击退老鼠'
        },
        transfer4: {
            name: '飞行弹簧虎',
            energy: 200,
            info: '攻击力提高30%'
        },
        transfer5: {
            name: '机器弹簧虎',
            energy: 200,
            info: '增加1发子弹'
        }
    },
    {
        id: 100,
        name: '榴莲',
        type: 4,
        rarity: 1,
        energy: 100,
        ability: '提高3*3范围内近战类卡片的攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '雪山榴莲',
            energy: 100,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '冰河世纪榴莲',
            energy: 100,
            info: '增幅提高100%'
        }
    },
    {
        id: 101,
        name: '肥牛火锅',
        type: 0,
        attackType: 2,
        rarity: 0,
        energy: 175,
        ability: '向前方5格喷射高温穿透火焰，灼烧沿途老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '酸汤肥牛锅',
            energy: 200,
            info: '攻击力提高20%'
        },
        transfer2: {
            name: '海鲜肥牛锅',
            energy: 250,
            info: '攻击范围扩大至一行'
        },
        transfer3: {
            name: '招牌麻辣香锅',
            energy: 300,
            info: '攻击范围扩大至3行'
        },
        transfer4: {
            name: '孜然羊肉锅',
            energy: 325,
            info: '攻击有概率将老鼠转化成火苗'
        },
        transfer5: {
            name: '酱香鱿鱼锅',
            energy: 375,
            info: '攻击力提高40%'
        }
    },
    {
        id: 102,
        name: '苏打气泡',
        type: 4,
        rarity: 0,
        energy: 25,
        ability: '为该格内的卡片提供氧气',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '五彩香皂泡泡',
            energy: 0,
            info: '不消耗火苗'
        }
    },
    {
        id: 103,
        name: '老虎蟹面包',
        type: 2,
        rarity: 0,
        energy: 150,
        ability: '阻挡老鼠进攻，也可阻挡特殊老鼠的冲刺',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '帝王蟹面包',
            energy: 150,
            info: '受伤后会缓慢自愈'
        }
    },
    {
        id: 104,
        name: '国王小笼包',
        type: 0,
        attackType: 0,
        rarity: 0,
        energy: 125,
        ability: '向本行前方发射1个小笼包子弹；可承载最多2个小笼包（包括转职卡）；承载卡片后，国王小笼包将叠加此卡片的攻击力',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '红心国王小笼包',
            energy: 125,
            info: '承载最多3个小笼包（包括转职卡）'
        },
        transfer2: {
            name: '黑心国王小笼包',
            energy: 125,
            info: '承载最多5个小笼包（包括转职卡）'
        }
    },
    {
        id: 105,
        name: '海盐粉',
        type: 4,
        rarity: 0,
        energy: 125,
        ability: '每休息一段时间后，向3*3范围内撒盐，为被冰冻的卡片解冻',
        reinforcement: '减少卡片冷却时间',
        skill: '减少休息时间',
        transfer1: {
            name: '芥末海盐粉',
            energy: 225,
            info: '作用范围内卡片的耗能降低25（最低为0），对一次性卡片无效'
        },
        transfer2: {
            name: '十三香海盐粉',
            energy: 225,
            info: '作用范围扩大至5*5'
        }
    },
    {
        id: 106,
        name: '雪糕投手',
        type: 0,
        attackType: 1,
        rarity: 0,
        energy: 150,
        ability: '投掷冰淇淋团攻击并定身一格内的老鼠；被定身的老鼠进入虚弱状态，受到的伤害增加30%',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '麦旋风投手',
            energy: 175,
            info: '延长定身时间'
        },
        transfer2: {
            name: '水果雪芭投手',
            energy: 200,
            info: '被定身的老鼠受到的伤害增加50%'
        }
    },
    {
        id: 107,
        name: '防风草沙拉',
        type: 4,
        rarity: 0,
        energy: 125,
        ability: '每休息一段时间后，旋转叶片，为3*3范围内的卡片施加保护，免受龙卷风侵袭',
        reinforcement: '减少卡片冷却时间',
        skill: '减少休息时间',
        transfer1: {
            name: '蛋黄酱防风草',
            energy: 125,
            info: '作用范围扩大至5*5；作用范围内卡片的体力提高50%'
        }
    },
    {
        id: 108,
        name: '烤蜥蜴投手',
        type: 0,
        attackType: 1,
        rarity: 1,
        energy: 275,
        ability: '向前方投掷1枚带有3*3溅射范围、25%溅射伤害的配料爆弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '坚果蜥蜴投手',
            energy: 275,
            info: '攻击力提高45%'
        },
        transfer2: {
            name: '花椒蜥蜴投手',
            energy: 275,
            info: '溅射伤害提高至50%'
        },
        transfer3: {
            name: '窃蛋龙投手',
            energy: 300,
            info: '向前方3行分别投掷1枚带有3*3溅射范围、50%溅射伤害的恐龙蛋'
        },
        transfer4: {
            name: '蓝角窃蛋龙投手',
            energy: 350,
            info: '中路增加1枚恐龙蛋'
        },
        transfer5: {
            name: '钢爪窃蛋龙投手',
            energy: 350,
            info: '上下两路各增加1枚恐龙蛋'
        }
    },
    {
        id: 109,
        name: '炙烤灯笼鱼',
        type: 0,
        attackType: 3,
        rarity: 1,
        energy: 325,
        ability: '释放激光持续追踪攻击前方三行内最近的陆地或空中老鼠一段时间，并对这只老鼠3*3范围内最多4只老鼠造成25%的连锁伤害',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '炙烤辣灯笼鱼',
            energy: 275,
            info: '连锁伤害提高至50%；耗能减少'
        },
        transfer2: {
            name: '炙烤五香灯笼鱼',
            energy: 275,
            info: '攻击力提高35%'
        },
        transfer3: {
            name: '美味电鳗',
            energy: 275,
            info: '释放电弧持续追踪攻击前方三行内最近的陆地或空中老鼠一段时间，并对这只老鼠3*3范围内最多5只老鼠造成75%的连锁伤害'
        },
        transfer4: {
            name: '变异美味电鳗',
            energy: 275,
            info: '有30%的概率释放红色高能电弧，攻击力翻倍，并使老鼠眩晕'
        },
        transfer5: {
            name: '霸王美味电鳗',
            energy: 275,
            info: '一次攻击2只老鼠'
        }
    },
    {
        id: 110,
        name: '莓果点心',
        type: 4,
        rarity: 1,
        energy: 225,
        ability: '提高3*3范围内追踪类卡片的攻击力',
        reinforcement: '提高增幅倍率',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '薄荷莓果点心',
            energy: 225,
            info: '作用范围扩大至5*5'
        },
        transfer2: {
            name: '流心莓果点心',
            energy: 225,
            info: '增幅提高35%'
        },
        transfer3: {
            name: '缤纷糖果机',
            energy: 275,
            info: '提高5*5范围内追踪类卡片的攻击力；向3行范围内任意方向发射1颗可追踪老鼠的糖球'
        },
        transfer4: {
            name: '水果糖果机',
            energy: 275,
            info: '糖球附带3*3溅射范围、45%溅射伤害'
        },
        transfer5: {
            name: '可可糖果机',
            energy: 275,
            info: '增幅提高35%；一次发射2颗糖球'
        }
    },
    {
        id: 111,
        name: '麦芽糖',
        type: 4,
        rarity: 1,
        energy: 75,
        ability: '拥有极高体力，可在空中以及岩浆上承载卡片',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '莓莓麦芽糖',
            energy: 0,
            info: '不消耗火苗'
        },
        transfer2: {
            name: '魔法软糖',
            energy: 0,
            info: '可以在所有特殊场地（水上、空中、岩浆等）承载卡片'
        },
        transfer3: {
            name: '魔法师软糖',
            energy: 0,
            info: '消失后造成3*3范围爆炸'
        },
        transfer4: {
            name: '魔导士软糖',
            energy: 0,
            info: '提高被承载卡片的体力'
        }
    },
    {
        id: 112,
        name: '炸炸菇',
        type: 4,
        rarity: 0,
        energy: 75,
        ability: '爆炸后将周围的蘑菇障碍物转化为火苗',
        reinforcement: '减少卡片冷却时间',
        skill: '提高火苗产值',
        transfer1: {
            name: '魔王炸炸菇',
            energy: 75,
            info: '爆炸附加伤害'
        }
    },
    {
        id: 113,
        name: '扑克牌护罩',
        type: 2,
        rarity: 1,
        energy: 125,
        ability: '保护卡片并且防止该格长出蘑菇，同时自动生产火苗',
        reinforcement: '减少卡片冷却时间',
        skill: '提高火苗产值',
        transfer1: {
            name: '精致黑桃护罩',
            energy: 125,
            info: '强化同时提高卡片体力；被老鼠啃咬时向3*3范围反弹伤害'
        },
        transfer2: {
            name: '豪华梅花护罩',
            energy: 125,
            info: '一次生产2朵火苗；消失后造成3*3范围爆炸'
        }
    },
    {
        id: 114,
        name: '糖渍刺梨',
        type: 0,
        attackType: 4,
        rarity: 1,
        energy: 125,
        ability: '刺破老鼠的双脚，轮胎也不在话下',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '烟熏刺梨',
            energy: 125,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '生腌酸刺梨',
            energy: 125,
            info: '有概率使被攻击的老鼠眩晕；消失后爆炸'
        }
    },
    {
        id: 115,
        name: '坚果爆炒机',
        type: 0,
        attackType: 0,
        rarity: 1,
        energy: 225,
        ability: '向前方5个方向各发射1个坚果子弹；中路子弹能被火盆（包括转职卡）强化',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '橡子搅拌机',
            energy: 225,
            info: '攻击力提高30%'
        },
        transfer2: {
            name: '松塔爆破机',
            energy: 225,
            info: '攻击力提高30%'
        },
        transfer3: {
            name: '爆蛋微波炉',
            energy: 225,
            info: '向前方5个方向各发射2颗外星鸟蛋；中路子弹能被火盆（包括转职卡）强化'
        },
        transfer4: {
            name: '星际爆蛋微波炉',
            energy: 275,
            info: '外星鸟蛋附带1格溅射范围、25%溅射伤害'
        },
        transfer5: {
            name: '宇宙爆蛋微波炉',
            energy: 275,
            info: '每路增加1颗外星鸟蛋；被老鼠吃掉后造成5*5范围爆炸'
        }
    },
    {
        id: 116,
        name: '爆竹',
        type: 3,
        rarity: 1,
        energy: 125,
        ability: '3*3矩形范围内爆炸',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '美食烟花',
            energy: 150,
            info: '爆炸伤害增加30%'
        },
        transfer2: {
            name: '华丽烟花',
            energy: 200,
            info: '爆炸范围扩大至5*5'
        }
    },
    {
        id: 117,
        name: '7周年蜡烛',
        type: 1,
        rarity: 1,
        energy: 25,
        ability: '生产小火苗，成长后生成大火苗；白天会睡觉',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值'
    },
    {
        id: 118,
        name: '8周年蛋糕',
        type: 0,
        attackType: 1,
        rarity: 1,
        energy: 150,
        ability: '投掷带有伤害的蛋糕子弹，以及有燃烧效果的蜡烛子弹',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '8周年慕斯',
            energy: 150,
            info: '攻击力提高50%'
        },
        transfer2: {
            name: '8周年红丝绒',
            energy: 150,
            info: '每攻击9次，投掷一发可乐炸弹'
        }
    },
    {
        id: 119,
        name: '圣诞包裹',
        type: 4,
        rarity: 1,
        energy: 150,
        ability: '变身战斗卡组中的随机一张卡片，不可变身成同类卡片、冰淇淋',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '奢华圣诞包裹',
            energy: 75,
            info: '耗能减少'
        },
        transfer2: {
            name: '至尊圣诞包裹',
            energy: 75,
            info: '变身产生3*3十字伤害'
        }
    },
    {
        id: 120,
        name: '月蟾兔',
        type: 1,
        rarity: 1,
        energy: 50,
        ability: '生产火苗；被老鼠吃掉后产生1格爆炸，将被炸死的老鼠转化成火苗',
        reinforcement: '提高火苗产值',
        skill: '减少卡片冷却时间'
    },
    {
        id: 121,
        name: '生日帽',
        type: 2,
        rarity: 1,
        energy: 50,
        ability: '保护其他卡片的同时，还可以生产火苗',
        reinforcement: '提高生产速度',
        skill: '提高火苗产值'
    },
    {
        id: 122,
        name: '艾草粑粑',
        type: 4,
        rarity: 1,
        energy: 100,
        ability: '反弹大部分直线子弹，并附加伤害',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间'
    },
    {
        id: 123,
        name: '9周年幸运草扇',
        type: 4,
        rarity: 1,
        energy: 100,
        ability: '转动四叶草叶子，吹散大雾和沙尘暴、伤害空中老鼠',
        reinforcement: '延长吹散时间',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '9周年超能扇',
            energy: 100,
            info: '对全屏地面、空中老鼠造成一定伤害'
        },
        transfer2: {
            name: '9周年SSR草扇',
            energy: 100,
            info: '消失前发射5发全屏追踪、分裂攻击的三叶草子弹'
        }
    },
    {
        id: 124,
        name: '10周年烟花',
        type: 3,
        rarity: 1,
        energy: 200,
        ability: '5*5范围爆炸，将被炸死的老鼠转化成火苗',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '10周年爆竹',
            energy: 200,
            info: '火苗产值提高40%'
        },
        transfer2: {
            name: '10周年礼花',
            energy: 200,
            info: '连续造成2次爆炸'
        }
    },
    {
        id: 125,
        name: '玉兔灯笼',
        type: 3,
        rarity: 1,
        energy: 225,
        ability: '放置后准备一段时间再爆炸，并产生3*3范围的燃烧效果',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '广寒玉兔灯笼',
            energy: 225,
            info: '火焰燃烧威力提高100%'
        },
        transfer2: {
            name: '莲花玉兔灯笼',
            energy: 225,
            info: '放置后立即爆炸'
        }
    },
    {
        id: 126,
        name: '桂花酒',
        type: 2,
        rarity: 1,
        energy: 125,
        ability: '阻挡老鼠进攻；可炸伤咬破酒坛的老鼠，并残留燃烧的酒精',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间'
    },
    {
        id: 127,
        name: '贪食蛙',
        type: 0,
        attackType: 4,
        rarity: 1,
        energy: 25,
        ability: '吞咬前方最近的1只老鼠；被老鼠吃掉后产生1格爆炸伤害',
        reinforcement: '减少消化时间'
    },
    {
        id: 128,
        name: '榴莲千层饼',
        type: 2,
        rarity: 1,
        energy: 200,
        ability: '阻挡老鼠进攻；对啃咬卡片的老鼠产生伤害',
        reinforcement: '增强体力',
        skill: '减少卡片冷却时间'
    },
    {
        id: 129,
        name: '金牛烟花',
        type: 3,
        rarity: 1,
        energy: 325,
        ability: '召唤3只烟花牛，撞飞3行老鼠',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '迷幻金牛烟花',
            energy: 275,
            info: '耗能减少'
        },
        transfer2: {
            name: '璀璨金牛烟花',
            energy: 275,
            info: '放置无需格子；同时召唤两批对冲的烟花牛'
        }
    },
    {
        id: 130,
        name: '椰子果',
        type: 0,
        attackType: 4,
        rarity: 1,
        energy: 75,
        ability: '跳起秒杀前方单格鼠军，同时砸晕并伤害3*3范围的老鼠',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 131,
        name: '泡泡糖',
        type: 4,
        rarity: 1,
        energy: 150,
        ability: '放置一段时间后，变成黏住老鼠的泡泡',
        reinforcement: '减少卡片冷却时间；增强体力',
        skill: '减少准备时间',
        transfer1: {
            name: '大大泡泡糖',
            energy: 150,
            info: '泡泡持续时间延长'
        },
        transfer2: {
            name: '萄萄泡泡糖',
            energy: 150,
            info: '泡泡消失产生3*3范围爆炸'
        }
    },
    {
        id: 132,
        name: '11周年美食盒子',
        type: 4,
        rarity: 1,
        energy: 25,
        ability: '阻挡老鼠前进；为5*5范围内的卡片增加攻击力；增幅可叠加',
        reinforcement: '提高增幅倍率；增强体力',
        skill: '减少卡片冷却时间'
    },
    {
        id: 133,
        name: '深水炸弹',
        type: 3,
        rarity: 1,
        energy: 175,
        ability: '炸伤十字范围内的老鼠',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 134,
        name: '萌虎高压锅',
        type: 3,
        rarity: 1,
        energy: 300,
        ability: '眩晕全屏老鼠2秒，并在每行召唤萌虎冲锋攻击陆地、空中老鼠',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 135,
        name: '肉松清明粿',
        type: 4,
        rarity: 1,
        energy: 50,
        ability: '照亮全屏的大雾；让隐身的老鼠显形；老鼠靠近后造成3*3十字爆炸，并将老鼠变成火苗',
        reinforcement: '提高火苗产值',
        skill: '减少卡片冷却时间'
    },
    {
        id: 136,
        name: '防萤草灯笼',
        type: 4,
        rarity: 1,
        energy: 50,
        ability: '照亮全屏的大雾；让隐身的老鼠显形；对3*3老鼠产生伤害；防止萤火虫鼠自爆',
        reinforcement: '减少卡片冷却时间',
        skill: '提高攻击力'
    },
    {
        id: 137,
        name: '12周年能量饮料',
        type: 3,
        rarity: 1,
        energy: 250,
        ability: '为全屏卡片增加体力；对全屏老鼠造成伤害',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 138,
        name: '冰兔菓子',
        type: 3,
        rarity: 1,
        energy: 250,
        ability: '冰冻全屏老鼠，并对老鼠产生一定伤害',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 139,
        name: '蜂蜜史莱姆',
        type: 0,
        attackType: 1,
        rarity: 1,
        energy: 250,
        ability: '向前方投掷附带3*3溅射范围、30%溅射伤害的蜂蜜；每隔一段时间在3*3范围内复制出一个狂暴史莱姆',
        reinforcement: '提高攻击力',
        skill: '减少卡片冷却时间',
        transfer1: {
            name: '蜂糖史莱姆',
            energy: 250,
            info: '一次投掷2滴蜂蜜'
        },
        transfer2: {
            name: '蜂王浆史莱姆',
            energy: 250,
            info: '一次在1格里复制出2个狂暴史莱姆'
        }
    },
    {
        id: 140,
        name: '糖果罐子',
        type: 3,
        rarity: 1,
        energy: 325,
        ability: '可随机变出不同的爆炸效果（蓝色糖果罐子：3*3十字爆炸；粉色糖果罐子：全屏范围十字爆炸；绿色糖果罐子：3*3范围爆炸；红色糖果罐子：全屏范围爆炸）',
        reinforcement: '减少卡片冷却时间'
    },
    {
        id: 141,
        name: '13周年时光机',
        type: 4,
        rarity: 1,
        energy: 275,
        ability: '放置后，随机为该格卡片升星或降星（1-2星）',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '超载时光机',
            energy: 275,
            info: '作用范围扩大至3*3'
        },
        transfer2: {
            name: '未来时光机',
            energy: 275,
            info: '升降星效果加强（1-3星）'
        }
    },
    {
        id: 142,
        name: '丸子厨师',
        type: 0,
        attackType: 4,
        rarity: 1,
        energy: 150,
        ability: '挥动厨具，拍击前后方的老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度'
    },
    {
        id: 143,
        name: '青涩柿柿',
        type: 0,
        attackType: 4,
        rarity: 1,
        energy: 150,
        ability: '奋力跳起，向前方一定范围内的陆地、地下老鼠发起重击',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '成熟柿柿',
            energy: 75,
            info: '竖向变身成3个柿柿；分身伤害可叠加'
        },
        transfer2: {
            name: '柿柿如意',
            energy: 75,
            info: '竖向变身成5个柿柿；可以攻击空中老鼠'
        }
    },
    {
        id: 144,
        name: '蛇羹煲',
        type: 4,
        rarity: 1,
        energy: 25,
        ability: '放置后，返还该格全部卡片消耗的火苗',
        reinforcement: '减少卡片冷却时间',
        transfer1: {
            name: '厨圣蛇羹煲',
            energy: 0,
            info: '不消耗火苗'
        },
        transfer2: {
            name: '帝王蛇羹煲',
            energy: 0,
            info: '返还火苗翻倍'
        }
    },
    {
        id: 145,
        name: '冰块冷萃机',
        type: 0,
        attackType: 3,
        rarity: 1,
        energy: 300,
        ability: '发射冰块，最多攻击全场4只老鼠',
        reinforcement: '提高攻击力',
        skill: '提高攻击速度',
        transfer1: {
            name: '低温冷萃机',
            energy: 300,
            info: '冰块附加3*3溅射范围、20%溅射伤害；最多攻击全场5只老鼠'
        },
        transfer2: {
            name: '迅捷冷萃机',
            energy: 300,
            info: '冰块可集火；最多攻击全场6只老鼠'
        }
    },
];
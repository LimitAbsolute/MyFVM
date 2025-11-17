//卡片耗能对比每页显示的项目数量
const energyPageSize = 15;
//卡片每页显示卡片数
const cardPageSize = 9;
//耗能范围筛选
const energyRange = [0, 400];
//单选框初始值
const radioAll = 'all';
//卡片类型
const cardTypes = [
    '攻击型',
    '生产型',
    '防御型',
    '炸弹型',
    '增幅型',
    '辅助型'
];
//稀有度
const rarity = [
    '普通卡',
    '纪念卡',
    '生肖卡',
    '星座卡',
    '神卡'
];
//标签类型
const tagTypes = [
    'info',
    'primary',
    'success',
    'warning',
    'danger'
];
//为不同稀有度设置不同颜色
const rarityColors = {
    '普通卡': '#909399',
    '纪念卡': '#409EFF',
    '生肖卡': '#67C23A',
    '星座卡': '#E6A23C',
    '神卡': '#F56C6C'
};
//转职卡片使用不同颜色
const transferColors = {
    'base': '#c0c0c0',
    'transfer1': '#FFFF00',
    'transfer2': '#FFD700',
    'transfer3': '#FFA500',
    'transfer4': '#FF8C00',
    'transfer5': '#FF4500'
};
//卡片攻击类型
const attackTypes = [
    '平射',
    '投掷',
    '喷射',
    '追踪',
    '近战',
    '其他'
]
//转职配置
const transferConfigs = [{
        level: 1,
        text: '一转',
        prop: 'transfer1'
    },
    {
        level: 2,
        text: '二转',
        prop: 'transfer2'
    },
    {
        level: 3,
        text: '三转',
        prop: 'transfer3'
    },
    {
        level: 4,
        text: '四转',
        prop: 'transfer4'
    },
    {
        level: 5,
        text: '终转',
        prop: 'transfer5'
    }
]
//卡片冷却
const commonCd = [7, 7, 30, 50, 35, 7]
//卡片公共数据
const dataDetails = {
    //攻击型平射卡片 强化 提高攻击力
    'reinforcement_0_0_common': [{
        label: '攻击力',
        data: [10, 12, 14, 16, 18, 20, 22, 26, 32, 40, 55]
    }],
    //攻击型平射卡片 技能 提高攻击速度
    'skill_0_0_common': [{
        label: '攻击间隔',
        data: [1.3, 1.25, 1.15, 1.05, 0.95, 0.9]
    }],
    //攻击型投掷卡片 强化 提高攻击力
    'reinforcement_0_1_common': [{
        label: '攻击力',
        data: [50, 60, 70, 80, 100, 120, 140, 170, 200, 230, 280]
    }],
    //攻击型投掷卡片 技能 提高攻击速度
    'skill_0_1_common': [{
        label: '攻击间隔',
        data: [3, 2.9, 2.7, 2.4, 2, 1.8]
    }],
    //攻击型喷射卡片 强化 提高攻击力
    'reinforcement_0_2_common': [{
        label: '攻击力',
        data: [70, 80, 90, 100, 110, 120, 140, 160, 200, 260, 340]
    }],
    //攻击型喷射卡片 技能 提高攻击速度
    'skill_0_2_common': [{
        label: '攻击间隔',
        data: [1.3, 1.25, 1.15, 1.05, 0.95, 0.9]
    }],
    //攻击型追踪卡片 强化 提高攻击力
    'reinforcement_0_3_common': [{
        label: '攻击力',
        data: [19, 22, 28, 31, 34, 40, 49, 61, 84, 107, 132]
    }],
    //攻击型追踪卡片 技能 提高攻击速度
    'skill_0_3_common': [{
        label: '攻击间隔',
        data: [3.4, 3.35, 3.25, 3.15, 2.95, 2.8]
    }],
    //攻击型近战卡片 强化 提高攻击力
    'reinforcement_0_4_common': [{
        label: '攻击力',
        data: [10, 12, 14, 16, 18, 20, 22, 26, 32, 40, 55]
    }],
    //攻击型近战卡片 技能 提高攻击速度
    'skill_0_4_common': [{
        label: '攻击间隔',
        data: [1.3, 1.25, 1.15, 1.05, 0.95, 0.9]
    }],
    //生产型卡片 强化 提高生产速度
    'reinforcement_1_common': [{
        label: '产火间隔',
        data: [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15]
    }],
    //生产型卡片 技能 提高火苗产值
    'skill_1_common': [{
        label: '火苗单值',
        data: [25, 27, 31, 37, 44, 48]
    }],
    //防御型卡片 强化 增强体力
    'reinforcement_2_common': [{
        label: '体力',
        data: [500, 540, 580, 620, 680, 740, 800, 880, 960, 1040, 1140]
    }],
    //防御型卡片 技能 减少卡片冷却时间
    'skill_2_common': [{
        label: '冷却时间',
        data: [30, 28, 24, 20, 15, 12]
    }],
    //炸弹型卡片 强化 减少卡片冷却时间
    'reinforcement_3_common': [{
        label: '冷却时间',
        data: [50, 48, 46, 44, 42, 40, 38, 35, 32, 29, 26]
    }],
    //增幅型卡片 强化 增强体力
    'reinforcement_4_common': [{
        label: '增幅倍率',
        data: [1.5, 1.6, 1.7, 1.8, 1.9, 2, 2.1, 2.2, 2.3, 2.4, 2.5]
    }],
    //增幅型卡片 技能 减少卡片冷却时间
    'skill_4_common': [{
        label: '冷却时间',
        data: [35, 33, 29, 25, 19, 15]
    }],
}
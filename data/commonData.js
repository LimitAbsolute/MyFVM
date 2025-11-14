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
}
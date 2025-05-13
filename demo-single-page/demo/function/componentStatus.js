import { ref } from "vue";

// 定义导航数据（普通数组）
const navItems = [
    {
        name: "首页",
        src: "/static/首页_home.svg",
        activeSrc: "/static/首页_home_red.svg",
        style: '',
        activeStyle: 'color: #ff4544'
    },
    {
        name: "分类",
        src: "/static/瀑布流横向_waterfalls-h.svg",
        activeSrc: "/static/瀑布流横向_waterfalls-h_red.svg",
        style: '',
        activeStyle: 'color: #ff4544'
    },
    {
        name: "购物车",
        src: "/static/购物车_shopping.svg",
        activeSrc: "/static/购物车_shopping_red.svg",
        style: '',
        activeStyle: 'color: #ff4544'
    },
    {
        name: "我的",
        src: "/static/人员_people.svg",
        activeSrc: "/static/人员_people_red.svg",
        style: '',
        activeStyle: 'color: #ff4544'
    }
];

// 初始化时设置第一个导航项为激活状态
const initialNavItems = navItems.map((item, index) => ({
    ...item,
    src: index === 0 ? item.activeSrc : item.src,
    style: index === 0 ? item.activeStyle : item.style
}));

// 创建响应式导航数据
export const componentsNavigation = ref([...initialNavItems]);

// 当前状态，初始为0（首页）
export const status = ref(0);

// 切换组件函数
export const changeComponents = (newStatus) => {
    // 更新所有导航项状态
    componentsNavigation.value = navItems.map((item, index) => ({
        ...item,
        src: index === newStatus ? item.activeSrc : item.src,
        style: index === newStatus ? item.activeStyle : item.style
    }));

    // 更新当前状态
    status.value = newStatus;
};
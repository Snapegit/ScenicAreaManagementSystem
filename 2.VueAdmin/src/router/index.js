	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import discussjiudianxinxi from '@/views/discussjiudianxinxi/list'
	import jiudianxinxi from '@/views/jiudianxinxi/list'
	import shangpinxinxi from '@/views/shangpinxinxi/list'
	import syslog from '@/views/syslog/list'
	import shangjia from '@/views/shangjia/list'
	import tousujianyi from '@/views/tousujianyi/list'
	import jiudianleixing from '@/views/jiudianleixing/list'
	import yonghu from '@/views/yonghu/list'
	import lvyougonglve from '@/views/lvyougonglve/list'
	import meishileixing from '@/views/meishileixing/list'
	import shenqingdaoyou from '@/views/shenqingdaoyou/list'
	import jiudianyuding from '@/views/jiudianyuding/list'
	import ruzhushenqing from '@/views/ruzhushenqing/list'
	import news from '@/views/news/list'
	import tanweixinxi from '@/views/tanweixinxi/list'
	import jingdianleixing from '@/views/jingdianleixing/list'
	import jingdianxinxi from '@/views/jingdianxinxi/list'
	import discussmeishixinxi from '@/views/discussmeishixinxi/list'
	import shangpingoumai from '@/views/shangpingoumai/list'
	import menpiaogoumai from '@/views/menpiaogoumai/list'
	import shangpinfenlei from '@/views/shangpinfenlei/list'
	import discussjingdianxinxi from '@/views/discussjingdianxinxi/list'
	import discussshangpinxinxi from '@/views/discussshangpinxinxi/list'
	import meishixinxi from '@/views/meishixinxi/list'
	import config from '@/views/config/list'
	import yiliaofuwuzhan from '@/views/yiliaofuwuzhan/list'
	import shangjiaRegister from '@/views/shangjia/register'
	import shangjiaCenter from '@/views/shangjia/center'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/shangjiaCenter',
			name: '商家个人中心',
			component: shangjiaCenter
		}
		,{
			path: '/discussjiudianxinxi',
			name: '酒店信息评论',
			component: discussjiudianxinxi
		}
		,{
			path: '/jiudianxinxi',
			name: '酒店信息',
			component: jiudianxinxi
		}
		,{
			path: '/shangpinxinxi',
			name: '商品信息',
			component: shangpinxinxi
		}
		,{
			path: '/syslog',
			name: '操作日志',
			component: syslog
		}
		,{
			path: '/shangjia',
			name: '商家',
			component: shangjia
		}
		,{
			path: '/tousujianyi',
			name: '投诉建议',
			component: tousujianyi
		}
		,{
			path: '/jiudianleixing',
			name: '酒店类型',
			component: jiudianleixing
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/lvyougonglve',
			name: '旅游攻略',
			component: lvyougonglve
		}
		,{
			path: '/meishileixing',
			name: '美食类型',
			component: meishileixing
		}
		,{
			path: '/shenqingdaoyou',
			name: '申请导游',
			component: shenqingdaoyou
		}
		,{
			path: '/jiudianyuding',
			name: '酒店预定',
			component: jiudianyuding
		}
		,{
			path: '/ruzhushenqing',
			name: '入住申请',
			component: ruzhushenqing
		}
		,{
			path: '/news',
			name: '旅游资讯',
			component: news
		}
		,{
			path: '/tanweixinxi',
			name: '摊位信息',
			component: tanweixinxi
		}
		,{
			path: '/jingdianleixing',
			name: '景点类型',
			component: jingdianleixing
		}
		,{
			path: '/jingdianxinxi',
			name: '景点信息',
			component: jingdianxinxi
		}
		,{
			path: '/discussmeishixinxi',
			name: '美食信息评论',
			component: discussmeishixinxi
		}
		,{
			path: '/shangpingoumai',
			name: '商品购买',
			component: shangpingoumai
		}
		,{
			path: '/menpiaogoumai',
			name: '门票购买',
			component: menpiaogoumai
		}
		,{
			path: '/shangpinfenlei',
			name: '商品分类',
			component: shangpinfenlei
		}
		,{
			path: '/discussjingdianxinxi',
			name: '景点信息评论',
			component: discussjingdianxinxi
		}
		,{
			path: '/discussshangpinxinxi',
			name: '商品信息评论',
			component: discussshangpinxinxi
		}
		,{
			path: '/meishixinxi',
			name: '美食信息',
			component: meishixinxi
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/yiliaofuwuzhan',
			name: '医疗服务站',
			component: yiliaofuwuzhan
		}
		]
	},
	{
		path: '/shangjiaRegister',
		name: '商家注册',
		component: shangjiaRegister
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router

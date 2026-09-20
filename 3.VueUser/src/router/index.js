import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import jingdianleixingList from '@/views/pages/jingdianleixing/list'
import jingdianleixingDetail from '@/views/pages/jingdianleixing/formModel'
import jingdianleixingAdd from '@/views/pages/jingdianleixing/formAdd'
import jingdianxinxiList from '@/views/pages/jingdianxinxi/list'
import jingdianxinxiDetail from '@/views/pages/jingdianxinxi/formModel'
import jingdianxinxiAdd from '@/views/pages/jingdianxinxi/formAdd'
import storeupList from '@/views/pages/storeup/list'
import menpiaogoumaiList from '@/views/pages/menpiaogoumai/list'
import menpiaogoumaiDetail from '@/views/pages/menpiaogoumai/formModel'
import menpiaogoumaiAdd from '@/views/pages/menpiaogoumai/formAdd'
import newsList from '@/views/pages/news/list'
import lvyougonglveList from '@/views/pages/lvyougonglve/list'
import lvyougonglveDetail from '@/views/pages/lvyougonglve/formModel'
import lvyougonglveAdd from '@/views/pages/lvyougonglve/formAdd'
import meishileixingList from '@/views/pages/meishileixing/list'
import meishileixingDetail from '@/views/pages/meishileixing/formModel'
import meishileixingAdd from '@/views/pages/meishileixing/formAdd'
import meishixinxiList from '@/views/pages/meishixinxi/list'
import meishixinxiDetail from '@/views/pages/meishixinxi/formModel'
import meishixinxiAdd from '@/views/pages/meishixinxi/formAdd'
import jiudianleixingList from '@/views/pages/jiudianleixing/list'
import jiudianleixingDetail from '@/views/pages/jiudianleixing/formModel'
import jiudianleixingAdd from '@/views/pages/jiudianleixing/formAdd'
import jiudianxinxiList from '@/views/pages/jiudianxinxi/list'
import jiudianxinxiDetail from '@/views/pages/jiudianxinxi/formModel'
import jiudianxinxiAdd from '@/views/pages/jiudianxinxi/formAdd'
import jiudianyudingList from '@/views/pages/jiudianyuding/list'
import jiudianyudingDetail from '@/views/pages/jiudianyuding/formModel'
import jiudianyudingAdd from '@/views/pages/jiudianyuding/formAdd'
import yiliaofuwuzhanList from '@/views/pages/yiliaofuwuzhan/list'
import yiliaofuwuzhanDetail from '@/views/pages/yiliaofuwuzhan/formModel'
import yiliaofuwuzhanAdd from '@/views/pages/yiliaofuwuzhan/formAdd'
import tousujianyiList from '@/views/pages/tousujianyi/list'
import tousujianyiDetail from '@/views/pages/tousujianyi/formModel'
import tousujianyiAdd from '@/views/pages/tousujianyi/formAdd'
import shenqingdaoyouList from '@/views/pages/shenqingdaoyou/list'
import shenqingdaoyouDetail from '@/views/pages/shenqingdaoyou/formModel'
import shenqingdaoyouAdd from '@/views/pages/shenqingdaoyou/formAdd'
import syslogList from '@/views/pages/syslog/list'
import syslogDetail from '@/views/pages/syslog/formModel'
import syslogAdd from '@/views/pages/syslog/formAdd'
import shangjiaList from '@/views/pages/shangjia/list'
import shangjiaDetail from '@/views/pages/shangjia/formModel'
import shangjiaAdd from '@/views/pages/shangjia/formAdd'
import tanweixinxiList from '@/views/pages/tanweixinxi/list'
import tanweixinxiDetail from '@/views/pages/tanweixinxi/formModel'
import tanweixinxiAdd from '@/views/pages/tanweixinxi/formAdd'
import ruzhushenqingList from '@/views/pages/ruzhushenqing/list'
import ruzhushenqingDetail from '@/views/pages/ruzhushenqing/formModel'
import ruzhushenqingAdd from '@/views/pages/ruzhushenqing/formAdd'
import shangpinfenleiList from '@/views/pages/shangpinfenlei/list'
import shangpinfenleiDetail from '@/views/pages/shangpinfenlei/formModel'
import shangpinfenleiAdd from '@/views/pages/shangpinfenlei/formAdd'
import shangpinxinxiList from '@/views/pages/shangpinxinxi/list'
import shangpinxinxiDetail from '@/views/pages/shangpinxinxi/formModel'
import shangpinxinxiAdd from '@/views/pages/shangpinxinxi/formAdd'
import shangpingoumaiList from '@/views/pages/shangpingoumai/list'
import shangpingoumaiDetail from '@/views/pages/shangpingoumai/formModel'
import shangpingoumaiAdd from '@/views/pages/shangpingoumai/formAdd'
import emailregistercodeList from '@/views/pages/emailregistercode/list'
import emailregistercodeDetail from '@/views/pages/emailregistercode/formModel'
import emailregistercodeAdd from '@/views/pages/emailregistercode/formAdd'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'jingdianleixingList',
			component: jingdianleixingList
		}, {
			path: 'jingdianleixingDetail',
			component: jingdianleixingDetail
		}, {
			path: 'jingdianleixingAdd',
			component: jingdianleixingAdd
		}
		, {
			path: 'jingdianxinxiList',
			component: jingdianxinxiList
		}, {
			path: 'jingdianxinxiDetail',
			component: jingdianxinxiDetail
		}, {
			path: 'jingdianxinxiAdd',
			component: jingdianxinxiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		, {
			path: 'menpiaogoumaiList',
			component: menpiaogoumaiList
		}, {
			path: 'menpiaogoumaiDetail',
			component: menpiaogoumaiDetail
		}, {
			path: 'menpiaogoumaiAdd',
			component: menpiaogoumaiAdd
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'lvyougonglveList',
			component: lvyougonglveList
		}, {
			path: 'lvyougonglveDetail',
			component: lvyougonglveDetail
		}, {
			path: 'lvyougonglveAdd',
			component: lvyougonglveAdd
		}
		, {
			path: 'meishileixingList',
			component: meishileixingList
		}, {
			path: 'meishileixingDetail',
			component: meishileixingDetail
		}, {
			path: 'meishileixingAdd',
			component: meishileixingAdd
		}
		, {
			path: 'meishixinxiList',
			component: meishixinxiList
		}, {
			path: 'meishixinxiDetail',
			component: meishixinxiDetail
		}, {
			path: 'meishixinxiAdd',
			component: meishixinxiAdd
		}
		, {
			path: 'jiudianleixingList',
			component: jiudianleixingList
		}, {
			path: 'jiudianleixingDetail',
			component: jiudianleixingDetail
		}, {
			path: 'jiudianleixingAdd',
			component: jiudianleixingAdd
		}
		, {
			path: 'jiudianxinxiList',
			component: jiudianxinxiList
		}, {
			path: 'jiudianxinxiDetail',
			component: jiudianxinxiDetail
		}, {
			path: 'jiudianxinxiAdd',
			component: jiudianxinxiAdd
		}
		, {
			path: 'jiudianyudingList',
			component: jiudianyudingList
		}, {
			path: 'jiudianyudingDetail',
			component: jiudianyudingDetail
		}, {
			path: 'jiudianyudingAdd',
			component: jiudianyudingAdd
		}
		, {
			path: 'yiliaofuwuzhanList',
			component: yiliaofuwuzhanList
		}, {
			path: 'yiliaofuwuzhanDetail',
			component: yiliaofuwuzhanDetail
		}, {
			path: 'yiliaofuwuzhanAdd',
			component: yiliaofuwuzhanAdd
		}
		, {
			path: 'tousujianyiList',
			component: tousujianyiList
		}, {
			path: 'tousujianyiDetail',
			component: tousujianyiDetail
		}, {
			path: 'tousujianyiAdd',
			component: tousujianyiAdd
		}
		, {
			path: 'shenqingdaoyouList',
			component: shenqingdaoyouList
		}, {
			path: 'shenqingdaoyouDetail',
			component: shenqingdaoyouDetail
		}, {
			path: 'shenqingdaoyouAdd',
			component: shenqingdaoyouAdd
		}
		, {
			path: 'syslogList',
			component: syslogList
		}, {
			path: 'syslogDetail',
			component: syslogDetail
		}, {
			path: 'syslogAdd',
			component: syslogAdd
		}
		, {
			path: 'shangjiaList',
			component: shangjiaList
		}, {
			path: 'shangjiaDetail',
			component: shangjiaDetail
		}, {
			path: 'shangjiaAdd',
			component: shangjiaAdd
		}
		, {
			path: 'tanweixinxiList',
			component: tanweixinxiList
		}, {
			path: 'tanweixinxiDetail',
			component: tanweixinxiDetail
		}, {
			path: 'tanweixinxiAdd',
			component: tanweixinxiAdd
		}
		, {
			path: 'ruzhushenqingList',
			component: ruzhushenqingList
		}, {
			path: 'ruzhushenqingDetail',
			component: ruzhushenqingDetail
		}, {
			path: 'ruzhushenqingAdd',
			component: ruzhushenqingAdd
		}
		, {
			path: 'shangpinfenleiList',
			component: shangpinfenleiList
		}, {
			path: 'shangpinfenleiDetail',
			component: shangpinfenleiDetail
		}, {
			path: 'shangpinfenleiAdd',
			component: shangpinfenleiAdd
		}
		, {
			path: 'shangpinxinxiList',
			component: shangpinxinxiList
		}, {
			path: 'shangpinxinxiDetail',
			component: shangpinxinxiDetail
		}, {
			path: 'shangpinxinxiAdd',
			component: shangpinxinxiAdd
		}
		, {
			path: 'shangpingoumaiList',
			component: shangpingoumaiList
		}, {
			path: 'shangpingoumaiDetail',
			component: shangpingoumaiDetail
		}, {
			path: 'shangpingoumaiAdd',
			component: shangpingoumaiAdd
		}
		, {
			path: 'emailregistercodeList',
			component: emailregistercodeList
		}, {
			path: 'emailregistercodeDetail',
			component: emailregistercodeDetail
		}, {
			path: 'emailregistercodeAdd',
			component: emailregistercodeAdd
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
